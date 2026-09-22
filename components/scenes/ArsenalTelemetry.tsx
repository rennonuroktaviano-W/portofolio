"use client";

import { skillCategories } from "@/data/skills";
import { useI18n } from "@/lib/i18n/provider";

const RADAR_CENTER = 150;
const RADAR_MAX = 100;

function polar(ratio: number, index: number, size = 6): [number, number] {
  const angle = (Math.PI * 2 * index) / size - Math.PI / 2;
  const r = (ratio / 100) * RADAR_MAX;
  return [
    RADAR_CENTER + r * Math.cos(angle),
    RADAR_CENTER + r * Math.sin(angle),
  ];
}

function ringPoints(level: number, size = 6): string {
  return Array.from({ length: size }, (_, i) => {
    const [x, y] = polar(level, i, size);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
}

export function ArsenalTelemetry() {
  const { t } = useI18n();

  const categories = skillCategories.map((category) => {
    const items = category.items.length;
    const sum = category.items.reduce((acc, s) => acc + s.level, 0);
    return {
      ...category,
      avg: Math.round(sum / items),
    };
  });

  const totalItems = skillCategories.reduce((acc, c) => acc + c.items.length, 0);
  const overallAvg = Math.round(
    skillCategories.reduce(
      (acc, c) => acc + c.items.reduce((a, s) => a + s.level, 0),
      0
    ) / totalItems
  );
  const topSkill = skillCategories
    .flatMap((c) => c.items)
    .reduce((best, s) => (s.level > best.level ? s : best));
  const dataPoints = categories
    .map((category, i) => {
      const [x, y] = polar(category.avg, i, 6);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <div className="comic-panel paper-sheet flex flex-col p-5 sm:p-6">
      <div className="mb-5 flex items-baseline justify-between border-b border-cream/15 pb-3">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-yellow">
          {t("arsenal.overview.title")}
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-widest text-fog">
          00 / SYSTEM
        </span>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        className="mx-auto w-full max-w-[280px] text-yellow"
      >
        <defs>
          <linearGradient id="arsenal-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-yellow)" />
            <stop offset="100%" stopColor="var(--color-blood)" />
          </linearGradient>
        </defs>

          {[25, 50, 75, 100].map((level) => (
            <polygon
              key={level}
              points={ringPoints(level)}
              fill="none"
              strokeWidth="1"
              style={{
                stroke:
                  "color-mix(in srgb, var(--color-cream) 14%, transparent)",
              }}
            />
          ))}

          {categories.map((category, i) => {
            const [x, y] = polar(100, i, 6);
            return (
              <line
                key={category.id}
                x1={RADAR_CENTER}
                y1={RADAR_CENTER}
                x2={x}
                y2={y}
                strokeWidth="1"
                style={{
                  stroke:
                    "color-mix(in srgb, var(--color-cream) 16%, transparent)",
                }}
              />
            );
          })}

          <polygon
            points={dataPoints}
            fill="url(#arsenal-fill)"
            fillOpacity="0.28"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ filter: "drop-shadow(0 0 6px rgba(230,184,74,0.45))" }}
          />

          {categories.map((category, i) => {
            const [x, y] = polar(category.avg, i, 6);
            return (
              <circle
                key={category.id}
                cx={x}
                cy={y}
                r="2.4"
                style={{
                  fill:
                    category.avg >= 85
                      ? "var(--color-blood)"
                      : "var(--color-yellow)",
                }}
              />
            );
          })}

          {categories.map((category, i) => {
            const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
            const lx = RADAR_CENTER + (RADAR_MAX + 24) * Math.cos(angle);
            const ly = RADAR_CENTER + (RADAR_MAX + 24) * Math.sin(angle);
            const anchor =
              Math.abs(Math.cos(angle)) < 0.01
                ? "middle"
                : Math.cos(angle) > 0
                  ? "start"
                  : "end";
            return (
              <text
                key={category.id}
                x={lx}
                y={ly}
                textAnchor={anchor}
                dominantBaseline="middle"
                className="fill-fog font-mono"
                style={{ fontSize: "7.5px", letterSpacing: "0.08em" }}
              >
                {category.code}
              </text>
            );
          })}
      </svg>

      <dl className="mt-5 space-y-2.5 border-t border-cream/15 pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-mono text-[10px] uppercase tracking-widest text-fog">
            {t("arsenal.overview.loaded")}
          </dt>
          <dd className="font-mono text-sm text-cream">
            {t("arsenal.overview.loadedValue", {
              count: totalItems,
              total: totalItems,
            })}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-mono text-[10px] uppercase tracking-widest text-fog">
            {t("arsenal.overview.avg")}
          </dt>
          <dd className="font-mono text-sm text-cream">{overallAvg}%</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="font-mono text-[10px] uppercase tracking-widest text-fog">
            {t("arsenal.overview.top")}
          </dt>
          <dd className="min-w-0 truncate font-mono text-sm text-yellow">
            {topSkill.name.toUpperCase()} · {topSkill.level}
          </dd>
        </div>
      </dl>

      <div className="mt-5 space-y-2 border-t border-cream/15 pt-4">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center gap-3">
            <span className="w-24 shrink-0 font-mono text-[9px] uppercase tracking-widest text-fog">
              {category.code}
            </span>
            <div
              aria-hidden="true"
              className="h-1 flex-1 overflow-hidden bg-cream/10"
            >
              <div
                className="h-full bg-gradient-to-r from-yellow/80 to-blood"
                style={{ width: `${category.avg}%` }}
              />
            </div>
            <span className="w-8 shrink-0 text-right font-mono text-[9px] text-gold">
              {category.avg}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}