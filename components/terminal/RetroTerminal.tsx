"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";
import { site } from "@/data/site";
import { sceneDefinitions } from "@/lib/scenes";
import { useI18n } from "@/lib/i18n/provider";

type Line = {
  text: string;
  kind?: "cmd" | "out" | "ok" | "err" | "dim" | "bare" | "jump";
};

type T = ReturnType<typeof useI18n>["t"];

function bannerLines(t: T): Line[] {
  return [
    { text: t("terminal.bannerTitle"), kind: "out" },
    { text: t("terminal.bannerUplink"), kind: "dim" },
    { text: t("terminal.bannerHelp"), kind: "dim" },
    { text: "", kind: "bare" },
  ];
}

const COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "scenes",
  "visit",
  "contact",
  "clear",
  "exit",
];

function resolveScene(ref: string): string | null {
  const q = ref.toLowerCase().trim();
  const numeric = Number.parseInt(q, 10);
  if (!Number.isNaN(numeric) && numeric >= 1 && numeric <= sceneDefinitions.length) {
    return sceneDefinitions[numeric - 1]!.id;
  }
  return (
    sceneDefinitions.find(
      (s) => s.id === q || s.label.toLowerCase().includes(q)
    )?.id ?? null
  );
}

function runCommand(raw: string, t: T): Line[] {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case "help":
      return [
        { text: t("terminal.help.available"), kind: "ok" },
        { text: t("terminal.help.help"), kind: "out" },
        { text: t("terminal.help.about"), kind: "out" },
        { text: t("terminal.help.skills"), kind: "out" },
        { text: t("terminal.help.projects"), kind: "out" },
        { text: t("terminal.help.scenes"), kind: "out" },
        { text: t("terminal.help.visit"), kind: "out" },
        { text: t("terminal.help.contact"), kind: "out" },
        { text: t("terminal.help.exit"), kind: "out" },
        { text: t("terminal.help.clear"), kind: "out" },
        { text: "", kind: "bare" },
        { text: t("terminal.help.hintTab"), kind: "dim" },
      ];
    case "about":
      return [
        { text: `${t("terminal.about.name")}     ${profile.displayName}`, kind: "out" },
        { text: `${t("terminal.about.role")}     ${t("profile.developerTitle")}`, kind: "out" },
        { text: `${t("terminal.about.status")}   ${t("profile.status")}`, kind: "ok" },
        { text: `${t("terminal.about.location")} ${t("profile.location")}`, kind: "out" },
        { text: `${t("terminal.about.focus")}    ${t("profile.currentFocus")}`, kind: "out" },
        { text: "", kind: "bare" },
        { text: t("profile.shortBio"), kind: "dim" },
      ];
    case "skills":
      return skillCategories.flatMap((category) => [
        {
          text: `[${category.code}] ${t(`arsenal.category.${category.id}`)}`,
          kind: "ok" as const,
        },
        ...category.items.map<Line>((skill) => ({
          text:
            `    ${skill.name}`.padEnd(22) +
            `·`.repeat(5) +
            ` ${skill.level}%`,
          kind: "out",
        })),
      ]);
    case "projects":
      return [
        ...projects.map<Line>((p) => ({
          text:
            `  ${p.title}`.padEnd(16) +
            `${t(`status.${p.status.toLowerCase() === "live" ? "live" : p.status.toLowerCase() === "in progress" ? "inProgress" : "archived"}`)} · ${p.year} · ${p.stack[0]}`,
          kind: "out",
        })),
        { text: "", kind: "bare" },
        { text: t("terminal.projectsNote"), kind: "dim" },
      ];
    case "contact":
      return [
        { text: `EMAIL    ${socials.email}`, kind: "out" },
        ...socials.links.map<Line>((link) => ({
          text: `  ${link.label}`.padEnd(9) + link.url,
          kind: "out",
        })),
        { text: "", kind: "bare" },
        { text: t("terminal.contactNote"), kind: "dim" },
      ];
    case "clear":
      return [{ text: "__CLEAR__", kind: "bare" }];
    case "scenes":
      return [
        { text: t("terminal.scenesHead"), kind: "ok" },
        ...sceneDefinitions.map<Line>((scene, i) => ({
          text: `  ${String(i + 1).padStart(2, " ")}  ${t(`scenes.${scene.id}.title`).padEnd(22)} ${scene.id}`,
          kind: "out",
        })),
        { text: "", kind: "bare" },
        { text: t("terminal.scenesNote"), kind: "dim" },
      ];
    case "exit":
      return [
        { text: t("terminal.exitLine"), kind: "dim" },
        { text: "scene:scene-final", kind: "jump" },
      ];
    case "":
      return [{ text: "", kind: "bare" }];
    case "whoami":
      return [
        {
          text: t("terminal.whoami", {
            user: profile.displayName.toLowerCase().replace(/\s+/g, ""),
            city: site.city.toLowerCase(),
          }),
          kind: "ok",
        },
      ];
    default:
      if (raw.trim().toLowerCase().startsWith("visit")) {
        const target = resolveScene(raw.trim().toLowerCase().slice(5));
        if (target) {
          return [
            { text: t("terminal.routingTo", { target }), kind: "ok" },
            { text: `scene:${target}`, kind: "jump" },
          ];
        }
        return [
          { text: t("terminal.unknownBlock"), kind: "err" },
          { text: t("terminal.usageVisit"), kind: "dim" },
        ];
      }
      return [
        { text: t("terminal.unknownCmd", { cmd: raw.trim() }), kind: "err" },
        { text: t("terminal.tryHelp"), kind: "dim" },
      ];
  }
}

