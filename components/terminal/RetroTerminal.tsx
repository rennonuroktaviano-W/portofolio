"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";
import { site } from "@/data/site";
import { sceneDefinitions } from "@/lib/scenes";

type Line = {
  text: string;
  kind?: "cmd" | "out" | "ok" | "err" | "dim" | "bare" | "jump";
};

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

const banners: Line[] = [
  { text: "KODECITY TERMINAL v1.1.0 — RESTRICTED ACCESS", kind: "out" },
  { text: "Uplink established. Rain registered.", kind: "dim" },
  { text: "Type 'help' to see available commands.", kind: "dim" },
  { text: "", kind: "bare" },
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

function runCommand(raw: string): Line[] {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case "help":
      return [
        { text: "available channels:", kind: "ok" },
        { text: "  help      — reprint this manifesto", kind: "out" },
        { text: "  about     — developer dossier", kind: "out" },
        { text: "  skills    — the arsenal list", kind: "out" },
        { text: "  projects  — shipped case folders", kind: "out" },
        { text: "  scenes    — map of the city blocks", kind: "out" },
        { text: "  visit <n> — jump to a scene (e.g. visit 4)", kind: "out" },
        { text: "  contact   — open a channel to the subject", kind: "out" },
        { text: "  exit      — leave through the final scene", kind: "out" },
        { text: "  clear     — wipe the screen", kind: "out" },
        { text: "", kind: "bare" },
        { text: "hint: hit TAB to autocomplete.", kind: "dim" },
      ];
    case "about":
      return [
        { text: `NAME     ${profile.displayName}`, kind: "out" },
        { text: `ROLE     ${profile.developerTitle}`, kind: "out" },
        { text: `STATUS   ${profile.status}`, kind: "ok" },
        { text: `LOCATION ${profile.location}`, kind: "out" },
        { text: `FOCUS    ${profile.currentFocus}`, kind: "out" },
        { text: "", kind: "bare" },
        { text: profile.shortBio, kind: "dim" },
      ];
    case "skills":
      return skillCategories.flatMap((category) => [
        {
          text: `[${category.code}] ${category.label}`,
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
            `${p.status} · ${p.year} · ${p.stack[0]}`,
          kind: "out",
        })),
        { text: "", kind: "bare" },
        { text: "Full dossiers live in the Project Archive above.", kind: "dim" },
      ];
    case "contact":
      return [
        { text: `EMAIL    ${socials.email}`, kind: "out" },
        ...socials.links.map<Line>((link) => ({
          text: `  ${link.label}`.padEnd(9) + link.url,
          kind: "out",
        })),
        { text: "", kind: "bare" },
        { text: "Open channel via the Contact Signal below.", kind: "dim" },
      ];
    case "clear":
      return [{ text: "__CLEAR__", kind: "bare" }];
    case "scenes":
      return [
        { text: "city blocks (north → south):", kind: "ok" },
        ...sceneDefinitions.map<Line>((scene, i) => ({
          text: `  ${String(i + 1).padStart(2, " ")}  ${scene.label.padEnd(22)} ${scene.id}`,
          kind: "out",
        })),
        { text: "", kind: "bare" },
        { text: "use 'visit <n>' to jump straight to one.", kind: "dim" },
      ];
    case "exit":
      return [
        { text: "Good night. The city door is behind the credits.", kind: "dim" },
        { text: "scene:final", kind: "jump" },
      ];
    case "":
      return [{ text: "", kind: "bare" }];
    case "whoami":
      return [
        {
          text: `${profile.displayName.toLowerCase().replace(/\s+/g, "")}@${site.city.toLowerCase()} — a developer who pays attention.`,
          kind: "ok",
        },
      ];
    default:
      if (raw.trim().toLowerCase().startsWith("visit")) {
        const target = resolveScene(raw.trim().toLowerCase().slice(5));
        if (target) {
          return [
            { text: `Routing to ${target}…`, kind: "ok" },
            { text: `scene:${target}`, kind: "jump" },
          ];
        }
        return [
          { text: "! unknown block. try 'scenes' for a map.", kind: "err" },
          { text: "usage: visit <scene-id | index>", kind: "dim" },
        ];
      }
      return [
        { text: `! unknown command: '${raw.trim()}'`, kind: "err" },
        { text: "Try 'help'.", kind: "dim" },
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

  useEffect(() => {
    let i = 0;
    const timers: number[] = [];
    const push = (delay: number) =>
      timers.push(
        window.setTimeout(() => {
          setLines((prev) => [...prev, banners[i]!]);
          i += 1;
          if (i < banners.length) push(520 + i * 160);
        }, delay)
      );
    push(260);
    return () => timers.forEach((t) => window.clearTimeout(t));
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
    const output = runCommand(value);
    setHistory((h) => [...h, value]);
    setHistoryIndex(-1);
    if (output.some((l) => l.text === "__CLEAR__")) {
      setLines([
        { text: "KODECITY TERMINAL v1.1.0 — screen wiped", kind: "dim" },
      ]);
    } else {
      const jump = output.find((l) => l.kind === "jump")?.text.split(":")[1];
      setLines((prev) => [
        ...prev,
        { text: `${site.city.toLowerCase()}@guest:~$ ${value}`, kind: "cmd" },
        ...output.filter((l) => l.text !== "__CLEAR__"),
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
      aria-label="Interactive retro terminal"
    >
      <div className="flex items-center justify-between border-b border-cream/15 bg-charcoal px-4 py-2.5">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-neon" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow/80" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
          crt://guest@kodecity
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
        {lines.map((line, i) => (
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
        ))}
        <form
          className="mt-1 flex items-center gap-2"
          role="search"
          aria-label="Terminal input"
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
            aria-label="Type a command"
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
        <span>TAB autocomplete · ↑ history</span>
        <span className="text-blood">safe mode — no real shell</span>
      </div>
    </div>
  );
}