"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "./messages/en";
import { id } from "./messages/id";
import { es } from "./messages/es";
import { fr } from "./messages/fr";
import { de } from "./messages/de";
import { ja } from "./messages/ja";
import {
  isLocale,
  LOCALE_KEY,
  languages,
  type Locale,
} from "./languages";
import type { Messages } from "./types";

const dictionaries: Record<Locale, Messages> = { en, id, es, fr, de, ja };

type Vars = Record<string, string | number>;

type I18nContextValue = {
  locale: Locale;
  languages: typeof languages;
  setLocale: (locale: Locale) => void;
  t: (path: string, vars?: Vars) => string;
  lookup: (path: string) => string | string[] | undefined;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readValue(messages: Messages, path: string): unknown {
  let node: unknown = messages;
  const segments = path.split(".");
  for (let i = 0; i < segments.length; i++) {
    if (node === null || node === undefined || typeof node !== "object") {
      return undefined;
    }
    const record = node as Record<string, unknown>;
    const dottedRest = segments.slice(i).join(".");
    if (record[dottedRest] !== undefined) return record[dottedRest];
    const key = segments[i];
    if (key in record) {
      node = record[key];
    } else {
      return undefined;
    }
  }
  return node;
}

function interpolate(text: string, vars?: Vars): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}

function resolveInitial(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(LOCALE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* storage unavailable */
  }
  try {
    const candidate = window.navigator.language.split("-")[0] ?? "";
    if (isLocale(candidate)) return candidate;
  } catch {
    /* navigator unavailable */
  }
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const resolved = resolveInitial();
    const timer = window.setTimeout(() => {
      setLocaleState(resolved);
      document.documentElement.lang = resolved;
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_KEY, next);
    } catch {
      /* storage unavailable */
    }
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (path: string, vars?: Vars) => {
      const messages = dictionaries[locale];
      const found = readValue(messages, path);
      if (typeof found === "string") {
        return interpolate(found, vars);
      }
      const fallback = readValue(en, path);
      return interpolate(typeof fallback === "string" ? fallback : path, vars);
    },
    [locale]
  );

  const lookup = useCallback(
    (path: string): string | string[] | undefined => {
      const found = readValue(dictionaries[locale], path);
      if (typeof found === "string" || Array.isArray(found)) return found;
      const fallback = readValue(en, path);
      if (typeof fallback === "string" || Array.isArray(fallback)) {
        return fallback;
      }
      return undefined;
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, languages, setLocale, t, lookup }),
    [locale, setLocale, t, lookup]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}