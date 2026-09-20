import type { Messages } from "../types";

export const fr: Messages = {
  languageSwitcher: {
    label: "Changer de langue",
  },
  skip: "Aller au contenu",
  sceneIndicator: {
    label: "Index des scènes",
    goTo: "Aller au chapitre {chapter} : {title}",
  },
  hero: {
    cityLine: "{city} · une métropole d'interfaces sous la pluie",
    tagline: "Je construis des systèmes web qui continuent de tourner après minuit.",
    role: "Développeur Full-Stack",
    enterArchive: "ENTRER DANS L'ARCHIVE",
    readOn: "Continuer —",
  },
  scenes: {
    "scene-hero": { title: "La Ville S'Éveille", label: "intro" },
    "scene-identity": { title: "Révélation d'Identité", label: "qui" },
    "scene-about": { title: "Dossier", label: "à propos" },
    "scene-arsenal": { title: "Arsenal Technique", label: "compétences" },
    "scene-archive": { title: "Archive de Projets", label: "travaux" },
    "scene-showcase": { title: "Cinématiques à la Une", label: "fiches" },
    "scene-nft": { title: "Studio Créatif", label: "collectibles" },
    "scene-experience": { title: "Train de Nuit", label: "parcours" },
    "scene-lab": { title: "Lab Développeur", label: "labo" },
    "scene-git": { title: "Signal d'Activité", label: "signaux" },
    "scene-contact": { title: "Signal de Contact", label: "signal" },
    "scene-final": { title: "La Nuit Tombe", label: "fin" },
  },
  identity: {
    intro: "scène 02 · introduction",
    titleAsk: "Alors la ville demande…",
    titleWho: "qui se cache derrière les lumières ?",
    devProfile: "PROFIL DEV",
  },
  profile: {
    developerTitle: "Développeur Full-Stack",
    positioning:
      "Je construis des systèmes web fiables qui maintiennent la lumière allumée après minuit.",
    shortBio:
      "Développeur full-stack au goût pour l'architecture propre, les micro-interactions cinématiques et les logiciels qui survivent au trafic réel.",
    bio: [
      "Chaque produit que je livre commence par une question : comment rendre quelque chose d'utile presque sans effort ? Je conçois et construis des expériences web de bout en bout — du schéma de base de données à l'interface responsive — et je me soucie profondément de la performance, de l'accessibilité et de ces détails silencieux que les utilisateurs ressentent sans jamais les voir.",
      "Quand l'écran s'éteint, je croque des interfaces, je lis sur les systèmes distribués ou je chasse la rampe typographique parfaite. Je traite le code comme un artisanat : réfléchi, documenté, jamais livré à moitié poli.",
    ],
    currentFocus: "Développement web full-stack & expériences interactives",
    location: "Indonésie · UTC+7",
    status: "OUVERT AUX PROJETS",
    education: "Informatique — institution d'exemple",
    interests: [
      "UI cinématique",
      "Typographie",
      "Technologie rétro",
      "Systèmes distribués",
      "Design de jeux indie",
      "Bandes-son jazz noir",
    ],
    philosophy:
      "Un bon logiciel est comme une rue bien éclairée à minuit : calme, prévisible, et qui vous mène discrètement là où vous devez aller.",
    caseNumber: "DOSSIER N° RN-001",
  },
  about: {
    label: "dossier de renseignements",
    title: "Dossier",
    caption:
      "Notes déclassifiées sur le sujet du développement. À manipuler avec curiosité.",
    subjectProfile: "Profil du Sujet",
    caseOpen: "Dossier Ouvert",
    filePhoto: "photo de dossier jointe —",
    evidenceGradeB: "preuve de grade B",
    personalStatement: "Déclaration personnelle",
    currentInterests: "Intérêts actuels",
    doctrine: "— doctrine personnelle du développeur",
    meta: {
      status: "STATUT",
      location: "LOCALISATION",
      currentFocus: "FOCUS ACTUEL",
      education: "FORMATION",
      caseNumber: "N° DE DOSSIER",
    },
  },
  arsenal: {
    label: "armoire à équipements",
    title: "Arsenal Technique",
    caption:
      "Les outils du mur de preuves. Chaque pièce ici a connu du vrai travail de production.",
    hint: "carte synaptique — chaque cluster a tourné en production",
    category: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de données",
      styling: "Style",
      tooling: "Outillage",
      deployment: "Déploiement",
    },
    skill: {
      "frontend.Next.js":
        "App Router, server components, route handlers, optimisation d'images et de polices, et déploiements de production à moyenne échelle.",
      "frontend.React":
        "Architectures de composants composables, hooks, contexte et gestion des re-rendus soucieuse de la performance.",
      "frontend.TypeScript":
        "Typage strict par défaut — modèles de données typés, génériques et interfaces qui accélèrent les équipes.",
      "backend.Laravel / PHP":
        "APIs REST, modélisation Eloquent, authentification et applications MVC maintenables mises en production.",
      "backend.Node.js":
        "Services API, jobs d'arrière-plan et scripts d'outillage avec gestion soignée des erreurs et observabilité.",
      "database.MySQL":
        "Conception de schémas, stratégie d'indexation et optimisation de requêtes pour des charges de production à forte lecture.",
      "database.PostgreSQL":
        "Modélisation relationnelle, colonnes JSON et intégrité transactionnelle pour les fonctionnalités sensibles aux données.",
      "styling.Tailwind CSS":
        "Systèmes utility-first avec design tokens, thèmes sombres et utilitaires de mouvement personnalisés.",
      "styling.Framer Motion / GSAP":
        "Storytelling piloté par le défilement, micro-interactions et mouvements d'interface chorégraphiés.",
      "tooling.Git & GitHub":
        "Flux de branches propres, conventional commits, revue de code et pipelines CI.",
      "tooling.Docker":
        "Environnements locaux reproductibles et simple orchestration de services.",
      "deployment.Vercel":
        "Déploiements de prévisualisation, edge functions et analytics pour les applications Next.js.",
      "deployment.Linux / cPanel servers":
        "Proxy inverse Nginx, PHP-FPM, gestion des processus et durcissement sécurisé du serveur.",
    },
    overview: {
      title: "Vue d'ensemble de l'armurerie",
      loaded: "Chargé",
      loadedValue: "{count}/{total}",
      avg: "Capacité Moyenne",
      top: "Meilleur Calibre",
    },
  },
  archive: {
    label: "la voûte · dossiers d'affaires",
    title: "Archive de Projets",
    caption:
      "L'archive du sous-sol. Tirez une chemise — chaque affaire ci-dessous a vraiment été livrée.",
    hint: "la voûte file sur les côtés sur écrans larges — continuez à défiler pour tourner les chemises",
    openCase: "ouvrir l'affaire",
    endTitle: "fin de la voûte",
    endText: "de plus profonds dossiers vivent dans les cinématiques ci-dessous",
  },
  status: {
    live: "EN LIGNE",
    archived: "ARCHIVÉ",
    inProgress: "EN COURS",
  },
  showcase: {
    label: "cinématiques à la une",
    title: "Dossiers — Analyse Approfondie",
    caption: "Deux affaires grandes ouvertes : le problème, la construction et ce qui a été livré.",
    evidenceFile: "pièce à conviction {n} — {year}",
    problem: "Le Problème",
    solution: "La Solution",
    momentItHurt: "Le Moment Difficile",
    aftermath: "Les Conséquences",
    caseVisual: "visuel de l'affaire",
    artCaseCover: "art : couverture du dossier",
    liveSignal: "SIGNAL EN DIRECT",
    sourceCode: "code source",
    liveDemo: "démo en direct",
    projects: {
      casebreak: {
        title: "CASEBREAK",
        oneLiner:
          "Une plateforme de gestion d'affaires qui a transformé un enchevêtrement de papier en salle de preuves consultable.",
        problem:
          "Une agence locale suivait les affaires de ses clients dans des feuilles de calcul et des classeurs imprimés. Doublons, échéances manquées et rien de consultable.",
        solution:
          "J'ai conçu un back office Laravel + MySQL avec accès par rôles, tableaux de statut, alertes d'échéances et une voûte documentaire à recherche plein texte.",
        role: "Développeur Full-Stack",
        features: [
          "Tableaux de bord par rôles pour agents et administrateurs",
          "Tableaux de statut d'affaires type Kanban",
          "E-mails programmables de rappel d'échéances",
          "Recherche & étiquetage plein texte des documents",
        ],
        challenge:
          "Migrer 4 ans de données héritées en désordre sans perte fut le vrai combat — j'ai construit un importateur pas à pas avec validation à blanc.",
        outcome:
          "Le temps de recherche est passé de minutes à secondes et l'équipe a épuré un arriéré de plus de 200 affaires obsolètes en deux mois.",
      },
      "kode-ledger": {
        title: "KODELEDGER",
        oneLiner:
          "Une API de comptabilité en partie double, minimale, pour un pipeline de facturation d'appoint.",
        problem:
          "La facturation freelance se perdait dans les apps de messagerie ; aucun enregistrement fiable de ce qui était facturé, payé ou en retard.",
        solution:
          "J'ai construit un service Node.js + PostgreSQL exposant une REST API typée avec création de factures idempotente, génération de PDF et rappels de paiement.",
        role: "Développeur Backend",
        features: [
          "Endpoints de factures & de paiements idempotents",
          "Génération automatique de factures PDF",
          "Workers de rappel de paiements en retard",
          "Journal d'audit pour chaque mutation",
        ],
        challenge:
          "Maîtriser l'arithmétique de l'argent sous concurrence — j'ai ajouté le verrouillage au niveau des lignes et un job de rapprochement pour garder la comptabilité exacte.",
        outcome:
          "Zéro facture perdue au premier trimestre d'utilisation, et les rappels ont récupéré environ une semaine de travail impayé.",
      },
      kodestreet: {
        title: "KODESTREET",
        oneLiner:
          "Ce portfolio — un motion-comic interactif construit avec Next.js, TypeScript et une narration cinématographique au défilement.",
        problem:
          "Un portfolio doit ressembler à un lieu, pas à un PDF. Les grilles de cartes génériques ne communiquent ni le savoir-faire ni la personnalité.",
        solution:
          "J'ai construit une expérience cinématographique sur une seule page : couches d'atmosphère CSS/canvas, narration GSAP ScrollTrigger et un terminal interactif qui répond vraiment.",
        role: "Designer + Développeur",
        features: [
          "Transitions de scènes pilotées par le défilement",
          "Mouvement sensible aux préférences",
          "Terminal rétro interactif",
          "Couche de données de contenu entièrement typée",
        ],
        challenge:
          "Garder une atmosphère dense sans écraser les Core Web Vitals signifiait dessiner pluie, brouillard et grain avec du CSS et un seul canvas léger.",
        outcome:
          "Un portfolio qui charge vite, se lit clairement sans JavaScript et donne aux visiteurs l'impression d'avoir traversé une ville.",
      },
      signaldesk: {
        title: "SIGNALDESK",
        oneLiner:
          "Un desk de tickets de support temps réel pour une petite équipe produit noyée sous les fils de messages.",
        problem:
          "Le support arrivait par quatre canaux de chat à la fois ; les problèmes passaient entre les mailles et personne ne détenait la résolution.",
        solution:
          "J'ai construit un front-end React + Vite sur une API Laravel légère : boîte de réception unifiée, règles d'affectation et un pouls en direct des tickets ouverts.",
        role: "Développeur Frontend",
        features: [
          "Boîte de réception unifiée entre les sources de support",
          "Affectation automatique selon la disponibilité de l'équipe",
          "Pouls des tickets en direct via server-sent events",
        ],
        challenge:
          "Concilier l'ordre des messages depuis plusieurs sources — j'ai implémenté un journal d'événements côté client avec déduplication et relecture.",
        outcome:
          "Le délai médian de première réponse est passé d'environ 4 heures à moins de 40 minutes en heures ouvrables.",
      },
      retromart: {
        title: "RETROMART",
        oneLiner:
          "Une boutique e-commerce Laravel sur le thème de la tech vintage — paniers, paiements et un admin rétro.",
        problem:
          "Un revendeur de tech vintage avait besoin d'une boutique à l'image de son catalogue : ludique, crédible et rapide sur mobile.",
        solution:
          "J'ai livré une boutique Laravel complète avec variantes de produits, moteur de promotions, intégration de passerelle de paiement et un panneau d'admin pour l'inventaire.",
        role: "Développeur Full-Stack",
        features: [
          "Panier, checkout & passerelle de paiement",
          "Codes promo avec règles de cumul",
          "Gestion d'inventaire & alertes de stock faible",
          "Tableau de bord de rapports admin",
        ],
        challenge:
          "Garantir la sécurité transactionnelle entre les états de stock, de remise et de paiement a exigé une file d'attente soignée et une création de commandes idempotente.",
        outcome:
          "Lancée, la boutique a traité des centaines de commandes dès la première saison sans un seul double débit.",
      },
      weathermono: {
        title: "WEATHERMONO",
        oneLiner:
          "Une PWA météo minuscule et utilisable hors ligne, dans une esthétique monospace — la météo, version terminal.",
        problem:
          "Je voulais une appli météo qui respecte le lecteur : pas de traceurs, pas de superflu, des données lisibles d'un coup d'œil sur téléphones lents.",
        solution:
          "Une PWA en TypeScript vanilla qui met en cache les prévisions, fonctionne hors ligne et rend une carte de prévisions en grille monospace datée.",
        role: "Développeur Solo",
        features: [
          "Mise en cache des prévisions hors ligne",
          "Grille météo monospace",
          "Zéro publicité & zéro analytics",
        ],
        challenge:
          "Réduire le bundle sous 12 kB tout en gardant une vraie carte météo rendue côté client.",
        outcome:
          "Une application cœur de 10 kB qui fonctionne encore quand le réseau s'éteint — un petit monument à la retenue.",
      },
    },
  },
  git: {
    label: "salle des moniteurs · flux optionnel",
    title: "Signal d'Activité",
    caption:
      "Pulsations quasi en direct depuis la tour de contrôle de versions. Timbres statiques — actualisés à chaque déploiement.",
    signal: "signal",
    commitsSteady: "commits : réguliers",
    openRepository: "ouvrir le dépôt",
    footer:
      "les flux sont statiques par conception — l'archive n'attend jamais une API tierce.",
  },
  nft: {
    label: "l'aile créative · du concept au collectionnable",
    title: "Collection NFT Assistée par IA",
    caption:
      "Une aile de studio expérimentale — conception de personnages et collectibles numériques explorés via la génération d'images assistée par IA. Un exercice d'apprentissage sur la façon dont les outils génératifs s'intègrent à un flux de travail créatif humain, sans en être toute l'histoire.",
    outputs: "sorties sélectionnées",
    framesHint: "les cadres filent sur les côtés sur écrans larges",
    fig: "fig {n} / {total}",
    endRunTitle: "fin de la série",
    endRunText: "trois cadres — continuez à défiler pour voir comment ils ont été faits",
    workflow: "flux de travail créatif",
    workflowHint: "cinq étapes — le flux file sur les côtés sur écrans larges",
    endFlowTitle: "fin du flux",
    endFlowText: "du concept au collectionnable — en cinq étapes",
    process: {
      "01": {
        title: "Concept",
        short:
          "Concevoir l'identité du personnage — silhouette, ambiance et la rue fictive à laquelle il appartient.",
      },
      "02": {
        title: "Génération",
        short:
          "Expériences de prompts sur ChatGPT, Gemini, DeepSeek et Claude pour découvrir des directions visuelles.",
      },
      "03": {
        title: "Itération",
        short:
          "Pousser tenues, accessoires, éclairages et fonds — une identité, de nombreuses variations.",
      },
      "04": {
        title: "Affinage",
        short:
          "Sélectionner les résultats les plus forts et les affiner en pièces finales présentables.",
      },
      "05": {
        title: "Œuvre",
        short:
          "Assembler les pièces choisies en un ensemble final cohérent — cadre, ton et la série achevée.",
      },
    },
    artwork: {
      "hrln-rain": {
        description:
          "Variation de tenue sous l'averse signature de la ville — générée, puis nettoyée à la main.",
        tags: ["Tenue", "Pluie"],
      },
      "hrln-midnight": {
        description:
          "Une étude d'éclairage et de palette — la même silhouette poussée dans le bleu de la nuit.",
        tags: ["Éclairage", "Nuit"],
      },
      "hrln-look": {
        description:
          "Variation d'accessoires définissant l'équipement quotidien du personnage dans toute la collection.",
        tags: ["Accessoires", "Variante"],
      },
    },
  },
  lightbox: {
    vault: "kodecity · voûte d'art",
    viewerLabel: "Visionneuse d'œuvres — {title}",
    openViewer: "Ouvrir l'œuvre {title} dans la visionneuse",
    close: "Fermer la visionneuse d'œuvres",
    prev: "Œuvre précédente",
    next: "Œuvre suivante",
    prevShort: "précédent",
    nextShort: "suivant",
    aiLabel: "œuvre d'art numérique assistée par IA",
  },
  experience: {
    label: "le train de nuit · journal de route",
    title: "Chronologie d'Expérience",
    caption:
      "L'itinéraire emprunté par cette décennie — chaque arrêt une station où quelque chose a été appris.",
    type: {
      education: "formation",
      internship: "stage",
      freelance: "freelance",
      personal: "personnel",
      achievement: "accomplissement",
      learning: "apprentissage",
    },
    items: {
      "learning-foundations": {
        title: "Début de l'ascension",
        org: "Parcours autodidacte",
        description:
          "J'ai appris les fondamentaux — HTML, CSS, JavaScript et la discipline de terminer de petits projets.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      education: {
        title: "Étudiant en informatique",
        org: "Institution d'exemple",
        description:
          "Base formelle en algorithmes, bases de données et pratiques du génie logiciel en parallèle du développement web autodidacte.",
        tags: ["Algorithmes", "Bases de données"],
      },
      internship: {
        title: "Stage backend",
        org: "Entreprise d'exemple",
        description:
          "J'ai construit des services REST et des outils internes, appris la revue de code et livré de vraies fonctionnalités à de vrais utilisateurs.",
        tags: ["PHP", "MySQL", "REST"],
      },
      freelance: {
        title: "Constructions indépendantes",
        org: "Freelance & projets annexes",
        description:
          "Livraison de produits full-stack pour de petites entreprises — inventaire, facturation et présence web.",
        tags: ["Laravel", "Node.js", "SQL"],
      },
      achievement: {
        title: "Entrée en production",
        org: "Jalon de production",
        description:
          "Premiers systèmes gérant un trafic réel en production : paiements, données d'affaires et tableaux de bord face client.",
        tags: ["Production", "Paiements", "DevOps"],
      },
      present: {
        title: "Dernier arrêt",
        org: "Développeur Full-Stack",
        description:
          "Construire des expériences full-stack fiables et faire avancer le métier — cinématique, accessible et rapide.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
    },
  },
  lab: {
    label: "l'atelier",
    title: "Lab Développeur",
    caption:
      "Un CRT en état de marche, restauré et sécurisé. Tapez une commande — rien ne sort de ce local.",
    memoTitle: "Note d'atelier",
    noteOne:
      "Le terminal est décoratif — les commandes ne touchent jamais un vrai shell.",
    noteTwo: "Essayez <help>, <skills> ou <projects>.",
    noteThree: "À noter : appuyez sur <Tab> pour autocompléter une commande.",
  },
  terminal: {
    ariaLog: "Terminal rétro interactif",
    ariaInput: "Entrée du terminal",
    typeCmd: "Tapez une commande",
    tabStatus: "TAB autocomplète · ↑ historique",
    safeMode: "mode sécurisé — pas de vrai shell",
    crtLabel: "crt://invité@kodecity",
    bannerTitle: "TERMINAL KODECITY v1.1.0 — ACCÈS RESTREINT",
    bannerUplink: "Liaison établie. Pluie enregistrée.",
    bannerHelp: "Tapez 'help' pour voir les commandes disponibles.",
    prompt: "{city}@invité:~$ {value}",
    help: {
      available: "canaux disponibles :",
      help: "  help      — réimprime ce manifeste",
      about: "  about     — dossier du développeur",
      skills: "  skills    — la liste de l'arsenal",
      projects: "  projects  — dossiers d'affaires livrées",
      scenes: "  scenes    — carte des blocs de la ville",
      visit: "  visit <n> — sauter vers une scène (ex. visit 4)",
      contact: "  contact   — ouvrir un canal vers le sujet",
      exit: "  exit      — sortir par la scène finale",
      clear: "  clear     — effacer l'écran",
      hintTab: "astuce : appuyez sur TAB pour autocompléter.",
    },
    about: {
      name: "NOM",
      role: "RÔLE",
      status: "STATUT",
      location: "LOCALISATION",
      focus: "FOCUS",
    },
    projectsNote: "Les dossiers complets vivent dans l'Archive de Projets ci-dessus.",
    contactNote: "Ouvrez un canal via le Signal de Contact ci-dessous.",
    scenesHead: "blocs de la ville (nord → sud) :",
    scenesNote: "utilisez 'visit <n>' pour sauter directement sur un bloc.",
    exitLine: "Bonne nuit. La porte de la ville se trouve derrière les crédits.",
    unknownBlock: "! bloc inconnu. essayez 'scenes' pour une carte.",
    usageVisit: "usage : visit <scene-id | index>",
    unknownCmd: "! commande inconnue : '{cmd}'",
    tryHelp: "Essayez 'help'.",
    wiped: "TERMINAL KODECITY v1.1.0 — écran effacé",
    routingTo: "Acheminement vers {target}…",
    whoami: "{user}@{city} — un développeur qui prête attention.",
  },
  contact: {
    label: "salle radio du toit",
    title: "Signal de Contact",
    caption:
      "Le central de la ville est ouvert. Composez un canal ou transmettez directement un message.",
    primaryFrequency: "fréquence principale",
    form: {
      title: "Transmettre un message",
      name: "nom",
      email: "email",
      subject: "objet",
      message: "message",
      placeholderName: "Camille Martin",
      placeholderEmail: "camille@exemple.com",
      placeholderSubject: "re : une affaire qui mérite d'être ouverte",
      placeholderMessage: "Que construisez-vous ?",
      sending: "transmission…",
      send: "envoyer le signal",
      sentTitle: "Signal Reçu",
      sentText: "transmission enregistrée. réponse sous 48 h.",
      again: "envoyer un autre signal",
      errFields: "Champs manquants ou invalides — vérifiez le nom et l'email.",
      errRejected: "Transmission rejetée.",
    },
  },
  final: {
    closing: "légende de clôture",
    title1: "La ville éteint ses lumières.",
    title2: "Le travail continue.",
    para:
      "Chaque scène de cette page est une vraie construction, une vraie leçon ou une vraie cicatrice. Merci d'avoir arpenté les rues.",
    returnLabel: "Revenir au début",
    credits: {
      aria: "Crédits du site",
      builtIn: "construit dans",
      designed: "conçu par",
      poweredBy: "propulsé par",
      designedValue: "la pluie",
    },
    footer: "© {year} {name} — aucune cape n'a été utilisée.",
  },
  notFound: {
    kicker: "impasse — perdu dans la pluie",
    title: "Cette rue n'existe pas.",
    body:
      "L'adresse que vous avez composée ne mène nulle part dans {city}. Revenez à la place avant que le brouillard ne se referme.",
    back: "revenir à la place",
  },
  errorPage: {
    kicker: "erreur de transmission — rt-404",
    title: "Le réseau de la ville a trébuché.",
    body:
      "Quelque chose a échoué en rendant ce bloc. Essayez le disjoncteur ci-dessous — aucune donnée n'est perdue.",
    action: "relancer le bloc",
  },
  audio: {
    enable: "Activer le son d'ambiance",
    disable: "Désactiver le son d'ambiance",
    ambienceOn: "ambiance : activée",
    ambienceOff: "ambiance : coupée",
  },
};