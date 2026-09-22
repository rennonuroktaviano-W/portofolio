export type SceneKey =
  | "scene-hero"
  | "scene-identity"
  | "scene-about"
  | "scene-arsenal"
  | "scene-nft"
  | "scene-experience"
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
  status: {
    live: string;
    archived: string;
    inProgress: string;
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
    caseVisual: string;
  };
  experience: {
    label: string;
    title: string;
    caption: string;
    type: {
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
  contact: {
    label: string;
    title: string;
    caption: string;
    emailLabel: string;
    socialsLabel: string;
    response: string;
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
      errServer: string;
    };
  };
  final: {
    closing: string;
    title1: string;
    title2: string;
    para: string;
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
};