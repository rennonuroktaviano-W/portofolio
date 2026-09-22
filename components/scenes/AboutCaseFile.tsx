"use client";

import { profile } from "@/data/profile";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { useReveals } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

export function AboutCaseFile() {
  const sectionRef = useReveals<HTMLElement>();
  const { t } = useI18n();

  const meta: { label: string; value: string; tone: string }[] = [
    {
      label: t("about.meta.status"),
      value: t("profile.status"),
      tone: "text-neon",
    },
    {
      label: t("about.meta.location"),
      value: t("profile.location"),
      tone: "text-cream",
    },
    {
      label: t("about.meta.currentFocus"),
      value: t("profile.currentFocus"),
      tone: "text-cream",
    },
    {
      label: t("about.meta.caseNumber"),
      value: t("profile.caseNumber"),
      tone: "text-gold",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="scene-about"
      aria-labelledby="about-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div className="scene-inner">
        <SceneHeader
          id="about-title"
          chapter={3}
          label={t("about.label")}
          title={t("about.title")}
          caption={t("about.caption")}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="comic-panel paper-sheet relative p-6 sm:p-8" data-reveal>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold uppercase text-cream">
                {t("about.subjectProfile")}
              </h3>
              <span className="stamp">{t("about.caseOpen")}</span>
            </div>
            <dl className="divide-y divide-cream/10">
              {meta.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 py-3 sm:grid-cols-[8.5rem_1fr] sm:gap-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-fog">
                    {row.label}
                  </dt>
                  <dd className={`font-mono text-xs uppercase tracking-wide ${row.tone}`}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-cream/10 pt-4 font-mono text-[10px] uppercase tracking-widest text-fog">
              {t("about.filePhoto")}{" "}
              <span className="text-gold">{t("about.evidenceGradeB")}</span>
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="comic-panel relative p-6 sm:p-8" data-reveal>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
                {t("about.personalStatement")}
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-cream/85 sm:text-base">
                {profile.bio.map((paragraph, i) => (
                  <p key={i}>{t(`profile.bio.${i}`)}</p>
                ))}
              </div>
            </div>

            <div className="comic-panel relative flex flex-col justify-between gap-6 p-6 sm:flex-row sm:p-8" data-reveal>
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
                  {t("about.currentInterests")}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {profile.interests.map((item, i) => (
                    <li
                      key={item}
                      className="border border-cream/25 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-fog"
                    >
                      {t(`profile.interests.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <blockquote className="comic-panel relative bg-midnight/60 p-6 sm:p-8" data-reveal>
              <p
                aria-hidden="true"
                className="absolute -top-4 left-5 bg-midnight px-2 font-display text-5xl leading-none text-yellow/60"
              >
                “
              </p>
              <p className="mt-3 text-base italic leading-relaxed text-cream/90">
                {t("profile.philosophy")}
              </p>
              <footer className="mt-4 font-mono text-[11px] uppercase tracking-widest text-gold">
                {t("about.doctrine")}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}