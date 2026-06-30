"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { beforeAfter } from "@/lib/content";

/** A single draggable before/after comparison card. */
function CompareCard({
  item,
  onOpen,
}: {
  item: (typeof beforeAfter)[number];
  onOpen: () => void;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-navy-800">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none touch-none"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromClientX(e.clientX);
        }}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        {/* After (full) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.after}
          alt={`${item.title} – nachher`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute right-3 top-3 rounded-full bg-navy-900/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          Nachher
        </span>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <div className="relative h-full" style={{ width: `${10000 / pos}%` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.before}
              alt={`${item.title} – vorher`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-orange/90 px-3 py-1 text-xs font-semibold text-white">
            Vorher
          </span>
        </div>

        {/* Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-premium">
            <Icon name="arrowRight" className="h-4 w-4 -mr-1" />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-orange"
        >
          Vergrößern
          <Icon name="arrowRight" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galerie" className="section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="Vorher / Nachher"
          title={
            <>
              Das Ergebnis spricht für{" "}
              <span className="text-gradient-orange">sich</span>
            </>
          }
          subtitle="Ziehen Sie den Regler, um den Unterschied zu sehen. Aus vollgestellt wird besenrein."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfter.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <CompareCard item={item} onOpen={() => setLightbox(i)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-900/90 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              aria-label="Schließen"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              onClick={() => setLightbox(null)}
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="grid w-full max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {(["before", "after"] as const).map((k) => (
                <figure
                  key={k}
                  className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={beforeAfter[lightbox][k]}
                    alt={`${beforeAfter[lightbox].title} – ${
                      k === "before" ? "vorher" : "nachher"
                    }`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <figcaption
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${
                      k === "before" ? "bg-orange/90" : "bg-navy-900/70 backdrop-blur"
                    }`}
                  >
                    {k === "before" ? "Vorher" : "Nachher"}
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
