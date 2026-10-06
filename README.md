# Servidor público de Cassius para Cronotinta

Este servidor mantiene la clave de OpenAI fuera del HTML de Cronotinta y expone `/chat` por HTTPS cuando se despliega en un proveedor como Render.

## Prueba local

1. Instala Node.js.
2. Ejecuta `npm install`.
3. Configura `OPENAI_API_KEY` como variable de entorno.
4. Ejecuta `npm start`.
5. Abre `http://localhost:3000/health`.

## Render

1. Sube esta carpeta a un repositorio privado de GitHub.
2. En Render crea un **Web Service** desde ese repositorio.
3. Build Command: `npm install`.
4. Start Command: `npm start`.
5. Añade `OPENAI_API_KEY` en Environment Variables.
6. Espera a que termine el deploy.
7. Comprueba `https://TU-SERVICIO.onrender.com/health`.

La URL que usará Cronotinta será:
`https://TU-SERVICIO.onrender.com/chat`

NO pongas la API key dentro del HTML ni dentro de un repositorio.
