import { Code2, Award, BookOpen, Trophy, Sparkles, Medal, type LucideIcon } from "lucide-react";

import { achievements } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { StaggerList, StaggerItem } from "@/components/motion";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  award: Award,
  book: BookOpen,
  trophy: Trophy,
  sparkles: Sparkles,
  medal: Medal,
};

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Proof in numbers, quality over quantity"
      />
      <StaggerList className="hairline-grid grid md:grid-cols-3">
        {achievements.map((a) => {
          const Icon = icons[a.icon];
          return (
            <StaggerItem key={a.title} className="h-full">
              <article className="group flex h-full flex-col p-6 transition-colors duration-250 hover:bg-brand-soft/20">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand transition-transform duration-250 group-hover:scale-105">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-soft/70">
                    {a.meta}
                  </span>
                </div>
                <h3 className="mt-4 text-[0.98rem] font-bold leading-snug tracking-tight">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{a.detail}</p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerList>
    </Section>
  );
}
