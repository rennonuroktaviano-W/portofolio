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
  { id: "scene-archive", chapter: 5, title: "Project Archive", label: "work" },
  { id: "scene-showcase", chapter: 6, title: "Featured Cinematics", label: "files" },
  { id: "scene-experience", chapter: 7, title: "Night Train", label: "route" },
  { id: "scene-lab", chapter: 8, title: "Developer Lab", label: "lab" },
  { id: "scene-git", chapter: 9, title: "Activity Signal", label: "signals" },
  { id: "scene-contact", chapter: 10, title: "Contact Signal", label: "signal" },
  { id: "scene-final", chapter: 11, title: "Night Falls", label: "end" },
];

export const sceneById = (id: string) =>
  sceneDefinitions.find((s) => s.id === id);