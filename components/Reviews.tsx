"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon, { type IconName } from "./Icon";
import { promises } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Honest trust section for a newly founded company: clear promises instead of
 * invented customer reviews. Real Google reviews can be added later.
 */
export default function Reviews() {
  return (
    <section id="versprechen" className="section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="Unser Versprechen"
          title={
            <>
              Frisch gestartet – mit{" "}
              <span className="text-gradient-orange">vollem Einsatz</span>
            </>
          }
          subtitle="Wir sind ein junges, familiäres Unternehmen aus Bornheim. Bei jedem Auftrag geben wir 100 % – und freuen uns darauf, Sie als einen unserer ersten zufriedenen Kunden zu begrüßen."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="flex h-full flex-col rounded-4xl border border-white/10 bg-white/[0.04] p-7"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange to-orange-500 text-white shadow-glow">
                  <Icon name={p.icon as IconName} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-white/65">
                  {p.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Honest note + CTA — no invented ratings */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 rounded-[2rem] glass px-8 py-10 text-center">
            <div className="flex gap-1 text-orange" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-6 w-6" fill="none" />
              ))}
            </div>
            <p className="text-lg font-medium text-white">
              Ihre Meinung zählt.
            </p>
            <p className="max-w-xl text-white/65">
              Als neu gegründetes Unternehmen sammeln wir gerade unsere ersten
              Bewertungen. Nach Ihrem Auftrag freuen wir uns sehr über Ihr
              ehrliches Feedback – so können wir uns stetig verbessern.
            </p>
            <div className="mt-1 flex flex-col gap-3 sm:flex-row">
              <a href="#termin" className="btn-primary">
                Jetzt Termin anfragen
              </a>
              <a href={site.phone.href} className="btn-secondary">
                <Icon name="phone" className="h-5 w-5" />
                {site.phone.display}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
