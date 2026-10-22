import { site } from "@/data/site";
import { seoByLocale } from "@/data/seo";
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
