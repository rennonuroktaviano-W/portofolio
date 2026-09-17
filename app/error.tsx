"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="flex min-h-svh flex-col items-center justify-center gap-6 bg-midnight px-6 text-center"
      style={{ colorScheme: "dark" }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-gold">
        transmission error — rt-404
      </p>
      <h1 className="max-w-md font-display text-4xl font-semibold uppercase leading-tight text-cream sm:text-5xl">
        The city&apos;s grid stumbled.
      </h1>
      <p className="max-w-sm text-sm text-fog">
        Something went wrong rendering this block. Try the circuit breaker
        below — no data is lost.
      </p>
      <button
        onClick={reset}
        className="mt-2 inline-flex items-center gap-3 border border-yellow/60 bg-yellow/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-yellow transition-colors hover:bg-yellow hover:text-midnight"
      >
        restart the block →
      </button>
      {error.digest ? (
        <p className="font-mono text-[10px] uppercase tracking-widest text-fog/60">
          digest: {error.digest}
        </p>
      ) : null}
    </main>
  );
}