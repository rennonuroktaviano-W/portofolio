import type { Metadata } from "next";
import { site } from "@/data/site";
import { seoByLocale, aboutSeoByLocale } from "@/data/seo";
import { languages, type Locale } from "@/lib/i18n/languages";

export const SITE_URL = site.url;

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path: string = "/"): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

/** Public path of the portfolio home page for a given locale. */
export function localeHomePath(locale: Locale): string {
  return locale === "en" ? "/" : `/${locale}`;
}

/**
 * hreflang map for the home page. Every locale page points at every other
 * locale page (reciprocal), and `x-default` points at the English root.
 */
export function homeAlternates(): Record<string, string> {
  const alternates: Record<string, string> = { "x-default": "/" };
  for (const language of languages) {
    alternates[language.code] = localeHomePath(language.code);
  }
  return alternates;
}

/** Locales that have their own static route (English lives at the root). */
export const localizedLocales = languages
  .map((language) => language.code)
  .filter((code) => code !== "en");

/** JSON-LD describing a localized portfolio home page. */
export function webPageLd(locale: Locale) {
  const seo = seoByLocale[locale];
  const path = localeHomePath(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: seo.title,
    description: seo.description,
    inLanguage: locale,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    primaryImageOfPage: `${SITE_URL}/og/cover.png`,
  };
}

/** Public path of the bio page for a given locale. */
export function aboutPath(locale: Locale): string {
  return locale === "en" ? "/about" : `/${locale}/about`;
}

/**
 * hreflang map for the bio page. Every locale page points at every other
 * locale page (reciprocal), and `x-default` points at the English page.
 */
export function aboutAlternates(): Record<string, string> {
  const alternates: Record<string, string> = { "x-default": "/about" };
  for (const language of languages) {
    alternates[language.code] = aboutPath(language.code);
  }
  return alternates;
}

/** Metadata for the bio page in a given locale. */
export function aboutMetadata(locale: Locale): Metadata {
  const seo = aboutSeoByLocale[locale];
  const path = aboutPath(locale);

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: path,
      languages: aboutAlternates(),
    },
    openGraph: {
      type: "profile",
      url: path,
      title: seo.title,
      description: seo.description,
      siteName: site.brand,
      locale: seo.ogLocale,
      images: [
        {
          url: "/og/cover.png",
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/og/cover.png"],
    },
  };
}
