import type { Metadata } from "next";
import { PortfolioHome } from "@/components/PortfolioHome";
import { seoByLocale } from "@/data/seo";
import { site } from "@/data/site";
import { homeAlternates, localeHomePath } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n/languages";

type LocaleParams = Promise<{ locale?: string }>;

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale } = await params;
  const code: Locale = isLocale(locale) ? locale : "en";
  const seo = seoByLocale[code];

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: localeHomePath(code),
      languages: homeAlternates(),
    },
    openGraph: {
      type: "website",
      url: localeHomePath(code),
      title: seo.title,
      description: seo.description,
      siteName: site.brand,
      locale: seo.ogLocale,
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
      title: seo.title,
      description: seo.description,
      images: ["/og/cover.png"],
    },
  };
}

export default async function Page({ params }: { params: LocaleParams }) {
  const { locale } = await params;
  return <PortfolioHome locale={isLocale(locale) ? locale : undefined} />;
}
