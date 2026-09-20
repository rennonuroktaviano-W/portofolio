import type { Metadata, Viewport } from "next";
import { Oswald, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { site } from "@/data/site";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { I18nProvider } from "@/lib/i18n/provider";
import { LOCALE_KEY, languages } from "@/lib/i18n/languages";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: profile.developerTitle,
  image: `${site.url}/og/cover.svg`,
  knowsAbout: [...site.keywords],
  sameAs: socials.links.map((l) => l.url),
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.brand,
  url: site.url,
  description: site.metaDescription,
  inLanguage: "en",
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — ${site.role}`,
    template: `%s · ${site.brand}`,
  },
  description: site.metaDescription,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.brand} — ${site.role}`,
    description: site.metaDescription,
    siteName: site.brand,
    locale: "id_ID",
    images: [{ url: "/og/cover.svg", width: 1200, height: 630, alt: site.brand }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.role}`,
    description: site.metaDescription,
    images: ["/og/cover.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
            __html: `try{var l=localStorage.getItem(${JSON.stringify(LOCALE_KEY)});var codes=${JSON.stringify(languages.map((x) => x.code))};if(l&&codes.indexOf(l)>-1){document.documentElement.lang=l;}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full">
        <I18nProvider>{children}</I18nProvider>
        <noscript>
          <p className="fixed bottom-4 right-4 z-[90] border border-gold/40 bg-midnight/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
            no-js mode: this city rains in silence
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