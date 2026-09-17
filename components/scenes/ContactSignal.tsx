"use client";

import { useState } from "react";
import { socials } from "@/data/socials";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { useReveals } from "@/lib/motion";

type FormState = "idle" | "sending" | "sent";

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Missing or malformed fields — check name and email.");
      return;
    }
    setError(null);
    setState("sending");
    window.setTimeout(() => setState("sent"), 900);
  };

  const red = <span className="text-neon">*</span>;

  return (
    <div className="comic-panel paper-sheet p-6 sm:p-8" data-reveal data-reveal-delay={140}>
      {state === "sent" ? (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <span
            aria-hidden="true"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow/60 text-2xl text-yellow"
          >
            ✦
          </span>
          <h3 className="font-display text-3xl font-semibold uppercase tracking-wide text-yellow">
            Signal Received
          </h3>
          <p className="max-w-sm font-mono text-xs uppercase tracking-[0.3em] text-fog">
            transmission logged. expect a reply within 48h.
          </p>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="mt-4 border border-cream/30 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-cream transition-colors hover:border-yellow hover:text-yellow"
          >
            send another signal
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Transmit a message
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
              name {red}
              <input
                name="name"
                autoComplete="name"
                placeholder="Jane Doe"
                className="rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
              email {red}
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="jane@example.com"
                className="rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
              />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
            subject
            <input
              name="subject"
              autoComplete="off"
              placeholder="re: a case worth opening"
              className="rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
            />
          </label>
          <label className="mt-4 flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
            message {red}
            <textarea
              name="message"
              rows={4}
              placeholder="What are you building?"
              className="resize-none rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
            />
          </label>

          {error ? (
            <p role="alert" className="mt-3 font-mono text-[11px] uppercase tracking-widest text-neon">
              ! {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={state === "sending"}
            className="mt-6 inline-flex items-center gap-3 border border-yellow/60 bg-yellow/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-yellow transition-colors hover:bg-yellow hover:text-midnight disabled:opacity-60"
          >
            {state === "sending" ? "transmitting…" : "send signal"} →
          </button>
        </form>
      )}
    </div>
  );
}

export function ContactSignal() {
  const sectionRef = useReveals<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="scene-contact"
      aria-labelledby="contact-title"
      className="scene"
      style={{ padding: "10svh 0" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#08090b,#0f1117_45%,#08090b)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-10 mx-auto h-1 w-40 bg-[repeating-linear-gradient(90deg,transparent_0_12px,var(--color-neon)_12px_24px)] opacity-40"
      />
      <div className="scene-inner">
        <SceneHeader
          id="contact-title"
          chapter={10}
          label="rooftop radio room"
          title="Contact Signal"
          caption="The city&apos;s switchboard is open. Dial a channel or transmit a message directly."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6" data-reveal>
            <a
              href={socials.emailHref}
              className="comic-panel bg-midnight/70 p-6 transition-colors hover:border-yellow/50"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                primary frequency
              </p>
              <p className="mt-2 break-all font-mono text-lg text-cream sm:text-xl">
                {socials.email}
              </p>
            </a>

            <ul className="grid gap-4">
              {socials.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-panel flex items-center justify-between gap-4 bg-midnight/70 p-5 transition-colors hover:border-yellow/50"
                  >
                    <span>
                      <span className="block font-display text-lg font-semibold uppercase tracking-wide text-cream">
                        {link.label}
                      </span>
                      <span className="block font-mono text-[11px] text-fog">
                        {link.handle}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-yellow">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}