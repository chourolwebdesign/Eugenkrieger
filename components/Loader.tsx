"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "./Logo";

/** Premium loading animation shown briefly on first paint. */
export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Hide as soon as the page is interactive; keep it short and premium.
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center"
            >
              <LogoMark className="h-16 w-16" />
              <div className="mt-4 text-2xl font-extrabold tracking-tight text-white">
                EUGEN KRIEGER
              </div>
              <div className="mt-1 text-center text-[0.7rem] font-medium uppercase tracking-[0.35em] text-orange">
                Entrümpelung &amp; Service
              </div>
            </motion.div>
            <div className="h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-orange"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
