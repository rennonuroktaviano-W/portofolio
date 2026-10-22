import type { Metadata, Viewport } from "next";
import { Oswald, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { site } from "@/data/site";
import { seoByLocale } from "@/data/seo";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { certificates } from "@/data/certificates";
import { I18nProvider } from "@/lib/i18n/provider";
import { LOCALE_KEY, languages } from "@/lib/i18n/languages";
import { homeAlternates } from "@/lib/seo";
import { translate } from "@/lib/i18n/dictionary";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  alternateName: ["Renno", "Renno N. Oktaviano"],
  url: site.url,
  jobTitle: profile.developerTitle,
  description: site.metaDescription,
  image: `${site.url}/images/dev/profile.png`,
  email: `mailto:${socials.email}`,
  identifier: socials.links.find((link) => link.label === "GitHub")?.url,
  homeLocation: {
    "@type": "Country",
    name: "Indonesia",
  },
  knowsAbout: [...site.keywords],
  knowsLanguage: languages.map((language) => language.code),
  sameAs: socials.links.map((l) => l.url),
  hasCredential: certificates.map((certificate) => ({
    "@type": "EducationalOccupationalCredential",
    name: translate("en", `certificates.items.${certificate.id}.title`),
    credentialCategory: "certificate",
    recognizedBy: {
      "@type": "Organization",
      name: certificate.issuer,
    },
  })),
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.brand,
  url: site.url,
  description: site.metaDescription,
  inLanguage: "en",
  publisher: { "@id": `${site.url}/#person` },
};

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seoByLocale.en.title,
    template: `%s · ${site.brand}`,
  },
  description: site.metaDescription,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.brand,
  category: "portfolio",
  alternates: {
    canonical: "/",
    languages: homeAlternates(),
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: seoByLocale.en.title,
    description: site.metaDescription,
    siteName: site.brand,
    locale: seoByLocale.en.ogLocale,
    alternateLocale: languages
      .filter((language) => language.code !== "en")
      .map((language) => seoByLocale[language.code].ogLocale),
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
    title: seoByLocale.en.title,
    description: site.metaDescription,
    images: [{ url: "/og/cover.png", alt: `${site.brand} — ${site.role}` }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: googleVerification
    ? { google: googleVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${manrope.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var codes=${JSON.stringify(languages.map((x) => x.code))};var seg=location.pathname.split("/").filter(Boolean)[0];var lang=codes.indexOf(seg)>-1?seg:null;if(!lang){var stored=localStorage.getItem(${JSON.stringify(LOCALE_KEY)});if(stored&&codes.indexOf(stored)>-1){lang=stored;}else{var nav=(navigator.language||"").split("-")[0];if(codes.indexOf(nav)>-1){lang=nav;}}}if(lang){document.documentElement.lang=lang;}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full">
        <I18nProvider>{children}</I18nProvider>
        <noscript>
          <p className="fixed bottom-4 right-4 z-[90] border border-gold/40 bg-midnight/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
            no-js mode: enable JavaScript for the full experience
          </p>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  );
}
