"use client";

import { skillCategories } from "@/data/skills";
import { useI18n } from "@/lib/i18n/provider";

const LAYOUT = [
  {
    id: "frontend",
    dot: [288, 206],
    chip: [16, 20],
  },
  {
    id: "styling",
    dot: [352, 206],
    chip: [84, 20],
  },
  {
    id: "backend",
    dot: [372, 252],
    chip: [87, 44],
  },
  {
    id: "database",
    dot: [352, 318],
    chip: [76, 66],
  },
  {
    id: "tooling",
    dot: [288, 318],
    chip: [24, 66],
  },
  {
    id: "deployment",
    dot: [320, 378],
    chip: [14, 44],
  },
] as const;

const headPath = [
  "M 320 92",
  "C 262 84 212 128 208 218",
  "C 205 268 214 318 236 356",
  "C 256 392 292 412 320 412",
  "C 348 412 384 392 404 356",
  "C 426 318 435 268 432 218",
  "C 428 128 378 84 320 92",
  "Z",
].join(" ");

const xrays = [
  "M252 250 C 296 238 344 238 388 250",
  "M238 318 C 262 350 300 370 322 372",
  "M402 318 C 378 350 340 370 318 372",
  "M300 394 C 312 402 328 402 340 394",
  "M260 176 C 296 164 344 164 380 176",
];

const hemisphere = {
  left: [
    "M 320 148",
    "C 276 140 234 166 228 224",
    "C 222 272 228 318 248 354",
    "C 264 382 294 400 320 400",
    "C 320 350 320 240 320 148",
    "Z",
  ].join(" "),
  right: [
    "M 320 148",
    "C 364 140 406 166 412 224",
    "C 418 272 412 318 392 354",
    "C 376 382 346 400 320 400",
    "C 320 350 320 240 320 148",
    "Z",
  ].join(" "),
};

const sulci = [
  "M232 252 C 258 268 288 274 320 270",
  "M408 252 C 382 268 352 274 320 270",
];

const gyri = [
  "M258 190 C 278 180 296 196 306 186",
  "M244 218 C 266 208 286 220 302 210",
  "M242 246 C 264 240 282 246 298 238",
  "M238 268 C 252 276 266 268 278 274",
  "M252 288 C 272 280 292 290 306 282",
  "M258 320 C 278 312 296 322 310 314",
  "M268 350 C 286 344 300 352 312 348",
  "M382 190 C 362 180 344 196 334 186",
  "M396 218 C 374 208 354 220 338 210",
  "M398 246 C 376 240 358 246 342 238",
  "M402 268 C 388 276 374 268 362 274",
  "M388 288 C 368 280 348 290 334 282",
  "M382 320 C 362 312 344 322 330 314",
  "M372 350 C 354 344 340 352 328 348",
];

const cerebellum = {
  path: [
    "M 320 384",
    "C 300 378 290 396 300 408",
    "C 312 420 348 416 356 402",
    "C 360 392 340 384 320 384",
    "Z",
  ].join(" "),
  striae: ["M306 392 C 316 389 324 389 332 392", "M304 399 C 314 396 326 396 334 399", "M307 405 C 316 403 326 403 334 405"],
};

function scanDelay(cy: number): string {
  const t = ((cy - 10) / 76) * 5;
  return `-${t.toFixed(2)}s`;
}

function shortName(name: string): string {
  return name.replace(" / ", " · ").replace(" & ", " & ");
}

