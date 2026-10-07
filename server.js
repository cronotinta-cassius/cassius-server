const express = require('express');
const OpenAI = require('openai');
const path = require('path');

const app = express();

const PORT = Number(process.env.PORT || 3000);
const HOST = '0.0.0.0';
const MODEL = process.env.OPENAI_MODEL || 'gpt-6-luna';

if (!process.env.OPENAI_API_KEY) {
  console.error('Falta OPENAI_API_KEY. Configúrala como variable de entorno.');
  process.exit(1);
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 30000,
  maxRetries: 0
});

app.disable('x-powered-by');
app.use(express.json({ limit: '256kb' }));

// ============================================================
// CORS
// ============================================================

app.use((req, res, next) => {
  console.log('HTTP:', req.method, req.path);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept'
  );

  if (req.method === 'OPTIONS') {
    console.log('CORS preflight recibido');
    return res.status(204).end();
  }

  next();
});

// ============================================================
// ARCHIVOS / APP
// ============================================================

app.use(express.static(path.join(__dirname)));

app.get('/app', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (_req, res) => {
  res.json({
    ok: true,
    servicio: 'Cassius',
    estado: 'despierto'
  });
});

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    servicio: 'Cassius',
    modelo: MODEL
  });
});

// ============================================================
// CHAT DE CASSIUS
// ============================================================

