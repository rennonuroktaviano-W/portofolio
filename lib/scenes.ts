export type SceneDefinition = {
  id: string;
  chapter: number;
  title: string;
  label: string;
};

export const sceneDefinitions: SceneDefinition[] = [
  { id: "scene-hero", chapter: 1, title: "The City Awakens", label: "intro" },
  { id: "scene-identity", chapter: 2, title: "Identity Reveal", label: "who" },
  { id: "scene-about", chapter: 3, title: "Case File", label: "about" },
  { id: "scene-arsenal", chapter: 4, title: "Tech Arsenal", label: "skills" },
  { id: "scene-nft", chapter: 5, title: "Creative Studio", label: "collectibles" },
  { id: "scene-experience", chapter: 6, title: "Night Train", label: "route" },
  { id: "scene-contact", chapter: 7, title: "Contact Signal", label: "signal" },
  { id: "scene-final", chapter: 8, title: "Night Falls", label: "end" },
];