"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body
        style={{
          background: "#08090b",
          color: "#ddd2b5",
          fontFamily: "monospace",
          display: "grid",
          placeItems: "center",
          minHeight: "100svh",
          margin: 0,
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <div>
          <p style={{ color: "#c89b3c", letterSpacing: "0.35em" }}>
            GNARLY KERNEL PANIC
          </p>
          <h1 style={{ fontSize: "1.75rem", letterSpacing: "0.05em" }}>
            The city&apos;s core crashed.
          </h1>
          <button
            style={{
              marginTop: "1.5rem",
              border: "1px solid #e6b84a",
              color: "#e6b84a",
              background: "rgba(230,184,74,0.1)",
              padding: "0.75rem 1.5rem",
              cursor: "pointer",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.7rem",
            }}
            onClick={() => reset()}
          >
            reboot the grid →
          </button>
        </div>
      </body>
    </html>
  );
}