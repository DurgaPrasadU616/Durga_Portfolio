"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

import { stats } from "@/lib/data";
import { EASE } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

function CountUp({
  value,
  suffix = "",
  decimals = 0,
  started,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  started: boolean;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!started) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [reduce, started, value]);

  return (
    <span className="text-[clamp(2.2rem,4.5vw,3.25rem)] font-bold leading-none tracking-[-0.03em] text-ink">
      {display.toFixed(decimals)}
      <span className="text-brand">{suffix}</span>
    </span>
  );
}

export function Stats() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="stats" className="relative section-y">
      <div className="container-x">
        <SectionHeading eyebrow="By the numbers" title="A track record, not a wishlist" />

        <div ref={ref} className="hairline-grid grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, ease: EASE, delay: reduce ? 0 : i * 0.05 }}
              className="flex flex-col justify-center gap-2 p-6 sm:p-8"
            >
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} started={inView} />
              <p className="text-sm font-semibold text-ink">{s.label}</p>
              <p className="text-xs leading-relaxed text-ink-soft">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
