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
    cityLine: "{city} · eine regnerische Metropole der Interfaces",
    tagline: "Ich baue Websysteme, die auch nach Mitternacht weiterarbeiten.",
    role: "Full-Stack-Entwickler",
    enterArchive: "DATEIEN ÖFFNEN",
    readOn: "Weiterlesen —",
  },
  scenes: {
    "scene-hero": { title: "Die Stadt Erwacht", label: "intro" },
    "scene-identity": { title: "Identitätsoffenbarung", label: "wer" },
    "scene-about": { title: "Akte", label: "über" },
    "scene-arsenal": { title: "Tech-Arsenal", label: "fähigkeiten" },
    "scene-showcase": { title: "Ausgewählte Cinematics", label: "akten" },
    "scene-nft": { title: "Kreativstudio", label: "collectibles" },
    "scene-experience": { title: "Nachtzug", label: "route" },
    "scene-contact": { title: "Kontaktsignal", label: "signal" },
    "scene-final": { title: "Die Nacht Fällt", label: "ende" },
  },
  identity: {
    intro: "Szene 02 · Einführung",
    titleAsk: "Also fragt die Stadt…",
    titleWho: "wer steckt hinter den Lichtern?",
    devProfile: "DEV-PROFIL",
  },
  profile: {
    developerTitle: "Full-Stack-Entwickler",
    positioning:
      "Ich baue zuverlässige Websysteme, die nach Mitternacht das Licht anlassen.",
    shortBio:
      "Full-Stack-Entwickler mit Geschmack für saubere Architektur, cineastische Mikrointeraktionen und Software, die echtem Datenverkehr standhält.",
    bio: [
      "Jedes Produkt, das ich veröffentliche, beginnt mit einer Frage: Wie lassen sich nützliche Dinge mühelos anfühlen? Ich entwerfe und baue Web-Erlebnisse von Anfang bis Ende — vom Datenbankschema bis zur responsiven Oberfläche — und mir liegen Leistung, Barrierefreiheit und die leisen Details am Herzen, die Nutzer spüren, aber nie sehen.",
      "Wenn der Bildschirm dunkel wird, skizziere ich meist Interfaces, lese über verteilte Systeme oder jage nach der perfekten Typografie-Rampe. Ich behandele Code wie Handwerk: bedacht, dokumentiert und nie halb poliert veröffentlicht.",
    ],
    currentFocus: "Full-Stack-Webentwicklung & interaktive Erlebnisse",
    location: "Indonesien · UTC+7",
    status: "OFFEN FÜR PROJEKTE",
    education: "Informatik — Beispiel-Institution",
    interests: [
      "Cineastische UI",
      "Typografie",
      "Retro-Technologie",
      "Verteilte Systeme",
      "Indie-Game-Design",
      "Jazz-Noir-Soundtracks",
    ],
    philosophy:
      "Gute Software ist wie eine gut beleuchtete Straße um Mitternacht: ruhig, vorhersehbar und bringt dich leise dorthin, wo du hin musst.",
    caseNumber: "AKTE NR. RN-001",
  },
  about: {
    label: "geheimdienstliche Akte",
    title: "Akte",
    caption:
      "Freigegebene Notizen über das Entwicklungs-Subjekt. Vorsichtig mit Neugier behandeln.",
    subjectProfile: "Subjektprofil",
    caseOpen: "Akte Offen",
    filePhoto: "Aktenfoto angehängt —",
    evidenceGradeB: "Beweisgrad B",
    personalStatement: "Persönliche Stellungnahme",
    currentInterests: "Aktuelle Interessen",
    doctrine: "— persönliche Entwickler-Doktrin",
    meta: {
      status: "STATUS",
      location: "STANDORT",
      currentFocus: "AKTUELLER FOKUS",
      education: "AUSBILDUNG",
      caseNumber: "AKTENNUMMER",
    },
  },
  arsenal: {
    label: "Ausrüstungsspind",
    title: "Tech-Arsenal",
    caption:
      "Die Werkzeuge an der Beweiswand. Jedes Stück hier hat echte Produktionsarbeit gesehen.",
    hint: "synaptische karte — jeder cluster ist produktionserprobt",
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
  showcase: {
    label: "ausgewählte Cinematics",
    title: "Akten — Tiefenanalyse",
    caption: "Zwei Fälle weit geöffnet: das Problem, der Bau und was veröffentlicht wurde.",
    evidenceFile: "Beweisstück {n} — {year}",
    problem: "Das Problem",
    solution: "Die Lösung",
    momentItHurt: "Der Schmerzhafte Moment",
    aftermath: "Die Folgen",
    caseVisual: "Fallvisual",
    artCaseCover: "kunst: Aktencover",
    liveSignal: "LIVE-SIGNAL",
    sourceCode: "Quellcode",
    liveDemo: "Live-Demo",
    projects: {
      casebreak: {
        title: "CASEBREAK",
        oneLiner:
          "Eine Fallmanagement-Plattform, die einen Papierstapel in einen durchsuchbaren Beweisraum verwandelte.",
        problem:
          "Eine lokale Behörde verwaltete Klientenfälle in Tabellen und ausgedruckten Ordnern. Doppelte Datensätze, verpasste Fristen und nichts war durchsuchbar.",
        solution:
          "Ich entwarf ein Laravel + MySQL-Backoffice mit rollenbasierter Zugriffskontrolle, Statusboards, Fristwarnungen und einer Dokumenten-Vault mit Volltextsuche.",
        role: "Full-Stack-Entwickler",
        features: [
          "Rollenbasierte Dashboards für Beamte & Admins",
          "Kanban-artige Statusboards für Fälle",
          "Automatische Frist-Erinnerungsmails",
          "Volltextsuche & Tagging für Dokumente",
        ],
        challenge:
          "4 Jahre chaotischer Altdaten ohne Datenverlust zu migrieren war der eigentliche Kampf — ich baute einen schrittweisen Import mit Trockenlauf-Validierung.",
        outcome:
          "Die Suchzeit sank von Minuten auf Sekunden und das Team räumte in zwei Monaten einen Rückstau von über 200 veralteten Fällen ab.",
      },
      "kode-ledger": {
        title: "KODELEDGER",
        oneLiner:
          "Eine minimalistische Doppelte-Buchführung-API für eine Nebenprojekt-Rechnungs-Pipeline.",
        problem:
          "Freelancer-Rechnungen gingen in Chat-Apps verloren; es gab keine zuverlässige Aufzeichnung, was in Rechnung gestellt, bezahlt oder überfällig war.",
        solution:
          "Ich baute einen Node.js + PostgreSQL-Dienst mit typisierter REST-API, idempotenter Rechnungserstellung, PDF-Generierung und Zahlungserinnerungen.",
        role: "Backend-Entwickler",
        features: [
          "Idempotente Rechnungs- & Zahlungsendpunkte",
          "Automatische PDF-Rechnungserstellung",
          "Worker für Zahlungserinnerungen",
          "Audit-Log für jede Änderung",
        ],
        challenge:
          "Die Geldmathematik unter Nebenläufigkeit korrekt zu halten — ich ergänzte Row-Level-Locking und einen Abgleich-Job für exakte Bücher.",
        outcome:
          "Null verlorene Rechnungen im ersten Nutzungsquartal, und Erinnerungen holten rund eine Woche unbezahlter Arbeit zurück.",
      },
      retromart: {
        title: "RETROMART",
        oneLiner:
          "Ein Laravel-E-Commerce-Shop zum Thema Vintage-Tech — Warenkörbe, Zahlungen und ein Retro-Admin.",
        problem:
          "Ein Vintage-Tech-Händler brauchte einen Shop, der sich wie sein Katalog anfühlt: verspielt, glaubwürdig und schnell auf dem Handy.",
        solution:
          "Ich lieferte einen vollständigen Laravel-Shop mit Produktvarianten, Promo-Engine, Payment-Gateway-Integration und Admin-Panel fürs Inventar.",
        role: "Full-Stack-Entwickler",
        features: [
          "Warenkorb, Checkout & Payment-Gateway",
          "Promo-Codes mit Stapelregeln",
          "Inventarverwaltung & Niedrigbestand-Alerts",
          "Admin-Reporting-Dashboard",
        ],
        challenge:
          "Transaktionssicherheit über Bestand, Rabatt und Zahlungsstatus zu gewinnen, erforderte sorgfältiges Queueing und idempotente Bestellerstellung.",
        outcome:
          "Gestartet und in der ersten Saison hunderte Bestellungen verarbeitet — ohne eine einzige Doppelbuchung.",
      },
      weathermono: {
        title: "WEATHERMONO",
        oneLiner:
          "Eine winzige, offline-fähige Wetter-PWA in Monospace-Ästhetik — Wetter, aber terminal-style.",
        problem:
          "Ich wollte eine Wetter-App, die den Leser respektiert: keine Tracker, kein Ballast, schnell erfasste Daten auf langsamen Handys.",
        solution:
          "Eine PWA in Vanilla-TypeScript, die Vorhersagen cached, offline funktioniert und eine datierte Monospace-Vorhersagekarte rendert.",
        role: "Solo-Entwickler",
        features: [
          "Offline-Vorhersage-Cache",
          "Monospace-Wetterraster",
          "Null Werbung & null Analytics",
        ],
        challenge:
          "Das Bundle unter 12 kB zu drücken, während eine echte Wetterkarte clientseitig gerendert wird.",
        outcome:
          "Eine 10-kB-Kern-App, die auch ohne Netzwerk funktioniert — ein kleines Denkmal der Zurückhaltung.",
      },
    },
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
      "hrln-rain": {
        description:
          "Outfit-Variation unter dem typischen Wolkenbruch der Stadt — generiert, dann von Hand bereinigt.",
        tags: ["Outfit", "Regen"],
      },
      "hrln-midnight": {
        description:
          "Eine Licht- und Palettenstudie — dieselbe Silhouette ins nächtliche Blau getrieben.",
        tags: ["Licht", "Nacht"],
      },
      "hrln-look": {
        description:
          "Accessoire-Variation, die die Alltags-Ausrüstung des Charakters in der ganzen Kollektion definiert.",
        tags: ["Accessoires", "Variante"],
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
  },
  experience: {
    label: "der Nachtzug · Routenlog",
    title: "Erfahrungs-Timeline",
    caption:
      "Die Route, die dieses Jahrzehnt nahm — jede Station ein Halt, wo etwas gelernt wurde.",
    type: {
      education: "ausbildung",
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
      education: {
        title: "Informatikstudent",
        org: "Beispiel-Institution",
        description:
          "Formale Basis in Algorithmen, Datenbanken und Software-Engineering-Praktiken neben selbstgesteuerter Webentwicklung.",
        tags: ["Algorithmen", "Datenbanken"],
      },
      internship: {
        title: "Backend-Praktikum",
        org: "Beispiel-Firma",
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
    label: "Funkraum auf dem Dach",
    title: "Kontaktsignal",
    caption:
      "Die Vermittlung der Stadt ist offen. Wähle einen Kanal oder sende direkt eine Nachricht.",
    primaryFrequency: "primäre Frequenz",
    form: {
      title: "Eine Nachricht senden",
      name: "name",
      email: "email",
      subject: "betreff",
      message: "nachricht",
      placeholderName: "Max Mustermann",
      placeholderEmail: "max@beispiel.de",
      placeholderSubject: "re: ein Fall, den es zu eröffnen lohnt",
      placeholderMessage: "Was baust du gerade?",
      sending: "sende…",
      send: "Signal senden",
      sentTitle: "Signal Empfangen",
      sentText: "Übertragung protokolliert. Antwort innerhalb von 48 h.",
      again: "weiteres Signal senden",
      errFields: "Fehlende oder fehlerhafte Felder — Name und E-Mail prüfen.",
      errRejected: "Übertragung abgelehnt.",
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
  audio: {
    enable: "Ambient-Sound aktivieren",
    disable: "Ambient-Sound deaktivieren",
    ambienceOn: "ambience: an",
    ambienceOff: "ambience: aus",
  },
};