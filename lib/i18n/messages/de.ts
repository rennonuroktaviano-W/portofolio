import type { Messages } from "../types";

export const de: Messages = {
  languageSwitcher: {
    label: "Sprache ändern",
  },
  skip: "Zum Inhalt springen",
  sceneIndicator: {
    label: "Szenenindex",
    goTo: "Zu Kapitel {chapter}: {title}",
  },
  hero: {
    cityLine: "Full-Stack Web Developer · AI-Assisted Workflow",
    tagline:
      "Ich baue Websites und Full-Stack-Anwendungen — aus Ideen, Bedürfnissen und Problemen werden Produkte, die wirklich genutzt werden.",
    role: "Full-Stack-Entwickler",
    enterArchive: "Meine Arbeit Ansehen",
    readOn: "Über Mich",
  },
  scenes: {
    "scene-hero": { title: "Willkommen", label: "intro" },
    "scene-identity": { title: "Wer Ich Bin", label: "über" },
    "scene-about": { title: "Profil", label: "profil" },
    "scene-arsenal": { title: "Tech-Stack", label: "fähigkeiten" },
    "scene-nft": { title: "Kreativstudio", label: "studio" },
    "scene-experience": { title: "Entwicklungsweg", label: "weg" },
    "scene-contact": { title: "Kontakt", label: "kontakt" },
    "scene-final": { title: "Schluss", label: "ende" },
  },
  identity: {
    intro: "intro · hallo",
    titleAsk: "Entwickler",
    titleWho: "Der Baut.",
    devProfile: "Dev-Profil",
  },
  profile: {
    developerTitle: "Full-Stack-Entwickler",
    positioning: "Coding · Building · Experimenting with AI",
    shortBio:
      "Ich baue Websites und Full-Stack-Anwendungen — von der ersten Skizze bis zum fertigen Produkt, von der Oberfläche bis zur Datenbank.",
    bio: [
      "Ich bin Renno Nur Oktaviano, ein Entwickler, der sich auf Full-Stack-Websites und -Anwendungen konzentriert. Ich baue gerne Dinge von Grund auf — Bedürfnisse verstehen, die Oberfläche gestalten, das System strukturieren, Funktionen entwickeln und sicherstellen, dass das Endprodukt wirklich funktioniert.",
      "In meinem täglichen Workflow nutze ich KI-Coding-Agenten als Entwicklungspartner — für Ideenfindung, Implementierung, Debugging und schnellere Iteration.",
    ],
    currentFocus: "Full-Stack-Entwicklung & KI-gestützter Workflow",
    location: "Indonesien · UTC+7",
    status: "Offen für Arbeit · Praktikum · Freelance · Zusammenarbeit",
    interests: [
      "Cineastische UI",
      "Typografie",
      "Retro-Technologie",
      "Verteilte Systeme",
      "Indie-Game-Design",
      "Jazz-Noir-Soundtracks",
    ],
    philosophy:
      "KI hilft mir, Code schneller zu schreiben und zu erkunden — aber das Problem verstehen, die Lösung wählen, Ergebnisse testen und sicherstellen, dass das System funktioniert, bleibt mein Job als Entwickler.",
    caseNumber: "RN-001",
  },
  about: {
    label: "Mein Profil",
    title: "Über Mich",
    caption:
      "Ein kurzer Blick darauf, wer ich bin, was mir wichtig ist und wie ich als Entwickler arbeite.",
    subjectProfile: "Profilübersicht",
    caseOpen: "Profil-ID",
    filePhoto: "Entwicklerfoto —",
    evidenceGradeB: "Status · aktiv",
    personalStatement: "Persönliche Stellungnahme",
    currentInterests: "Aktuelle Interessen",
    doctrine: "— persönliches Entwicklungsprinzip",
    meta: {
      status: "STATUS",
      location: "STANDORT",
      currentFocus: "AKTUELLER FOKUS",
      caseNumber: "PROFIL-ID",
    },
  },
  arsenal: {
    label: "Ausrüstungsspind",
    title: "Tech-Arsenal",
    caption:
      "Die Werkzeuge an der Beweiswand. Jedes Stück hier hat echte Produktionsarbeit gesehen.",
    hint: "Synaptische Karte — jeder Cluster ist produktionserprobt",
    category: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Datenbank",
      styling: "Styling",
      tooling: "Werkzeuge",
      deployment: "Deployment",
    },
    skill: {
      "frontend.Next.js":
        "App Router, Server Components, Route Handlers, Bild- und Font-Optimierung sowie Mid-Scale-Produktions-Deployments.",
      "frontend.React":
        "Komponierbare Komponentenarchitekturen, Hooks, Context und leistungsbewusstes Re-Render-Management.",
      "frontend.TypeScript":
        "Strenges Typing als Standard — typisierte Datenmodelle, Generics und Interfaces, die Teams schneller machen.",
      "backend.Laravel / PHP":
        "REST-APIs, Eloquent-Modellierung, Authentifizierung und wartbare MVC-Anwendungen in Produktion.",
      "backend.Node.js":
        "API-Dienste, Hintergrund-Jobs und Tooling-Skripte mit sorgfältigem Fehlerhandling und Observability.",
      "database.MySQL":
        "Schemadesign, Indexierungsstrategie und Query-Optimierung für leseintensive Produktionslasten.",
      "database.PostgreSQL":
        "Relationale Modellierung, JSON-Spalten und transaktionale Integrität für datensensible Funktionen.",
      "styling.Tailwind CSS":
        "Utility-first-Systeme mit Design-Tokens, dunklen Themes und eigenen Motion-Utilities.",
      "styling.Framer Motion / GSAP":
        "Scroll-getriebenes Storytelling, Mikrointeraktionen und choreografierte Interface-Bewegung.",
      "tooling.Git & GitHub":
        "Saubere Branch-Workflows, Conventional Commits, Code-Reviews und CI-Pipelines.",
      "tooling.Docker":
        "Reproduzierbare lokale Umgebungen und einfache Service-Orchestrierung.",
      "deployment.Vercel":
        "Preview-Deployments, Edge Functions und Analytics für Next.js-Anwendungen.",
      "deployment.Linux / cPanel servers":
        "Nginx-Reverse-Proxy, PHP-FPM, Prozessmanagement und sicheres Server-Hardening.",
    },
    overview: {
      title: "Arsenal-Übersicht",
      loaded: "Geladen",
      loadedValue: "{count}/{total}",
      avg: "Durchschnittsfähigkeit",
      top: "Bester Kaliber",
    },
  },
  status: {
    live: "LIVE",
    archived: "ARCHIVIERT",
    inProgress: "IN ARBEIT",
  },
  nft: {
    label: "der kreative Flügel · vom Konzept zum Sammlerstück",
    title: "KI-gestützte NFT-Kollektion",
    caption:
      "Ein experimenteller Studio-Flügel — Charakterdesign und digitale Sammlerstücke, erforscht durch KI-gestützte Bildgenerierung. Eine Learningsübung, wie generative Tools Teil eines menschlichen Kreativ-Workflows werden — nicht die ganze Geschichte.",
    outputs: "ausgewählte Resultate",
    framesHint: "die Frames laufen auf breiten Bildschirmen seitwärts",
    fig: "Abb {n} / {total}",
    endRunTitle: "Ende der Serie",
    endRunText: "drei Frames — weiter scrollen, um zu sehen, wie sie entstanden",
    workflow: "kreativer Workflow",
    workflowHint: "fünf Schritte — der Workflow läuft auf breiten Bildschirmen seitwärts",
    endFlowTitle: "Ende des Workflows",
    endFlowText: "vom Konzept zum Sammlerstück — in fünf Schritten",
    process: {
      "01": {
        title: "Konzept",
        short:
          "Die Identität des Charakters entwerfen — Silhouette, Stimmung und die fiktive Straße, zu der er gehört.",
      },
      "02": {
        title: "Generierung",
        short:
          "Prompt-Experimente über ChatGPT, Gemini, DeepSeek und Claude, um visuelle Richtungen zu entdecken.",
      },
      "03": {
        title: "Iteration",
        short:
          "Outfits, Accessoires, Licht und Hintergründe vorantreiben — eine Identität, viele Variationen.",
      },
      "04": {
        title: "Verfeinerung",
        short:
          "Die stärksten Ergebnisse auswählen und zu finalen, präsentablen Stücken verfeinern.",
      },
      "05": {
        title: "Artwork",
        short:
          "Die ausgewählten Stücke zu einem stimmigen Final-Set zusammenstellen — Rahmen, Tonlage und die fertige Serie.",
      },
    },
    artwork: {
      "ms-central-cee": {
        description:
          "Studie eines von Streetwear inspirierten Outfits — klare Schichten und mutiges Branding im gewohnten schwachen Licht.",
        tags: ["Outfit", "Streetwear"],
      },
      "ms-travis-scott": {
        description:
          "Eine dunklere Interpretation derselben Silhouette — grafische Schichten und eine düstere Palette.",
        tags: ["Outfit", "Dunkel"],
      },
      "ms-body": {
        description:
          "Der leere Grundkörper — eine weiße Fläche vor jedem Outfit-Layer; posierend für die Kollektion.",
        tags: ["Basis", "Modell"],
      },
    },
  },
  lightbox: {
    vault: "kodecity · Kunsttresor",
    viewerLabel: "Kunstbetrachter — {title}",
    openViewer: "Kunstwerk {title} im Betrachter öffnen",
    close: "Kunstbetrachter schließen",
    prev: "Vorheriges Kunstwerk",
    next: "Nächstes Kunstwerk",
    prevShort: "zurück",
    nextShort: "weiter",
    aiLabel: "KI-gestütztes digitales Kunstwerk",
    caseVisual: "Fallvisual",
  },
  experience: {
    label: "der Nachtzug · Routenlog",
    title: "Erfahrungs-Timeline",
    caption:
      "Die Route, die dieses Jahrzehnt nahm — jede Station ein Halt, wo etwas gelernt wurde.",
    type: {
      internship: "praktikum",
      freelance: "freelance",
      personal: "persönlich",
      achievement: "erfolg",
      learning: "lernen",
    },
    items: {
      "learning-foundations": {
        title: "Der Aufstieg beginnt",
        org: "Autodidaktischer Weg",
        description:
          "Grundlagen gelernt — HTML, CSS, JavaScript und die Disziplin, kleine Projekte fertigzustellen.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      internship: {
        title: "Backend-Praktikum",
        org: "PT. Deswa Invisco Multitama",
        description:
          "REST-Dienste und interne Tools gebaut, Code-Reviews gelernt und echte Funktionen an echte Nutzer ausgeliefert.",
        tags: ["PHP", "MySQL", "REST"],
      },
      freelance: {
        title: "Unabhängige Bauten",
        org: "Freelance & Nebenprojekte",
        description:
          "Full-Stack-Produktarbeit für kleine Unternehmen ausgeliefert — Inventar, Rechnungswesen und Web-Präsenz.",
        tags: ["Laravel", "Node.js", "SQL"],
      },
      achievement: {
        title: "Der Sprung in Produktion",
        org: "Produktions-Meilenstein",
        description:
          "Erste Systeme mit echtem Verkehr in Produktion: Zahlungen, Falldaten und kundenorientierte Dashboards.",
        tags: ["Produktion", "Zahlungen", "DevOps"],
      },
      present: {
        title: "Aktueller Halt",
        org: "Full-Stack-Entwickler",
        description:
          "Zuverlässige Full-Stack-Erlebnisse bauen und das Handwerk vorantreiben — cineastisch, barrierefrei und schnell.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
    },
  },
  contact: {
    label: "wo du mich erreichst",
    title: "In Kontakt treten",
    caption:
      "Ein Projekt, eine Gelegenheit oder einfach Hallo sagen? Schreib mir oder wähle deinen Lieblingskanal.",
    emailLabel: "email",
    socialsLabel: "soziale Netzwerke",
    response: "Am schnellsten antworte ich über die Kanäle unten.",
    form: {
      title: "Nachricht direkt senden",
      name: "name",
      email: "email",
      subject: "betreff",
      message: "nachricht",
      placeholderName: "Max Mustermann",
      placeholderEmail: "max@beispiel.de",
      placeholderSubject: "re: ein lohnenswertes Projekt",
      placeholderMessage: "Was baust du gerade?",
      sending: "sende…",
      send: "Nachricht senden",
      sentTitle: "Nachricht Gesendet",
      sentText: "Nachricht empfangen — danke für deine Kontaktaufnahme.",
      again: "weitere Nachricht senden",
      errFields: "Fehlende oder fehlerhafte Felder — Name und E-Mail prüfen.",
      errRejected: "Nachricht abgelehnt. Versuch es später erneut.",
      errServer: "Übertragung fehlgeschlagen — versuch es erneut oder nutze die Kanäle oben.",
    },
  },
  final: {
    closing: "Schlussunterschrift",
    title1: "Die Stadt dimmt ihre Lichter.",
    title2: "Die Arbeit geht weiter.",
    para:
      "Jede Szene auf dieser Seite ist ein echter Bau, eine echte Lektion oder eine echte Narbe. Danke, dass du die Straßen gelaufen bist.",
    returnLabel: "Zurück zum Anfang",
    credits: {
      aria: "Site-Credits",
      builtIn: "gebaut in",
      designed: "designt von",
      poweredBy: "angetrieben von",
      designedValue: "der Regen",
    },
    footer: "© {year} {name} — es wurden keine Umhänge verwendet.",
  },
  notFound: {
    kicker: "Sackgasse — im Regen verloren",
    title: "Diese Straße existiert nicht.",
    body:
      "Die Adresse, die du eingegeben hast, führt in {city} ins Nichts. Kehr zurück zum Platz, bevor der Nebel zuschlägt.",
    back: "zurück zum Platz",
  },
  errorPage: {
    kicker: "Übertragungsfehler — rt-404",
    title: "Das Netz der Stadt ist gestolpert.",
    body:
      "Beim Rendern dieses Blocks ist etwas schiefgelaufen. Versuch den Schutzschalter unten — keine Daten gehen verloren.",
    action: "Block neu starten",
  },
};