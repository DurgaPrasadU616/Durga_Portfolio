import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Mail, Github, Linkedin, ExternalLink, Phone } from "lucide-react";
import { Info } from "@/lib/data";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume — Ungarala Durga Prasad",
  description: `${Info.name} — ${Info.role}. B.Tech CSE student resume.`,
};

export default function ResumePage() {
  return (
    <main className="container-x pt-24 pb-16 sm:pb-20">
      <div className="mx-auto max-w-3xl">
        {/* Navigation back */}
        <div className="no-print mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Printable Resume Container */}
        <div className="rounded-3xl border border-line bg-card p-8 shadow-card sm:p-12 print:border-none print:p-0 print:shadow-none">
          {/* Header */}
          <header id="pdf" className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-brand pb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{Info.name}</h1>
              <p className="mt-1.5 text-base font-semibold text-brand">
                Frontend Developer · Full Stack Developer · Generative AI Enthusiast
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                B.Tech CSE (2023–2027) · ANU College of Engineering &amp; Technology · CGPA: 8.2 / 10
              </p>
            </div>
            <div className="no-print flex items-center gap-2">
              <PrintButton />
            </div>
          </header>

          {/* Contact Details */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-b border-line pb-4 text-xs font-medium text-ink-soft">
            <a
              href={`mailto:${Info.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <Mail className="size-3.5 text-brand" />
              {Info.email}
            </a>
            <a
              href={`tel:${Info.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <Phone className="size-3.5 text-brand" />
              {Info.phone}
            </a>
            <a
              href={Info.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <Github className="size-3.5 text-brand" />
              github.com/{Info.githubUser}
            </a>
            <a
              href={Info.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <Linkedin className="size-3.5 text-brand" />
              LinkedIn Profile
            </a>
            <span>Andhra Pradesh, India</span>
          </div>

          {/* Summary */}
          <section className="mt-8">
            <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Professional Summary
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft text-sm">
              Computer Science Engineering student (B.Tech 2023–2027, ANU College of Engineering
              &amp; Technology) passionate about building responsive web applications and AI-powered
              solutions that solve real-world problems. Solved 300+ coding problems in Python and C.
              Open to internship opportunities.
            </p>
          </section>

          {/* Education & Training */}
          <section className="mt-8">
            <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Education &amp; Training
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">
                    B.Tech — Computer Science &amp; Engineering
                  </h3>
                  <span className="text-xs font-semibold text-brand">2023 – 2027 · CGPA: 8.2 / 10</span>
                </div>
                <p className="text-xs font-medium text-ink-soft">ANU College of Engineering &amp; Technology</p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">
                    Full Stack Development Training
                  </h3>
                  <span className="text-xs font-semibold text-brand">CCBP 4.0 Academy</span>
                </div>
                <p className="text-xs font-medium text-ink-soft">NxtWave CCBP 4.0 Academy</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  Full Stack Development training.
                </p>
              </div>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mt-8">
            <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Featured Projects
            </h2>
            <div className="mt-4 space-y-5">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">
                    ShelfWise AI — AI &amp; Computer Vision
                  </h3>
                  <span className="text-xs font-semibold text-ink-soft">2025 · Live Demo</span>
                </div>
                <p className="text-xs text-brand font-medium">
                  Python, OpenCV, TensorFlow, PyTorch, FastAPI, React
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  AI-powered inventory monitoring system designed to detect shelf issues and support
                  inventory management.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">
                    RightLaw — Generative AI &amp; LegalTech
                  </h3>
                  <span className="text-xs font-semibold text-ink-soft">2025–2026 · Open Source</span>
                </div>
                <p className="text-xs text-brand font-medium">
                  Next.js, React, Tailwind CSS, Gemini API, Supabase, PostgreSQL, Tesseract OCR, Chroma
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  AI-powered legal document analysis platform featuring OCR, document summaries, and
                  source-referenced insights.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">
                    CivicMind — Smart Governance
                  </h3>
                  <span className="text-xs font-semibold text-ink-soft">2025 · Live Demo</span>
                </div>
                <p className="text-xs text-brand font-medium">React, Node.js, Express.js, MongoDB, Maps API</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  Civic issue reporting platform that helps users submit, track, and discuss local
                  problems.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">
                    Sprint Field Magic — Project Management
                  </h3>
                  <span className="text-xs font-semibold text-ink-soft">2025 · Live Demo</span>
                </div>
                <p className="text-xs text-brand font-medium">React, JavaScript, HTML, CSS, REST APIs</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  Agile project management application for organizing tasks and tracking team
                  progress.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mt-8">
            <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Technical Skills
            </h2>
            <div className="mt-3 grid gap-2 text-xs leading-relaxed text-ink-soft sm:grid-cols-2">
              <div>
                <strong className="text-ink">Programming:</strong> Python, JavaScript, TypeScript, C, SQL
              </div>
              <div>
                <strong className="text-ink">Frontend:</strong> HTML5, CSS3, React, Next.js, Tailwind CSS, Bootstrap
              </div>
              <div>
                <strong className="text-ink">Backend:</strong> Node.js, Express.js, FastAPI, Flask, REST APIs
              </div>
              <div>
                <strong className="text-ink">AI &amp; Machine Learning:</strong> Generative AI, RAG, OpenCV,
                TensorFlow, PyTorch, OCR, Gemini API, OpenAI API
              </div>
              <div>
                <strong className="text-ink">Databases:</strong> MySQL, MongoDB, PostgreSQL, Supabase
              </div>
              <div>
                <strong className="text-ink">Tools:</strong> Git, GitHub, VS Code, Vercel, Netlify
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="mt-8">
            <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Honors &amp; Achievements
            </h2>
            <ul className="mt-3 space-y-2 text-xs text-ink-soft">
              <li className="flex items-start gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-brand mt-1.5" />
                <span>
                  <strong className="text-ink">Top 5 — Idea to Impact Hackathon:</strong> Ranked in the Top 5 at the
                  NxtWave CCBP 4.0 Academy Idea to Impact Hackathon.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-brand mt-1.5" />
                <span>
                  <strong className="text-ink">Top 15 — RoboMela Hackathon:</strong> Secured a Top 15
                  finish at the RoboMela Hackathon.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-brand mt-1.5" />
                <span>
                  <strong className="text-ink">300+ coding problems solved:</strong> Solved 300+ coding
                  problems using Python and C.
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
