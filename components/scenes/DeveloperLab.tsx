"use client";

import { RetroTerminal } from "@/components/terminal/RetroTerminal";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { useReveals } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

const kbdClass =
  "border border-cream/25 bg-midnight px-1.5 py-0.5 font-mono text-[10px] uppercase text-cream";

function richText(text: string) {
  return text.split(/(<[^>]+>)/g).map((part, i) =>
    part.startsWith("<") && part.endsWith(">") ? (
      <kbd key={i} className={kbdClass}>
        {part.slice(1, -1)}
      </kbd>
    ) : (
      part
    )
  );
}

export function DeveloperLab() {
  const sectionRef = useReveals<HTMLElement>();
  const { t } = useI18n();

  return (
    <section
      ref={sectionRef}
      id="scene-lab"
      aria-labelledby="lab-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#08090b,#14171c_35%,#08090b)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-yellow/30 via-transparent to-yellow/30"
      />
      <div className="scene-inner">
        <SceneHeader
          id="lab-title"
          chapter={9}
          label={t("lab.label")}
          title={t("lab.title")}
          caption={t("lab.caption")}
        />

        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="comic-panel paper-sheet p-5 sm:p-7" data-reveal data-lab-notes>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
              {t("lab.memoTitle")}
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-fog">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-yellow">▸</span>
                {t("lab.noteOne")}
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-yellow">▸</span>
                <span>{richText(t("lab.noteTwo"))}</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-yellow">▸</span>
                <span>{richText(t("lab.noteThree"))}</span>
              </li>
            </ul>
          </div>

          <div className="relative" data-reveal data-reveal-delay={120} data-lab-terminal>
            <div
              aria-hidden="true"
              className="absolute -inset-x-4 -inset-y-3 -z-10 rounded-md bg-[radial-gradient(ellipse_at_50%_0%,rgba(230,184,74,0.12),transparent_65%)] blur-md"
            />
            <RetroTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}