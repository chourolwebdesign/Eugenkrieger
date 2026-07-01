"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Fixed full-page ambient background: animated aurora blobs with subtle
 * mouse parallax, a faint grid and a noise overlay for a premium texture.
 */
export default function Ambient() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const blob1X = useTransform(sx, (v) => v * 40);
  const blob1Y = useTransform(sy, (v) => v * 40);
  const blob2X = useTransform(sx, (v) => v * -55);
  const blob2Y = useTransform(sy, (v) => v * -35);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy"
    >
      {/* Deep radial base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(27,56,102,0.55),_transparent_55%)]" />

      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="aurora-blob absolute -left-32 top-[-10%] h-[36rem] w-[36rem] animate-float-slow rounded-full bg-[#1B3866]"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="aurora-blob absolute right-[-10%] top-[20%] h-[30rem] w-[30rem] animate-float rounded-full bg-[#F58220]/30"
      />
      <motion.div
        style={{ x: blob1X, y: blob2Y }}
        className="aurora-blob absolute bottom-[-15%] left-[30%] h-[34rem] w-[34rem] animate-float-slow rounded-full bg-[#34507C]/60"
      />

      <div className="absolute inset-0 grid-lines" />
      <div className="absolute inset-0 noise" />
    </div>
  );
}