export function RetroTerminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cursorOn, setCursorOn] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const timers = bannerLines(t).map((line, idx) =>
      window.setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, 260 + idx * 520)
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  useEffect(() => {
    const timer = window.setInterval(
      () => setCursorOn((on) => !on),
      530
    );
    return () => window.clearInterval(timer);
  }, []);

  const suggestions = useMemo(
    () => COMMANDS.filter((c) => c.startsWith(input.toLowerCase()) && input),
    [input]
  );

  const submit = (value: string) => {
    const output = runCommand(value, t);
    setHistory((h) => [...h, value]);
    setHistoryIndex(-1);
    if (output.some((l) => l.text === "__CLEAR__")) {
      setLines([{ text: t("terminal.wiped"), kind: "dim" }]);
    } else {
      const jump = output.find((l) => l.kind === "jump")?.text.split(":")[1];
      setLines((prev) => [
        ...prev,
        {
          text: t("terminal.prompt", {
            city: site.city.toLowerCase(),
            value,
          }),
          kind: "cmd",
        },
        ...output.filter((l) => l && l.text !== "__CLEAR__"),
      ]);
      if (jump) {
        document
          .getElementById(jump)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setInput("");
  };

  return (
    <div
      className="overflow-hidden rounded-md border-2 border-cream/20 bg-[#050607] shadow-[0_0_0_3px_rgba(0,0,0,0.6),0_30px_80px_-30px_rgba(0,0,0,0.9)]"
      role="log"
      aria-label={t("terminal.ariaLog")}
    >
      <div className="flex items-center justify-between border-b border-cream/15 bg-charcoal px-4 py-2.5">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-neon" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow/80" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
          {t("terminal.crtLabel")}
        </span>
      </div>

      <div
        ref={scrollRef}
        className="max-h-[420px] min-h-[320px] overflow-y-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:px-5 sm:text-sm"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 3px)",
          color: "#cfd6c9",
          textShadow: "0 0 6px rgba(143,214,166,0.25)",
          scrollbarWidth: "thin",
        }}
      >
        {lines.map((line, i) => {
          if (!line) return null;
          return (
            <p
              key={i}
              className={
                line.kind === "cmd"
                  ? "text-yellow"
                  : line.kind === "err"
                    ? "text-neon"
                    : line.kind === "ok"
                      ? "text-[#8fcb7f]"
                      : line.kind === "dim"
                        ? "opacity-60"
                        : line.kind === "jump"
                          ? "opacity-50 text-gold"
                          : ""
              }
            >
              {line.text === "" ? "\u00A0" : line.text}
            </p>
          );
        })}
        <form
          className="mt-1 flex items-center gap-2"
          role="search"
          aria-label={t("terminal.ariaInput")}
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
          }}
        >
          <span className="shrink-0 text-yellow">
            {site.city.toLowerCase()}@guest:~$
          </span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                if (historyIndex < history.length - 1) {
                  const next = historyIndex + 1;
                  setHistoryIndex(next);
                  setInput(history[history.length - 1 - next] ?? "");
                }
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (historyIndex > 0) {
                  const next = historyIndex - 1;
                  setHistoryIndex(next);
                  setInput(history[history.length - 1 - next] ?? "");
                } else {
                  setHistoryIndex(-1);
                  setInput("");
                }
              } else if (e.key === "Tab") {
                e.preventDefault();
                if (suggestions.length === 1) setInput(suggestions[0]!);
              }
            }}
            aria-label={t("terminal.typeCmd")}
            className="min-w-0 flex-1 bg-transparent caret-transparent focus:outline-none"
            spellCheck={false}
            autoComplete="off"
          />
          <span
            aria-hidden="true"
            className={`h-4 w-2 bg-yellow ${cursorOn ? "" : "opacity-0"}`}
          />
        </form>
      </div>

      <div className="flex items-center justify-between border-t border-cream/15 bg-charcoal px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-fog">
        <span>{t("terminal.tabStatus")}</span>
        <span className="text-blood">{t("terminal.safeMode")}</span>
      </div>
    </div>
  );
}