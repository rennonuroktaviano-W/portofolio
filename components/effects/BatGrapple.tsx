export function BatGrapple({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 40"
      className={className}
      fill="none"
    >
      <circle
        cx="24"
        cy="4"
        r="4"
        stroke="#4a5363"
        strokeWidth="2.5"
      />
      <path d="M24 8 L24 18" stroke="#3a4150" strokeWidth="4" />
      <path d="M24 8 L24 18" stroke="#1a1e27" strokeWidth="1.5" />
      <path
        d="M19 22 C13 25 10 32 9 38 C9 39.6 11.4 40 12 38.5 C14 33 17 28 21 25 Z"
        fill="#232833"
        stroke="#4a5363"
        strokeWidth="1.5"
      />
      <path
        d="M29 22 C35 25 38 32 39 38 C39 39.6 36.6 40 36 38.5 C34 33 31 28 27 25 Z"
        fill="#232833"
        stroke="#4a5363"
        strokeWidth="1.5"
      />
      <path
        d="M24 23 C22 28 22 34 23 40 L25 40 C26 34 26 28 24 23 Z"
        fill="#1a1e27"
        stroke="#4a5363"
        strokeWidth="1"
      />
      <path
        d="M15 22 L11 15 L17 18 Z"
        fill="#232833"
        stroke="#4a5363"
        strokeWidth="1"
      />
      <path
        d="M33 22 L37 15 L31 18 Z"
        fill="#232833"
        stroke="#4a5363"
        strokeWidth="1"
      />
    </svg>
  );
}