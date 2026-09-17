"use client";

import { profile } from "@/data/profile";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { useReveals } from "@/lib/motion";

const meta = [
  { label: "STATUS", value: profile.status, tone: "text-neon" },
  { label: "LOCATION", value: profile.location, tone: "text-cream" },
  { label: "CURRENT FOCUS", value: profile.currentFocus, tone: "text-cream" },
  { label: "EDUCATION", value: profile.education, tone: "text-cream" },
  { label: "CASE NUMBER", value: profile.caseNumber, tone: "text-gold" },
] as const;

export function AboutCaseFile() {
  const sectionRef = useReveals<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="scene-about"
      aria-labelledby="about-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(139,27,27,0.10),transparent_55%)]"
      />
      <div className="scene-inner">
        <SceneHeader
          id="about-title"
          chapter={3}
          label="intelligence dossier"
          title="Case File"
          caption="Declassified notes on the development subject. Handle with curiosity."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="comic-panel paper-sheet relative p-6 sm:p-8" data-reveal>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold uppercase text-cream">
                Subject Profile
              </h3>
              <span className="stamp">Case Open</span>
            </div>
            <dl className="divide-y divide-cream/10">
              {meta.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[8.5rem_1fr] gap-4 py-3"
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
              file photo attached —{" "}
              <span className="text-gold">evidence grade B</span>
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="comic-panel relative p-6 sm:p-8" data-reveal>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
                Personal statement
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-cream/85 sm:text-base">
                {profile.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="comic-panel relative flex flex-col justify-between gap-6 p-6 sm:flex-row sm:p-8" data-reveal>
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
                  Current interests
                </p>
                <ul className="flex flex-wrap gap-2">
                  {profile.interests.map((item) => (
                    <li
                      key={item}
                      className="border border-cream/25 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-fog"
                    >
                      {item}
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
                {profile.philosophy}
              </p>
              <footer className="mt-4 font-mono text-[11px] uppercase tracking-widest text-gold">
                — personal developer doctrine
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}