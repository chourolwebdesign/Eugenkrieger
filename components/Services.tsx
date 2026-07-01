"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon, { type IconName } from "./Icon";
import { services } from "@/lib/content";

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="leistungen" className="section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title={
            <>
              Alles aus einer Hand –{" "}
              <span className="text-gradient-orange">professionell</span>{" "}
              erledigt
            </>
          }
          subtitle="Von der einzelnen Kellerräumung bis zur kompletten Gewerbeauflösung: Wir kümmern uns um jeden Auftrag mit derselben Sorgfalt."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={reduce ? undefined : { y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-4xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-orange/40"
              >
                {/* Glow on hover */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange to-orange-500 text-white shadow-glow">
                    <Icon name={s.icon as IconName} className="h-7 w-7" />
                  </span>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-white/65">
                    {s.description}
                  </p>

                  <a
                    href="#termin"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange"
                  >
                    Angebot anfragen
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
