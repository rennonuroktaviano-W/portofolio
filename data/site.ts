const DEFAULT_SITE_URL = "https://rennonuroktaviano.vercel.app";

function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const value = configured && configured.length > 0 ? configured : DEFAULT_SITE_URL;
  return value.replace(/\/+$/, "");
}

export const site = {
  name: "Renno Nur Oktaviano",
  brand: "RENNO NUR OKTAVIANO",
  initials: "RN",
  role: "Full-Stack Developer",
  city: "Next.js + TypeScript",
  url: resolveSiteUrl(),
  metaDescription:
    "Portfolio of Renno Nur Oktaviano — full-stack web developer building websites and applications from interface to database with an AI-assisted development workflow.",
  keywords: [
    "Renno Nur Oktaviano",
    "full-stack developer",
    "web developer",
    "full stack developer Indonesia",
    "Next.js developer",
    "React developer",
    "Laravel developer",
    "TypeScript",
    "portfolio",
    "Indonesia",
  ],
} as const;
