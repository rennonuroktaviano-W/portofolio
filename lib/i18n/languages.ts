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

export const isLocale = (value: string | null): value is Locale =>
  !!value && languages.some((lang) => lang.code === value);

export const languageById = (code: Locale) =>
  languages.find((lang) => lang.code === code);