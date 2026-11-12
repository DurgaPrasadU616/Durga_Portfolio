"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Layers,
  Lightbulb,
  Rocket,
  Server,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

import { projects } from "@/lib/data";
import { ProjectVisual } from "@/components/projects";
import { EASE, FadeUp, StaggerItem, StaggerList } from "@/components/motion";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";

const p = projects.find((x) => x.id === "shelfwise") ?? projects[0];

export function FeaturedProject() {
  return (
    <section id="featured" className="relative isolate section-y">
      <div className="container-x">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            <span className="h-px w-8 bg-brand/50" />
            Featured build
            <span className="h-px w-8 bg-brand/50" />
          </span>
          <h2 className="mt-4 text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            ShelfWise AI — computer vision meets retail
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            The project I&apos;m most proud of: combining TensorFlow, OpenCV, and FastAPI to automate
            retail shelf monitoring and eliminate manual stock audits.
          </p>
        </FadeUp>

        {/* hero showcase */}
        <FadeUp delay={0.08} className="mt-12">
          <div className="overflow-hidden rounded-[1.5rem] border border-line bg-card shadow-card">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <ProjectVisual project={p} fill />

              <div className="flex flex-col justify-center gap-6 p-7 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-[0.72rem] font-semibold text-brand">
                    <ScaleIcon /> {p.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    <Link href={`/projects/${p.slug}`} className="transition-colors hover:text-brand">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.tagline}</p>
                </div>

                <p className="leading-relaxed text-ink-soft">{p.overview}</p>

                <div className="grid grid-cols-1 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-bg sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="p-3.5">
                      <p className="text-lg font-bold tracking-tight text-ink">{m.value}</p>
                      <p className="mt-0.5 text-[0.7rem] leading-snug text-ink-soft">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {p.demo && p.demo !== "#" && (
                    <Magnetic>
                      <Button asChild size="lg">
                        <a href={p.demo} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ExternalLink />
                        </a>
                      </Button>
                    </Magnetic>
                  )}
                  {p.github && (
                    <Magnetic>
                      <Button asChild size="lg" variant="ghost">
                        <a href={p.github} target="_blank" rel="noopener noreferrer">
                          <Code2 /> GitHub
                        </a>
                      </Button>
                    </Magnetic>
                  )}
                  <Magnetic>
                    <Button asChild size="lg" variant="ghost">
                      <a href={`/projects/${p.slug}`}>
                        Full Case Study
                        <ArrowUpRight />
                      </a>
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* story: problem → solution */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <StoryCard icon={<Target />} label="Why I built it" tone="problem" body={p.problem} />
          <StoryCard
            icon={<Lightbulb />}
            label="What I shipped"
            tone="solution"
            accent={p.accentFrom}
            body={p.solution}
          />
        </div>

        {/* architecture */}
        <div className="mt-8">
          <StoryHeading icon={<Server />} title="Architecture at a glance" />
          <StaggerList className="hairline-grid mt-4 grid md:grid-cols-3">
            {p.architecture.map((a, i) => (
              <StaggerItem key={a} className="h-full">
                <div className="h-full p-5">
                  <span
                    className="inline-flex rounded-lg px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em]"
                    style={{ background: p.accentSoft, color: p.accentFrom }}
                  >
                    Layer {i + 1}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>

        {/* features + challenges */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-line bg-card p-6 shadow-soft sm:p-8">
            <StoryHeading icon={<Layers />} title="Key features" />
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
                    style={{ background: p.accentSoft, color: p.accentFrom }}
                  >
                    <Check className="size-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-card p-6 shadow-soft sm:p-8">
            <StoryHeading icon={<Zap />} title="What was hard" />
            <ul className="mt-4 space-y-3">
              {p.challenges.map((c, i) => (
                <li key={c} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                  <span
                    className="grid size-6 shrink-0 place-items-center rounded-lg text-[0.7rem] font-bold"
                    style={{ background: p.accentSoft, color: p.accentFrom }}
                  >
                    {i + 1}
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* process + outcome */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-line bg-card p-6 shadow-soft sm:p-8">
            <StoryHeading icon={<Workflow />} title="How it was built" />
            <ol className="mt-4 space-y-0">
              {p.process.map((step, i) => (
                <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                  <span className="relative flex flex-col items-center">
                    <span
                      className="grid size-7 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold"
                      style={{ background: p.accentSoft, color: p.accentFrom }}
                    >
                      {i + 1}
                    </span>
                    {i < p.process.length - 1 && <span className="mt-1 w-px flex-1 bg-line" aria-hidden />}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-ink-soft">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-card p-6 shadow-soft sm:p-8">
            <StoryHeading icon={<Rocket />} title="The outcome" />
            <div className="mt-4 rounded-2xl p-5" style={{ background: p.accentSoft }}>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-soft/70">
                Impact
              </p>
              <p className="mt-1 font-medium leading-relaxed" style={{ color: p.accentFrom }}>
                {p.impact}
              </p>
            </div>
            <ul className="mt-4 space-y-2.5">
              {p.impactPoints.map((ip) => (
                <li key={ip} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
                    style={{ background: p.accentSoft, color: p.accentFrom }}
                  >
                    <Check className="size-3" />
                  </span>
                  {ip}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-[0.75rem] font-medium text-ink-soft">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryHeading({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <h4 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
      {icon} {title}
    </h4>
  );
}

function StoryCard({
  icon,
  label,
  body,
  tone,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  body: string;
  tone: "problem" | "solution";
  accent?: string;
}) {
  return (
    <FadeUp className="h-full">
      <div className="h-full rounded-[1.5rem] bg-secondary p-6 sm:p-8">
        <span
          className={`mb-3 grid size-10 place-items-center rounded-2xl ${
            tone === "problem" ? "bg-[#fdecef] text-[#e11d48]" : "bg-brand-soft text-brand"
          }`}
          style={tone === "solution" && accent ? { background: accent + "16", color: accent } : undefined}
        >
          {icon}
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">{label}</p>
        <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
      </div>
    </FadeUp>
  );
}

function ScaleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}
