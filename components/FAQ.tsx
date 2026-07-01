"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="Häufige Fragen"
          title={
            <>
              Antworten, bevor Sie{" "}
              <span className="text-gradient-orange">fragen</span>
            </>
          }
          subtitle="Sie haben eine andere Frage? Rufen Sie uns an – wir beraten Sie gern persönlich."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.question} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-colors ${
                    isOpen
                      ? "border-orange/40 bg-white/[0.06]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-semibold text-white">
                      {f.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? "bg-orange text-white" : "bg-white/10 text-white"
                      }`}
                    >
                      <Icon name="chevron" className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 leading-relaxed text-white/70">
                          {f.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
