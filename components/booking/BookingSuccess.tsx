"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "../Icon";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** Elegant, restrained confetti — a few brand-coloured pieces, once. */
function Confetti() {
  const reduce = useReducedMotion();
  const pieces = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.35,
        duration: 2.4 + Math.random() * 1.4,
        rotate: Math.random() * 360,
        size: 6 + Math.random() * 7,
        color: ["#F58220", "#F9A04B", "#ffffff", "#8DA1BE"][i % 4],
        round: i % 3 === 0,
      })),
    [],
  );

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: "-12%", opacity: 0, rotate: 0 }}
          animate={{ y: "120%", opacity: [0, 1, 1, 0], rotate: p.rotate }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.4,
            borderRadius: p.round ? "9999px" : "2px",
            background: p.color,
          }}
        />
      ))}
    </div>
  );
}

/** Animated green check mark (circle + tick draw-on). */
function CheckMark() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      {/* soft pulsing halo */}
      {!reduce && (
        <motion.span
          className="absolute inset-0 rounded-full bg-emerald-500/25"
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity, repeatDelay: 0.4 }}
        />
      )}
      <motion.svg
        viewBox="0 0 100 100"
        className="relative h-24 w-24 drop-shadow-[0_10px_30px_rgba(16,185,129,0.35)]"
        initial={reduce ? { scale: 1 } : { scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
      >
        <defs>
          <linearGradient id="ok" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#34d399" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#ok)" />
        <motion.path
          d="M30 52 L44 66 L72 36"
          fill="none"
          stroke="#fff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
        />
      </motion.svg>
    </div>
  );
}

export default function BookingSuccess({ onReset }: { onReset: () => void }) {
  const reduce = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Keyboard focus management: move focus to the confirmation heading.
  useEffect(() => {
    const t = setTimeout(() => headingRef.current?.focus(), 120);
    return () => clearTimeout(t);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  };

  return (
    <motion.div
      key="success"
      role="status"
      aria-live="polite"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col items-center gap-6 px-6 py-20 text-center sm:px-10"
    >
      <Confetti />

      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center gap-6">
        <motion.div variants={item}>
          <CheckMark />
        </motion.div>

        <motion.h3
          ref={headingRef}
          tabIndex={-1}
          variants={item}
          className="max-w-xl text-balance text-3xl font-bold tracking-tight text-white outline-none sm:text-4xl"
        >
          Vielen Dank für Ihre Terminanfrage!
        </motion.h3>

        <motion.p variants={item} className="max-w-lg text-lg leading-relaxed text-white/70">
          Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns
          schnellstmöglich mit Ihnen in Verbindung setzen, um Ihren Wunschtermin
          zu bestätigen.
        </motion.p>

        <motion.p variants={item} className="max-w-md text-sm leading-relaxed text-white/50">
          Sollten Sie dringende Fragen haben, erreichen Sie uns selbstverständlich
          auch telefonisch unter{" "}
          <a href={site.phone.href} className="font-semibold text-orange-300 hover:text-orange">
            {site.phone.display}
          </a>
          .
        </motion.p>

        <motion.div variants={item} className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a href="#top" className="btn-primary group">
            <Icon name="arrowRight" className="h-5 w-5 rotate-180" />
            Zur Startseite
          </a>
          <a href="#leistungen" className="btn-secondary group">
            Weitere Leistungen ansehen
            <Icon name="arrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.button
          variants={item}
          type="button"
          onClick={onReset}
          className="mt-1 text-sm font-medium text-white/45 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Weitere Anfrage senden
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
