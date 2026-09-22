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
    cityLine: "Full-Stack Web Developer · AI-Assisted Workflow",
    tagline:
      "Je construis des sites et applications full-stack — pour transformer idées, besoins et problèmes en produits numériques réellement utilisables.",
    role: "Développeur Full-Stack",
    enterArchive: "Découvrir Mon Travail",
    readOn: "À Propos",
  },
  scenes: {
    "scene-hero": { title: "Bienvenue", label: "intro" },
    "scene-identity": { title: "Qui Je Suis", label: "à propos" },
    "scene-about": { title: "Profil", label: "profil" },
    "scene-arsenal": { title: "Tech Stack", label: "compétences" },
    "scene-nft": { title: "Studio Créatif", label: "studio" },
    "scene-experience": { title: "Parcours", label: "parcours" },
    "scene-contact": { title: "Contact", label: "contact" },
    "scene-final": { title: "Clôture", label: "fin" },
  },
  identity: {
    intro: "intro · bonjour",
    titleAsk: "Développeur",
    titleWho: "Qui Construit.",
    devProfile: "Profil Dev",
  },
  profile: {
    developerTitle: "Développeur Full-Stack",
    positioning: "Coding · Building · Experimenting with AI",
    shortBio:
      "Je construis des sites et applications full-stack — en menant une idée du premier croquis au produit final, de l'interface à la base de données.",
    bio: [
      "Je suis Renno Nur Oktaviano, un développeur spécialisé dans les sites et applications full-stack. J'aime construire des choses de zéro — comprendre le besoin, concevoir l'interface, structurer le système, développer les fonctionnalités et m'assurer que le produit final fonctionne vraiment.",
      "Au quotidien, j'utilise des agents IA comme partenaires de développement — ils m'aident à explorer des idées, à implémenter, à déboguer et à itérer plus vite.",
    ],
    currentFocus: "Développement full-stack & workflow assisté par IA",
    location: "Indonésie · UTC+7",
    status: "Ouvert au travail · Stages · Freelance · Collaboration",
    interests: [
      "UI cinématique",
      "Typographie",
      "Technologie rétro",
      "Systèmes distribués",
      "Design de jeux indie",
      "Bandes-son jazz noir",
    ],
    philosophy:
      "L'IA m'aide à écrire et explorer du code plus vite — mais comprendre le problème, choisir la solution, tester le résultat et garantir que le système fonctionne reste mon travail de développeur.",
    caseNumber: "RN-001",
  },
  about: {
    label: "Mon Profil",
    title: "À Propos de Moi",
    caption:
      "Un aperçu de qui je suis, de ce qui me tient à cœur et de la façon dont je travaille en tant que développeur.",
    subjectProfile: "Aperçu du Profil",
    caseOpen: "ID de Profil",
    filePhoto: "photo du développeur —",
    evidenceGradeB: "statut · actif",
    personalStatement: "Déclaration personnelle",
    currentInterests: "Intérêts actuels",
    doctrine: "— principe personnel de développeur",
    meta: {
      status: "STATUT",
      location: "LOCALISATION",
      currentFocus: "FOCUS ACTUEL",
      caseNumber: "ID DE PROFIL",
    },
  },
  arsenal: {
    label: "stack de compétences",
    title: "Tech Stack",
    caption:
      "Les technologies que j'utilise pour concevoir, construire et livrer des produits full-stack.",
    hint: "carte des compétences — chaque outil ici a servi sur de vrais projets",
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
        "App Router, server components, API routes, optimisation d'images et de polices, et déploiements de production.",
      "frontend.React":
        "Architecture de composants, hooks, gestion d'état et rendu soucieux de la performance.",
      "frontend.TypeScript":
        "Typage strict pour les modèles de données, les props et des APIs faciles pour l'équipe.",
      "backend.Laravel / PHP":
        "APIs REST, modèles Eloquent, authentification et applications MVC maintenables.",
      "backend.Node.js":
        "Services API, jobs d'arrière-plan et scripts d'outillage avec une gestion d'erreurs solide.",
      "database.MySQL":
        "Conception de schémas, indexation et optimisation de requêtes pour des charges de production.",
      "database.PostgreSQL":
        "Modélisation relationnelle, colonnes JSON et intégrité transactionnelle.",
      "styling.Tailwind CSS":
        "Styles utility-first avec design tokens et utilitaires de mouvement personnalisés.",
      "styling.Framer Motion / GSAP":
        "Interfaces pilotées par le défilement, micro-interactions et mouvements chorégraphiés.",
      "tooling.Git & GitHub":
        "Flux de branches propres, revue de code et pipelines CI.",
      "tooling.Docker":
        "Environnements locaux reproductibles et simple orchestration de services.",
      "deployment.Vercel":
        "Déploiements de prévisualisation et analyses intégrées pour les applications Next.js.",
      "deployment.Linux / cPanel servers":
        "Nginx, PHP-FPM, gestion des processus et durcissement sécurisé du serveur.",
    },
    overview: {
      title: "Aperçu des Compétences",
      loaded: "Chargé",
      loadedValue: "{count}/{total}",
      avg: "Niveau Moyen",
      top: "Meilleure Compétence",
    },
  },
  status: {
    live: "EN LIGNE",
    archived: "ARCHIVÉ",
    inProgress: "EN COURS",
  },
  nft: {
    label: "expérimentations créatives · visuels assistés par IA",
    title: "Études Visuelles Assistées par IA",
    caption:
      "Un espace d'expérimentations visuelles — designs de personnages et de tenues explorés via la génération d'images assistée par IA. Une étude pratique de la façon dont les outils génératifs prolongent un flux de travail créatif humain.",
    outputs: "sorties sélectionnées",
    framesHint: "les cadres filent sur les côtés sur écrans larges",
    fig: "fig {n} / {total}",
    endRunTitle: "fin de cette série",
    endRunText: "trois pièces — continuez à défiler pour voir comment elles ont été faites",
    workflow: "flux de travail créatif",
    workflowHint: "cinq étapes — le flux file sur les côtés sur écrans larges",
    endFlowTitle: "fin du flux",
    endFlowText: "du concept à l'œuvre — en cinq étapes",
    process: {
      "01": {
        title: "Concept",
        short:
          "Définir le sujet, l'ambiance et la direction visuelle à explorer.",
      },
      "02": {
        title: "Génération",
        short:
          "Expériences de prompts sur ChatGPT, Gemini, DeepSeek et Claude pour découvrir des directions visuelles.",
      },
      "03": {
        title: "Itération",
        short:
          "Pousser tenues, accessoires, éclairages et fonds — un sujet, de nombreuses variations.",
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
      "ms-central-cee": {
        description:
          "Étude de tenue inspirée du streetwear — couches affirmées et branding audacieux sous une lumière tamisée.",
        tags: ["Tenue", "Streetwear"],
      },
      "ms-travis-scott": {
        description:
          "Une version plus sombre de la même silhouette — couches graphiques et palette morose.",
        tags: ["Tenue", "Sombre"],
      },
      "ms-body": {
        description:
          "Le corps de base vierge — une page blanche avant chaque couche de tenue; en pose pour la collection.",
        tags: ["Base", "Modèle"],
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
    label: "parcours de développeur · journal de travail",
    title: "Parcours de Développeur",
    caption:
      "Mon parcours de création — des fondamentaux autodidactes et un stage backend jusqu'au travail freelance et aux systèmes en production.",
    type: {
      internship: "stage",
      freelance: "freelance",
      personal: "personnel",
      achievement: "accomplissement",
      learning: "apprentissage",
    },
    items: {
      "learning-foundations": {
        title: "Apprentissage des fondamentaux",
        org: "Parcours autodidacte",
        description:
          "J'ai appris les fondamentaux — HTML, CSS, JavaScript et la discipline de terminer de petits projets.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      internship: {
        title: "Stage backend",
        org: "PT. Deswa Invisco Multitama",
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
        title: "Vers la production",
        org: "Jalon de production",
        description:
          "Premiers systèmes gérant un trafic réel en production : paiements, données métier et tableaux de bord face client.",
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
    label: "contactez-moi",
    title: "Construisons.",
    caption:
      "Vous avez une idée, un projet ou envie de parler développement ? Envoyez-moi un message ou passez par votre canal préféré.",
    emailLabel: "email",
    socialsLabel: "réseaux",
    response: "Réponse la plus rapide sur les canaux ci-dessous.",
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
      sentText: "Message reçu — merci de m'avoir contacté.",
      again: "envoyer un autre message",
      errFields: "Champs manquants ou invalides — vérifiez le nom et l'email.",
      errRejected: "Message rejeté. Réessayez plus tard.",
      errServer: "Échec de la transmission — réessayez ou utilisez les canaux ci-dessus.",
    },
  },
  final: {
    closing: "clôture",
    title1: "Merci d'avoir",
    title2: "visité mon portfolio.",
    para:
      "Ce site est construit avec curiosité, code et développement assisté par IA — chaque scène ici est une construction réelle, une leçon réelle ou un produit réel. Si quelque chose a retenu votre attention, construisons quelque chose ensemble.",
    returnLabel: "Revenir au début",
    credits: {
      aria: "Crédits du site",
      builtIn: "construit avec",
      designed: "conçu",
      poweredBy: "propulsé par",
      designedValue: "dans l'obscurité",
    },
    footer: "© {year} {name} — construit avec curiosité, code & IA.",
  },
  notFound: {
    kicker: "404 — cette page n'existe pas",
    title: "Page introuvable.",
    body:
      "La page que vous cherchez n'est pas ici — elle a peut-être bougé, ou n'a peut-être jamais existé. Revenez au début et explorez le portfolio.",
    back: "Revenir au début",
  },
  errorPage: {
    kicker: "quelque chose a échoué",
    title: "Erreur inattendue.",
    body:
      "Une erreur s'est produite lors du rendu de cette page. Essayez de recharger ci-dessous — rien n'est perdu.",
    action: "Recharger la page",
  },
};