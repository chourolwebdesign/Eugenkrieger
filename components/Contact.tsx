"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { site } from "@/lib/site";

const actions = [
  {
    icon: "phone" as const,
    label: "Anrufen",
    value: site.phone.display,
    href: site.phone.href,
    accent: "from-orange to-orange-500",
  },
  {
    icon: "whatsapp" as const,
    label: "WhatsApp",
    value: "Schnell schreiben",
    href: site.whatsapp.href,
    accent: "from-emerald-500 to-emerald-600",
  },
  {
    icon: "mail" as const,
    label: "E-Mail",
    value: site.email,
    href: `mailto:${site.email}`,
    accent: "from-sky-500 to-sky-600",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="Kontakt"
          title={
            <>
              Lassen Sie uns{" "}
              <span className="text-gradient-orange">Platz schaffen</span>
            </>
          }
          subtitle="Rufen Sie an, schreiben Sie uns oder buchen Sie direkt online. Die Besichtigung ist immer kostenlos."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: actions + info */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {actions.map((a, i) => (
                <Reveal key={a.label} delay={i * 0.06}>
                  <motion.a
                    href={a.href}
                    target={a.icon === "whatsapp" ? "_blank" : undefined}
                    rel={a.icon === "whatsapp" ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -5 }}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-orange/40"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${a.accent} text-white shadow-lg`}
                    >
                      <Icon name={a.icon} className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {a.label}
                      </span>
                      <span className="block text-sm text-white/55">
                        {a.value}
                      </span>
                    </span>
                  </motion.a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange/15 text-orange">
                    <Icon name="pin" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">Adresse</h3>
                    <p className="mt-1 text-white/65">
                      {site.address.street}
                      <br />
                      {site.address.postalCode} {site.address.city}
                      <br />
                      {site.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="glass rounded-3xl p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange/15 text-orange">
                    <Icon name="clock" className="h-6 w-6" />
                  </span>
                  <div className="w-full">
                    <h3 className="text-base font-semibold text-white">
                      Öffnungszeiten
                    </h3>
                    <ul className="mt-2 space-y-1.5">
                      {site.openingHours.map((o) => (
                        <li
                          key={o.day}
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <span className="text-white/65">{o.day}</span>
                          <span className="font-medium text-white">{o.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: map (branded fallback behind the iframe) */}
          <Reveal delay={0.12}>
            <div className="relative h-full min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/10 bg-navy-800">
              {/* Fallback shown if the embed is slow or blocked */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-navy-500/40 to-navy-700 p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/15 text-orange">
                  <Icon name="pin" className="h-7 w-7" />
                </span>
                <p className="text-white/70">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </p>
                <a
                  href={site.maps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2.5 !text-sm"
                >
                  In Google Maps öffnen
                </a>
              </div>
              <iframe
                title={`Standort von ${site.legalName} in ${site.address.city}`}
                src={site.maps.embed}
                className="absolute inset-0 h-full w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
