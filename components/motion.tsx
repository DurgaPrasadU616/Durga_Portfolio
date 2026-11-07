"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { ReactNode, useEffect, useMemo, useRef } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "h2" | "p";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: EASE, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerList({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();

  const container: Variants = useMemo(
    () => ({
      hidden: {},
      show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
    }),
    [reduce],
  );

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const variants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE, delay } },
    }),
    [delay, reduce],
  );
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

/** Tiny, quick fade-up used for small text blocks. */
export function FadeUp({
  children,
  delay = 0,
  className,
  y = 16,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Lightweight mouse-nudging wrapper — disabled for reduced-motion and touch screens to prevent frame drops. */
export function Parallax({
  children,
  className,
  strength = 8,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 22 });
  const sy = useSpring(y, { stiffness: 120, damping: 22 });

  useEffect(() => {
    if (reduce) return;
    const fine = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      x.set(((e.clientX - cx) / r.width) * strength);
      y.set(((e.clientY - cy) / r.height) * strength);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce, strength, x, y]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} className={className}>
      {children}
    </motion.div>
  );
}