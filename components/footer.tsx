"use client";

import { Github, Linkedin, ArrowUpRight } from "lucide-react";

import { Info } from "@/lib/data";
import { Reveal } from "@/components/motion";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-pale/60 blur-[130px]" />
      <div className="container-x relative">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Get in touch</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            Let&apos;s build something thoughtful together.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${Info.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_24px_-12px_rgba(82,119,232,0.5)] transition-all duration-250 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-deep hover:shadow-[0_16px_32px_-12px_rgba(82,119,232,0.6)] active:scale-[0.98] motion-reduce:hover:scale-100"
            >
              {Info.email}
              <ArrowUpRight className="size-4 transition-transform duration-250 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" />
            </a>
            <a
              href={Info.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-12 place-items-center rounded-full card transition-all duration-250 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-brand/40 hover:shadow-lift hover:text-brand motion-reduce:hover:scale-100"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href={Info.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-12 place-items-center rounded-full card transition-all duration-250 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-brand/40 hover:shadow-lift hover:text-brand motion-reduce:hover:scale-100"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-line pb-10 pt-8 sm:mt-16">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-ink-soft">
              © {new Date().getFullYear()} {Info.name}. Crafted by hand — no templates.
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-ink-soft transition-colors duration-200 hover:text-brand">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}