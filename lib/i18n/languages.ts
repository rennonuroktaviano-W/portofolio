export type Locale = "en" | "id" | "es" | "fr" | "de" | "ja";

export const LOCALE_KEY = "kodecity:locale";

export const languages: {
  code: Locale;
  label: string;
  native: string;
}[] = [
  { code: "en", label: "English", native: "English · EN" },
  { code: "id", label: "Bahasa Indonesia", native: "Bahasa Indonesia · ID" },
  { code: "es", label: "Español", native: "Español · ES" },
  { code: "fr", label: "Français", native: "Français · FR" },
  { code: "de", label: "Deutsch", native: "Deutsch · DE" },
  { code: "ja", label: "日本語", native: "日本語 · JA" },
];

export const isLocale = (value: string | null | undefined): value is Locale =>
  !!value && languages.some((lang) => lang.code === value);

export const languageById = (code: Locale) =>
  languages.find((lang) => lang.code === code);

/** First path segment of a pathname when it is a locale prefix. */
export function localeSegment(pathname: string): Locale | null {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isLocale(first) ? first : null;
}

export type LocaleTarget = {
  /** Path the browser should display for the requested locale. */
  path: string;
  /** Whether the page at that path is actually rendered in that locale. */
  localized: boolean;
};

/**
 * Maps the current pathname onto a locale variant. Only routes that exist in
 * every language may carry a locale prefix; single-language routes keep their
 * path and swap the language in place.
 */
export function localeTarget(pathname: string, code: Locale): LocaleTarget {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first)) {
    const rest = segments.slice(1);
    const next = code === "en" ? rest : [code, ...rest];
    return { path: `/${next.join("/")}`, localized: true };
  }

  if (segments.length === 0) {
    return { path: code === "en" ? "/" : `/${code}`, localized: true };
  }

  if (segments.length === 1 && segments[0] === "about") {
    return { path: code === "en" ? "/about" : `/${code}/about`, localized: true };
  }

  return { path: pathname, localized: false };
}

/** Path of the bio page for the locale that owns the current pathname. */
export function aboutPathFor(pathname: string): string {
  const segment = localeSegment(pathname);
  return segment ? `/${segment}/about` : "/about";
}
