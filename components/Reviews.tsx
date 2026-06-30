"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Icon from "./Icon";
import { reviews } from "@/lib/content";
import { site } from "@/lib/site";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-orange" aria-label={`${n} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className="h-4 w-4"
          fill={i < n ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="bewertungen" className="section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="Bewertungen"
          title={
            <>
              Das sagen unsere{" "}
              <span className="text-gradient-orange">Kunden</span>
            </>
          }
        />

        <Reveal>
          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 rounded-3xl glass px-8 py-6 text-center">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-bold text-white">
                <Counter to={5.0} decimals={1} />
              </span>
              <div className="text-left">
                <Stars n={5} />
                <p className="mt-1 text-sm text-white/60">
                  aus{" "}
                  <Counter to={Number(site.reviewCount)} suffix="+ Bewertungen" />
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="flex h-full flex-col rounded-4xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex items-center justify-between">
                  <Stars n={r.rating} />
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.9 0 5.4-1 7.2-2.7l-3.6-2.7c-1 .7-2.3 1-3.6 1-2.8 0-5.1-1.8-6-4.3H2.3v2.7A11 11 0 0 0 12 23Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M6 14.3a6.6 6.6 0 0 1 0-4.6V7H2.3a11 11 0 0 0 0 9.9L6 14.3Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7L6 9.7C6.9 7.2 9.2 5.4 12 5.4Z"
                    />
                  </svg>
                </div>
                <blockquote className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-white/75">
                  {`„${r.text}“`}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange to-orange-500 text-sm font-bold text-white">
                    {r.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      {r.name}
                    </span>
                    <span className="block text-xs text-white/55">
                      {r.location}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
