import type { Messages } from "../types";

export const en: Messages = {
  languageSwitcher: {
    label: "Change language",
  },
  skip: "Skip to content",
  sceneIndicator: {
    label: "Scene index",
    goTo: "Go to chapter {chapter}: {title}",
  },
  hero: {
    cityLine: "{city} · a rainy metropolis of interfaces",
    tagline: "Building web systems that keep working after midnight.",
    role: "Full-Stack Developer",
    enterArchive: "OPEN THE FILES",
    readOn: "Read on —",
  },
  scenes: {
    "scene-hero": { title: "The City Awakens", label: "intro" },
    "scene-identity": { title: "Identity Reveal", label: "who" },
    "scene-about": { title: "Case File", label: "about" },
    "scene-arsenal": { title: "Tech Arsenal", label: "skills" },
    "scene-nft": { title: "Creative Studio", label: "collectibles" },
    "scene-experience": { title: "Night Train", label: "route" },
    "scene-contact": { title: "Contact Signal", label: "signal" },
    "scene-final": { title: "Night Falls", label: "end" },
  },
  identity: {
    intro: "scene 02 · introduction",
    titleAsk: "So the city asks…",
    titleWho: "who's behind the lights?",
    devProfile: "DEV PROFILE",
  },
  profile: {
    developerTitle: "Full-Stack Developer",
    positioning:
      "I build dependable web systems that keep the lights on after midnight.",
    shortBio:
      "Full-stack developer with a taste for clean architecture, cinematic micro-interactions, and software that survives real-world traffic.",
    bio: [
      "Every product I ship starts as a question: how do we make something useful feel effortless? I design and build end-to-end web experiences — from database schema to responsive interface — and I care deeply about performance, accessibility, and the quiet details users feel but never see.",
      "When the screen goes dark I'm usually sketching interfaces, reading about distributed systems, or hunting for the perfect type ramp. I treat code like craft: deliberate, documented, and never shipped half-polished.",
    ],
    currentFocus: "Full-stack web development & interactive experiences",
    location: "Indonesia · UTC+7",
    status: "OPEN FOR PROJECTS",
    education: "Informatics — placeholder institution",
    interests: [
      "Cinematic UI",
      "Typography",
      "Retro technology",
      "Distributed systems",
      "Indie game design",
      "Jazz noir soundtracks",
    ],
    philosophy:
      "Good software is like a well-lit street at midnight: calm, predictable, and quietly getting you where you need to go.",
    caseNumber: "FILE NO. RN-001",
  },
  about: {
    label: "intelligence dossier",
    title: "Case File",
    caption:
      "Declassified notes on the development subject. Handle with curiosity.",
    subjectProfile: "Subject Profile",
    caseOpen: "Case Open",
    filePhoto: "file photo attached —",
    evidenceGradeB: "evidence grade B",
    personalStatement: "Personal statement",
    currentInterests: "Current interests",
    doctrine: "— personal developer doctrine",
    meta: {
      status: "STATUS",
      location: "LOCATION",
      currentFocus: "CURRENT FOCUS",
      education: "EDUCATION",
      caseNumber: "CASE NUMBER",
    },
  },
  arsenal: {
    label: "equipment locker",
    title: "Tech Arsenal",
    caption:
      "The tools on the evidence wall. Every piece here has seen real production work.",
    hint: "synaptic map — every cluster has shipped in production",
    category: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      styling: "Styling",
      tooling: "Tooling",
      deployment: "Deployment",
    },
    skill: {
      "frontend.Next.js":
        "App Router, server components, route handlers, image + font optimization, and mid-scale production deployments.",
      "frontend.React":
        "Composable component architectures, hooks, context, and performance-conscious re-render management.",
      "frontend.TypeScript":
        "Strict typing by default — typed data models, generics, and interfaces that make teams move faster.",
      "backend.Laravel / PHP":
        "REST APIs, Eloquent modeling, authentication, and maintainable MVC applications shipped to production.",
      "backend.Node.js":
        "API services, background jobs, and tooling scripts with careful error handling and observability.",
      "database.MySQL":
        "Schema design, indexing strategy, and query optimization for read-heavy production workloads.",
      "database.PostgreSQL":
        "Relational modeling, JSON columns, and transactional integrity for data-sensitive features.",
      "styling.Tailwind CSS":
        "Utility-first systems with design tokens, dark themes, and custom motion utilities.",
      "styling.Framer Motion / GSAP":
        "Scroll-driven storytelling, micro-interactions, and choreographed interface motion.",
      "tooling.Git & GitHub":
        "Clean branch workflows, conventional commits, code review, and CI pipelines.",
      "tooling.Docker":
        "Reproducible local environments and simple service orchestration.",
      "deployment.Vercel":
        "Preview deployments, edge functions, and analytics for Next.js applications.",
      "deployment.Linux / cPanel servers":
        "Nginx reverse proxy, PHP-FPM, process management, and secure server hardening.",
    },
    overview: {
      title: "Arsenal Overview",
      loaded: "Loaded",
      loadedValue: "{count}/{total}",
      avg: "Average Capability",
      top: "Top Caliber",
    },
  },
  status: {
    live: "LIVE",
    archived: "ARCHIVED",
    inProgress: "IN PROGRESS",
  },
  nft: {
    label: "the creative wing · concept to collectible",
    title: "AI-Assisted NFT Collection",
    caption:
      "An experimental studio wing — character design and digital collectibles explored through AI-assisted image generation. A learning exercise in how generative tools become part of a human creative workflow, not the whole story.",
    outputs: "selected outputs",
    framesHint: "the frames run sideways on wide screens",
    fig: "fig {n} / {total}",
    endRunTitle: "end of the run",
    endRunText: "three frames — keep scrolling to see how they were made",
    workflow: "creative workflow",
    workflowHint: "five steps — the workflow runs sideways on wide screens",
    endFlowTitle: "end of the flow",
    endFlowText: "from concept to collectible — in five steps",
    process: {
      "01": {
        title: "Concept",
        short:
          "Designing the character identity — silhouette, mood, and the fictional street it belongs to.",
      },
      "02": {
        title: "Generation",
        short:
          "Prompt experiments across ChatGPT, Gemini, DeepSeek, and Claude to discover visual directions.",
      },
      "03": {
        title: "Iteration",
        short:
          "Pushing outfits, accessories, lighting, and backgrounds — one identity, many variations.",
      },
      "04": {
        title: "Refinement",
        short:
          "Selecting the strongest results and refining them into final, presentable pieces.",
      },
      "05": {
        title: "Artwork",
        short:
          "Assembling the selected pieces into a coherent final set — frame, tone, and the finished run.",
      },
    },
    artwork: {
      "hrln-rain": {
        description:
          "Outfit variation under the city's signature downpour — generated, then cleaned up by hand.",
        tags: ["Outfit", "Rain"],
      },
      "hrln-midnight": {
        description:
          "A lighting and palette study — the same silhouette pushed into the late-night blue.",
        tags: ["Lighting", "Night"],
      },
      "hrln-look": {
        description:
          "Accessory variation defining the character's everyday loadout across the collection.",
        tags: ["Accessories", "Variant"],
      },
    },
  },
  lightbox: {
    vault: "kodecity · art vault",
    viewerLabel: "Artwork viewer — {title}",
    openViewer: "Open artwork {title} in the viewer",
    close: "Close artwork viewer",
    prev: "Previous artwork",
    next: "Next artwork",
    prevShort: "prev",
    nextShort: "next",
    aiLabel: "ai-assisted digital artwork",
    caseVisual: "case visual",
  },
  experience: {
    label: "the night train · route log",
    title: "Experience Timeline",
    caption:
      "The route this decade took — every stop a station where something learned.",
    type: {
      education: "education",
      internship: "internship",
      freelance: "freelance",
      personal: "personal",
      achievement: "achievement",
      learning: "learning",
    },
    items: {
      "learning-foundations": {
        title: "Started the climb",
        org: "Self-taught route",
        description:
          "Learned the fundamentals — HTML, CSS, JavaScript, and the discipline of finishing small projects.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      education: {
        title: "Informatics student",
        org: "Placeholder institution",
        description:
          "Formal grounding in algorithms, databases, and software engineering practices alongside self-driven web development.",
        tags: ["Algorithms", "Databases"],
      },
      internship: {
        title: "Backend internship",
        org: "Placeholder company",
        description:
          "Built REST services and internal tools, learned code review, and shipped real features to real users.",
        tags: ["PHP", "MySQL", "REST"],
      },
      freelance: {
        title: "Independent builds",
        org: "Freelance & side projects",
        description:
          "Delivered full-stack product work for small businesses — inventory, invoicing, and web presence.",
        tags: ["Laravel", "Node.js", "SQL"],
      },
      achievement: {
        title: "Crossed into production",
        org: "Production milestone",
        description:
          "First systems handling real traffic in production: payments, case data, and customer-facing dashboards.",
        tags: ["Production", "Payments", "DevOps"],
      },
      present: {
        title: "Current stop",
        org: "Full-Stack Developer",
        description:
          "Building dependable full-stack experiences and pushing the craft — cinematic, accessible, and fast.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
    },
  },
  contact: {
    label: "where to reach me",
    title: "Get In Touch",
    caption:
      "Have a project, an opportunity, or just want to say hi? Send a message below, or pick your favourite channel.",
    emailLabel: "email",
    socialsLabel: "socials",
    response: "Replies usually within 1–2 business days.",
    form: {
      title: "Send a direct message",
      name: "name",
      email: "email",
      subject: "subject",
      message: "message",
      placeholderName: "Jane Doe",
      placeholderEmail: "jane@example.com",
      placeholderSubject: "re: a project worth building",
      placeholderMessage: "What are you building?",
      sending: "sending…",
      send: "send message",
      sentTitle: "Message Sent",
      sentText: "Your message was sent — I'll get back to you shortly.",
      again: "send another message",
      errFields: "Missing or malformed fields — check name and email.",
      errRejected: "Message rejected. Try again later.",
    },
  },
  final: {
    closing: "closing caption",
    title1: "The city dims its lights.",
    title2: "The work keeps going.",
    para:
      "Every scene on this page is a real build, a real lesson, or a real scar. Thanks for walking the streets.",
    returnLabel: "Return to the beginning",
    credits: {
      aria: "Site credits",
      builtIn: "built in",
      designed: "designed",
      poweredBy: "powered by",
      designedValue: "the rain",
    },
    footer: "© {year} {name} — no capes were used.",
  },
  notFound: {
    kicker: "dead end — lost in the rain",
    title: "This street doesn't exist.",
    body:
      "The address you punched in leads nowhere in {city}. Head back to the plaza before the fog closes in.",
    back: "back to the plaza",
  },
  errorPage: {
    kicker: "transmission error — rt-404",
    title: "The city's grid stumbled.",
    body:
      "Something went wrong rendering this block. Try the circuit breaker below — no data is lost.",
    action: "restart the block",
  },
  audio: {
    enable: "Enable ambient sound",
    disable: "Disable ambient sound",
    ambienceOn: "ambience: on",
    ambienceOff: "ambience: off",
  },
};