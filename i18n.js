(() => {
  "use strict";
  const STORAGE_KEY = "cronotinta-language";
  const translations = {
    "El juego se ejecuta en un iframe aislado. El guardado y las opciones solo se habilitan si el juego implementa y conecta explícitamente el contrato Cronotinta 2.0. El publicador actual acepta HTML autocontenido; no procesa paquetes ZIP.":"The game runs in an isolated iframe. Saving and options are enabled only if the game explicitly implements and connects to the Cronotinta 2.0 contract. The current publisher accepts self-contained HTML; it does not process ZIP packages.",
    "Para proteger a quienes visitan Cronotinta, la comunidad pública permanece oculta hasta que una persona adulta confirme que tiene 18 años o más. También puedes seguir usando el editor para crear proyectos privados.":"To protect visitors to Cronotinta, the public community stays hidden until an adult confirms they are 18 or older. You can still use the editor to create private projects.",
    "El modo seguro está activo: el contenido público de la comunidad permanece oculto. Tus proyectos privados siguen disponibles.":"Safe mode is active: public community content is hidden. Your private projects remain available.",
    "Desactivado. Actívalo cuando quieras ocultar la comunidad pública.":"Disabled. Turn it on whenever you want to hide the public community.",
    "Inicia sesión para comentar.":"Sign in to comment.",
    "esta publicación del feed":"this feed post",
    "esta publicación del foro":"this forum post",
    "Se agotó el tiempo de espera. El servidor pudo haber aplicado la acción; recarga y verifica el estado antes de intentarlo otra vez.":"The request timed out. The server may have applied the action; refresh and verify the status before trying again.",
    "El servidor tardó demasiado en responder. Inténtalo de nuevo.":"The server took too long to respond. Try again.",
    "No se pudo conectar con moderación.":"Could not connect to moderation.",
    "No se pudo completar la búsqueda. Revisa el nombre e inténtalo de nuevo.":"Could not complete the search. Check the name and try again.",
    "✦ MOD · Guardián de la comunidad":"✦ MOD · Community Guardian",
    "Permiso":"Permission",
    "Puede editar":"Can edit",
    "Solo lectura":"Read-only",
    "Añadir por usuario":"Add by username",
    "Enlace de invitación":"Invitation link",
    "El enlace aparecerá aquí":"The link will appear here",
    "Las opciones de invitación se habilitan al activar la colaboración.":"Invitation options become available when collaboration is enabled.",
    "Solo la persona propietaria puede añadir integrantes o crear enlaces.":"Only the project owner can add members or create links.",
    "Actualizar equipo":"Refresh team",
    "Cargar última versión":"Load latest version",
    "Inicia sesión para usar la colaboración.":"Sign in to use collaboration.",
    "Creando espacio compartido…":"Creating shared workspace…",
    "Proyecto sin nombre":"Untitled project",
    "Respuesta inválida del servidor.":"Invalid server response.",
    "Proyecto compartido. Ya puedes invitar a tu equipo.":"Project shared. You can now invite your team.",
    "Escribe el nombre de usuario de la persona.":"Enter the person's username.",
    "Enviando invitación…":"Sending invitation…",
    "Enlace creado. Quien lo abra e inicie sesión obtendrá acceso.":"Invitation link created. Anyone who opens it and signs in will get access.",
    "aplica la migración de Supabase.":"apply the Supabase migration.",
    "Personas con acceso":"People with access",
    "Abrir copia compartida":"Open shared copy",
    "Visual Novel":"Visual Novel",
    "Por turnos":"Turn-based",
    "Proyecto en equipo creado.":"Team project created.",
    "Proyecto solitario creado.":"Solo project created.",
    "Abrir equipo":"Open team",
    "Abrir colaboración de ":"Open collaboration for ",
    "este proyecto":"this project",
    "No se pudo compartir:":"Could not share:",
    "No se pudo crear el enlace:":"Could not create the link:",
    "revisa la configuración de Supabase.":"check your Supabase configuration.",
    "Inicia sesión para consultar tus movimientos.":"Sign in to view your transactions.",
    "Suscripción para regalar":"Subscription to gift",
    "Plus · 30 días":"Plus · 30 days",
    "Premium · 30 días":"Premium · 30 days",
    "regalado por 30 días. Vence ":"gifted for 30 days. Expires ",
    "1080×1920 (móvil)":"1080×1920 (mobile)",
    "Lore de ejemplo añadido. Aquí se conectaría tu modelo de IA.":"Sample lore added. Your AI model could be connected here.",
    "Aquí no hay nada, mortal. Ni pasado ni futuro. Crea el primer proyecto.":"There's nothing here, mortal. No past, no future. Create the first project.",
    "¿Seguro?":"Are you sure?",
    "+ Añadir personaje":"+ Add character",
    "Todavía no tienes proyectos, así que tampoco personajes. Cada personaje vive dentro de un proyecto.":"You don't have any projects yet, so you don't have any characters either. Every character belongs to a project.",
    "Este proyecto aún no tiene personajes.":"This project doesn't have any characters yet.",
    "Sin expresión con imagen":"No expression with an image",
    "· desliza para seguir recorriendo la exposición":"· swipe to keep exploring the exhibition",
    "Está pensado para proyectos grandes, uso intensivo y trabajo en equipo.":"Designed for large projects, intensive use, and teamwork.",
    "Novela visual, RPG e híbrido":"Visual novel, RPG, and hybrid",
    "Análisis y exportaciones ampliadas":"Expanded analysis and exports",
    "MB · Este archivo será público en el feed.":"MB · This file will be public in the feed.",
    "Ej: Ada Vapor":"e.g. Ada Vapor",
    "Humana, autómata…":"Human, automaton…",
    "24 años o 300 ciclos":"24 years or 300 cycles",
    "ella, él, elle…":"she, he, they…",
    "Nueva personalidad…":"New personality…",
    "Altura, rasgos, accesorios, cicatrices, gadgets de latón…":"Height, features, accessories, scars, brass gadgets…",
    "Ej: Manipular el tiempo":"e.g. Manipulate time",
    "¿De qué época viene? ¿Qué hizo con el tiempo… o qué le hizo el tiempo a él?":"What era are they from? What did they do with time… or what did time do to them?",
    "Lo que nadie debe saber":"What no one should know",
    "Lo que quiere conseguir":"What they want to achieve",
    "¿De qué trata tu novela?":"What's your story about?",
    "¿De qué quieres hablar?":"What would you like to talk about?",
    "Escribe tu publicación…":"Write your post…",
    "Un avance de tu proyecto, una idea, una pregunta…":"A project update, an idea, a question…",
    "Comenta este juego…":"Comment on this game…",
    "Escribe un comentario…":"Write a comment…",
    "rival, familia…":"rival, family…",
    "etiquetas, separadas por coma":"tags, separated by commas",
    "Nota":"Note",
    "Escena ":"Scene ",
    " · inicio":" · start",
    "Capítulo ":"Chapter ",
    "Rutas recorridas: ":"Paths explored: ",
    "Finales alcanzados: ":"Endings reached: ",
    "Rutas con problemas: ":"Paths with issues: ",
    "Desarrollo del proyecto: ":"Project progress: ",
    "Volumen ":"Volume ",
    "Sin conexión: ":"Offline: ",
    "Decisión incompleta en «":"Incomplete choice in “",
    "La decisión en «":"The choice in “",
    "Expresiones: toca «＋ Nueva expresión», ponle nombre y sube su imagen (PNG, WebP, JPG, GIF o SVG · máx. 8 MB)":"Expressions: select “＋ New expression”, name it, and upload an image (PNG, WebP, JPG, GIF, or SVG · max 8 MB)",
    "También puedes arrastrar una imagen sobre una expresión o pegarla con Ctrl+V.":"You can also drag an image onto an expression or paste it with Ctrl+V.",
    "La apuesta mínima es de 5 Cronos.":"The minimum wager is 5 Cronos.",
    "Inicia sesión para dar Me gusta.":"Sign in to like this.",
    "No se pudo cargar el feed. Revisa las tablas del feed y los juegos en Supabase.":"Could not load the feed. Check the feed and game tables in Supabase.",
    "No se pudieron cargar las publicaciones.":"Could not load posts.",
    "La publicación ya no existe.":"This post no longer exists.",
    "Los juegos no cargaron:":"Games failed to load:",
    "Usa Actualizar juegos para reintentar.":"Use Refresh games to try again.",
    "Cronotinta 2.0 · Seguridad":"Cronotinta 2.0 · Safety",
    "Seguridad y legal en el catálogo":"Safety & legal in the catalog",
    "Encuentra el modo seguro, las reglas de convivencia, los términos y la información de privacidad en una categoría dedicada.":"Find safe mode, community guidelines, terms, and privacy information in one dedicated category.",
    "Cronotinta 2.0 · Protección":"Cronotinta 2.0 · Protection",
    "Modo seguro sin interrupciones al navegar":"Safe mode without interrupting navigation",
    "La pantalla de protección aparece cuando una sección está restringida y deja de ocupar espacio mientras recorres la página.":"The protection screen appears when a section is restricted and stays out of the way as you browse.",
    "Cronotinta 2.0 · Creación":"Cronotinta 2.0 · Creation",
    "Mejoras para explorar el taller":"Workshop exploration improvements",
    "El catálogo reúne accesos para crear, organizar proyectos y consultar las herramientas disponibles.":"The catalog brings together shortcuts to create and organize projects and explore available tools.",
    "Panel":"Dashboard",
    "Historia":"Story",
    "Recursos":"Assets",
    "Análisis y pruebas":"Analysis & testing",
    "Ajustes y exportación":"Settings & export",
    "Versiones":"Versions",
    "Director de Proyecto IA":"AI Project Director",
    "Análisis del proyecto completo con reglas locales; aquí se conectaría tu modelo para recomendaciones más ricas.":"Full project analysis using local rules; your model could be connected here for richer recommendations.",
    "Tu proyecto empieza aquí":"Your project starts here",
    "Edita cada parte desde las pestañas de arriba. Crea una escena desde cero o abre una historia de ejemplo para ver cómo se conectan diálogos y decisiones.":"Edit each part using the tabs above. Create a scene from scratch or open a sample story to see how dialogue and choices connect.",
    "Crear primera escena":"Create first scene",
    "Abrir historia de ejemplo":"Open sample story",
    "Desarrollo del proyecto":"Project progress",
    "Relaciones entre personajes":"Character relationships",
    "Necesitas al menos 2 personajes.":"You need at least 2 characters.",
    "Editar":"Edit",
    "Eliminar":"Delete",
    "Escena":"Scene",
    "inicio":"start",
    "Capítulo":"Chapter",
    "Personaje":"Character",
    "Expresión":"Expression",
    "Fondo":"Background",
    "— expresión —":"— expression —",
    "— sin fondo —":"— no background —",
    "— sin música —":"— no music —",
    "Añadir fondo a esta escena":"Add background to this scene",
    "Solo aparece mientras esta escena no tiene fondo.":"Only shown while this scene has no background.",
    "Diálogo y descripción de la escena…":"Scene dialogue and description…",
    "Vista previa":"Preview",
    "Ver escena y diálogo":"Preview scene and dialogue",
    "Requiere objeto":"Requires item",
    "Da objeto":"Gives item",
    "Es un final":"This is an ending",
    "Nombre del final":"Ending name",
    "Continúa en (sin decisión)":"Continues to (no choice)",
    "— ninguna —":"— none —",
    "Decisiones":"Choices",
    "Texto de la decisión":"Choice text",
    "Destino":"Destination",
    "— destino —":"— destination —",
    "Quitar decisión":"Remove choice",
    "+ Decisión":"+ Choice",
    "Árbol narrativo":"Story tree",
    "Sin escenas todavía.":"No scenes yet.",
    "+ Nueva escena":"+ New scene",
    "Cargar historia de ejemplo":"Load sample story",
    "Analizador narrativo":"Narrative analyzer",
    "No se detectaron errores críticos.":"No critical issues found.",
    "Pruebas automáticas de rutas":"Automated path tests",
    "Rutas recorridas":"Paths explored",
    "Finales alcanzados":"Endings reached",
    "Rutas con problemas":"Paths with issues",
    "ruta(s) más.":"more path(s).",
    "Añadir recurso":"Add asset",
    "Tipo":"Type",
    "Nombre":"Name",
    "etiquetas":"tags",
    "Archivo":"File",
    "Buscar por nombre o etiqueta…":"Search by name or tag…",
    "Filtrar por tipo":"Filter by type",
    "Todos los tipos":"All types",
    "No hay recursos que coincidan.":"No matching assets.",
    "Volumen":"Volume",
    "Fundido (ms)":"Fade (ms)",
    "Personalización del proyecto":"Project customization",
    "Exportación":"Export",
    "Juego HTML jugable":"Playable HTML game",
    "JSON universal":"Universal JSON",
    "Generar":"Generate",
    "Copiar":"Copy",
    "Motores adicionales (Unity, Godot, Twine, HTML) se añadirían como nuevos formatos.":"Additional engines (Unity, Godot, Twine, HTML) could be added as new formats.",
    "Nota de la versión (ej: antes de añadir el final B)":"Version note (e.g. before adding ending B)",
    "Guardar versión":"Save version",
    "Copias automáticas cada 2 minutos si hay cambios.":"Automatic snapshots every 2 minutes when changes are detected.",
    "Restaurar":"Restore",
    "Comparar con actual":"Compare with current",
    "Resultado de la exportación":"Export result",
    "Exportación descargada correctamente.":"Export downloaded successfully.",
    "Versión sin nota":"Version without a note",
    "Versión guardada.":"Version saved.",
    "Copia automática":"Automatic snapshot",
    "Volver al menú":"Back to menu",
    "Menú principal":"Main menu",
    "Créditos":"Credits",
    "Confirmación":"Confirmation",
    "Aún no has importado ninguna imagen.":"You haven't imported any images yet.",
    "Nombre de la expresión":"Expression name",
    "Expresión añadida: ponle nombre y sube su imagen.":"Expression added: give it a name and upload its image.",
    "Aún no hay escenas. Crea la primera en la pestaña Historia.":"There are no scenes yet. Create the first one in the Story tab.",
    "Esta escena no tiene música asignada.":"This scene has no music assigned.",
    "El navegador bloqueó la reproducción automática. Pulsa Reproducir música.":"Your browser blocked autoplay. Press Play music.",
    "La continuación no tiene un destino válido.":"The continuation has no valid destination.",
    "El destino de esta decisión no existe.":"This choice's destination does not exist.",
    "Esta decisión todavía no tiene destino.":"This choice has no destination yet.",
    "Recomendación:":"Recommendation:",
    "Pausar música":"Pause music",
    "Reproducir música":"Play music",
    "Recomendar música":"Recommend music",
    "Cargando música…":"Loading music…",
    "No hay ningún final. Marca al menos una escena como final.":"There are no endings. Mark at least one scene as an ending.",
    "Solo hay un final. Añade finales alternativos para dar peso a las decisiones.":"There is only one ending. Add alternate endings to give choices more weight.",
    "Ninguna escena tiene música asignada.":"No scene has music assigned.",
    "Romance: da tiempo a las escenas íntimas y a las decisiones emocionales.":"Romance: give intimate scenes and emotional choices room to breathe.",
    "Comedia: alterna escenas cortas y remates rápidos.":"Comedy: alternate short scenes with quick punchlines.",
    "Ciencia ficción":"Science fiction",
    "Fantasía":"Fantasy",
    "Cómic":"Comic",
    "Episódica":"Episodic",
    "Tácticas":"Tactics",
    "Resolución":"Resolution",
    "Ilustración":"Illustration",
    "Animación":"Animation",
    "Añadir":"Add",
    "Fondo transparente":"Transparent background",
    "Incluir hoja de sprites":"Include sprite sheet",
    "Cancelar":"Cancel",
    "Guardar personaje":"Save character",
    "Importar imágenes":"Import images",
    "Frase de prueba":"Test phrase",
    "Guardar proyecto":"Save project",
    "Guardado automático":"Autosave",
    "Sinopsis":"Synopsis",
    "Eliminar proyecto":"Delete project",
    "Proyecto en equipo":"Team project",
    "Novela visual":"Visual novel",
    "Un híbrido":"A hybrid",
    "Adaptación":"Adaptation",
    "Nombre de la adaptación":"Adaptation name",
    "Crear adaptación":"Create adaptation",
    "Adaptación creada como proyecto independiente.":"Adaptation created as a separate project.",
    "El proyecto está marcado como CANON. Las adaptaciones se crearán como copias.":"This project is marked as CANON. Adaptations will be created as copies.",
    "Revisar protección del canon":"Review canon protection",
    "Adaptar proyecto":"Adapt project",
    "Un solo Project Core; el formato cambia cómo se presenta y utiliza el contenido.":"One Core Project; the format changes how the content is presented and used.",
    "RPG narrativo híbrido":"Hybrid narrative RPG",
    "Daño":"Damage",
    "Interacción":"Interaction",
    "Dirección":"Direction",
    "Elección":"Choice",
    "Cambiar relación":"Change relationship",
    "Diálogo":"Dialogue",
    "Continuación":"Continuation",
    "Día":"Day",
    "Día 1":"Day 1",
    "El tiempo puede afectar NPCs, tiendas, quests, enemigos, mapas y diálogos.":"Time can affect NPCs, shops, quests, enemies, maps, and dialogue.",
    "Cambiar plantilla de menú":"Change menu template",
    "Añadir botón":"Add button",
    "Quitar botón":"Remove button",
    "Cambiar opción":"Change option",
    "Crear facción":"Create faction",
    "Añadir cronología":"Add timeline",
    "Crear relación":"Create relationship",
    "Decisión → Variable/Consecuencia":"Choice → Variable/Consequence",
    "Diálogo → Interacción":"Dialogue → Interaction",
    "Misión → Quest":"Mission → Quest",
    "Menús y botones":"Menus & buttons",
    "Abrir en otra pestaña":"Open in new tab",
    "No se pudo cargar el archivo.":"Could not load the file.",
    "Inicia sesión para publicar.":"Sign in to publish.",
    "La publicación está vacía.":"The post is empty.",
    "Inicia sesión para responder.":"Sign in to reply.",
    "No se pudo abrir esta publicación.":"Could not open this post.",
    "Inicia sesión para publicar en el foro.":"Sign in to post in the forum.",
    "El título es demasiado corto.":"The title is too short.",
    "¡Ahora sigues a este creador!":"You're now following this creator!",
    "Inicia sesión para jugar.":"Sign in to play.",
    "Inicia sesión en Cronotinta para suscribirte.":"Sign in to Cronotinta to subscribe.",
    "No se pudo iniciar la suscripción. Inténtalo otra vez.":"Could not start the subscription. Please try again.",
    "No se pudo iniciar la suscripción.":"Could not start the subscription.",
    "El archivo se publicará como juego independiente.":"The file will be published as a standalone game.",
    "Todavía no hay comentarios.":"There are no comments yet.",
    "Todavía no hay juegos publicados. Sé la primera persona en compartir uno.":"No games have been published yet. Be the first to share one.",
    "Todavía no hay publicaciones. Comparte una idea o un juego cuando quieras.":"There are no posts yet. Share an idea or a game whenever you like.",
    "Todavía no hay publicaciones. Sé la primera persona en compartir algo.":"There are no posts yet. Be the first to share something.",
    "Todavía no hay publicaciones. Sé la primera persona en escribir.":"There are no posts yet. Be the first to write one.",
    "Comprueba la conexión e inténtalo otra vez.":"Check your connection and try again.",
    "Comprueba tu conexión e inténtalo otra vez.":"Check your connection and try again.",
    "No se pudieron cargar las publicaciones. Primero hay que crear las tablas del foro en Supabase.":"Could not load posts. The forum tables need to be created in Supabase first.",
    "No se pudieron cargar los juegos.":"Could not load games.",
    "No se pudo cargar el feed.":"Could not load the feed.",
    "No se pudo cargar esta publicación.":"Could not load this post.",
    "Volver al foro":"Back to forum",
    "Dejar de seguir":"Unfollow",
    "Seguir":"Follow",
    "Ver perfil":"View profile",
    "Creador de mundos en Cronotinta.":"Worldbuilder at Cronotinta.",
    "Nivel":"Level",
    "Notificaciones":"Notifications",
    "No tienes notificaciones todavía.":"You don't have any notifications yet.",
    "Pausar música de fondo":"Pause background music",
    "Silenciar música de fondo":"Mute background music",
    "Activar música de fondo":"Turn on background music",
    "Iniciar música de fondo":"Start background music",
    "El juego tarda más de lo normal.":"The game is taking longer than usual.",
    "Intentar de nuevo":"Try again",
    "Inicia sesión y trae al menos 1 Crono.":"Sign in and bring at least 1 Crono.",
    "No se pudo iniciar sesión:":"Could not sign in:",
    "Ingresa una edad válida en años.":"Enter a valid age in years.",
    "Debes aceptar los documentos de esta versión para continuar.":"You must accept this version's documents to continue.",
    "Cerrando sesión…":"Signing out…",
    "Sesión cerrada.":"Signed out.",
    "No pude cerrar sesión:":"Could not sign out:",
    "Tu plan Free permite hasta 2 proyectos. Mejora tu plan para crear más.":"Your Free plan allows up to 2 projects. Upgrade your plan to create more.",
    "Has alcanzado el límite de proyectos de tu plan.":"You've reached your plan's project limit.",
    "La IA devolvió una respuesta vacía.":"The AI returned an empty response.",
    "No pude iniciar sesión: revisa el correo y la contraseña":"Couldn't sign in: check your email and password.",
    "Cargando publicaciones…":"Loading posts…",
    "Cargando feed…":"Loading feed…",
    "Cargando publicación…":"Loading post…",
    "Cargando juego…":"Loading game…",
    "Publicar":"Publish",
    "Me gusta":"Like",
    "Comentar":"Comment",
    "Responder":"Reply",
    "Comentarios":"Comments",
    "Crear post":"Create post",
    "Abrir publicación":"Open post",
    "Foro publicación:":"Forum post:",
    "Anuncio":"Announcement",
    "Cronotinta — Taller de novelas visuales":"Cronotinta — Visual Novel Workshop",
    "Novedades":"What's new","Noticias de Cronotinta":"Cronotinta news","Lo nuevo en el taller":"What's new in the workshop",
    "Cerrar":"Close","Cerrar catálogo":"Close catalog","Catálogo":"Catalog","Taller de Cronotinta":"Cronotinta Workshop",
    "Crear":"Create","Nuevo proyecto":"New project","Personajes":"Characters","Tu taller":"Your workshop",
    "Mis proyectos":"My projects","Cuenta y configuración":"Account & settings","Ver recorrido interactivo":"Replay interactive tour",
    "El mundo de Cronotinta":"The world of Cronotinta","Sobre Cronotinta":"About Cronotinta","Lore":"Lore","Planes":"Plans",
    "Planes de Cronotinta":"Cronotinta plans","Comunidad":"Community","Foro":"Forum","Galería":"Gallery",
    "Juegos de la comunidad":"Community games","Redes sociales":"Social media","Feed de la comunidad":"Community feed",
    "Proyectos jugables":"Playable projects","Mi perfil":"My profile","Casino de Cassius":"Cassius' Casino",
    "Escribe historias. El tiempo hace trampa.":"Write stories. Time cheats.","Descargar app para Android":"Download the Android app",
    "Vaya, un mortal. Qué breve eres.":"Well, a mortal. How fleeting you are.","Hablar":"Chat",
    "Cada respuesta de Cassius cuesta 1 Crono. Si tu saldo llega a 0, no podrá contestarte.":"Each Cassius reply costs 1 Crono. If your balance reaches 0, he won't be able to answer.",
    "Proyectos":"Projects","Galería de ilustraciones":"Illustration gallery","Cuenta":"Account",
    "Información de Cronotinta":"About Cronotinta","Términos":"Terms","Privacidad":"Privacy","Reglas":"Rules","Cambiar luz":"Toggle theme",
    "Gracias por crear tu cuenta, mortal. Tu correo ya está confirmado.":"Thank you for creating your account, mortal. Your email is confirmed.",
    "Vuelve a la pestaña de Cronotinta. La página original se actualizará para que puedas iniciar sesión.":"Return to the Cronotinta tab. The original page will refresh so you can sign in.",
    "Cerrar esta pestaña":"Close this tab","Volver a Cronotinta":"Return to Cronotinta","Intentando cerrar esta pestaña…":"Trying to close this tab…",
    "🎰 Casino de Cassius":"🎰 Cassius' Casino","La Apuesta del Tiempo · solo Cronos virtuales":"The Time Bet · virtual Cronos only",
    "← Mi perfil":"← My profile","«He preparado algo especial para ti, mortal.»":"“I've prepared something special for you, mortal.”",
    "🪙 Cronos":"🪙 Cronos","Partidas hoy":"Games today","Victorias":"Wins","La mesa está servida.":"The table is set.",
    "Pasado vence a Futuro · Futuro vence a Presente · Presente vence a Pasado.":"Past beats Future · Future beats Present · Present beats Past.",
    "Jugar":"Play","¿Cuántos Cronos arriesgas?":"How many Cronos will you wager?",
    "Mínimo 5 Cronos · máximo según tu saldo · 10 partidas al día":"Minimum 5 Cronos · maximum depends on your balance · 10 games per day",
    "Apostar":"Place bet","Pasado":"Past","La memoria pesa.":"Memory weighs heavily.","Presente":"Present","El instante decide.":"The moment decides.",
    "Futuro":"Future","Lo que aún no existe.":"What does not yet exist.","Elige una carta.":"Choose a card.","Otra partida":"Play again",
    "🎲 El desafío de Cassius":"🎲 Cassius' Challenge","Cassius elige del 2 al 5. Adivina si el dado (1–6) será mayor o menor.":"Cassius picks a number from 2 to 5. Guess whether the die (1–6) will roll higher or lower.",
    "Apuesta en Cronos (mínimo 5)":"Wager in Cronos (minimum 5)","Sentar apuesta":"Set wager",
    "Creo que será mayor":"I think it will be higher","Creo que será menor":"I think it will be lower","¡Lanzar el dado!":"Roll the die!",
    "Cancelar apuesta":"Cancel wager","El saldo de Cronos se comparte con la mesa.":"Your Cronos balance is shared with the table.",
    "Premio según probabilidad. Si el dado iguala el número de Cassius, pierdes la apuesta.":"Payouts are based on probability. If the die matches Cassius' number, you lose your wager.",
    "← Volver al inicio":"← Back to home","Tu cuenta":"Your account",
    "Guarda tu identidad de Cronotinta para que después podamos conectar foro, comunidad y proyectos en la nube.":"Save your Cronotinta identity so we can connect the forum, community, and cloud projects.",
    "Iniciar sesión":"Sign in","Crear cuenta":"Create account","Correo electrónico":"Email address","Contraseña":"Password","Entrar":"Sign in",
    "Nombre de usuario":"Username","Edad":"Age","Soy menor de edad":"I'm under 18",
    "Las protecciones para menores y sus límites están explicados en":"Protections for minors and their limits are explained in",
    "Seguridad y legal":"Safety & legal","Leí y acepto los términos y la política de privacidad de esta versión de prueba.":"I have read and accept the terms and privacy policy for this test version.",
    "Leer términos":"Read terms","Leer privacidad":"Read privacy",
    "Los documentos aún están en revisión; esta casilla registra tu aceptación de la versión de prueba.":"These documents are still under review; this checkbox records your acceptance of the test version.",
    "Cuenta activa":"Active account","Usuario":"User","Correo":"Email","Estado":"Status","Sesión iniciada":"Signed in",
    "🎯 Nivel":"🎯 Level","XP":"XP","Plan":"Plan","FREE":"FREE","Progreso al siguiente nivel":"Progress to next level","Cerrar sesión":"Sign out",
    "CÍRCULO DE CONFIANZA":"TRUST CIRCLE","Moderación y equipo":"Moderation & team",
    "Busca por nombre público. Las acciones requieren permisos del servidor y quedan en el registro de auditoría.":"Search by public username. Actions require server permissions and are recorded in the audit log.",
    "Buscar usuario":"Search user","Buscar":"Search","La lista de usuarios aparecerá aquí.":"User results will appear here.",
    "Cuenta seleccionada":"Selected account","Elige una cuenta de los resultados.":"Choose an account from the results.",
    "Motivo obligatorio":"Reason required","Acción":"Action","Enviar advertencia":"Send warning","Suspender cuenta":"Suspend account",
    "Levantar suspensión":"Lift suspension","Dar o retirar Cronos":"Grant or remove Cronos","Asignar o retirar rol":"Assign or remove role",
    "Duración de suspensión":"Suspension duration","24 horas":"24 hours","7 días":"7 days","30 días":"30 days",
    "Indefinida (100 años)":"Indefinite (100 years)","Ajuste de Cronos (+/-)":"Cronos adjustment (+/-)",
    "Rol del equipo":"Team role","Moderador":"Moderator","Admin":"Admin","Quitar rol":"Remove role","Aplicar acción":"Apply action",
    "Una suspensión bloquea nuevos accesos y renovaciones de sesión. Los tokens ya emitidos pueden seguir funcionando hasta expirar; las acciones de base de datos deben respetar ese intervalo.":"A suspension blocks new sign-ins and session renewals. Previously issued tokens may remain valid until they expire; database actions must respect that interval.",
    "← Proyectos":"← Projects","Guardar proyecto":"Save project","Guardado automático":"Autosaved",
    "Nombre del proyecto":"Project name","Sinopsis":"Synopsis","Eliminar proyecto":"Delete project",
    "Una pequeña exposición para las obras que lleguen desde el mundo de Cronotinta.":"A small exhibition for works arriving from the world of Cronotinta.",
    "Desliza horizontalmente para recorrer la exposición ·":"Swipe horizontally to explore the exhibition ·","cada marco espera una ilustración":"each frame is waiting for an illustration",
    "Obra 01":"Artwork 01","· Próximamente":"· Coming soon","Obra 02":"Artwork 02","Obra 03":"Artwork 03","Obra 04":"Artwork 04",
    "Obra 05":"Artwork 05","Obra 06":"Artwork 06","Obra 07":"Artwork 07","Obra 08":"Artwork 08","8 marcos esperando arte":"8 frames waiting for art",
    "Si tienen arte o dibujos míos que osen compartir,":"If you have art or drawings of mine you'd dare to share,",
    "puedes compartirlos a este correo (":"you can send them to this email (",") o Instagram:":") or Instagram:",
    "Tus personajes agrupados por proyecto. Abre uno para editarlo o añade personajes nuevos dentro de su proyecto.":"Your characters grouped by project. Open one to edit it or add new characters within its project.",
    "Catálogo de Cronotinta":"Cronotinta catalog",
    "Todo lo que puedes construir, organizar y explorar dentro del taller. Las categorías se conectan con las herramientas que ya existen en Cronotinta.":"Everything you can build, organize, and explore in the workshop. Categories link to tools already available in Cronotinta.",
    "Inicio":"Home","Vuelve al centro de Cronotinta y habla con Cassius.":"Return to the heart of Cronotinta and talk to Cassius.",
    "Construye el proyecto desde su formato y contenido narrativo.":"Build your project around its format and narrative content.",
    "Abre, guarda, versiona, adapta y prueba tus proyectos.":"Open, save, version, adapt, and test your projects.",
    "Conoce el lore, Cassius, la historia y los misterios del taller.":"Discover the lore, Cassius, the story, and the workshop's mysteries.",
    "Consulta la evolución del proyecto y las capacidades que se irán incorporando.":"Explore the project's evolution and the capabilities being added.",
    "Conversaciones, ayuda y espacios sociales de Cronotinta.":"Conversations, help, and social spaces in Cronotinta.",
    "Configura tu protección y consulta las reglas y documentos de Cronotinta.":"Configure your safety settings and review Cronotinta's rules and documents.",
    "Modo seguro":"Safe mode","Estado de seguridad de tu cuenta.":"Your account's safety status.","Activar modo seguro":"Enable safe mode",
    "Detalles de seguridad":"Safety details","Configuración":"Settings","Cuenta, sesión, preferencias y opciones generales de Cronotinta.":"Account, session, preferences, and general Cronotinta options.",
    "← Volver al catálogo":"← Back to catalog","Encuentra aquí los controles de seguridad y la información que orienta el uso de Cronotinta.":"Find safety controls and guidance for using Cronotinta here.",
    "El modo seguro se configura desde la categoría Seguridad y legal del catálogo.":"Safe mode is configured in the Safety & legal category of the catalog.",
    "Documentos y convivencia":"Documents & community","Consulta las pautas de la comunidad y cómo se usan y protegen los datos.":"Review community guidelines and learn how data is used and protected.",
    "Reglas de la comunidad":"Community guidelines","Términos y condiciones":"Terms & conditions",
    "El mundo detrás del taller":"The world behind the workshop",
    "Cronotinta no es solamente un editor. Es un taller narrativo donde historias, personajes, mundos y tiempo pueden quedar unidos en una misma obra.":"Cronotinta is more than an editor. It is a narrative workshop where stories, characters, worlds, and time can come together in a single work.",
    "Cronotinta nace como un espacio para quienes quieren construir juegos narrativos sin tener que separar la escritura, los personajes, las escenas y los sistemas de juego en herramientas distintas. Aquí una historia puede comenzar como una novela visual y terminar convertida en una aventura con mapas, NPCs, misiones, combate, variables y consecuencias.":"Cronotinta was created for people who want to build narrative games without splitting writing, characters, scenes, and game systems across different tools. A story can begin as a visual novel and grow into an adventure with maps, NPCs, quests, combat, variables, and consequences.",
    "Proyecto Core":"Core Project",": un lugar donde viven los personajes, sus relaciones, el lore, las localizaciones, las facciones, la cronología, las escenas, los diálogos, las decisiones, las variables, las quests, los objetos, las habilidades, los enemigos, los mapas y los recursos. La idea es que todo esté conectado y que un cambio narrativo pueda tener consecuencias jugables.":": where characters, relationships, lore, locations, factions, timelines, scenes, dialogue, choices, variables, quests, items, skills, enemies, maps, and assets live. The idea is to connect everything so a narrative change can have gameplay consequences.",
    "Por eso Cronotinta contempla varios formatos:":"That's why Cronotinta supports several formats:",
    "Novela Visual":"Visual Novel","Indie RPG":"Indie RPG","Híbrido":"Hybrid",
    ". Una adaptación puede convertirse en una versión independiente sin destruir el original, y el contenido puede mantenerse separado entre canon, borrador, alternativa y no canon.":". An adaptation can become an independent version without destroying the original, and content can remain separated into canon, draft, alternate, and non-canon.",
    "El taller también está pensado para el trabajo cotidiano: probar escenas, revisar ramas, detectar contenido roto, guardar versiones, comparar cambios, diseñar mapas, crear sprites, organizar recursos y comprobar qué decisiones afectan al mundo.":"The workshop is also designed for everyday work: testing scenes, reviewing branches, finding broken content, saving versions, comparing changes, designing maps, creating sprites, organizing assets, and checking which choices affect the world.",
    "Cronotinta es un taller de creación. La herramienta acompaña al autor; no decide qué historia debe contar.":"Cronotinta is a creative workshop. The tool supports the author; it does not decide which story they should tell.",
    "Empieza gratis. Crece cuando tu mundo lo necesite.":"Start for free. Grow when your world needs it.",
    "El plan gratuito no es una demo recortada: tienes acceso a todas las herramientas. Los planes de pago amplían cuánto puedes crear y cuánto puede acompañarte Cassius.":"The free plan is not a cut-down demo: you get access to all tools. Paid plans expand what you can create and how much Cassius can assist you.",
    "Siempre gratis":"Always free","Gratis":"Free","CLP / mes":"CLP / month","Para aprender Cronotinta, experimentar y terminar tus primeras historias.":"Learn Cronotinta, experiment, and finish your first stories.",
    "2 proyectos":"2 projects","máximo":"maximum","Todas las herramientas principales":"All core tools","Personajes, escenas, mapas y recursos":"Characters, scenes, maps, and assets",
    "Quests, inventario, habilidades y combate":"Quests, inventory, skills, and combat","Proyecto Core, variables y eventos":"Core Project, variables, and events",
    "Cassius con IA limitada":"Cassius with limited AI","Interacciones IA mensuales limitadas":"Limited monthly AI interactions","Empezar gratis":"Start for free",
    "El equilibrio":"The balance","Para quienes ya están construyendo un proyecto serio y quieren que Cassius trabaje más.":"For creators building a serious project who want more help from Cassius.",
    "10 proyectos":"10 projects","activos":"active","Todo lo del plan Gratis":"Everything in the Free plan","250 interacciones IA":"250 AI interactions","al mes":"per month",
    "Asistencia narrativa avanzada de Cassius":"Advanced narrative assistance from Cassius","Análisis de continuidad y contenido roto":"Continuity and broken-content analysis",
    "Adaptación entre formatos y versiones":"Adaptation between formats and versions","Copias y versiones ampliadas":"More copies and versions",
    "Exportaciones avanzadas":"Advanced exports","Más almacenamiento de recursos":"More asset storage","Quiero Cronotinta+":"Get Cronotinta+",
    "Para proyectos grandes":"For large projects","Para creadores que quieren llevar un universo completo desde la idea hasta el juego.":"For creators who want to take an entire universe from idea to game.",
    "Proyectos ilimitados":"Unlimited projects","Todo lo de Cronotinta+":"Everything in Cronotinta+","1.000 interacciones IA":"1,000 AI interactions",
    "Cassius con asistencia de producción ampliada":"Expanded production assistance from Cassius","Colaboración para equipos":"Team collaboration",
    "Herramientas avanzadas de balance RPG":"Advanced RPG balancing tools","Gestión ampliada de mapas, recursos y sprites":"Expanded map, asset, and sprite management",
    "Exportaciones y respaldos prioritarios":"Priority exports and backups","Funciones experimentales para creadores":"Experimental creator features","Quiero Premium":"Get Premium",
    "Plan Gratis":"Free plan","Todo el taller. Dos mundos a la vez.":"The whole workshop. Two worlds at once.",
    "Herramientas completas":"Full toolset","Accede al núcleo narrativo y RPG.":"Access the narrative and RPG core.",
    "IA limitada":"Limited AI","Cassius puede ayudarte, pero con un límite mensual.":"Cassius can help, subject to a monthly limit.",
    "Sin tarjeta":"No card required","Empieza sin pagar.":"Start without paying.",
    "Más espacio para que tus historias crezcan.":"More room for your stories to grow.",
    "Trabaja en varias historias sin borrar nada.":"Work on multiple stories without deleting anything.",
    "Cassius ampliado":"Expanded Cassius","Más asistencia para narrativa, continuidad y organización.":"More help with narrative, continuity, and organization.",
    "250 IA / mes":"250 AI / month","Un margen amplio para construir y revisar.":"Plenty of room to build and review.",
    "Producción avanzada":"Advanced production","Más versiones, recursos y exportaciones.":"More versions, assets, and exports.",
    "Tu universo completo, sin ponerle techo.":"Your entire universe, without limits.",
    "Historias, prototipos, spin-offs y versiones.":"Stories, prototypes, spin-offs, and versions.",
    "1.000 IA / mes":"1,000 AI / month","Más espacio para trabajar junto a Cassius.":"More room to work with Cassius.",
    "Trabajo en equipo":"Teamwork","Preparado para proyectos colaborativos.":"Ready for collaborative projects.",
    "Funciones experimentales":"Experimental features","Acceso prioritario a herramientas nuevas.":"Priority access to new tools.",
    "Suscripciones mensuales.":"Monthly subscriptions.","Cronotinta+ cuesta $4.99 USD al mes y Premium cuesta $9.99 USD al mes.":"Cronotinta+ costs $4.99 USD per month and Premium costs $9.99 USD per month.",
    "Foro de Cronotinta":"Cronotinta Forum","Preguntas, ideas, ayuda, lore y conversaciones entre creadores.":"Questions, ideas, help, lore, and conversations between creators.",
    "Actualizar":"Refresh","Crear post":"Create post","Inicia sesión para crear publicaciones y responder. Puedes leer el foro sin cuenta.":"Sign in to create posts and reply. You can read the forum without an account.",
    "Título":"Title","Etiqueta":"Tag","General":"General","Pregunta":"Question","Ayuda":"Help","RPG":"RPG","Showcase":"Showcase","Anuncio":"Announcement",
    "Publicación":"Post","Cancelar":"Cancel","Publicar":"Publish","Publicaciones recientes":"Recent posts",
    "Selecciona una publicación para abrirla.":"Select a post to open it.","Cargando publicaciones…":"Loading posts…",
    "Encuentra Cronotinta fuera del taller.":"Find Cronotinta beyond the workshop.","Instagram · Español":"Instagram · Spanish",
    "Abrir en Instagram":"Open on Instagram","Copiar usuario":"Copy username","Instagram · English":"Instagram · English",
    "TikTok · Global":"TikTok · Global","Abrir en TikTok":"Open on TikTok",
    "Feed de Cronotinta":"Cronotinta Feed","Comparte avances, ideas y proyectos con otros creadores.":"Share progress, ideas, and projects with other creators.",
    "Publicar juego":"Publish a game","Inicia sesión para publicar, dar Me gusta y comentar. Puedes leer el feed sin cuenta.":"Sign in to publish, like, and comment. You can read the feed without an account.",
    "¿Qué quieres compartir, mortal?":"What would you like to share, mortal?","Actualización":"Update","Proyecto":"Project",
    "La comunidad de Cronotinta.":"The Cronotinta community.","Cargando feed…":"Loading feed…",
    "Salón de Juegos de Cronotinta":"Cronotinta Game Hall",
    "Descubre proyectos creados por mortales y juega sus versiones publicadas directamente aquí.":"Discover projects made by mortals and play their published versions right here.",
    "Cargando juegos…":"Loading games…","Comparte un juego jugable":"Share a playable game",
    "Sube el archivo HTML de un juego terminado para que la comunidad pueda jugarlo desde Cronotinta. Vincular un proyecto es opcional.":"Upload the HTML file of a finished game so the community can play it in Cronotinta. Linking a project is optional.",
    "Género":"Genre","Aventura":"Adventure","Drama":"Drama","Comedia":"Comedy","Terror":"Horror","Experimental":"Experimental","Otros":"Other",
    "Título del juego":"Game title","Descripción":"Description","Archivo jugable HTML":"Playable HTML file",
    "Sube un archivo .html o .htm autocontenido, de hasta 50 MB. Comprueba que abre y se puede jugar en tu navegador.":"Upload a self-contained .html or .htm file, up to 50 MB. Make sure it opens and plays in your browser.",
    "El juego quedará disponible públicamente en el feed.":"The game will be publicly available in the feed.",
    "Proyecto relacionado (opcional)":"Related project (optional)","También puedes publicar un juego independiente.":"You can also publish a standalone game.",
    "Juego":"Game","Descargar archivo":"Download file","Cargando juego…":"Loading game…",
    "← Volver a elegir formato":"← Choose format again","¿Cómo quieres trabajar?":"How would you like to work?",
    "Formato:":"Format:","Elige cómo quieres crear este proyecto.":"Choose how you want to create this project.",
    "Proyecto solitario":"Solo project","Proyecto en equipo":"Team project","¿Qué quieres crear hoy, mortal?":"What will you create today, mortal?",
    "Escenas, diálogos, decisiones y rutas.":"Scenes, dialogue, choices, and paths.",
    "Mapas, exploración, NPCs, quests y combate.":"Maps, exploration, NPCs, quests, and combat.",
    "Novela visual + RPG en el mismo proyecto.":"Visual novel + RPG in the same project.",
    "Nuevo personaje":"New character","← Volver":"← Back","Sin nombre":"Unnamed",
    "«El tiempo no se pierde, mortal. Se gasta mal.»":"“Time is not lost, mortal. It is poorly spent.”",
    "Nombre del personaje":"Character name","Rol en la historia":"Story role","Protagonista":"Protagonist","Aliado":"Ally","Rival":"Rival",
    "Mentor":"Mentor","Misterio":"Mystery","Especie / origen":"Species / origin","Pronombres":"Pronouns","Personalidad":"Personality",
    "+ Añadir":"+ Add","Descripción física":"Physical description","Color de cabello":"Hair color","Color de ojos":"Eye color",
    "Color de ropa":"Clothing color","Estilo":"Style","Habilidades del personaje (nivel 1 a 5)":"Character skills (level 1 to 5)",
    "+ Añadir habilidad":"+ Add skill","Historia del personaje":"Character backstory","Secreto":"Secret","Objetivo":"Goal",
    "Pedir lore a la IA":"Ask AI for lore","Tema del cuadro":"Dialogue box theme","Color del cuadro":"Box color",
    "Color del borde":"Border color","Color del texto":"Text color","Opacidad":"Opacity","Borde":"Border",
    "Simple":"Simple","Doble":"Double","Remachado":"Riveted","Relieve":"Embossed","Ancho del cuadro":"Box width",
    "Alto mínimo":"Minimum height","Tamaño del texto":"Text size","Frase de prueba":"Test phrase",
    "＋ Nueva expresión":"＋ New expression","Importar imágenes":"Import images",
    "Tamaño y posición en escena (también puedes arrastrar el sprite en la vista previa)":"Size and position in scene (you can also drag the sprite in the preview)",
    "Escala:":"Scale:","Horizontal":"Horizontal","Vertical":"Vertical","Restablecer tamaño":"Reset size",
    "Formato":"Format","Tamaño":"Size","Fondo transparente":"Transparent background","Incluir hoja de sprites":"Include sprite sheet",
    "Incluir cuadro de diálogo":"Include dialogue box","Exportar sprites":"Export sprites","Guardar personaje":"Save character",
    "Esta historia viene con música. Toca para entrar.":"This story comes with music. Tap to enter.","Música":"Music",
    "Una guía breve para entrar al taller":"A short guide to the workshop","Paso 1 de 3":"Step 1 of 3",
    "Cassius está esperando tu primera decisión.":"Cassius is waiting for your first decision.",
    "EL UMBRAL DEL TIEMPO":"THE THRESHOLD OF TIME","¿Qué te gustaría crear?":"What would you like to create?",
    "Te orientaremos según el tipo de proyecto y el ritmo que imaginas. Puedes cambiar de idea cuando quieras.":"We'll guide you based on the kind of project and pace you have in mind. You can change your mind at any time.",
    "Mapas, exploración, personajes y misiones.":"Maps, exploration, characters, and quests.",
    "Una historia con escenas y sistemas RPG.":"A story with scenes and RPG systems.",
    "¿Cómo piensas usarlo?":"How do you plan to use it?","Estoy explorando":"I'm exploring",
    "Quiero empezar con una historia y conocer el editor.":"I want to start with a story and explore the editor.",
    "Crearé varias historias":"I'll create several stories","Necesito espacio para mantener varios proyectos.":"I need room to keep several projects.",
    "Producción o equipo":"Production or team","Quiero crecer sin límite y trabajar con más personas.":"I want to grow without limits and work with others.",
    "Ya tengo una cuenta":"I already have an account","Probar una escena":"Try a scene","Prueba una escena interactiva":"Try an interactive scene",
    "Escribe una línea y juega una decisión. Este ejemplo se queda en tu navegador; todavía no te pediremos que pagues ni que guardes nada.":"Write a line and play through a choice. This example stays in your browser; we won't ask you to pay or save anything yet.",
    "Primera línea":"First line","El reloj marca una hora que todavía no existe.":"The clock strikes an hour that does not yet exist.",
    "Ver mi escena":"View my scene","El reloj se detiene. ¿Qué haces?":"The clock stops. What do you do?",
    "Seguir el reloj":"Follow the clock","Abrir la puerta":"Open the door","Volver":"Back",
    "Ver mi recomendación":"See my recommendation","Tu ruta para seguir creando":"Your path forward",
    "Según lo que quieres construir, este es un buen punto de partida.":"Based on what you want to build, this is a good place to start.",
    "Recomendación personalizada":"Personalized recommendation","para empezar":"to get started",
    "El plan se muestra después de que probaste una escena. Puedes seguir con el plan Gratis; no se activa ningún cobro desde este recorrido.":"Your plan is shown after you try a scene. You can continue with the Free plan; this walkthrough will not activate any charges.",
    "Volver a la escena":"Back to the scene","Ver todos los planes":"View all plans","Entrar al taller gratis":"Enter the free workshop",
    "Cronotinta · Documentos":"Cronotinta · Documents","Información legal":"Legal information",
    "BORRADOR PARA REVISIÓN":"DRAFT FOR REVIEW","Reglas de comunidad":"Community rules",
    "Cronotinta · Modo seguro":"Cronotinta · Safe mode","Un espacio más protegido":"A safer space",
    "Reportar contenido":"Report content","Ayúdanos a entender qué ocurrió.":"Help us understand what happened.",
    "Motivo":"Reason","Elige un motivo":"Choose a reason","Acoso o intimidación":"Harassment or bullying",
    "Datos personales expuestos":"Exposed personal information","Contenido sexual o violento":"Sexual or violent content",
    "Spam o estafa":"Spam or scam","Derechos de autor":"Copyright","Otro problema de seguridad":"Other safety issue",
    "Detalles (opcional)":"Details (optional)","Preparar reporte":"Prepare report"
  };

  const textSources = new WeakMap();
  const textRendered = new WeakMap();
  const attributeSources = new WeakMap();
  const attributeRendered = new WeakMap();
  const sourceDocumentTitle = document.title;
  const ignored = new Set(["SCRIPT","STYLE","NOSCRIPT","TEXTAREA","INPUT","SELECT"]);
  const protectedContent = [
    "[data-user-content]", ".user-content", ".post-content", ".comment-content",
    "#plist", "#charsList", "#about .about-section",
    "#say", "#ctCassius", "#ctCassiusFace", ".cassius-chat-message",
    "#creator .pvs", "#creator .dlg", "#creator #ctitle", "#creator .slots .slot",
    "#wk .ch", "#wk .tree", "#wk .iss", "#wk .scene-char-preview",
    ".ct-social-grid", ".ct-profile-head", ".modal.open .modal-box h2", ".modal.open .modal-box p",
    ".feed-card .feed-body", ".feed-card .feed-author", ".feed-card .feed-time",
    ".feed-card .feed-comment span", ".feed-card .ct-author-link",
    ".forum-card h4", ".forum-card .forum-excerpt", ".forum-card .forum-meta",
    "#forumPostView article h2", "#forumPostView article p",
    "#forumPostView article .forum-meta", "#forumPostView article .forum-reply-body",
    ".ct-author-link", "[contenteditable='true']"
  ].join(",");
  function isProtected(node) {
    const el = node && (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement);
    if (!el) return false;
    if (el.isContentEditable || el.closest("[contenteditable='true']")) return true;
    if (el.matches && el.matches(protectedContent)) return true;
    return !!(el.closest && el.closest(protectedContent));
  }
  function language() {
    try { return localStorage.getItem(STORAGE_KEY) === "es" ? "es" : "en"; }
    catch (_) { return "en"; }
  }
  const partialPrefixes = [
    ["Escena ","Scene "], ["Capítulo ","Chapter "],
    ["Desarrollo del proyecto: ","Project progress: "],
    ["Rutas recorridas: ","Paths explored: "],
    ["Finales alcanzados: ","Endings reached: "],
    ["Rutas con problemas: ","Paths with issues: "],
    ["Volumen ","Volume "], ["Sin conexión: ","Offline: "],
    ["No se pudo iniciar sesión:","Could not sign in:"],
    ["No pude iniciar sesión:","Could not sign in:"],
    ["No pude cerrar sesión:","Could not sign out:"],
    ["No se pudieron cargar los juegos. ","Could not load games. "],
    ["Los juegos no cargaron:","Games failed to load:"],
    ["No se pudo compartir:","Could not share:"],
    ["No se pudo crear el enlace:","Could not create the link:"],
    ["Abrir colaboración de ","Open collaboration for "],
    ["regalado por 30 días. Vence ","gifted for 30 days. Expires "],
    ["El juego tarda más de lo normal. ","The game is taking longer than usual. "],
    ["No se pudo cargar el archivo. ","Could not load the file. "]
  ];
  const partialSuffixes = [["MB · Este archivo será público en el feed.","MB · This file will be public in the feed."]];
  const controlPhrases = [
    ["Me gusta","Like"], ["Comentarios","Comments"], ["Favorito","Favorite"],
    ["JUGAR","PLAY"], ["Comentar","Comment"], ["respuestas","replies"],
    ["respuesta","reply"], ["Tu juego","Your game"], ["· Ver perfil","· View profile"],
    ["Dejar de seguir","Unfollow"], ["Seguir","Follow"]
  ];
  function translateDynamicText(original, lang, parent) {
    if (lang !== "en") return original;
    let output = original;
    const control = parent && parent.closest ? parent.closest("button,.forum-card-foot") : null;
    if (control && !isProtected(control)) {
      for (const [from,to] of controlPhrases) output = output.split(from).join(to);
    }
    const trimmed = output.trimStart();
    const leading = output.slice(0,output.length-trimmed.length);
    for (const [from,to] of partialPrefixes) {
      if (trimmed.startsWith(from)) return leading + to + trimmed.slice(from.length);
    }
    for (const [from,to] of partialSuffixes) {
      if (trimmed.endsWith(from)) return leading + trimmed.slice(0,trimmed.length-from.length) + to;
    }
    return output;
  }
  function translateTextNode(node, lang) {
    const parent = node.parentElement;
    if (!parent || ignored.has(parent.tagName) || isProtected(parent)) return;
    if (parent.tagName === "OPTION" && parent.closest("#wk select[data-s], #wk #ra, #wk #rb")) return;
    const current = node.nodeValue;
    let original = textSources.get(node);
    if (original === undefined || textRendered.get(node) !== current) {
      original = current;
      textSources.set(node,original);
    }
    const trimmed = original.trim();
    if (!trimmed) return;
    const translated = lang === "en" ? (translations[trimmed] || translateDynamicText(trimmed,lang,parent)) : trimmed;
    const start = original.indexOf(trimmed);
    const output = original.slice(0,start) + translated + original.slice(start+trimmed.length);
    textRendered.set(node,output);
    if (output !== current) node.nodeValue = output;
  }
  function translateAttribute(el, attr, lang) {
    if (isProtected(el)) return;
    let sources = attributeSources.get(el);
    let rendered = attributeRendered.get(el);
    if (!sources) { sources = {}; attributeSources.set(el,sources); }
    if (!rendered) { rendered = {}; attributeRendered.set(el,rendered); }
    const current = el.getAttribute(attr);
    if (sources[attr] === undefined || rendered[attr] !== current) sources[attr] = current;
    const original = sources[attr];
    if (original == null) return;
    const output = lang === "en" ? (translations[original] || original) : original;
    rendered[attr] = output;
    if (output !== current) el.setAttribute(attr,output);
  }
  function translateAttributes(el,lang) {
    if (!el || !el.getAttribute || isProtected(el)) return;
    ["placeholder","aria-label","title"].forEach(attr => {
      if (el.hasAttribute(attr)) translateAttribute(el,attr,lang);
    });
  }
  function translateElement(root, lang) {
    if (!root) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root,lang);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => translateTextNode(n,lang));
    if (root.querySelectorAll) {
      root.querySelectorAll("[placeholder],[aria-label],[title]").forEach(el => translateAttributes(el,lang));
    }
  }
  function addLanguageControl() {
    const groups = [...document.querySelectorAll(".catalog-group")];
    const group = groups.find(g => g.querySelector("h3")?.textContent.trim() === "Settings" ||
      g.querySelector("h3")?.textContent.trim() === "Configuración");
    if (!group || document.getElementById("ctLanguageControl")) return;
    const wrap = document.createElement("div");
    wrap.id = "ctLanguageControl";
    wrap.className = "ct-language-control";
    wrap.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:12px;padding:12px;border:1px solid var(--line);border-radius:10px";
    const label = document.createElement("div");
    label.innerHTML = '<strong id="ctLanguageTitle">Language</strong><div id="ctLanguageHint" style="font-size:.85rem;color:var(--mute);margin-top:3px">Choose the interface language.</div>';
    const buttons = document.createElement("div");
    buttons.style.cssText = "display:flex;gap:8px;flex-wrap:wrap";
    [["en","English"],["es","Español"]].forEach(([code,name]) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "btn";
      b.dataset.ctLanguage = code; b.textContent = name;
      b.addEventListener("click",() => setLanguage(code));
      buttons.appendChild(b);
    });
    wrap.append(label,buttons);
    group.appendChild(wrap);
  }
  function updateLanguageControl(lang) {
    const title = document.getElementById("ctLanguageTitle");
    const hint = document.getElementById("ctLanguageHint");
    if (title) title.textContent = lang === "en" ? "Language" : "Idioma";
    if (hint) hint.textContent = lang === "en" ? "Choose the interface language." : "Elige el idioma de la interfaz.";
    document.querySelectorAll("[data-ct-language]").forEach(b => {
      b.classList.toggle("main",b.dataset.ctLanguage === lang);
      b.setAttribute("aria-pressed",String(b.dataset.ctLanguage === lang));
    });
  }
  function updateDocumentTitle(lang) {
    document.title = lang === "en" ? (translations[sourceDocumentTitle] || sourceDocumentTitle) : sourceDocumentTitle;
  }
  function setLanguage(lang) {
    lang = lang === "es" ? "es" : "en";
    try { localStorage.setItem(STORAGE_KEY,lang); } catch (_) { /* storage may be unavailable */ }
    document.documentElement.lang = lang;
    updateDocumentTitle(lang);
    translateElement(document.body,lang);
    addLanguageControl();
    updateLanguageControl(lang);
    window.dispatchEvent(new CustomEvent("cronotinta:languagechange",{detail:{language:lang}}));
  }
  window.CronotintaI18n = { setLanguage, getLanguage:language, translate:()=>translateElement(document.body,language()) };
  document.addEventListener("DOMContentLoaded",() => {
    const lang = language();
    document.documentElement.lang = lang;
    updateDocumentTitle(lang);
    translateElement(document.body,lang);
    addLanguageControl();
    updateLanguageControl(lang);
    const observer = new MutationObserver(records => {
      const lang = language();
      for (const record of records) {
        if (record.type === "characterData") {
          translateTextNode(record.target,lang);
        } else if (record.type === "attributes") {
          translateAttribute(record.target,record.attributeName,lang);
        } else {
          record.addedNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) translateTextNode(node,lang);
            else if (node.nodeType === Node.ELEMENT_NODE) translateElement(node,lang);
          });
        }
      }
      addLanguageControl();
      updateLanguageControl(lang);
    });
    observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:["placeholder","aria-label","title"]});
  });
})();