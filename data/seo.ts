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

/**
 * Per-locale metadata for the bio page. The full name leads every title so
 * the page can compete for brand-name queries.
 */
export const aboutSeoByLocale: Record<Locale, LocaleSeo> = {
  en: {
    title: "About Renno Nur Oktaviano — Full-Stack Developer from Indonesia",
    description:
      "Renno Nur Oktaviano is a full-stack developer from Indonesia building production websites and web applications with Next.js, TypeScript, Laravel and Node.js. Bio, stack, journey and contact.",
    ogLocale: "en_US",
  },
  id: {
    title: "Tentang Renno Nur Oktaviano — Full-Stack Developer dari Indonesia",
    description:
      "Renno Nur Oktaviano adalah full-stack developer dari Indonesia yang membangun website dan aplikasi web produksi dengan Next.js, TypeScript, Laravel, dan Node.js. Biodata, teknologi, perjalanan, dan kontak.",
    ogLocale: "id_ID",
  },
  es: {
    title: "Sobre Renno Nur Oktaviano — Desarrollador Full-Stack de Indonesia",
    description:
      "Renno Nur Oktaviano es un desarrollador full-stack de Indonesia que crea sitios y aplicaciones web en producción con Next.js, TypeScript, Laravel y Node.js. Biografía, stack, trayectoria y contacto.",
    ogLocale: "es_ES",
  },
  fr: {
    title: "À propos de Renno Nur Oktaviano — Développeur Full-Stack d'Indonésie",
    description:
      "Renno Nur Oktaviano est un développeur full-stack basé en Indonésie, qui conçoit des sites et applications web en production avec Next.js, TypeScript, Laravel et Node.js. Biographie, stack, parcours et contact.",
    ogLocale: "fr_FR",
  },
  de: {
    title: "Über Renno Nur Oktaviano — Full-Stack-Entwickler aus Indonesien",
    description:
      "Renno Nur Oktaviano ist ein Full-Stack-Entwickler aus Indonesien und baut Websites und Produktionsanwendungen mit Next.js, TypeScript, Laravel und Node.js. Biografie, Stack, Werdegang und Kontakt.",
    ogLocale: "de_DE",
  },
  ja: {
    title: "Renno Nur Oktaviano について — インドネシアのフルスタック開発者",
    description:
      "Renno Nur Oktaviano はインドネシアのフルスタック開発者で、Next.js・TypeScript・Laravel・Node.js を使って実用的なウェブサイトとアプリケーションを開発しています。プロフィール、技術スタック、経歴、連絡先。",
    ogLocale: "ja_JP",
  },
};
