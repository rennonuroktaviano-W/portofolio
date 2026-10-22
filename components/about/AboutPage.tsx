import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { skillCategories } from "@/data/skills";
import { milestones } from "@/data/experience";
import { certificates } from "@/data/certificates";
import { aboutSeoByLocale } from "@/data/seo";
import { translate, translateList } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/languages";
import { I18nProvider } from "@/lib/i18n/provider";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { SkipLink } from "@/components/ui/SkipLink";
import { aboutPath, SITE_URL } from "@/lib/seo";

function SectionHeading({
  label,
  title,
  hint,
  id,
}: {
  label: string;
  title: string;
  hint?: string;
  id: string;
}) {
  return (
    <header className="mb-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
        {label}
      </p>
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-cream sm:text-4xl"
      >
        {title}
      </h2>
      {hint ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fog">{hint}</p>
      ) : null}
    </header>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = (path: string) => translate(locale, path);
  const list = (path: string) => translateList(locale, path);
  const seo = aboutSeoByLocale[locale];
  const path = aboutPath(locale);

  const bio = list("profile.bio");
  const interests = list("profile.interests");
  const philosophy = t("profile.philosophy");
  const shortBio = t("profile.shortBio");

  const profilePageLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}${path}#profilepage`,
    url: `${SITE_URL}${path}`,
    name: seo.title,
    description: seo.description,
    inLanguage: locale,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
    primaryImageOfPage: `${SITE_URL}/og/cover.png`,
  };

  return (
    <I18nProvider initialLocale={locale}>
      <div className="relative flex min-h-svh flex-col bg-midnight" lang={locale}>
        <SkipLink />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#07080a_0%,#0a0c12_18%,#0e1118_42%,#0c0e15_64%,#090a0e_86%,#07080a_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[55svh] bg-[radial-gradient(ellipse_90%_55%_at_50%_-12%,rgba(230,184,74,0.09),transparent_70%)]"
        />

        <LanguageSwitcher />

        <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
            {t("aboutPage.label")}
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.4rem)] font-semibold uppercase leading-[0.95] tracking-tight text-cream">
            {t("aboutPage.title")}
          </h1>

          <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-gold/90">
            {t("aboutPage.role")}
          </p>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-cream/90 sm:text-lg">
            {t("aboutPage.lead")}
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <SectionHeading
                id="about-story"
                label={t("aboutPage.focus")}
                title={t("aboutPage.story")}
              />

              {bio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-4 text-sm leading-relaxed text-fog sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              <p className="mt-6 border-l-2 border-yellow/50 pl-4 font-mono text-sm leading-relaxed text-cream/80">
                {philosophy}
              </p>

              <dl className="mt-10 grid gap-6 border-t border-cream/10 pt-8 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog/60">
                    {t("aboutPage.statusLabel")}
                  </dt>
                  <dd className="mt-2 text-sm text-cream">{t("profile.status")}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog/60">
                    {t("aboutPage.locationLabel")}
                  </dt>
                  <dd className="mt-2 text-sm text-cream">{t("profile.location")}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog/60">
                    {t("aboutPage.focusLabel")}
                  </dt>
                  <dd className="mt-2 text-sm text-cream">
                    {t("profile.currentFocus")}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog/60">
                    {t("aboutPage.interestsLabel")}
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="border border-gold/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-gold/90"
                      >
                        {interest}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            <aside className="lg:pl-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-cream/15 bg-charcoal/40">
                <Image
                  src={profile.photo}
                  alt={t("identity.devProfile")}
                  fill
                  priority
                  sizes="(min-width: 1024px) 22rem, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,9,11,0.75),rgba(8,9,11,0.05)_55%,rgba(8,9,11,0.3))]"
                />
                <span className="absolute bottom-3 left-3 bg-yellow px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-midnight">
                  {profile.caseNumber}
                </span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-fog">{shortBio}</p>

              <div className="mt-6 border-t border-cream/10 pt-6">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
                  {t("aboutPage.contact")}
                </h2>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-fog/60">
                  {t("aboutPage.emailLabel")}
                </p>
                <a
                  href={socials.emailHref}
                  className="mt-1 block break-all text-sm text-cream transition-colors hover:text-yellow"
                >
                  {socials.email}
                </a>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-fog/60">
                  {t("aboutPage.socialsLabel")}
                </p>
                <ul className="mt-2 space-y-1">
                  {socials.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cream transition-colors hover:text-yellow"
                      >
                        {link.label}
                        <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-fog/60">
                          {link.handle}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <section className="mt-20 border-t border-cream/10 pt-12">
            <SectionHeading
              id="about-stack"
              label={t("aboutPage.stack")}
              title={t("aboutPage.stackHint")}
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category) => (
                <div key={category.id} className="border border-cream/12 bg-charcoal/30 p-5">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                    {t(`arsenal.category.${category.id}`)}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {category.items.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm text-cream">{skill.name}</span>
                          <span className="font-mono text-[10px] text-fog/60">
                            {skill.level}
                          </span>
                        </div>
                        <div
                          aria-hidden="true"
                          className="mt-1.5 h-px w-full bg-cream/15"
                        >
                          <div
                            className="h-px bg-yellow/70"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 border-t border-cream/10 pt-12">
            <SectionHeading
              id="about-journey"
              label={t("aboutPage.journey")}
              title={t("experience.title")}
            />

            <ol className="space-y-6">
              {milestones.map((milestone) => (
                <li
                  key={milestone.id}
                  className="border-l-2 border-gold/50 pl-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                    {milestone.period} · {t(`experience.type.${milestone.type}`)}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-wide text-cream">
                    {t(`experience.items.${milestone.id}.title`)}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-fog/70">
                    {t(`experience.items.${milestone.id}.org`)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fog">
                    {t(`experience.items.${milestone.id}.description`)}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-20 border-t border-cream/10 pt-12">
            <SectionHeading
              id="about-credentials"
              label={t("aboutPage.credentials")}
              title={t("certificates.title")}
            />

            <ul className="grid gap-6 sm:grid-cols-2">
              {certificates.map((certificate) => (
                <li
                  key={certificate.id}
                  className="border border-cream/12 bg-charcoal/30 p-5"
                >
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-cream">
                    {t(`certificates.items.${certificate.id}.title`)}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                    {t("certificates.issuer")} {certificate.issuer} ·{" "}
                    {certificate.year}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fog">
                    {t(`certificates.items.${certificate.id}.description`)}
                  </p>
                  <a
                    href={certificate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-yellow transition-colors hover:text-cream"
                  >
                    {t("certificates.open")} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <nav className="mt-20 flex flex-wrap gap-4 border-t border-cream/10 pt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-yellow/60 bg-yellow/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-yellow transition-colors hover:bg-yellow hover:text-midnight"
            >
              {t("aboutPage.ctaProjects")} →
            </Link>
            <Link
              href={locale === "en" ? "/" : `/${locale}`}
              className="inline-flex items-center gap-2 border border-cream/25 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-cream transition-colors hover:border-yellow hover:text-yellow"
            >
              ← {t("aboutPage.ctaHome")}
            </Link>
          </nav>
        </main>

        <footer className="relative z-10 border-t border-cream/10 px-5 py-10 text-center sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-fog/60">
            © {new Date().getFullYear()} {site.name} — Next.js + TypeScript
          </p>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd) }}
        />
      </div>
    </I18nProvider>
  );
}
