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
    label: "Mi Perfil",
    title: "Sobre Mí",
    caption:
      "Un vistazo a quién soy, qué me importa y cómo trabajo como desarrollador.",
    subjectProfile: "Resumen del Perfil",
    caseOpen: "ID de Perfil",
    filePhoto: "foto de desarrollador —",
    evidenceGradeB: "estado · activo",
    personalStatement: "Declaración personal",
    currentInterests: "Intereses actuales",
    doctrine: "— principio personal de desarrollo",
    meta: {
      status: "ESTADO",
      location: "UBICACIÓN",
      currentFocus: "ENFOQUE ACTUAL",
      caseNumber: "ID DE PERFIL",
    },
  },
  arsenal: {
    label: "stack de habilidades",
    title: "Tech Stack",
    caption:
      "Las tecnologías que uso para diseñar, construir y publicar productos full-stack.",
    hint: "mapa de habilidades — cada herramienta aquí se ha usado en proyectos reales",
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
        "App Router, server components, API routes, optimización de imágenes y fuentes, y despliegues de producción.",
      "frontend.React":
        "Arquitectura de componentes, hooks, gestión de estado y renderizado consciente del rendimiento.",
      "frontend.TypeScript":
        "Tipado estricto para modelos de datos, props y APIs fáciles para el equipo.",
      "backend.Laravel / PHP":
        "APIs REST, modelos Eloquent, autenticación y aplicaciones MVC mantenibles.",
      "backend.Node.js":
        "Servicios API, trabajos en segundo plano y scripts con un buen manejo de errores.",
      "database.MySQL":
        "Diseño de esquemas, indexación y optimización de consultas para cargas de producción.",
      "database.PostgreSQL":
        "Modelado relacional, columnas JSON e integridad transaccional.",
      "styling.Tailwind CSS":
        "Estilos utility-first con design tokens y utilidades de movimiento personalizadas.",
      "styling.Framer Motion / GSAP":
        "Interfaces guiadas por scroll, micro-interacciones y movimiento coreografiado.",
      "tooling.Git & GitHub":
        "Flujos de ramas limpios, revisión de código y pipelines de CI.",
      "tooling.Docker":
        "Entornos locales reproducibles y orquestación simple de servicios.",
      "deployment.Vercel":
        "Despliegues de vista previa y analíticas integradas para apps de Next.js.",
      "deployment.Linux / cPanel servers":
        "Nginx, PHP-FPM, gestión de procesos y endurecimiento seguro del servidor.",
    },
    overview: {
      title: "Resumen de Habilidades",
      loaded: "Cargado",
      loadedValue: "{count}/{total}",
      avg: "Nivel Promedio",
      top: "Mejor Habilidad",
    },
  },
  status: {
    live: "EN VIVO",
    archived: "ARCHIVADO",
    inProgress: "EN PROGRESO",
  },
  nft: {
    label: "experimentos creativos · visuales asistidos por IA",
    title: "Estudios Visuales Asistidos por IA",
    caption:
      "Un espacio para experimentos visuales — diseños de personajes y atuendos explorados mediante generación de imágenes asistida por IA. Un estudio práctico sobre cómo las herramientas generativas amplían un flujo creativo humano.",
    outputs: "resultados seleccionados",
    framesHint: "los marcos corren en horizontal en pantallas anchas",
    fig: "fig {n} / {total}",
    endRunTitle: "final de este set",
    endRunText: "tres piezas — sigue deslizando para ver cómo se hicieron",
    workflow: "flujo creativo",
    workflowHint: "cinco pasos — el flujo corre en horizontal en pantallas anchas",
    endFlowTitle: "final del flujo",
    endFlowText: "del concepto al arte final — en cinco pasos",
    process: {
      "01": {
        title: "Concepto",
        short:
          "Definir el sujeto, el ambiente y la dirección visual que quiero explorar.",
      },
      "02": {
        title: "Generación",
        short:
          "Experimentos de prompts en ChatGPT, Gemini, DeepSeek y Claude para descubrir direcciones visuales.",
      },
      "03": {
        title: "Iteración",
        short:
          "Empujando atuendos, accesorios, iluminación y fondos — un sujeto, muchas variaciones.",
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
          "Estudio de atuendo inspirado en streetwear — capas marcadas y branding audaz bajo una iluminación ambiental.",
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
    label: "camino como desarrollador · registro de trabajo",
    title: "Camino de Desarrollo",
    caption:
      "Mi trayectoria construyendo — desde los fundamentos autodidactas y unas prácticas de backend hasta el trabajo freelance y sistemas en producción.",
    type: {
      internship: "prácticas",
      freelance: "freelance",
      personal: "personal",
      achievement: "logro",
      learning: "aprendizaje",
    },
    items: {
      "learning-foundations": {
        title: "Aprendiendo los fundamentos",
        org: "Camino autodidacta",
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
        title: "Hacia producción",
        org: "Hito de producción",
        description:
          "Primeros sistemas con tráfico real en producción: pagos, datos de negocio y paneles orientados al cliente.",
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
    label: "contáctame",
    title: "Construyamos.",
    caption:
      "¿Tienes una idea, un proyecto o quieres hablar de desarrollo? Envíame un mensaje o usa tu canal favorito.",
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
    closing: "cierre",
    title1: "Gracias por",
    title2: "visitar mi portfolio.",
    para:
      "Este sitio está construido con curiosidad, código y desarrollo asistido por IA — cada escena aquí es una construcción real, una lección real o un producto real. Si algo te llamó la atención, construyamos algo juntos.",
    returnLabel: "Volver al principio",
    credits: {
      aria: "Créditos del sitio",
      builtIn: "construido con",
      designed: "diseñado",
      poweredBy: "impulsado por",
      designedValue: "en la oscuridad",
    },
    footer: "© {year} {name} — construido con curiosidad, código e IA.",
  },
  notFound: {
    kicker: "404 — esta página no existe",
    title: "Página no encontrada.",
    body:
      "La página que buscas no está aquí — quizá se movió, o quizá nunca existió. Vuelve al inicio y explora el portfolio.",
    back: "Volver al inicio",
  },
  errorPage: {
    kicker: "algo salió mal",
    title: "Error inesperado.",
    body:
      "Ocurrió un error al renderizar esta página. Prueba a recargar abajo — no se pierde nada.",
    action: "Recargar página",
  },
};