export type Milestone = {
  id: string;
  period: string;
  type:
    | "internship"
    | "freelance"
    | "personal"
    | "achievement"
    | "learning";
  tags: string[];
};

export const milestones: Milestone[] = [
  {
    id: "learning-foundations",
    period: "2022",
    type: "learning",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "internship",
    period: "2024",
    type: "internship",
    tags: ["PHP", "MySQL", "REST"],
  },
  {
    id: "freelance",
    period: "2024 — 2025",
    type: "freelance",
    tags: ["Laravel", "Node.js", "SQL"],
  },
  {
    id: "achievement",
    period: "2025",
    type: "achievement",
    tags: ["Production", "Payments", "DevOps"],
  },
  {
    id: "present",
    period: "2026 — Now",
    type: "personal",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];