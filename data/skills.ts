export type Skill = {
  name: string;
  level: number;
  tags?: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  code: string;
  items: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    code: "FRONT-END",
    items: [
      { name: "Next.js", level: 90, tags: ["SSR", "App Router", "SEO"] },
      { name: "React", level: 88, tags: ["Hooks", "State", "Suspense"] },
      { name: "TypeScript", level: 85, tags: ["Strict", "Generics"] },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    code: "BACK-END",
    items: [
      { name: "Laravel / PHP", level: 84, tags: ["REST", "Eloquent", "Auth"] },
      { name: "Node.js", level: 78, tags: ["APIs", "CLI", "Jobs"] },
    ],
  },
  {
    id: "database",
    label: "Database",
    code: "DATA",
    items: [
      { name: "MySQL", level: 82, tags: ["Indexing", "SQL"] },
      { name: "PostgreSQL", level: 76, tags: ["JSONB", "Transactions"] },
    ],
  },
  {
    id: "styling",
    label: "Styling",
    code: "STYLE",
    items: [
      { name: "Tailwind CSS", level: 90, tags: ["Tokens", "Responsive"] },
      {
        name: "Framer Motion / GSAP",
        level: 80,
        tags: ["ScrollTrigger", "Springs"],
      },
    ],
  },
  {
    id: "tooling",
    label: "Tooling",
    code: "TOOLS",
    items: [
      { name: "Git & GitHub", level: 88, tags: ["Workflows", "CI"] },
      { name: "Docker", level: 70, tags: ["Containers"] },
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    code: "DEPLOY",
    items: [
      { name: "Vercel", level: 86, tags: ["Preview", "Edge"] },
      { name: "Linux / cPanel servers", level: 74, tags: ["Nginx", "PHP-FPM"] },
    ],
  },
];