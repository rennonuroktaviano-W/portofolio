export type SceneDefinition = {
  id: string;
  chapter: number;
  title: string;
  label: string;
};

export const sceneDefinitions: SceneDefinition[] = [
  { id: "scene-hero", chapter: 1, title: "Welcome", label: "intro" },
  { id: "scene-identity", chapter: 2, title: "Who I Am", label: "about" },
  { id: "scene-about", chapter: 3, title: "Profile", label: "profile" },
  { id: "scene-arsenal", chapter: 4, title: "Tech Stack", label: "skills" },
  { id: "scene-certificates", chapter: 5, title: "Certificates", label: "credentials" },
  { id: "scene-nft", chapter: 6, title: "Creative Studio", label: "studio" },
  { id: "scene-experience", chapter: 7, title: "Development Journey", label: "journey" },
  { id: "scene-contact", chapter: 8, title: "Contact", label: "contact" },
  { id: "scene-final", chapter: 9, title: "Closing", label: "end" },
];