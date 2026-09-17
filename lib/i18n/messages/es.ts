import type { Messages } from "../types";

export const es: Messages = {
  languageSwitcher: {
    label: "Cambiar idioma",
  },
  skip: "Saltar al contenido",
  sceneIndicator: {
    label: "Índice de escenas",
    goTo: "Ir al capítulo {chapter}: {title}",
  },
  hero: {
    cityLine: "{city} · una metrópolis de interfaces bajo la lluvia",
    tagline: "Construyo sistemas web que siguen funcionando después de medianoche.",
    role: "Desarrollador Full-Stack",
    enterArchive: "ENTRAR AL ARCHIVO",
    readOn: "Sigue leyendo —",
    scrollToDescend: "desliza para bajar",
  },
  scenes: {
    "scene-hero": { title: "La Ciudad Despierta", label: "intro" },
    "scene-identity": { title: "Revelación de Identidad", label: "quién" },
    "scene-about": { title: "Expediente", label: "sobre" },
    "scene-arsenal": { title: "Arsenal Técnico", label: "habilidades" },
    "scene-archive": { title: "Archivo de Proyectos", label: "trabajos" },
    "scene-showcase": { title: "Cinematografía Destacada", label: "archivos" },
    "scene-nft": { title: "Estudio Creativo", label: "coleccionables" },
    "scene-experience": { title: "Tren Nocturno", label: "ruta" },
    "scene-lab": { title: "Laboratorio Dev", label: "lab" },
    "scene-git": { title: "Señal de Actividad", label: "señales" },
    "scene-contact": { title: "Señal de Contacto", label: "señal" },
    "scene-final": { title: "Cae la Noche", label: "final" },
  },
  identity: {
    intro: "escena 02 · introducción",
    titleAsk: "Entonces la ciudad pregunta…",
    titleWho: "¿quién hay detrás de las luces?",
    devProfile: "PERFIL DEV",
  },
  profile: {
    developerTitle: "Desarrollador Full-Stack",
    positioning:
      "Construyo sistemas web fiables que mantienen las luces encendidas después de medianoche.",
    shortBio:
      "Desarrollador full-stack con gusto por la arquitectura limpia, las micro-interacciones cinematográficas y el software que sobrevive al tráfico real.",
    bio: [
      "Cada producto que publico empieza con una pregunta: ¿cómo hacemos que algo útil se sienta sin esfuerzo? Diseño y construyo experiencias web de principio a fin — desde el esquema de base de datos hasta la interfaz responsiva — y me importan el rendimiento, la accesibilidad y los detalles silenciosos que los usuarios sienten pero nunca ven.",
      "Cuando la pantalla se apaga suelo estar esbozando interfaces, leyendo sobre sistemas distribuidos o buscando la rampa tipográfica perfecta. Trato el código como un oficio: deliberado, documentado y nunca publicado a medias.",
    ],
    currentFocus: "Desarrollo web full-stack y experiencias interactivas",
    location: "Indonesia · UTC+7",
    status: "DISPONIBLE PARA PROYECTOS",
    education: "Informática — institución de ejemplo",
    interests: [
      "UI cinematográfica",
      "Tipografía",
      "Tecnología retro",
      "Sistemas distribuidos",
      "Diseño de juegos indie",
      "Soundtracks jazz noir",
    ],
    philosophy:
      "Un buen software es como una calle bien iluminada a medianoche: tranquilo, predecible y llevándote discretamente a donde necesitas ir.",
    caseNumber: "EXPEDIENTE N.º RN-001",
  },
  about: {
    label: "expediente de inteligencia",
    title: "Expediente",
    caption:
      "Notas desclasificadas sobre el sujeto de desarrollo. Manipular con curiosidad.",
    subjectProfile: "Perfil del Sujeto",
    caseOpen: "Caso Abierto",
    filePhoto: "foto adjunta al expediente —",
    evidenceGradeB: "evidencia grado B",
    personalStatement: "Declaración personal",
    currentInterests: "Intereses actuales",
    doctrine: "— doctrina personal de desarrollo",
    meta: {
      status: "ESTADO",
      location: "UBICACIÓN",
      currentFocus: "ENFOQUE ACTUAL",
      education: "EDUCACIÓN",
      caseNumber: "N.º DE CASO",
    },
  },
  arsenal: {
    label: "taquilla de equipo",
    title: "Arsenal Técnico",
    caption:
      "Las herramientas del muro de evidencias. Cada pieza aquí ha visto trabajo real en producción.",
    hint: "pasa el cursor o toca un dispositivo para ver notas de despliegue",
    category: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de datos",
      styling: "Estilos",
      tooling: "Herramientas",
      deployment: "Despliegue",
    },
    skill: {
      "frontend.Next.js":
        "App Router, server components, route handlers, optimización de imágenes y fuentes, y despliegues de producción a media escala.",
      "frontend.React":
        "Arquitecturas de componentes componibles, hooks, contexto y gestión de re-renderizaciones consciente del rendimiento.",
      "frontend.TypeScript":
        "Tipado estricto por defecto — modelos de datos tipados, genéricos e interfaces que aceleran a los equipos.",
      "backend.Laravel / PHP":
        "APIs REST, modelado con Eloquent, autenticación y aplicaciones MVC mantenibles listas para producción.",
      "backend.Node.js":
        "Servicios API, trabajos en segundo plano y scripts de herramientas con manejo cuidadoso de errores y observabilidad.",
      "database.MySQL":
        "Diseño de esquemas, estrategia de indexación y optimización de consultas para cargas de producción con lectura intensiva.",
      "database.PostgreSQL":
        "Modelado relacional, columnas JSON e integridad transaccional para funciones sensibles a los datos.",
      "styling.Tailwind CSS":
        "Sistemas utility-first con design tokens, temas oscuros y utilidades de movimiento personalizadas.",
      "styling.Framer Motion / GSAP":
        "Storytelling impulsado por scroll, micro-interacciones y movimiento de interfaz coreografiado.",
      "tooling.Git & GitHub":
        "Flujos de ramas limpios, conventional commits, revisión de código y pipelines de CI.",
      "tooling.Docker":
        "Entornos locales reproducibles y orquestación de servicios sencilla.",
      "deployment.Vercel":
        "Despliegues de vista previa, edge functions y analíticas para aplicaciones Next.js.",
      "deployment.Linux / cPanel servers":
        "Proxy inverso Nginx, PHP-FPM, gestión de procesos y endurecimiento seguro del servidor.",
    },
  },
  archive: {
    label: "la bóveda · carpetas de casos",
    title: "Archivo de Proyectos",
    caption:
      "El archivo del sótano. Coge una carpeta — cada caso de abajo se publicó de verdad.",
    hint: "la bóveda corre en horizontal en pantallas anchas — sigue deslizando para pasar carpetas",
    openCase: "abrir caso",
    endTitle: "final de la bóveda",
    endText: "expedientes más profundos viven en las cinematografías de abajo",
  },
  status: {
    live: "EN VIVO",
    archived: "ARCHIVADO",
    inProgress: "EN PROGRESO",
  },
  showcase: {
    label: "cinematografías destacadas",
    title: "Expedientes — Análisis a Fondo",
    caption: "Dos casos abiertos de par en par: el problema, la construcción y lo publicado.",
    evidenceFile: "archivo de evidencia {n} — {year}",
    problem: "El Problema",
    solution: "La Solución",
    momentItHurt: "El Momento Doliente",
    aftermath: "Las Consecuencias",
    caseVisual: "visual del caso",
    artCaseCover: "arte: portada del caso",
    liveSignal: "SEÑAL EN VIVO",
    sourceCode: "código fuente",
    liveDemo: "demo en vivo",
    projects: {
      casebreak: {
        title: "CASEBREAK",
        oneLiner:
          "Una plataforma de gestión de casos que convirtió un rastro de papel en una sala de evidencias buscable.",
        problem:
          "Una agencia local seguía los casos de sus clientes en hojas de cálculo y carpetas impresas. Registros duplicados, plazos incumplidos y nada buscable.",
        solution:
          "Diseñé un back office de Laravel + MySQL con acceso basado en roles, tableros de estado, alertas de plazos y una bóveda de documentos con búsqueda de texto completo.",
        role: "Desarrollador Full-Stack",
        features: [
          "Dashboards basados en roles para agentes y administradores",
          "Tableros de estado de casos estilo Kanban",
          "Correos programados de recordatorio de plazos",
          "Búsqueda y etiquetado de documentos a texto completo",
        ],
        challenge:
          "Migrar 4 años de registros heredados desordenados sin perder datos fue la batalla real — construí un importador por pasos con validación en seco.",
        outcome:
          "El tiempo de búsqueda pasó de minutos a segundos y el equipo cerró un atraso de más de 200 casos obsoletos en dos meses.",
      },
      "kode-ledger": {
        title: "KODELEDGER",
        oneLiner:
          "Una API mínima de contabilidad por partida doble para un pipeline de facturación de un negocio secundario.",
        problem:
          "La facturación freelance se perdía en las apps de chat; no había un registro fiable de lo facturado, pagado o vencido.",
        solution:
          "Construí un servicio de Node.js + PostgreSQL que expone una REST API tipada con creación de facturas idempotente, generación de PDF y recordatorios de pago.",
        role: "Desarrollador Backend",
        features: [
          "Endpoints de facturas y pagos idempotentes",
          "Generación automática de facturas en PDF",
          "Trabajos de recordatorio de pagos vencidos",
          "Registro de auditoría para cada mutación",
        ],
        challenge:
          "Acertar con la matemática del dinero bajo concurrencia — añadí bloqueo a nivel de fila y un trabajo de reconciliación para mantener los libros exactos.",
        outcome:
          "Cero facturas perdidas en el primer trimestre de uso, y los recordatorios recuperaron alrededor de una semana de trabajo impagado.",
      },
      kodestreet: {
        title: "KODESTREET",
        oneLiner:
          "Este portafolio — un cómic-movimiento interactivo construido con Next.js, TypeScript y narrativa cinematográfica basada en el scroll.",
        problem:
          "Un portafolio debe sentirse como un lugar, no como un PDF. Las cuadrículas de tarjetas genéricas no comunican oficio ni personalidad.",
        solution:
          "Construí una experiencia cinematográfica de una sola página: capas de atmósfera en CSS/canvas, narrativa con GSAP ScrollTrigger y un terminal interactivo que responde de verdad.",
        role: "Diseñador + Desarrollador",
        features: [
          "Transiciones de escena impulsadas por scroll",
          "Movimiento consciente de las preferencias",
          "Terminal retro interactivo",
          "Capa de datos de contenido completamente tipada",
        ],
        challenge:
          "Mantener una atmósfera densa sin destrozar los Core Web Vitals significó dibujar lluvia, niebla y grano con CSS y un único canvas ligero.",
        outcome:
          "Un portafolio que carga rápido, se lee con claridad sin JavaScript y deja a los visitantes con la sensación de haber paseado por una ciudad.",
      },
      signaldesk: {
        title: "SIGNALDESK",
        oneLiner:
          "Un escritorio de tickets de soporte en tiempo real para un pequeño equipo de producto ahogado en hilos de mensajes.",
        problem:
          "El soporte llegaba por cuatro canales de chat a la vez; los problemas se escapaban y nadie era dueño de una resolución.",
        solution:
          "Construí un front-end de React + Vite sobre una API Laravel ligera: bandeja unificada, reglas de asignación y un pulso en vivo de tickets abiertos.",
        role: "Desarrollador Frontend",
        features: [
          "Bandeja unificada entre fuentes de soporte",
          "Asignación automática por disponibilidad del equipo",
          "Pulso de tickets en vivo mediante server-sent events",
        ],
        challenge:
          "Conciliar el orden de los mensajes de múltiples fuentes — implementé un registro de eventos en el cliente con deduplicación y reproducción.",
        outcome:
          "El tiempo medio de primera respuesta cayó de ~4 horas a menos de 40 minutos en horario laboral.",
      },
      retromart: {
        title: "RETROMART",
        oneLiner:
          "Una tienda e-commerce en Laravel con temática de tecnología vintage — carritos, pagos y un administrador retro.",
        problem:
          "Un revendedor de tecnología vintage necesitaba una tienda que se sintiera como su catálogo: lúdica, creíble y rápida en el móvil.",
        solution:
          "Entregué una tienda Laravel completa con variantes de producto, motor de promociones, integración de pasarela de pagos y un panel de administración del inventario.",
        role: "Desarrollador Full-Stack",
        features: [
          "Carrito, checkout y pasarela de pagos",
          "Códigos de promoción con reglas de combinación",
          "Gestión de inventario y alertas de stock bajo",
          "Dashboard de informes para administración",
        ],
        challenge:
          "Lograr seguridad transaccional entre estados de stock, descuento y pago requirió colas cuidadosas y creación de pedidos idempotente.",
        outcome:
          "Lanzó y procesó cientos de pedidos en la primera temporada sin un solo cargo duplicado.",
      },
      weathermono: {
        title: "WEATHERMONO",
        oneLiner:
          "Una PWA del clima diminuta y capaz de funcionar sin conexión con estética monospace — clima, pero con sabor a terminal.",
        problem:
          "Quería una app del clima que respetara al lector: sin rastreadores, sin relleno, datos visibles de un vistazo en teléfonos lentos.",
        solution:
          "Una PWA construida con TypeScript vanilla que almacena en caché los pronósticos, funciona sin conexión y renderiza un mapa de pronóstico en rejilla monospace.",
        role: "Desarrollador en Solitario",
        features: [
          "Caché de pronósticos sin conexión",
          "Cuadrícula meteorológica tipográfica monospace",
          "Cero anuncios y cero analíticas",
        ],
        challenge:
          "Reducir el bundle a menos de 12 kB mientras se renderizaba un mapa meteorológico real en el cliente.",
        outcome:
          "Una app principal de 10 kB que sigue funcionando cuando la red no — un pequeño monumento a la contención.",
      },
    },
  },
  git: {
    label: "sala de monitores · fuente opcional",
    title: "Señal de Actividad",
    caption:
      "Pulsos casi en vivo desde la torre de control de versiones. Sellos estáticos — actualizados en cada despliegue.",
    signal: "señal",
    commitsSteady: "commits: estables",
    openRepository: "abrir repositorio",
    footer:
      "las fuentes son estáticas por diseño — el archivo nunca espera a una API de terceros.",
  },
  nft: {
    label: "el ala creativa · del concepto al coleccionable",
    title: "Colección NFT Asistida por IA",
    caption:
      "Un ala de estudio experimental — diseño de personajes y coleccionables digitales explorados mediante generación de imágenes asistida por IA. Un ejercicio de aprendizaje sobre cómo las herramientas generativas forman parte de un flujo creativo humano, no toda la historia.",
    outputs: "resultados seleccionados",
    framesHint: "los marcos corren en horizontal en pantallas anchas",
    fig: "fig {n} / {total}",
    endRunTitle: "final de la serie",
    endRunText: "tres marcos — sigue deslizando para ver cómo se hicieron",
    workflow: "flujo creativo",
    workflowHint: "cinco pasos — el flujo corre en horizontal en pantallas anchas",
    endFlowTitle: "final del flujo",
    endFlowText: "del concepto al coleccionable — en cinco pasos",
    process: {
      "01": {
        title: "Concepto",
        short:
          "Diseñar la identidad del personaje — silueta, ambiente y la calle ficticia a la que pertenece.",
      },
      "02": {
        title: "Generación",
        short:
          "Experimentos de prompts en ChatGPT, Gemini, DeepSeek y Claude para descubrir direcciones visuales.",
      },
      "03": {
        title: "Iteración",
        short:
          "Empujando atuendos, accesorios, iluminación y fondos — una identidad, muchas variaciones.",
      },
      "04": {
        title: "Refinamiento",
        short:
          "Seleccionar los resultados más fuertes y refinarlos en piezas finales presentables.",
      },
      "05": {
        title: "Arte Final",
        short:
          "Ensamblar las piezas seleccionadas en un conjunto final coherente — encuadre, tono y la serie terminada.",
      },
    },
    artwork: {
      "hrln-rain": {
        description:
          "Variación de atuendo bajo el aguacero característico de la ciudad — generada y luego limpiada a mano.",
        tags: ["Atuendo", "Lluvia"],
      },
      "hrln-midnight": {
        description:
          "Un estudio de iluminación y paleta — la misma silueta empujada hacia el azul de altas horas.",
        tags: ["Iluminación", "Noche"],
      },
      "hrln-look": {
        description:
          "Variación de accesorios que define el equipo cotidiano del personaje en toda la colección.",
        tags: ["Accesorios", "Variante"],
      },
    },
  },
  lightbox: {
    vault: "kodecity · bóveda de arte",
    viewerLabel: "Visor de obras — {title}",
    openViewer: "Abrir la obra {title} en el visor",
    close: "Cerrar visor de obras",
    prev: "Obra anterior",
    next: "Obra siguiente",
    prevShort: "anterior",
    nextShort: "siguiente",
    aiLabel: "obra de arte digital asistida por IA",
  },
  experience: {
    label: "el tren nocturno · registro de ruta",
    title: "Línea de Tiempo de Experiencia",
    caption:
      "La ruta que tomó esta década — cada parada es una estación donde algo se aprendió.",
    type: {
      education: "educación",
      internship: "prácticas",
      freelance: "freelance",
      personal: "personal",
      achievement: "logro",
      learning: "aprendizaje",
    },
    items: {
      "learning-foundations": {
        title: "Empezar el ascenso",
        org: "Ruta autodidacta",
        description:
          "Aprendí los fundamentos — HTML, CSS, JavaScript y la disciplina de terminar pequeños proyectos.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      education: {
        title: "Estudiante de Informática",
        org: "Institución de ejemplo",
        description:
          "Base formal en algoritmos, bases de datos y prácticas de ingeniería de software junto al desarrollo web autodidacta.",
        tags: ["Algoritmos", "Base de datos"],
      },
      internship: {
        title: "Prácticas de backend",
        org: "Empresa de ejemplo",
        description:
          "Construí servicios REST y herramientas internas, aprendí revisión de código y publiqué funciones reales para usuarios reales.",
        tags: ["PHP", "MySQL", "REST"],
      },
      freelance: {
        title: "Construcciones independientes",
        org: "Freelance y proyectos paralelos",
        description:
          "Entregué trabajo full-stack para pequeñas empresas — inventario, facturación y presencia web.",
        tags: ["Laravel", "Node.js", "SQL"],
      },
      achievement: {
        title: "Cruce a producción",
        org: "Hito de producción",
        description:
          "Primeros sistemas con tráfico real en producción: pagos, datos de casos y dashboards orientados al cliente.",
        tags: ["Producción", "Pagos", "DevOps"],
      },
      present: {
        title: "Parada actual",
        org: "Desarrollador Full-Stack",
        description:
          "Construyendo experiencias full-stack fiables y empujando el oficio — cinematográfico, accesible y rápido.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
    },
  },
  lab: {
    label: "el taller",
    title: "Laboratorio Dev",
    caption:
      "Un CRT en funcionamiento, restaurado y seguro. Escribe un comando — nada sale de esta sala.",
    memoTitle: "Memo del taller",
    noteOne:
      "El terminal es meramente decorativo — los comandos nunca tocan un shell real.",
    noteTwo: "Prueba <help>, <skills> o <projects>.",
    noteThree: "Destacado: pulsa <Tab> para autocompletar un comando.",
  },
  terminal: {
    ariaLog: "Terminal retro interactiva",
    ariaInput: "Entrada del terminal",
    typeCmd: "Escribe un comando",
    tabStatus: "TAB autocompleta · ↑ historial",
    safeMode: "modo seguro — sin shell real",
    crtLabel: "crt://guest@kodecity",
    bannerTitle: "TERMINAL KODECITY v1.1.0 — ACCESO RESTRINGIDO",
    bannerUplink: "Enlace establecido. Lluvia registrada.",
    bannerHelp: "Escribe 'help' para ver los comandos disponibles.",
    prompt: "{city}@invitado:~$ {value}",
    help: {
      available: "canales disponibles:",
      help: "  help      — reimprime este manifiesto",
      about: "  about     — expediente del desarrollador",
      skills: "  skills    — la lista del arsenal",
      projects: "  projects  — carpetas de casos publicados",
      scenes: "  scenes    — mapa de los bloques de la ciudad",
      visit: "  visit <n> — salta a una escena (p. ej. visit 4)",
      contact: "  contact   — abre un canal con el sujeto",
      exit: "  exit      — salir por la escena final",
      clear: "  clear     — borrar la pantalla",
      hintTab: "pista: pulsa TAB para autocompletar.",
    },
    about: {
      name: "NOMBRE",
      role: "ROL",
      status: "ESTADO",
      location: "UBICACIÓN",
      focus: "ENFOQUE",
    },
    projectsNote: "Los expedientes completos viven en el Archivo de Proyectos de arriba.",
    contactNote: "Abre un canal vía la Señal de Contacto de abajo.",
    scenesHead: "bloques de la ciudad (norte → sur):",
    scenesNote: "usa 'visit <n>' para saltar directo a uno.",
    exitLine: "Buenas noches. La puerta de la ciudad está tras los créditos.",
    unknownBlock: "! bloque desconocido. prueba 'scenes' para un mapa.",
    usageVisit: "uso: visit <scene-id | index>",
    unknownCmd: "! comando desconocido: '{cmd}'",
    tryHelp: "Prueba 'help'.",
    wiped: "TERMINAL KODECITY v1.1.0 — pantalla borrada",
    routingTo: "Enrutando a {target}…",
    whoami: "{user}@{city} — un desarrollador que presta atención.",
  },
  contact: {
    label: "sala de radio en el tejado",
    title: "Señal de Contacto",
    caption:
      "La centralita de la ciudad está abierta. Marca un canal o transmite un mensaje directamente.",
    primaryFrequency: "frecuencia principal",
    form: {
      title: "Transmite un mensaje",
      name: "nombre",
      email: "email",
      subject: "asunto",
      message: "mensaje",
      placeholderName: "María García",
      placeholderEmail: "maria@ejemplo.com",
      placeholderSubject: "re: un caso que merece abrirse",
      placeholderMessage: "¿Qué estás construyendo?",
      sending: "transmitiendo…",
      send: "enviar señal",
      sentTitle: "Señal Recibida",
      sentText: "transmisión registrada. respuesta en un plazo de 48 h.",
      again: "enviar otra señal",
      errFields: "Campos vacíos o erróneos — revisa el nombre y el email.",
      errRejected: "Transmisión rechazada.",
    },
  },
  final: {
    closing: "leyenda de cierre",
    title1: "La ciudad apaga sus luces.",
    title2: "El trabajo continúa.",
    para:
      "Cada escena de esta página es una construcción real, una lección real o una cicatriz real. Gracias por recorrer las calles.",
    returnLabel: "Volver al principio",
    credits: {
      aria: "Créditos del sitio",
      builtIn: "construido en",
      designed: "diseñado por",
      poweredBy: "impulsado por",
      designedValue: "la lluvia",
    },
    footer: "© {year} {name} — no se usaron capas.",
  },
  notFound: {
    kicker: "callejón sin salida — perdido en la lluvia",
    title: "Esta calle no existe.",
    body:
      "La dirección que marcaste no lleva a ninguna parte en {city}. Vuelve a la plaza antes de que la niebla te atrape.",
    back: "volver a la plaza",
  },
  errorPage: {
    kicker: "error de transmisión — rt-404",
    title: "La red de la ciudad tropezó.",
    body:
      "Algo falló al renderizar este bloque. Prueba el disyuntor de abajo — no se pierde ningún dato.",
    action: "reiniciar el bloque",
  },
  audio: {
    enable: "Activar sonido ambiental",
    disable: "Desactivar sonido ambiental",
    ambienceOn: "ambiente: activado",
    ambienceOff: "ambiente: desactivado",
  },
};