import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { aboutPath, localeHomePath } from "@/lib/seo";
import { languages } from "@/lib/i18n/languages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const localizedHomes = languages.map((language) => ({
    url: `${site.url}${localeHomePath(language.code)}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: language.code === "en" ? 1 : 0.8,
  }));

  const aboutPages = languages.map((language) => ({
    url: `${site.url}${aboutPath(language.code)}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: language.code === "en" ? 0.9 : 0.7,
  }));

  const projectPages = [
    {
      url: `${site.url}/projects`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...localizedHomes, ...aboutPages, ...projectPages];
}
