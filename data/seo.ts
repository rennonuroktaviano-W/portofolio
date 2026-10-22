import type { Locale } from "@/lib/i18n/languages";

export type LocaleSeo = {
  title: string;
  description: string;
  ogLocale: string;
};

/**
 * Per-locale metadata for the portfolio home page. Copy is derived from the
 * real content of the site (role, stack, location) — no invented claims.
 */
export const seoByLocale: Record<Locale, LocaleSeo> = {
  en: {
    title: "Renno Nur Oktaviano — Full-Stack Developer (Next.js, Laravel)",
    description:
      "Portfolio of Renno Nur Oktaviano, a full-stack web developer from Indonesia building production websites and applications with Next.js, TypeScript and Laravel.",
    ogLocale: "en_US",
  },
  id: {
    title: "Renno Nur Oktaviano — Full-Stack Developer Indonesia (Next.js, Laravel)",
    description:
      "Portofolio Renno Nur Oktaviano, full-stack web developer dari Indonesia yang membangun website dan aplikasi produksi dengan Next.js, TypeScript, dan Laravel.",
    ogLocale: "id_ID",
  },
  es: {
    title: "Renno Nur Oktaviano — Desarrollador Full-Stack (Next.js, Laravel)",
    description:
      "Portafolio de Renno Nur Oktaviano, desarrollador web full-stack de Indonesia que crea sitios y aplicaciones en producción con Next.js, TypeScript y Laravel.",
    ogLocale: "es_ES",
  },
  fr: {
    title: "Renno Nur Oktaviano — Développeur Full-Stack (Next.js, Laravel)",
    description:
      "Portfolio de Renno Nur Oktaviano, développeur web full-stack basé en Indonésie, qui conçoit des sites et des applications en production avec Next.js, TypeScript et Laravel.",
    ogLocale: "fr_FR",
  },
  de: {
    title: "Renno Nur Oktaviano — Full-Stack-Entwickler (Next.js, Laravel)",
    description:
      "Portfolio von Renno Nur Oktaviano, Full-Stack-Webentwickler aus Indonesien, der Websites und Produktionsanwendungen mit Next.js, TypeScript und Laravel baut.",
    ogLocale: "de_DE",
  },
  ja: {
    title: "Renno Nur Oktaviano — フルスタック開発者 (Next.js, Laravel)",
    description:
      "Renno Nur Oktaviano のポートフォリオ。インドネシアを拠点に、Next.js・TypeScript・Laravel を使って実用的なウェブサイトとアプリケーションを開発しています。",
    ogLocale: "ja_JP",
  },
};
