import { PortfolioPage } from "@/components/PortfolioPage";
import { I18nProvider } from "@/lib/i18n/provider";
import type { Locale } from "@/lib/i18n/languages";
import { webPageLd } from "@/lib/seo";

type PortfolioHomeProps = {
  /**
   * Locale owned by the route. `undefined` means the language-neutral root
   * route, where the stored visitor preference decides the language.
   */
  locale?: Locale;
};

export function PortfolioHome({ locale }: PortfolioHomeProps) {
  return (
    <>
      <I18nProvider initialLocale={locale}>
        <PortfolioPage locale={locale} />
      </I18nProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageLd(locale ?? "en")),
        }}
      />
    </>
  );
}
