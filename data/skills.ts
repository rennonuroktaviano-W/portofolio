export type Skill = {
  name: string;
  description: string;
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
      {
        name: "Next.js",
        description:
          "App Router, server components, route handlers, image + font optimization, and mid-scale production deployments.",
        level: 90,
        tags: ["SSR", "App Router", "SEO"],
      },
      {
        name: "React",
        description:
          "Composable component architectures, hooks, context, and performance-conscious re-render management.",
        level: 88,
        tags: ["Hooks", "State", "Suspense"],
      },
      {
        name: "TypeScript",
        description:
          "Strict typing by default — typed data models, generics, and interfaces that make teams move faster.",
        level: 85,
        tags: ["Strict", "Generics"],
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    code: "BACK-END",
    items: [
      {
        name: "Laravel / PHP",
        description:
          "REST APIs, Eloquent modeling, authentication, and maintainable MVC applications shipped to production.",
        level: 84,
        tags: ["REST", "Eloquent", "Auth"],
      },
      {
        name: "Node.js",
        description:
          "API services, background jobs, and tooling scripts with careful error handling and observability.",
        level: 78,
        tags: ["APIs", "CLI", "Jobs"],
      },
    ],
  },
  {
    id: "database",
    label: "Database",
    code: "DATA",
    items: [
      {
        name: "MySQL",
        description:
          "Schema design, indexing strategy, and query optimization for read-heavy production workloads.",
        level: 82,
        tags: ["Indexing", "SQL"],
      },
      {
        name: "PostgreSQL",
        description:
          "Relational modeling, JSON columns, and transactional integrity for data-sensitive features.",
        level: 76,
        tags: ["JSONB", "Transactions"],
      },
    ],
  },
  {
    id: "styling",
    label: "Styling",
    code: "STYLE",
    items: [
      {
        name: "Tailwind CSS",
        description:
          "Utility-first systems with design tokens, dark themes, and custom motion utilities.",
        level: 90,
        tags: ["Tokens", "Responsive"],
      },
      {
        name: "Framer Motion / GSAP",
        description:
          "Scroll-driven storytelling, micro-interactions, and choreographed interface motion.",
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
      {
        name: "Git & GitHub",
        description:
          "Clean branch workflows, conventional commits, code review, and CI pipelines.",
        level: 88,
        tags: ["Workflows", "CI"],
      },
      {
        name: "Docker",
        description:
          "Reproducible local environments and simple service orchestration.",
        level: 70,
        tags: ["Containers"],
      },
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    code: "DEPLOY",
    items: [
      {
        name: "Vercel",
        description:
          "Preview deployments, edge functions, and analytics for Next.js applications.",
        level: 86,
        tags: ["Preview", "Edge"],
      },
      {
        name: "Linux / cPanel servers",
        description:
          "Nginx reverse proxy, PHP-FPM, process management, and secure server hardening.",
        level: 74,
        tags: ["Nginx", "PHP-FPM"],
      },
    ],
  },
];