export function BrainIndex() {
  const { t } = useI18n();

  const clusterSkills = (id: string): string =>
    skillCategories
      .find((c) => c.id === id)
      ?.items.slice(0, 2)
      .map((s) => shortName(s.name))
      .join(" · ") ?? "";

  return (
    <div className="comic-panel paper-sheet flex flex-col p-5 sm:p-6">
      <div className="mb-4 flex items-baseline justify-between border-b border-cream/15 pb-3">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-yellow">
          SYNAPTIC INDEX
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-widest text-fog">
          03 / CORTEX
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[560px]">
        <svg
          aria-hidden="true"
          viewBox="0 0 640 640"
          className="w-full text-cream"
        >
          <defs>
            <linearGradient id="head-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10141c" />
              <stop offset="100%" stopColor="#0a0c11" />
            </linearGradient>
            <radialGradient id="brain-glow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="rgba(230,184,74,0.2)" />
              <stop offset="100%" stopColor="rgba(230,184,74,0)" />
            </radialGradient>
          </defs>

          <circle cx="320" cy="258" r="160" fill="url(#brain-glow)" />

          <path
            d={headPath}
            fill="url(#head-fill)"
            stroke="color-mix(in srgb, var(--color-cream) 24%, transparent)"
            strokeWidth="1.5"
          />

          {xrays.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="color-mix(in srgb, var(--color-cream) 10%, transparent)"
              strokeWidth="1.2"
              strokeDasharray="4 5"
            />
          ))}

          <circle
            className="brain-ping"
            cx="320"
            cy="255"
            r="88"
            fill="none"
            stroke="color-mix(in srgb, var(--color-yellow) 36%, transparent)"
            strokeWidth="1.2"
          />
          <circle
            className="brain-ping"
            cx="320"
            cy="255"
            r="120"
            fill="none"
            stroke="color-mix(in srgb, var(--color-yellow) 22%, transparent)"
            strokeWidth="1"
            style={{ animationDelay: "1.5s" }}
          />

          <ellipse
            cx="320"
            cy="285"
            rx="118"
            ry="120"
            fill="none"
            stroke="color-mix(in srgb, var(--color-cream) 12%, transparent)"
            strokeWidth="1"
            strokeDasharray="2 8"
          />

          <path
            d={hemisphere.left}
            fill="rgba(14,16,21,0.6)"
            stroke="color-mix(in srgb, var(--color-yellow) 28%, transparent)"
            strokeWidth="1.4"
          />
          <path
            d={hemisphere.right}
            fill="rgba(14,16,21,0.6)"
            stroke="color-mix(in srgb, var(--color-yellow) 28%, transparent)"
            strokeWidth="1.4"
          />

          <line
            x1="320"
            y1="150"
            x2="320"
            y2="392"
            stroke="color-mix(in srgb, var(--color-yellow) 34%, transparent)"
            strokeWidth="1.4"
          />

          {sulci.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="color-mix(in srgb, var(--color-yellow) 26%, transparent)"
              strokeWidth="1.2"
            />
          ))}

          {gyri.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="color-mix(in srgb, var(--color-cream) 24%, transparent)"
              strokeWidth="1.4"
            />
          ))}

          <path
            d={cerebellum.path}
            fill="rgba(230,184,74,0.08)"
            stroke="color-mix(in srgb, var(--color-yellow) 30%, transparent)"
            strokeWidth="1.2"
          />
          {cerebellum.striae.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="color-mix(in srgb, var(--color-cream) 20%, transparent)"
              strokeWidth="1.2"
            />
          ))}

          {LAYOUT.map((cluster) => {
            const [dx, dy] = cluster.dot;
            const [cx, cy] = cluster.chip;
            return (
              <g key={cluster.id}>
                <line
                  x1={dx}
                  y1={dy}
                  x2={(cx / 100) * 640}
                  y2={(cy / 100) * 640}
                  stroke="color-mix(in srgb, var(--color-yellow) 38%, transparent)"
                  strokeWidth="1"
                  strokeDasharray="3 6"
                />
                <circle
                  className="brain-node"
                  cx={dx}
                  cy={dy}
                  r="4.5"
                  fill="var(--color-yellow)"
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(230,184,74,0.9))",
                  }}
                />
              </g>
            );
          })}
        </svg>

        <div className="brain-scanband pointer-events-none absolute left-1/2 top-[10%] h-28 w-[60%] -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(230,184,74,0.16),rgba(230,184,74,0.06)_55%,transparent)]">
          <div className="absolute inset-x-0 top-0 h-px bg-yellow shadow-[0_0_14px_2px_rgba(230,184,74,0.85)]" />
        </div>

        <div className="brain-scanbeam pointer-events-none absolute left-[16%] top-[18%] h-[52%] w-px bg-gradient-to-b from-transparent via-yellow/40 to-transparent shadow-[0_0_10px_1px_rgba(230,184,74,0.35)]" />

        {LAYOUT.map((cluster) => {
          const [cx, cy] = cluster.chip;
          const code = skillCategories.find((c) => c.id === cluster.id)?.code;
          return (
            <div
              key={cluster.id}
              className="brain-scanhit absolute -translate-x-1/2 -translate-y-1/2 rounded-sm"
              style={{
                left: `${cx}%`,
                top: `${cy}%`,
                animationDelay: scanDelay(cy),
              }}
            >
              <div className="flex items-center gap-2 rounded-sm border border-cream/20 bg-midnight/85 px-2 py-1 backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow shadow-[0_0_8px_1px_rgba(230,184,74,0.8)]"
                />
                <div className="leading-tight">
                  <p className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.18em] text-yellow">
                    {code}
                  </p>
                  <p className="mt-0.5 whitespace-nowrap font-mono text-[8px] text-fog">
                    {clusterSkills(cluster.id)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-0 select-none font-mono text-[9px] uppercase tracking-widest text-fog/60">
          <p className="absolute left-1 top-1">synapse · active</p>
          <p className="absolute right-1 top-1 text-yellow/70">
            scan o4 / stable
          </p>
          <p className="absolute bottom-1 left-1">
            nodes · {skillCategories.reduce((a, c) => a + c.items.length, 0)}
          </p>
          <p className="absolute bottom-1 right-1">cortex / lobe map</p>
        </div>
      </div>

      <div className="mt-5 grid gap-2 border-t border-cream/15 pt-4 sm:grid-cols-2">
        {skillCategories.map((cat, i) => {
          const first = cat.items[0];
          return (
            <div key={cat.id} className="rounded-sm border border-cream/12 bg-midnight/60 p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-gold">
                  <span
                    aria-hidden="true"
                    className="brain-node h-1.5 w-1.5 rounded-full bg-yellow shadow-[0_0_8px_1px_rgba(230,184,74,0.8)]"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                  {cat.code}
                </p>
                <span className="font-mono text-[9px] text-fog/70">
                  ∿ {first.level}%
                </span>
              </div>
              <h4 className="mt-1.5 font-display text-sm font-semibold uppercase tracking-wide text-yellow">
                {t(`arsenal.category.${cat.id}`)}
              </h4>
              <p className="mt-1 text-[11px] leading-relaxed text-fog">
                {t(`arsenal.skill.${cat.id}.${first.name}`)}
              </p>
              <p className="mt-1.5 font-mono text-[9px] uppercase tracking-widest text-gold/80">
                {first.tags?.join(" · ")}
                {cat.items.length > 1 ? ` · +${cat.items.length - 1}` : ""}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mt-4 border-t border-cream/15 pt-3 font-mono text-[10px] uppercase tracking-widest text-fog">
        {t("arsenal.hint")}
      </p>
    </div>
  );
}