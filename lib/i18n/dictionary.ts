import { en } from "./messages/en";
import { id } from "./messages/id";
import { es } from "./messages/es";
import { fr } from "./messages/fr";
import { de } from "./messages/de";
import { ja } from "./messages/ja";
import type { Locale } from "./languages";
import type { Messages } from "./types";

export type Vars = Record<string, string | number>;

export const dictionaries: Record<Locale, Messages> = { en, id, es, fr, de, ja };

export function readValue(messages: Messages, path: string): unknown {
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

export function interpolate(text: string, vars?: Vars): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}

/** Translated string for a dotted path, falling back to English. */
export function translate(locale: Locale, path: string, vars?: Vars): string {
  const found = readValue(dictionaries[locale], path);
  if (typeof found === "string") return interpolate(found, vars);
  const fallback = readValue(en, path);
  return interpolate(typeof fallback === "string" ? fallback : path, vars);
}

/** Translated list for a dotted path, falling back to English. */
export function translateList(locale: Locale, path: string): string[] {
  const found = readValue(dictionaries[locale], path);
  if (Array.isArray(found)) return found.map((item) => String(item));
  const fallback = readValue(en, path);
  return Array.isArray(fallback) ? fallback.map((item) => String(item)) : [];
}

/** Raw lookup for a dotted path, falling back to English. */
export function lookupValue(
  locale: Locale,
  path: string
): string | string[] | undefined {
  const found = readValue(dictionaries[locale], path);
  if (typeof found === "string" || Array.isArray(found)) return found;
  const fallback = readValue(en, path);
  if (typeof fallback === "string" || Array.isArray(fallback)) return fallback;
  return undefined;
}
