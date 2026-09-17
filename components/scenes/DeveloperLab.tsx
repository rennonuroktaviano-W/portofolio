"use client";

import { RetroTerminal } from "@/components/terminal/RetroTerminal";
import { SceneHeader } from "@/components/ui/SceneHeader";

export function DeveloperLab() {
  return (
    <section
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
          chapter={8}
          label="the workshop"
          title="Developer Lab"
          caption="A working CRT, restored and safe. Type a command — nothing leaves this room."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="comic-panel paper-sheet p-5 sm:p-7" data-lab-notes>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Workshop memo
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-fog">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-yellow">▸</span>
                The terminal is presentational — commands never touch a real shell.
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-yellow">▸</span>
                Try <kbd className="border border-cream/25 bg-midnight px-1.5 py-0.5 font-mono text-[10px] uppercase text-cream">help</kbd>,{" "}
                <kbd className="border border-cream/25 bg-midnight px-1.5 py-0.5 font-mono text-[10px] uppercase text-cream">skills</kbd>, or{" "}
                <kbd className="border border-cream/25 bg-midnight px-1.5 py-0.5 font-mono text-[10px] uppercase text-cream">projects</kbd>.
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-yellow">▸</span>
                Highlight: press <kbd className="border border-cream/25 bg-midnight px-1.5 py-0.5 font-mono text-[10px] uppercase text-cream">Tab</kbd> to autocomplete a command.
              </li>
            </ul>
          </div>

          <div className="relative" data-lab-terminal>
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