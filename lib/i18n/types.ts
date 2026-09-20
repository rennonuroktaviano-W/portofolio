export type SceneKey =
  | "scene-hero"
  | "scene-identity"
  | "scene-about"
  | "scene-arsenal"
  | "scene-archive"
  | "scene-showcase"
  | "scene-nft"
  | "scene-experience"
  | "scene-lab"
  | "scene-git"
  | "scene-contact"
  | "scene-final";

export type Messages = {
  skip: string;
  languageSwitcher: {
    label: string;
  };
  sceneIndicator: {
    label: string;
    goTo: string;
  };
  hero: {
    cityLine: string;
    tagline: string;
    role: string;
    enterArchive: string;
    readOn: string;
  };
  scenes: Record<SceneKey, { title: string; label: string }>;
  identity: {
    intro: string;
    titleAsk: string;
    titleWho: string;
    devProfile: string;
  };
  profile: {
    developerTitle: string;
    positioning: string;
    shortBio: string;
    bio: string[];
    currentFocus: string;
    location: string;
    status: string;
    education: string;
    interests: string[];
    philosophy: string;
    caseNumber: string;
  };
  about: {
    label: string;
    title: string;
    caption: string;
    subjectProfile: string;
    caseOpen: string;
    filePhoto: string;
    evidenceGradeB: string;
    personalStatement: string;
    currentInterests: string;
    doctrine: string;
    meta: {
      status: string;
      location: string;
      currentFocus: string;
      education: string;
      caseNumber: string;
    };
  };
  arsenal: {
    label: string;
    title: string;
    caption: string;
    hint: string;
    category: {
      frontend: string;
      backend: string;
      database: string;
      styling: string;
      tooling: string;
      deployment: string;
    };
    skill: Record<string, string>;
    overview: {
      title: string;
      loaded: string;
      loadedValue: string;
      avg: string;
      top: string;
    };
  };
  archive: {
    label: string;
    title: string;
    caption: string;
    hint: string;
    openCase: string;
    endTitle: string;
    endText: string;
  };
  status: {
    live: string;
    archived: string;
    inProgress: string;
  };
  showcase: {
    label: string;
    title: string;
    caption: string;
    evidenceFile: string;
    problem: string;
    solution: string;
    momentItHurt: string;
    aftermath: string;
    caseVisual: string;
    artCaseCover: string;
    liveSignal: string;
    sourceCode: string;
    liveDemo: string;
    projects: Record<string, ProjectMessages>;
  };
  git: {
    label: string;
    title: string;
    caption: string;
    signal: string;
    commitsSteady: string;
    openRepository: string;
    footer: string;
  };
  nft: {
    label: string;
    title: string;
    caption: string;
    outputs: string;
    framesHint: string;
    fig: string;
    endRunTitle: string;
    endRunText: string;
    workflow: string;
    workflowHint: string;
    endFlowTitle: string;
    endFlowText: string;
    process: Record<string, { title: string; short: string }>;
    artwork: Record<string, { description: string; tags: string[] }>;
  };
  lightbox: {
    vault: string;
    viewerLabel: string;
    openViewer: string;
    close: string;
    prev: string;
    next: string;
    prevShort: string;
    nextShort: string;
    aiLabel: string;
  };
  experience: {
    label: string;
    title: string;
    caption: string;
    type: {
      education: string;
      internship: string;
      freelance: string;
      personal: string;
      achievement: string;
      learning: string;
    };
    items: Record<
      string,
      { title: string; org: string; description: string; tags: string[] }
    >;
  };
  lab: {
    label: string;
    title: string;
    caption: string;
    memoTitle: string;
    noteOne: string;
    noteTwo: string;
    noteThree: string;
  };
  terminal: {
    ariaLog: string;
    ariaInput: string;
    typeCmd: string;
    tabStatus: string;
    safeMode: string;
    crtLabel: string;
    bannerTitle: string;
    bannerUplink: string;
    bannerHelp: string;
    prompt: string;
    help: {
      available: string;
      help: string;
      about: string;
      skills: string;
      projects: string;
      scenes: string;
      visit: string;
      contact: string;
      exit: string;
      clear: string;
      hintTab: string;
    };
    about: {
      name: string;
      role: string;
      status: string;
      location: string;
      focus: string;
    };
    projectsNote: string;
    contactNote: string;
    scenesHead: string;
    scenesNote: string;
    exitLine: string;
    unknownBlock: string;
    usageVisit: string;
    unknownCmd: string;
    tryHelp: string;
    wiped: string;
    routingTo: string;
    whoami: string;
  };
  contact: {
    label: string;
    title: string;
    caption: string;
    primaryFrequency: string;
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      placeholderName: string;
      placeholderEmail: string;
      placeholderSubject: string;
      placeholderMessage: string;
      sending: string;
      send: string;
      sentTitle: string;
      sentText: string;
      again: string;
      errFields: string;
      errRejected: string;
    };
  };
  final: {
    closing: string;
    title1: string;
    title2: string;
    para: string;
    returnLabel: string;
    credits: {
      aria: string;
      builtIn: string;
      designed: string;
      poweredBy: string;
      designedValue: string;
    };
    footer: string;
  };
  notFound: {
    kicker: string;
    title: string;
    body: string;
    back: string;
  };
  errorPage: {
    kicker: string;
    title: string;
    body: string;
    action: string;
  };
  audio: {
    enable: string;
    disable: string;
    ambienceOn: string;
    ambienceOff: string;
  };
};

export type ProjectMessages = {
  title: string;
  oneLiner: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  challenge: string;
  outcome: string;
};