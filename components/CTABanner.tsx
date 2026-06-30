"use client";

import Reveal from "./Reveal";
import Icon from "./Icon";
import { site } from "@/lib/site";

export default function CTABanner() {
  return (
    <section className="section-pad !py-16">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-orange/20 bg-gradient-to-br from-navy-500/60 to-navy-700 p-10 text-center shadow-premium sm:p-16">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-orange/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Bereit, <span className="text-gradient-orange">Platz zu schaffen</span>?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
                Kostenlose Besichtigung, Festpreis-Angebot, besenreine Übergabe.
                Fordern Sie jetzt Ihr unverbindliches Angebot an.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#termin" className="btn-primary group">
                  Kostenloses Angebot
                  <Icon
                    name="arrowRight"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a href={site.phone.href} className="btn-secondary">
                  <Icon name="phone" className="h-5 w-5" />
                  {site.phone.display}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
