"use client";

import { Code2, Database, Cloud, Wrench, BrainCircuit, Braces, Server, MapPin, type LucideIcon } from "lucide-react";

import { skillGroups } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { StaggerList, StaggerItem } from "@/components/motion";

const icons: Record<string, LucideIcon> = {
  layout: Code2,
  braces: Braces,
  brain: BrainCircuit,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  server: Server,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technology"
        title="A focused toolkit — chosen to ship real products"
        align="center"
      />
      <StaggerList className="divided-panel">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <StaggerItem key={group.id}>
              <article className="group grid gap-4 p-6 sm:grid-cols-[14rem_1fr] sm:gap-8 sm:p-7 transition-colors duration-250 hover:bg-brand-soft/20">
                <div className="flex items-start gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand transition-transform duration-250 group-hover:scale-105">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold tracking-tight">{group.label}</h3>
                    <span className="mt-1.5 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-soft/70">
                      <span className="size-1.5 rounded-full bg-brand" />
                      {group.experience}
                    </span>
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="text-sm leading-relaxed text-ink-soft">{group.description}</p>

                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line bg-bg px-3 py-1.5 text-[0.78rem] font-medium text-ink-soft transition-all duration-200 hover:border-brand/40 hover:text-brand hover:scale-[1.03] motion-reduce:hover:scale-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-start gap-2">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-brand/70" />
                    <p className="text-xs leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">Where I&apos;ve used it · </span>
                      {group.usedIn}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerList>
    </Section>
  );
}
