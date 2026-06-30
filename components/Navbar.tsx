"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { LogoMark } from "./Logo";
import { site } from "@/lib/site";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#galerie", label: "Vorher / Nachher" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "glass-strong mx-3 shadow-premium sm:mx-4"
              : "mx-3 bg-transparent sm:mx-4"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5 pl-1" aria-label="Eugen Krieger – Startseite">
            <LogoMark className="h-9 w-9 shrink-0 transition-transform group-hover:scale-105" />
            <span className="hidden leading-none sm:block">
              <span className="block text-[0.95rem] font-extrabold tracking-tight text-white">
                EUGEN KRIEGER
              </span>
              <span className="block text-[0.62rem] font-medium uppercase tracking-[0.22em] text-orange-300">
                Entrümpelung &amp; Service
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phone.href}
              className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-orange/50 hover:text-orange-300 md:inline-flex"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.display}
            </a>
            <a href="#termin" className="hidden sm:inline-flex btn-primary !px-5 !py-2.5 !text-sm">
              Termin buchen
            </a>
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong absolute inset-x-3 top-20 rounded-3xl p-4 shadow-premium"
            >
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3.5 text-lg font-medium text-white/85 transition-colors hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2 px-1 pt-2">
                  <a
                    href={site.phone.href}
                    className="btn-secondary !py-3 !text-sm"
                    onClick={() => setOpen(false)}
                  >
                    <Icon name="phone" className="h-4 w-4" /> Anrufen
                  </a>
                  <a
                    href="#termin"
                    className="btn-primary !py-3 !text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Termin buchen
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
