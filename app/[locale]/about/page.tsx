import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { isLocale, type Locale } from "@/lib/i18n/languages";
import { aboutMetadata } from "@/lib/seo";

type LocaleParams = Promise<{ locale?: string }>;

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale } = await params;
  const code: Locale = isLocale(locale) ? locale : "en";
  return aboutMetadata(code);
}

export default async function LocalizedAboutPage({
  params,
}: {
  params: LocaleParams;
}) {
  const { locale } = await params;
  return <AboutPage locale={isLocale(locale) ? locale : "en"} />;
}
