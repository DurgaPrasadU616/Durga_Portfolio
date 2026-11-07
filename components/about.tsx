"use client";

import { GraduationCap, Rocket, Cpu } from "lucide-react";

import { FadeUp } from "@/components/motion";
import { Section } from "@/components/section";

const highlights = [
  {
    icon: Rocket,
    label: "Current focus",
    title: "Frontend, full stack & Gen AI",
    body: "Building responsive web applications and AI-powered solutions — from React interfaces to Python AI pipelines.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    title: "B.Tech CSE · ANU CET · CGPA 8.2",
    body: "B.Tech Computer Science & Engineering at ANU College of Engineering & Technology (2023–2027), reinforced by NxtWave CCBP 4.0 Academy full stack development training.",
  },
  {
    icon: Cpu,
    label: "Career goal",
    title: "Software / AI Engineer",
    body: "Seeking software engineering, frontend, full stack, and Generative AI internship opportunities to build impactful products at scale.",
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
                I&apos;m Ungarala Durga Prasad, a B.Tech Computer Science &amp; Engineering student at
                ANU College of Engineering &amp; Technology, interested in frontend development,
                full stack engineering, and Generative AI.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="leading-relaxed text-ink-soft">
                Trained through the NxtWave CCBP 4.0 Academy full stack development program, I build
                responsive web applications and AI-powered solutions that solve real-world problems
                — with a focus on clean code, great UX, and thoughtful engineering.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-sm text-ink-soft">
                <span className="font-semibold text-ink">Expected graduation: 2027.</span>{" "}
                Currently available for internship opportunities.
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
