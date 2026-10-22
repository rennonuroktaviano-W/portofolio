import type { Metadata } from "next";
import { NotFoundView } from "@/components/ui/NotFoundView";
import { site } from "@/data/site";

const description = `The page you are looking for does not exist. Head back to the portfolio of ${site.name}.`;

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description,
  alternates: {
    canonical: null,
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    title: "404 — Page Not Found",
    description,
    siteName: site.brand,
    images: [
      {
        url: "/og/cover.png",
        width: 1200,
        height: 630,
        alt: `${site.brand} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 — Page Not Found",
    description,
    images: ["/og/cover.png"],
  },
};

export default function NotFound() {
  return <NotFoundView />;
}
