import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.brand} — ${site.role}`,
    short_name: site.brand,
    description: site.metaDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#08090b",
    theme_color: "#08090b",
    categories: ["portfolio", "developer", "design"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      {
        src: "/og/cover.svg",
        sizes: "960x540",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}