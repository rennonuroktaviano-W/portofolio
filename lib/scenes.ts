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
  { id: "scene-showcase", chapter: 5, title: "Featured Cinematics", label: "files" },
  { id: "scene-nft", chapter: 6, title: "Creative Studio", label: "collectibles" },
  { id: "scene-experience", chapter: 7, title: "Night Train", label: "route" },
  { id: "scene-contact", chapter: 8, title: "Contact Signal", label: "signal" },
  { id: "scene-final", chapter: 9, title: "Night Falls", label: "end" },
];

export const sceneById = (id: string) =>
  sceneDefinitions.find((s) => s.id === id);