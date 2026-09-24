"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { SceneHeader } from "@/components/ui/SceneHeader";
import { useReveals } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/provider";

type FormState = "idle" | "sending" | "sent";

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const { t } = useI18n();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t("contact.form.errFields"));
      return;
    }
    setError(null);
    setState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, website }),
      });

      if (!res.ok && res.status >= 500) {
        throw new Error("server");
      }
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(payload?.error ?? t("contact.form.errRejected"));
        setState("idle");
        return;
      }
      setState("sent");
    } catch {
      setError(t("contact.form.errServer"));
      setState("idle");
    }
  };

  const red = <span className="text-neon">*</span>;

  return (
    <div
      className="comic-panel paper-sheet relative overflow-hidden p-6 sm:p-8"
      data-reveal
      data-reveal-delay={0.15}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-gold)_0_24px,transparent_24px,transparent_32px,var(--color-gold)_32px_56px,transparent_56px)] opacity-60"
      />
      {state === "sent" ? (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <span aria-hidden="true" className="relative flex h-14 w-14 items-center justify-center">
            <span className="receive-blink absolute inset-0 rounded-full border border-yellow/50" />
            <span
              className="receive-blink absolute inset-0 rounded-full border border-yellow/25"
              style={{ animationDelay: "0.4s" }}
            />
            <span className="relative text-2xl text-yellow">✦</span>
          </span>
          <h3 className="font-display text-3xl font-semibold uppercase tracking-wide text-yellow">
            {t("contact.form.sentTitle")}
          </h3>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-fog">
            {t("contact.form.sentText")}
          </p>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="mt-4 border border-cream/30 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-cream transition-colors hover:border-yellow hover:text-yellow"
          >
            {t("contact.form.again")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
          >
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
            />
          </div>
          <p className="mb-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em] text-gold">
            {t("contact.form.title")}
            <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-yellow" />
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
              {t("contact.form.name")} {red}
              <input
                name="name"
                autoComplete="name"
                minLength={2}
                maxLength={160}
                placeholder={t("contact.form.placeholderName")}
                className="rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
              {t("contact.form.email")} {red}
              <input
                type="email"
                name="email"
                autoComplete="email"
                maxLength={254}
                placeholder={t("contact.form.placeholderEmail")}
                className="rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
              />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
            {t("contact.form.subject")}
            <input
              name="subject"
              autoComplete="off"
              maxLength={400}
              placeholder={t("contact.form.placeholderSubject")}
              className="rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
            />
          </label>
          <label className="mt-4 flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fog">
            {t("contact.form.message")} {red}
            <textarea
              name="message"
              rows={4}
              minLength={10}
              maxLength={4000}
              placeholder={t("contact.form.placeholderMessage")}
              className="resize-none rounded-none border border-cream/30 bg-midnight px-3 py-2.5 font-sans normal-case tracking-normal text-cream placeholder:text-cream/30 focus:border-yellow focus:outline-none"
            />
          </label>

          {error ? (
            <p role="alert" className="mt-3 font-mono text-[11px] uppercase tracking-widest text-neon">
              ! {error}
            </p>
          ) : null}

          <motion.button
            type="submit"
            disabled={state === "sending"}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 24 }}
            className="mt-6 inline-flex w-full items-center justify-center gap-3 border border-yellow/60 bg-yellow/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-yellow transition-colors hover:bg-yellow hover:text-midnight hover:shadow-[0_0_28px_-6px_rgba(230,184,74,0.65)] disabled:opacity-60 sm:w-auto"
          >
            {state === "sending" ? (
              <>
                <span aria-hidden="true" className="receive-blink inline-block h-2 w-2 rounded-full bg-yellow" />
                {t("contact.form.sending")}
              </>
            ) : (
              <>
                {t("contact.form.send")}
                <span aria-hidden="true">→</span>
              </>
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
}

export function ContactSignal() {
  const sectionRef = useReveals<HTMLElement>();
  const { t } = useI18n();

  return (
    <section
      ref={sectionRef}
      id="scene-contact"
      aria-labelledby="contact-title"
      className="scene overflow-hidden"
      style={{ padding: "10svh 0" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 select-none lg:block"
      >
        <p className="text-center font-display text-[clamp(6rem,16vw,15rem)] font-semibold uppercase leading-none tracking-tight text-outline-gold opacity-[0.14]">
          hello
        </p>
      </div>

      <div className="scene-inner">
        <SceneHeader
          id="contact-title"
          chapter={8}
          label={t("contact.label")}
          title={t("contact.title")}
          caption={t("contact.caption")}
        />

        <div
          aria-hidden="true"
          className="relative mx-auto mb-10 mt-10 flex max-w-3xl items-center gap-3"
          data-reveal
        >
          <span className="h-[3px] w-[3px] shrink-0 rotate-45 bg-yellow/80" />
          <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--color-gold)_45%,transparent),transparent)]" />
          <span className="receive-blink h-2 w-2 shrink-0 rounded-full bg-gold" />
          <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--color-gold)_45%,transparent),transparent)]" />
          <span className="h-[3px] w-[3px] shrink-0 rotate-45 bg-yellow/80" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-8" data-reveal>
            <div className="comic-panel group relative overflow-hidden bg-midnight/70 p-6 transition-shadow hover:shadow-[0_0_32px_-10px_rgba(230,184,74,0.35)] sm:p-7">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--color-yellow),var(--color-gold)_55%,transparent)]"
              />
              <span aria-hidden="true" className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-yellow/70" />
              <span aria-hidden="true" className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-yellow/70" />
              <span aria-hidden="true" className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-yellow/70" />
              <span aria-hidden="true" className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-yellow/70" />
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
                  {t("contact.emailLabel")}
                </p>
                <span aria-hidden="true" className="receive-blink h-2 w-2 rounded-full bg-yellow" />
              </div>
              <a href={socials.emailHref} className="relative mt-4 block">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent,rgba(230,184,74,0.09),transparent)] transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative block break-all font-mono text-lg leading-relaxed text-cream transition-colors group-hover:text-yellow sm:text-[22px]">
                  {socials.email}
                </span>
                <span
                  aria-hidden="true"
                  className="relative mt-3 block h-px w-full bg-[repeating-linear-gradient(90deg,color-mix(in_srgb,var(--color-yellow)_45%,transparent)_0_8px,transparent_8px_16px)]"
                />
              </a>
              <p className="mt-4 font-sans text-sm leading-relaxed text-fog">
                {t("contact.response")}
              </p>
            </div>

            <div
              className="comic-panel bg-midnight/70 p-6 sm:p-7"
              data-reveal
              data-reveal-delay={0.1}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
                {t("contact.socialsLabel")}
              </p>
              <ul className="mt-4 divide-y divide-cream/10">
                {socials.links.map((link, i) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-4 py-4"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-yellow transition-all duration-300 group-hover:h-8"
                      />
                      <span aria-hidden="true" className="font-mono text-[10px] text-fog/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-base font-semibold uppercase tracking-wide text-cream transition-colors group-hover:text-yellow">
                          {link.label}
                        </span>
                        <span className="block truncate font-mono text-[11px] text-fog">
                          {link.handle}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        style={{ color: "var(--color-yellow)" }}
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}