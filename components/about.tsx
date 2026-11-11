"use client";

import { GraduationCap } from "lucide-react";

import { FadeUp } from "@/components/motion";
import { Section } from "@/components/section";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    title: "B.Tech CSE · ANU CET · CGPA 8.2",
    body: "B.Tech Computer Science & Engineering at ANU College of Engineering & Technology (2023–2027), reinforced by NxtWave CCBP 4.0 Academy full stack development training.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-5xl">
        {/* narrative */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeUp>
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                <span className="h-px w-8 bg-brand/50" />
                About
              </span>
              <h2 className="mt-4 text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                B.Tech CSE student building{" "}
                <span className="grad-text">responsive web apps</span>{" "}
                &amp; AI-powered solutions.
              </h2>
            </div>
          </FadeUp>

          <div className="space-y-5">
            <FadeUp delay={0.05}>
              <p className="text-lg leading-relaxed text-ink-soft">
                B.Tech Computer Science student at ANU College of Engineering &amp; Technology. I
                enjoy building user-friendly web applications and exploring Generative AI. Through
                academic projects, hackathons and hands-on development, I keep improving my
                problem-solving and software development skills.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* editorial highlights — one panel, divided rows */}
        <FadeUp delay={0.1} className="mt-12">
          <div className="divided-panel">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="grid gap-4 p-6 sm:grid-cols-[auto_1fr] sm:gap-5 sm:p-7 transition-colors duration-250 hover:bg-brand-soft/20"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <h.icon className="size-5" />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-base font-bold tracking-tight sm:text-lg">{h.title}</h3>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft/70">
                      {h.label}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
