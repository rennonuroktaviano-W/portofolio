export type Milestone = {
  id: string;
  period: string;
  year: string;
  title: string;
  org: string;
  type:
    | "education"
    | "internship"
    | "freelance"
    | "personal"
    | "achievement"
    | "learning";
  description: string;
  tags: string[];
};

export const milestones: Milestone[] = [
  {
    id: "learning-foundations",
    period: "2022",
    year: "2022",
    title: "Started the climb",
    org: "Self-taught route",
    type: "learning",
    description:
      "Learned the fundamentals — HTML, CSS, JavaScript, and the discipline of finishing small projects.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "education",
    period: "2022 — 2024",
    year: "2024",
    title: "Informatics student",
    org: "Placeholder institution",
    type: "education",
    description:
      "Formal grounding in algorithms, databases, and software engineering practices alongside self-driven web development.",
    tags: ["Algorithms", "Databases"],
  },
  {
    id: "internship",
    period: "2024",
    year: "2024",
    title: "Backend internship",
    org: "Placeholder company",
    type: "internship",
    description:
      "Built REST services and internal tools, learned code review, and shipped real features to real users.",
    tags: ["PHP", "MySQL", "REST"],
  },
  {
    id: "freelance",
    period: "2024 — 2025",
    year: "2025",
    title: "Independent builds",
    org: "Freelance & side projects",
    type: "freelance",
    description:
      "Delivered full-stack product work for small businesses — inventory, invoicing, and web presence.",
    tags: ["Laravel", "Node.js", "SQL"],
  },
  {
    id: "achievement",
    period: "2025",
    year: "2025",
    title: "Crossed into production",
    org: "Production milestone",
    type: "achievement",
    description:
      "First systems handling real traffic in production: payments, case data, and customer-facing dashboards.",
    tags: ["Production", "Payments", "DevOps"],
  },
  {
    id: "present",
    period: "2026 — Now",
    year: "Now",
    title: "Current stop",
    org: "Full-Stack Developer",
    type: "personal",
    description:
      "Building dependable full-stack experiences and pushing the craft — cinematic, accessible, and fast.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export const milestonesByYear = (year: string) =>
  milestones.filter((m) => m.year === year);