import type { SVGProps } from "react";

/**
 * Brand emblem recreated from the company logo: a house with an orange moving
 * box and a broom — "Wir schaffen Platz." Used in navbar, footer and loader.
 */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      {/* House body */}
      <path
        d="M22 33h26v18a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V33Z"
        fill="#0B1E3B"
      />
      {/* Roof */}
      <path
        d="M18 34 35 19l17 15a1.6 1.6 0 0 1-1.1 2.8H19.1A1.6 1.6 0 0 1 18 34Z"
        fill="#0B1E3B"
      />
      {/* Window */}
      <rect x="31" y="38" width="9" height="9" rx="1.5" fill="#fff" />
      <path d="M35.5 38v9M31 42.5h9" stroke="#0B1E3B" strokeWidth="1.4" />
      {/* Moving box (front) */}
      <path
        d="M6 40h18v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V40Z"
        fill="#F58220"
      />
      <path d="M6 40h18l-3-5H9l-3 5Z" fill="#D96D11" />
      <path d="M15 35v20" stroke="#0B1E3B" strokeWidth="1.4" opacity="0.85" />
      <path d="M12 46h6" stroke="#0B1E3B" strokeWidth="1.4" opacity="0.6" />
      {/* Broom */}
      <path
        d="M52 14 41 30"
        stroke="#0B1E3B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="m37 28 8 5-3.2 4.6c-.5.7-1.5.8-2.1.2l-5.3-5c-.6-.5-.5-1.5.2-2l2.4-2.8Z"
        fill="#F58220"
      />
      <path
        d="m36 33 6 3.8"
        stroke="#0B1E3B"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

/** Compact lockup: emblem + wordmark, used in navbar and footer. */
export function LogoLockup({
  className = "",
  light = true,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="leading-none">
        <span
          className={`block text-[0.95rem] font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          EUGEN KRIEGER
        </span>
        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-orange-300">
          Entrümpelung &amp; Service
        </span>
      </span>
    </span>
  );
}
