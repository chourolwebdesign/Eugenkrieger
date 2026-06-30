"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { trustBadges } from "@/lib/content";

const iconFor: Record<string, Parameters<typeof Icon>[0]["name"]> = {
  Festpreis: "euro",
  "Kostenlose Besichtigung": "check",
  "Besenreine Übergabe": "broom",
  Zuverlässig: "shield",
  Schnell: "bolt",
  "Freundliches Team": "smile",
  "Umweltgerechte Entsorgung": "leaf",
  "Kurzfristige Termine": "clock",
};

export default function TrustSection() {
  return (
    <section className="section-pad !py-20">
      <div className="container-px">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {trustBadges.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group glass flex h-full flex-col gap-4 rounded-3xl p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/15 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                  <Icon name={iconFor[b.label] ?? "check"} className="h-6 w-6" />
                </span>
                <span className="text-base font-semibold text-white">
                  {b.label}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
