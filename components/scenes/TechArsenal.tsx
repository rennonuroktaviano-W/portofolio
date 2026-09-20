"use client";

import { SceneHeader } from "@/components/ui/SceneHeader";
import { BrainIndex } from "@/components/scenes/BrainIndex";
import { ArsenalTelemetry } from "@/components/scenes/ArsenalTelemetry";
import { useI18n } from "@/lib/i18n/provider";

export function TechArsenal() {
  const { t } = useI18n();

  return (
    <section
      id="scene-arsenal"
      aria-labelledby="arsenal-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#08090b,#111827_35%,#08090b)] opacity-60"
      />
      <div className="scene-inner">
        <SceneHeader
          id="arsenal-title"
          chapter={4}
          label={t("arsenal.label")}
          title={t("arsenal.title")}
          caption={t("arsenal.caption")}
        />

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <BrainIndex />
          <aside className="lg:sticky lg:top-8">
            <ArsenalTelemetry />
          </aside>
        </div>
      </div>
    </section>
  );
}