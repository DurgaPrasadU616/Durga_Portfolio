"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Soft radial glow that trails the cursor. Hidden on touch devices. */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        x: sx,
        y,
        background:
          "radial-gradient(circle, rgba(82,119,232,0.08) 0%, rgba(122,166,255,0.05) 40%, transparent 65%)",
      }}
    />
  );
}