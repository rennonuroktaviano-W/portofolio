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
    label: "Skill-Stack",
    title: "Tech Stack",
    caption:
      "Die Technologien, mit denen ich Full-Stack-Produkte entwerfe, baue und ausliefere.",
    hint: "Skill-Map — jedes Tool hier ist in echten Projekten im Einsatz gewesen",
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
        "App Router, Server Components, API-Routen, Bild- und Font-Optimierung sowie Produktions-Deployments.",
      "frontend.React":
        "Komponentenarchitektur, Hooks, State-Management und leistungsbewusstes Rendering.",
      "frontend.TypeScript":
        "Strenges Typing für Datenmodelle, Props und teamfreundliche APIs.",
      "backend.Laravel / PHP":
        "REST-APIs, Eloquent-Modelle, Authentifizierung und wartbare MVC-Anwendungen.",
      "backend.Node.js":
        "API-Dienste, Hintergrund-Jobs und Tooling-Skripte mit solider Fehlerbehandlung.",
      "database.MySQL":
        "Schemadesign, Indexierung und Query-Optimierung für Produktionslasten.",
      "database.PostgreSQL":
        "Relationale Modellierung, JSON-Spalten und transaktionale Integrität.",
      "styling.Tailwind CSS":
        "Utility-first-Styling mit Design-Tokens und eigenen Motion-Utilities.",
      "styling.Framer Motion / GSAP":
        "Scroll-getriebene UI, Mikrointeraktionen und choreografierte Interface-Bewegung.",
      "tooling.Git & GitHub":
        "Saubere Branch-Workflows, Code-Reviews und CI-Pipelines.",
      "tooling.Docker":
        "Reproduzierbare lokale Umgebungen und einfache Service-Orchestrierung.",
      "deployment.Vercel":
        "Preview-Deployments und integrierte Analytics für Next.js-Anwendungen.",
      "deployment.Linux / cPanel servers":
        "Nginx, PHP-FPM, Prozessmanagement und sicheres Server-Hardening.",
    },
    overview: {
      title: "Skill-Übersicht",
      loaded: "Geladen",
      loadedValue: "{count}/{total}",
      avg: "Durchschnittsniveau",
      top: "Top-Skill",
    },
  },
  status: {
    live: "LIVE",
    archived: "ARCHIVIERT",
    inProgress: "IN ARBEIT",
  },
  nft: {
    label: "kreative experimente · ki-gestützte visuals",
    title: "KI-gestützte visuelle Studien",
    caption:
      "Ein Raum für visuelle Experimente — Charakter- und Outfit-Designs, erforscht durch KI-gestützte Bildgenerierung. Eine praktische Studie, wie generative Tools einen menschlichen Kreativ-Workflow erweitern.",
    outputs: "ausgewählte Resultate",
    framesHint: "die Frames laufen auf breiten Bildschirmen seitwärts",
    fig: "Abb {n} / {total}",
    endRunTitle: "Ende dieses Sets",
    endRunText: "drei Stücke — weiter scrollen, um zu sehen, wie sie entstanden",
    workflow: "kreativer Workflow",
    workflowHint: "fünf Schritte — der Workflow läuft auf breiten Bildschirmen seitwärts",
    endFlowTitle: "Ende des Workflows",
    endFlowText: "vom Konzept zum Artwork — in fünf Schritten",
    process: {
      "01": {
        title: "Konzept",
        short:
          "Subjekt, Stimmung und die visuelle Richtung definieren, die ich erkunden möchte.",
      },
      "02": {
        title: "Generierung",
        short:
          "Prompt-Experimente über ChatGPT, Gemini, DeepSeek und Claude, um visuelle Richtungen zu entdecken.",
      },
      "03": {
        title: "Iteration",
        short:
          "Outfits, Accessoires, Licht und Hintergründe vorantreiben — ein Subjekt, viele Variationen.",
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
          "Studie eines von Streetwear inspirierten Outfits — klare Schichten und mutiges Branding unter stimmungsvollem Licht.",
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
    label: "entwicklungsweg · arbeitsprotokoll",
    title: "Entwicklungsweg",
    caption:
      "Mein Weg des Aufbauens — von autodidaktischen Grundlagen und einem Backend-Praktikum bis zu Freelance-Arbeit und Systemen in Produktion.",
    type: {
      internship: "praktikum",
      freelance: "freelance",
      personal: "persönlich",
      achievement: "erfolg",
      learning: "lernen",
    },
    items: {
      "learning-foundations": {
        title: "Die Grundlagen lernen",
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
        title: "Unabhängige Projekte",
        org: "Freelance & Nebenprojekte",
        description:
          "Full-Stack-Produktarbeit für kleine Unternehmen ausgeliefert — Inventar, Rechnungswesen und Web-Präsenz.",
        tags: ["Laravel", "Node.js", "SQL"],
      },
      achievement: {
        title: "In die Produktion",
        org: "Produktions-Meilenstein",
        description:
          "Erste Systeme mit echtem Verkehr in Produktion: Zahlungen, Geschäftsdaten und kundenorientierte Dashboards.",
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
    label: "kontakt aufnehmen",
    title: "Lass uns bauen.",
    caption:
      "Hast du eine Idee, ein Projekt oder Lust, über Entwicklung zu sprechen? Schreib mir oder nutze deinen Lieblingskanal.",
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
    closing: "Abschluss",
    title1: "Danke für",
    title2: "deinen Besuch in meinem Portfolio.",
    para:
      "Diese Seite entstand aus echten Projekten und Lektionen — hat dich etwas angesprochen, bauen wir gemeinsam etwas.",
    footer: "© {year} {name} — gebaut mit Next.js + TypeScript · KI-gestützt",
  },
  notFound: {
    kicker: "404 — diese Seite existiert nicht",
    title: "Seite nicht gefunden.",
    body:
      "Die Seite, die du suchst, ist nicht hier — vielleicht wurde sie verschoben, oder sie hat nie existiert. Zurück zum Anfang und das Portfolio erkunden.",
    back: "Zurück zum Anfang",
  },
  errorPage: {
    kicker: "etwas ist schiefgelaufen",
    title: "Unerwarteter Fehler.",
    body:
      "Beim Rendern dieser Seite ist ein Fehler aufgetreten. Versuch unten neu zu laden — nichts geht verloren.",
    action: "Seite neu laden",
  },
};