"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { site } from "@/lib/site";

/** Floating quick-action buttons (call / WhatsApp / book) on mobile + desktop. */
export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
        >
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Nachricht senden"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-premium transition-transform hover:scale-110"
          >
            <Icon name="whatsapp" className="h-7 w-7" />
          </a>
          <a
            href={site.phone.href}
            aria-label="Jetzt anrufen"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-orange px-5 py-4 font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 -z-0 animate-pulse-ring rounded-full bg-orange/60" />
            <Icon name="phone" className="relative z-10 h-6 w-6" />
            <span className="relative z-10 hidden pr-1 sm:inline">Anrufen</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
