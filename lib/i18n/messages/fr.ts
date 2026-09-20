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
    enterArchive: "OUVRIR LES FICHIERS",
    readOn: "Continuer —",
  },
  scenes: {
    "scene-hero": { title: "La Ville S'Éveille", label: "intro" },
    "scene-identity": { title: "Révélation d'Identité", label: "qui" },
    "scene-about": { title: "Dossier", label: "à propos" },
    "scene-arsenal": { title: "Arsenal Technique", label: "compétences" },
    "scene-nft": { title: "Studio Créatif", label: "collectibles" },
    "scene-experience": { title: "Train de Nuit", label: "parcours" },
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
  status: {
    live: "EN LIGNE",
    archived: "ARCHIVÉ",
    inProgress: "EN COURS",
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
    caseVisual: "visuel de l'affaire",
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
  contact: {
    label: "où me joindre",
    title: "Contactez-moi",
    caption:
      "Un projet, une opportunité ou juste dire bonjour ? Envoyez un message ou choisissez votre canal préféré.",
    emailLabel: "email",
    socialsLabel: "réseaux",
    response: "Réponse généralement sous 1 à 2 jours ouvrés.",
    form: {
      title: "Envoyez un message direct",
      name: "nom",
      email: "email",
      subject: "objet",
      message: "message",
      placeholderName: "Camille Martin",
      placeholderEmail: "camille@exemple.com",
      placeholderSubject: "re : un projet qui vaut le coup",
      placeholderMessage: "Que construisez-vous ?",
      sending: "envoi…",
      send: "envoyer le message",
      sentTitle: "Message Envoyé",
      sentText: "Votre message a été envoyé — je reviens vers vous rapidement.",
      again: "envoyer un autre message",
      errFields: "Champs manquants ou invalides — vérifiez le nom et l'email.",
      errRejected: "Message rejeté. Réessayez plus tard.",
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