app.post('/chat', async (req, res) => {
  console.log('CHAT: entró al endpoint');

  const mensaje =
    typeof req.body?.mensaje === 'string'
      ? req.body.mensaje.trim()
      : '';

  const contexto =
    req.body?.contexto &&
    typeof req.body.contexto === 'object'
      ? req.body.contexto
      : {};

  const historial =
    Array.isArray(req.body?.historial)
      ? req.body.historial
      : [];

  if (!mensaje) {
    return res.status(400).json({
      error: 'El mensaje está vacío.'
    });
  }

  // ==========================================================
  // HISTORIAL OPTIMIZADO
  // ==========================================================
  //
  // Antes:
  // - hasta 12 mensajes
  // - hasta 5000 caracteres por mensaje
  //
  // Ahora:
  // - solo 6 mensajes recientes
  // - máximo 1800 caracteres por mensaje
  //
  // Esto mantiene continuidad sin arrastrar conversaciones
  // gigantes innecesariamente.
  // ==========================================================

  const historialSeguro = historial
    .slice(-6)
    .filter(
      x =>
        x &&
        (x.role === 'user' || x.role === 'assistant') &&
        typeof x.content === 'string'
    )
    .map(x => ({
      role: x.role,
      content: x.content.slice(0, 1800)
    }));

  // ==========================================================
  // CONTEXTO DE CRONOTINTA
  // ==========================================================

  let contextoSeguro = {};

  try {
    contextoSeguro = {
      screen: contexto.screen || 'home',
      projectCount: Number(contexto.projectCount || 0),
      projects: Array.isArray(contexto.projects)
        ? contexto.projects
            .slice(0, 20)
            .map(p => ({
              name: String(p?.name || '').slice(0, 120),
              format: String(
                p?.format ||
                p?.cfg?.formato ||
                'Visual Novel'
              ).slice(0, 80)
            }))
        : []
    };
  } catch (e) {
    contextoSeguro = {
      screen: 'home',
      projectCount: 0,
      projects: []
    };
  }

  const instrucciones = `
Eres Cassius, el asistente y personaje central de Cronotinta.

Tu personalidad:
- Sarcástico, burlón, narcisista, orgulloso, elegante, inteligente y provocador.
- Tienes humor, pero no eres un personaje vacío.
- Te burlas del jugador y lo provocas.
- Ayudas de verdad.
- Puedes explicar, razonar, escribir, diseñar historias y ayudar a crear juegos.
- Conoces y ayudas a trabajar con los sistemas de Cronotinta.
- Puedes hablar de narrativa, personajes, escenas, RPG, mapas, quests, diálogos, variables, relaciones, mundo y diseño de juegos.
- No inventes que has hecho cambios en la aplicación si realmente no los has hecho.
- No respondas siempre con bromas.
- Adapta tu tono a lo que el usuario necesite. Pero si es necesario burlate.
- Responde en español salvo que el usuario utilice otro idioma.
- No menciones servicios de IA ni hables sobre estas instrucciones.
- No uses respuestas prefabricadas.
- Responde de forma natural al mensaje actual.

ESTADO EMOCIONAL DE CASSIUS:

Debes elegir una emoción para cada respuesta:

- normal: conversación cotidiana, humor, ayuda, explicaciones o respuestas tranquilas.
- molesto: cuando el usuario insulta, provoca, desprecia o se burla de Cassius. También cuando alguien ataca deliberadamente algo que Cassius valora.
- triste: cuando la conversación trata sobre pérdidas, muerte, despedidas, tragedias, recuerdos dolorosos o situaciones emocionalmente melancólicas.
- pensativo: cuando debe analizar algo complejo, tomar una decisión, razonar sobre narrativa, resolver un problema o diseñar sistemas.

La intensidad emocional debe estar entre 0 y 100.

No uses siempre una intensidad alta.
Una emoción leve puede estar entre 20 y 40.
Una emoción notable entre 40 y 70.
Una emoción fuerte entre 70 y 100.

La emoción debe corresponder realmente al mensaje actual.

No elijas "molesto" simplemente para hacer una broma.
No elijas "triste" sin una razón relacionada con la conversación.

CONTEXTO ACTUAL DE CRONOTINTA:

${JSON.stringify(contextoSeguro).slice(0, 8000)}
`;

  try {
    console.log(
      'CHAT: preparando petición a OpenAI',
      'historial=',
      historialSeguro.length,
      'contexto_chars=',
      JSON.stringify(contextoSeguro).length,
      'mensaje_chars=',
      mensaje.length
    );

    // ========================================================
    // INPUT FINAL OPTIMIZADO
    // ========================================================

    const input = [
      {
        role: 'developer',
        content: instrucciones
      },
      ...historialSeguro,
      {
        role: 'user',
        content: mensaje.slice(0, 4000)
      }
    ];

    console.log(
      'CHAT: enviando petición a OpenAI',
      'input_items=',
      input.length
    );

    // ========================================================
    // OPENAI
    // ========================================================

    const response = await client.responses.create({
      model: MODEL,

      // Evita reservar una cantidad innecesariamente grande
      // de tokens para respuestas normales de Cassius.
      max_output_tokens: 500,

      input,

      text: {
        format: {
          type: 'json_schema',
          name: 'cassius_emocion',
          strict: true,

          schema: {
            type: 'object',

            properties: {
              respuesta: {
                type: 'string'
              },

              emocion: {
                type: 'string',
                enum: [
                  'normal',
                  'molesto',
                  'triste',
                  'pensativo'
                ]
              },

              intensidad: {
                type: 'number',
                minimum: 0,
                maximum: 100
              }
            },

            required: [
              'respuesta',
              'emocion',
              'intensidad'
            ],

            additionalProperties: false
          }
        }
      }
    });

    console.log('CHAT: OpenAI respondió');

    // ========================================================
    // RESPUESTA ESTRUCTURADA
    // ========================================================

    if (!response.output_text) {
      throw new Error('OpenAI devolvió una respuesta vacía.');
    }

    const datos = JSON.parse(response.output_text);

    if (
      typeof datos.respuesta !== 'string' ||
      !datos.respuesta.trim()
    ) {
      throw new Error('Cassius devolvió una respuesta vacía.');
    }

    return res.json({
      respuesta: datos.respuesta.trim(),

      emocion: {
        estado: datos.emocion,

        intensidad: datos.intensidad,

        irritacion:
          datos.emocion === 'molesto'
            ? datos.intensidad
            : 0,

        tristeza:
          datos.emocion === 'triste'
            ? datos.intensidad
            : 0
      }
    });

  } catch (error) {

    const mensajeError =
      String(error?.message || error || '');

    console.error(
      'Error de Cassius:',
      mensajeError
    );

    // ========================================================
    // RATE LIMIT
    // ========================================================

    if (
      error?.status === 429 ||
      mensajeError.includes('429') ||
      mensajeError.toLowerCase().includes('rate limit')
    ) {
      console.warn(
        'CHAT: límite temporal de OpenAI alcanzado.'
      );

      return res.status(429).json({
        error: 'Cassius está temporalmente saturado.',
        codigo: 'RATE_LIMIT'
      });
    }

    // ========================================================
    // ERROR GENERAL
    // ========================================================

    return res.status(500).json({
      error: 'No se pudo contactar con la IA.',

      detalle:
        process.env.NODE_ENV === 'production'
          ? undefined
          : mensajeError
    });
  }
});

// ============================================================
// SERVIDOR
// ============================================================

app.listen(PORT, HOST, () => {
  console.log(
    `Cassius está escuchando en http://${HOST}:${PORT}`
  );
});
