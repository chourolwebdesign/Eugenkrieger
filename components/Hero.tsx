"use client";

import { motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";
import Counter from "./Counter";
import { site } from "@/lib/site";

const stats = [
  { value: 500, suffix: "+", label: "Aufträge erledigt" },
  { value: 15, suffix: " Jahre", label: "Erfahrung" },
  { value: 24, suffix: "h", label: "Schnelle Rückmeldung" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="container-px relative z-10 px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item}>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-orange" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
              </span>
              Entrümpelung in Bornheim &amp; Umgebung
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]"
          >
            <span className="text-gradient">Wir schaffen</span>{" "}
            <span className="text-gradient-orange">Platz.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            Professionelle{" "}
            <span className="text-white">Entrümpelung</span>,{" "}
            <span className="text-white">Haushaltsauflösung</span> und{" "}
            <span className="text-white">Umzüge</span> in Bornheim und Umgebung.
            Schnell. Sauber. Zuverlässig.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#termin" className="btn-primary group">
              <Icon name="check" className="h-5 w-5" />
              Kostenloses Angebot
              <Icon
                name="arrowRight"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              />
            </a>
            <a href="#termin" className="btn-secondary">
              <Icon name="calendar" className="h-5 w-5" />
              Termin vereinbaren
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60"
          >
            <span className="inline-flex items-center gap-2">
              <Icon name="shield" className="h-4 w-4 text-orange" /> Festpreis-Garantie
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="leaf" className="h-4 w-4 text-orange" /> Umweltgerechte Entsorgung
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="bolt" className="h-4 w-4 text-orange" /> Kurzfristige Termine
            </span>
          </motion.div>
        </motion.div>

        {/* Floating statistics */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="glass rounded-3xl p-6"
            >
              <div className="text-4xl font-bold tracking-tight text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#leistungen"
        aria-label="Nach unten scrollen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.3em]">Scrollen</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <Icon name="arrowDown" className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
