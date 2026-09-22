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
    cityLine: "Full-Stack Web Developer · AI-Assisted Workflow",
    tagline:
      "Construyo sitios y aplicaciones full-stack — convirtiendo ideas, necesidades y problemas en productos digitales que la gente realmente usa.",
    role: "Desarrollador Full-Stack",
    enterArchive: "Ver Mi Trabajo",
    readOn: "Sobre Mí",
  },
  scenes: {
    "scene-hero": { title: "Bienvenida", label: "intro" },
    "scene-identity": { title: "Quién Soy", label: "sobre" },
    "scene-about": { title: "Perfil", label: "perfil" },
    "scene-arsenal": { title: "Tech Stack", label: "habilidades" },
    "scene-nft": { title: "Estudio Creativo", label: "estudio" },
    "scene-experience": { title: "Trayectoria", label: "trayectoria" },
    "scene-contact": { title: "Contacto", label: "contacto" },
    "scene-final": { title: "Cierre", label: "final" },
  },
identity: {
    intro: "intro · hola",
    titleAsk: "Desarrollador",
    titleWho: "Que Construye.",
    devProfile: "Perfil Dev",
  },
  profile: {
    developerTitle: "Desarrollador Full-Stack",
    positioning: "Coding · Building · Experimenting with AI",
    shortBio:
      "Construyo sitios y aplicaciones full-stack — llevando una idea del primer boceto al producto final, de la interfaz a la base de datos.",
    bio: [
      "Soy Renno Nur Oktaviano, un desarrollador enfocado en crear sitios y aplicaciones full-stack. Disfruto construir cosas desde cero — entender la necesidad, diseñar la interfaz, estructurar el sistema, desarrollar las funciones y asegurarme de que el producto final funcione de verdad.",
      "En mi flujo de trabajo diario uso agentes de IA como socios de desarrollo — me ayudan a explorar ideas, implementar, depurar y acelerar la iteración.",
    ],
    currentFocus: "Desarrollo full-stack y flujo de trabajo asistido por IA",
    location: "Indonesia · UTC+7",
    status: "Disponible para trabajo · Prácticas · Freelance · Colaboración",
    interests: [
      "UI cinematográfica",
      "Tipografía",
      "Tecnología retro",
      "Sistemas distribuidos",
      "Diseño de juegos indie",
      "Soundtracks jazz noir",
    ],
    philosophy:
      "La IA me ayuda a escribir y explorar código más rápido — pero entender el problema, decidir la solución, probar el resultado y asegurarme de que el sistema funciona sigue siendo mi trabajo como desarrollador.",
    caseNumber: "RN-001",
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
      caseNumber: "N.º DE CASO",
    },
  },
  arsenal: {
    label: "taquilla de equipo",
    title: "Arsenal Técnico",
    caption:
      "Las herramientas del muro de evidencias. Cada pieza aquí ha visto trabajo real en producción.",
    hint: "mapa sináptico — cada clúster ha estado en producción",
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
    overview: {
      title: "Resumen del Arsenal",
      loaded: "Cargado",
      loadedValue: "{count}/{total}",
      avg: "Capacidad Promedio",
      top: "Mejor Calibre",
    },
  },
  status: {
    live: "EN VIVO",
    archived: "ARCHIVADO",
    inProgress: "EN PROGRESO",
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
      "ms-central-cee": {
        description:
          "Estudio de atuendo inspirado en streetwear — capas marcadas y branding audaz bajo la escasa luz habitual.",
        tags: ["Atuendo", "Streetwear"],
      },
      "ms-travis-scott": {
        description:
          "Una versión más oscura de la misma silueta — capas gráficas y paleta melancólica.",
        tags: ["Atuendo", "Oscuro"],
      },
      "ms-body": {
        description:
          "El cuerpo base en blanco — una pizarra limpia antes de cada capa de atuendo; posando para la colección.",
        tags: ["Base", "Modelo"],
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
    caseVisual: "visual del caso",
  },
  experience: {
    label: "el tren nocturno · registro de ruta",
    title: "Línea de Tiempo de Experiencia",
    caption:
      "La ruta que tomó esta década — cada parada es una estación donde algo se aprendió.",
    type: {
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
      internship: {
        title: "Prácticas de backend",
        org: "PT. Deswa Invisco Multitama",
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
  contact: {
    label: "dónde encontrarme",
    title: "Contáctame",
    caption:
      "¿Un proyecto, una oportunidad o solo saludar? Escríbeme o elige tu canal favorito.",
    emailLabel: "email",
    socialsLabel: "redes sociales",
    response: "La respuesta más rápida está en los canales de abajo.",
    form: {
      title: "Envía un mensaje directo",
      name: "nombre",
      email: "email",
      subject: "asunto",
      message: "mensaje",
      placeholderName: "María García",
      placeholderEmail: "maria@ejemplo.com",
      placeholderSubject: "re: un proyecto que merece construirse",
      placeholderMessage: "¿Qué estás construyendo?",
      sending: "enviando…",
      send: "enviar mensaje",
      sentTitle: "Mensaje Enviado",
      sentText: "Mensaje recibido — gracias por escribir.",
      again: "enviar otro mensaje",
      errFields: "Campos vacíos o erróneos — revisa el nombre y el email.",
      errRejected: "Mensaje rechazado. Inténtalo de nuevo.",
      errServer: "Fallo de transmisión — inténtalo de nuevo o usa los canales de arriba.",
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
};