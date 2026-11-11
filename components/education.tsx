"use client";

import { GraduationCap, Award, Calendar, Check } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation & industry training"
      />

      <div className="mx-auto max-w-4xl">
        <FadeUp>
          <div className="rounded-[1.5rem] border border-line bg-card p-7 shadow-soft sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              {/* Left: Degree details */}
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                    <GraduationCap className="size-3.5" />
                    Undergraduate Degree
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft">
                    <Calendar className="size-3.5" />
                    2023 – 2027
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  B.Tech — Computer Science &amp; Engineering
                </h3>
                <p className="mt-2 text-base font-medium text-ink-soft">
                  ANU College of Engineering &amp; Technology
                </p>

                <p className="mt-4 leading-relaxed text-ink-soft">
                  Rigorous computer science curriculum with strong emphasis on data structures,
                  algorithms, database systems, and modern software engineering principles.
                </p>
              </div>

              {/* Right: Score + Training, separated by hairlines */}
              <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Cumulative GPA
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl font-bold tracking-tight text-brand">8.2</span>
                    <span className="text-sm font-semibold text-ink-soft">/ 10</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-line pt-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                    <Award className="size-4" />
                    Industry Training
                  </div>
                  <h4 className="mt-1.5 font-bold text-ink">NxtWave CCBP 4.0 Academy</h4>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                    Full stack development training spanning React, Node.js, Python,
                    databases, and real-world project work.
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                    <Check className="size-3.5" /> Full Stack Development training
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
