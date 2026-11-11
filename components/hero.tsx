"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

import { Info } from "@/lib/data";
import { EASE, Parallax } from "@/components/motion";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";

function container(reduce: boolean | null = false) {
  return {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
}
function item(reduce: boolean | null = false) {
  return {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: EASE } },
  };
}

const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "Generative AI Enthusiast",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden pb-16 pt-28">
      {/* Single, subtle brand wash — no animated blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 460px at 12% -8%, rgba(82,119,232,0.10), transparent 60%), radial-gradient(700px 420px at 92% 18%, rgba(82,119,232,0.07), transparent 62%)",
        }}
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div variants={container(reduce)} initial="hidden" animate="show" className="max-w-3xl">
          {/* Status badge */}
          <motion.div variants={item(reduce)} className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full card px-4 py-2 text-sm font-medium text-ink-soft">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Open to Internship Opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item(reduce)} className="mt-8">
            <h1 className="text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-[-0.035em]">
              Building meaningful{" "}
              <span className="grad-text">digital experiences</span>
              <br />
              with modern web technologies and AI.
            </h1>
          </motion.div>

          {/* Introduction */}
          <motion.p variants={item(reduce)} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {Info.intro}
          </motion.p>

          {/* Role tags */}
          <motion.div variants={item(reduce)} className="mt-5 flex flex-wrap items-center gap-2">
            {roles.map((role) => (
              <span
                key={role}
                className="inline-flex items-center rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-ink-soft"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item(reduce)} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work
                  <ArrowDown className="size-4" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="ghost">
                <a href={Info.resumeUrl}>
                  <Download className="size-4" />
                  Download Resume
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="ghost">
                <a href="#contact">
                  <Mail className="size-4" />
                  Contact Me
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item(reduce)} className="mt-10 flex items-center gap-2">
            <a
              href={Info.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-11 place-items-center rounded-full card transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-brand/40 hover:shadow-lift hover:text-brand"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href={Info.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-11 place-items-center rounded-full card transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-brand/40 hover:text-brand"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={`mailto:${Info.email}`}
              className="grid size-11 place-items-center rounded-full card transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-brand/40 hover:text-brand"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Identity card — editorial, no duplicated statistics */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[320px]"
        >
          <Parallax strength={8}>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-card p-7 shadow-card">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-soft to-transparent"
              />
              <div className="relative flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="grid size-16 place-items-center rounded-[1.25rem] bg-gradient-to-br from-brand-deep to-brand text-xl font-bold text-white">
                    DP
                  </span>
                  <div>
                    <p className="font-bold tracking-tight text-ink">Durga Prasad</p>
                    <p className="text-sm text-ink-soft">CS Student · ANU CET</p>
                  </div>
                </div>

                <div className="h-px bg-line" />

                <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <p className="text-sm font-medium text-emerald-700">Open to internship opportunities</p>
                </div>
              </div>
            </div>
          </Parallax>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4, ease: EASE }}
        className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-soft transition-colors hover:text-ink md:flex"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <span className="grid size-8 place-items-center rounded-full border border-line bg-white shadow-soft transition-transform duration-250 ease-out group-hover:translate-y-1">
          <ArrowDown className="size-3.5" />
        </span>
      </motion.a>
    </section>
  );
}
