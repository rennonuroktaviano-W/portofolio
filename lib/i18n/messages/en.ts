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
    cityLine: "Full-Stack Web Developer · AI-Assisted Workflow",
    tagline:
      "I build websites and full-stack applications — turning ideas, needs, and problems into products people can actually use.",
    role: "Full-Stack Developer",
    enterArchive: "Explore My Work",
    readOn: "About Me",
  },
  scenes: {
    "scene-hero": { title: "Welcome", label: "intro" },
    "scene-identity": { title: "Who I Am", label: "about" },
    "scene-about": { title: "Profile", label: "profile" },
    "scene-arsenal": { title: "Tech Stack", label: "skills" },
    "scene-nft": { title: "Creative Studio", label: "studio" },
    "scene-experience": { title: "Development Journey", label: "journey" },
    "scene-contact": { title: "Contact", label: "contact" },
    "scene-final": { title: "Closing", label: "end" },
  },
  identity: {
    intro: "intro · hello",
    titleAsk: "Developer",
    titleWho: "Who Builds.",
    devProfile: "Dev Profile",
  },
  profile: {
    developerTitle: "Full-Stack Developer",
    positioning: "Coding · Building · Experimenting with AI",
    shortBio:
      "I build websites and full-stack applications — taking an idea from first sketch to a working product, from interface down to database.",
    bio: [
      "I'm Renno Nur Oktaviano, a developer focused on building full-stack websites and applications. I enjoy building things from scratch — understanding the need, designing the interface, structuring the system, building the features, and making sure the end product actually works.",
      "In my daily workflow I use AI coding agents as development partners — helping with idea exploration, implementation, debugging, and faster iteration.",
    ],
    currentFocus: "Full-stack development & AI-assisted workflow",
    location: "Indonesia · UTC+7",
    status: "Open for work · Internship · Freelance · Collaboration",
    interests: [
      "Cinematic UI",
      "Typography",
      "Retro technology",
      "Distributed systems",
      "Indie game design",
      "Jazz noir soundtracks",
    ],
    philosophy:
      "AI helps me write and explore code faster — but understanding the problem, deciding the solution, testing the result, and making sure the system works is still my job as a developer.",
    caseNumber: "RN-001",
  },
  about: {
    label: "My Profile",
    title: "About Me",
    caption:
      "A quick look at who I am, what I care about, and how I work as a developer.",
    subjectProfile: "Profile Overview",
    caseOpen: "Profile ID",
    filePhoto: "developer photo —",
    evidenceGradeB: "status · active",
    personalStatement: "Personal statement",
    currentInterests: "Current interests",
    doctrine: "— personal developer principle",
    meta: {
      status: "STATUS",
      location: "LOCATION",
      currentFocus: "CURRENT FOCUS",
      caseNumber: "PROFILE ID",
    },
  },
  arsenal: {
    label: "skill stack",
    title: "Tech Stack",
    caption:
      "The technologies I use to design, build, and ship full-stack products.",
    hint: "skill map — every tool here has shipped in real projects",
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
        "App Router, server components, API routes, image & font optimization, and production deployments.",
      "frontend.React":
        "Component architecture, hooks, state management, and performance-conscious rendering.",
      "frontend.TypeScript":
        "Strict typing for data models, props, and team-friendly APIs.",
      "backend.Laravel / PHP":
        "REST APIs, Eloquent models, authentication, and maintainable MVC applications.",
      "backend.Node.js":
        "API services, background jobs, and tooling scripts with solid error handling.",
      "database.MySQL":
        "Schema design, indexing, and query optimization for production workloads.",
      "database.PostgreSQL":
        "Relational modeling, JSON columns, and transactional integrity.",
      "styling.Tailwind CSS":
        "Utility-first styling with design tokens and custom motion utilities.",
      "styling.Framer Motion / GSAP":
        "Scroll-driven UI, micro-interactions, and choreographed interface motion.",
      "tooling.Git & GitHub":
        "Clean branch workflows, code review, and CI pipelines.",
      "tooling.Docker":
        "Reproducible local environments and simple service orchestration.",
      "deployment.Vercel":
        "Preview deployments and built-in analytics for Next.js applications.",
      "deployment.Linux / cPanel servers":
        "Nginx, PHP-FPM, process management, and secure server hardening.",
    },
    overview: {
      title: "Skill Overview",
      loaded: "Loaded",
      loadedValue: "{count}/{total}",
      avg: "Average Level",
      top: "Top Skill",
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
      "ms-central-cee": {
        description:
          "A streetwear-inspired outfit study — sharp layers and bold branding under the usual low light.",
        tags: ["Outfit", "Streetwear"],
      },
      "ms-travis-scott": {
        description:
          "A darker, tour-merch take on the same silhouette — graphic layers and a moody palette.",
        tags: ["Outfit", "Dark"],
      },
      "ms-body": {
        description:
          "The blank base body — a clean slate before any outfit pass; posing for the collection.",
        tags: ["Base", "Model"],
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
      internship: {
        title: "Backend internship",
        org: "PT. Deswa Invisco Multitama",
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
    response: "Fastest reply is on the channels below.",
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
      sentText: "Message received — thanks for reaching out.",
      again: "send another message",
      errFields: "Missing or malformed fields — check name and email.",
      errRejected: "Message rejected. Try again later.",
      errServer: "Transmission failed — try again or use the channels above.",
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
};