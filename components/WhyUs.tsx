"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { processSteps } from "@/lib/content";

export default function WhyUs() {
  const reduce = useReducedMotion();

  return (
    <section id="ablauf" className="section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="So einfach geht's"
          title={
            <>
              Ihr Weg zu mehr <span className="text-gradient-orange">Platz</span>
            </>
          }
          subtitle="In fünf transparenten Schritten – ohne Stress, ohne versteckte Kosten, mit besenreiner Übergabe."
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* Vertical animated line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-orange via-orange/60 to-transparent"
            />
          </div>

          <ul className="space-y-8 md:space-y-0">
            {processSteps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={s.step}
                  className="relative md:grid md:grid-cols-2 md:gap-12 md:py-6"
                >
                  {/* Node */}
                  <span className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange text-lg font-bold text-white shadow-glow md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    {s.step}
                  </span>

                  <Reveal
                    delay={0.05}
                    className={`pl-20 md:pl-0 ${
                      left
                        ? "md:col-start-1 md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <motion.div
                      whileHover={reduce ? undefined : { y: -4 }}
                      className="glass rounded-3xl p-6"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-white/65">{s.text}</p>
                    </motion.div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 text-center">
            <a href="#termin" className="btn-primary group">
              Jetzt kostenlose Besichtigung anfragen
              <Icon
                name="arrowRight"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
