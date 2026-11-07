import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Mail, Github, Linkedin, ExternalLink, Phone } from "lucide-react";
import { Info } from "@/lib/data";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume — Ungarala Durga Prasad",
  description: `${Info.name} — B.Tech CSE student, Frontend & Full Stack Developer, and Generative AI enthusiast resume.`,
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
                Computer Science Student · Frontend, Full Stack &amp; Generative AI
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
              B.Tech Computer Science &amp; Engineering student (2023–2027) passionate about building responsive,
              thoughtful web applications and AI-powered solutions. Strong foundation in Data Structures &amp;
              Algorithms with 300+ problems solved in Python and C. Hands-on experience in computer vision, RAG
              pipelines, RESTful backend systems, and modern React/Next.js interfaces. Seeking frontend, full stack,
              and Generative AI internship opportunities.
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
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  Core Coursework: Data Structures &amp; Algorithms, Database Management Systems, Operating Systems,
                  Computer Networks, Software Engineering.
                </p>
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
                  Hands-on training spanning modern frontend engineering (React, Next.js), backend services
                  (Node.js, Express), database modeling (SQL, MongoDB), and scalable application architecture.
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
                    ShelfWise AI — Retail Shelf Monitoring &amp; Stock Intelligence
                  </h3>
                  <span className="text-xs font-semibold text-ink-soft">2025 · Live Demo</span>
                </div>
                <p className="text-xs text-brand font-medium">
                  Python, TensorFlow, PyTorch, OpenCV, FastAPI, Flask, React
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  Engineered an AI-powered computer-vision inventory intelligence platform that watches retail shelf
                  conditions, detects stock shortages, and surfaces placement insights through a real-time dashboard.
                  Eliminates routine manual auditing with automated vision detections.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">
                    RightLaw — AI Legal Document Intelligence Platform
                  </h3>
                  <span className="text-xs font-semibold text-ink-soft">2025–2026 · Open Source</span>
                </div>
                <p className="text-xs text-brand font-medium">
                  Next.js, React, Tailwind CSS, Supabase, PostgreSQL, Gemini API, OpenAI API, OCR, Chroma
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  Developed an intelligent legal research platform that transforms dense case judgments into structured
                  IRAC summaries, clause extractions, and semantic search with strict 100% source-referenced citations.
                  Integrated OCR preprocessing for scanned court documents.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">
                    CivicMind — Transparent Civic Issue Reporting Platform
                  </h3>
                  <span className="text-xs font-semibold text-ink-soft">2025 · Live Demo</span>
                </div>
                <p className="text-xs text-brand font-medium">React, Node.js, Express, MongoDB, PostgreSQL, Maps API</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  Built a civic engagement platform connecting citizens with municipal authorities through a transparent
                  intake and issue tracking loop. Includes geotagging, media uploads, community voting, and an auditable
                  status state-machine.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-ink text-sm sm:text-base">
                    Sprint Field Magic — Agile Project Management Workspace
                  </h3>
                  <span className="text-xs font-semibold text-ink-soft">2025 · Live Demo</span>
                </div>
                <p className="text-xs text-brand font-medium">React, JavaScript, HTML5, CSS3, REST APIs</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  Designed a distraction-free agile sprint management platform with interactive drag-and-drop Kanban
                  boards, optimistic UI updates, custom workflow transitions, and real-time team progress rollups.
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
                <strong className="text-ink">Frontend:</strong> HTML5, CSS3, React, Next.js, Tailwind CSS, Bootstrap,
                Framer Motion
              </div>
              <div>
                <strong className="text-ink">Backend:</strong> Node.js, Express.js, FastAPI, Flask, REST APIs
              </div>
              <div>
                <strong className="text-ink">AI / ML:</strong> Generative AI, RAG, OpenCV, TensorFlow, PyTorch, OCR,
                Gemini API, OpenAI API
              </div>
              <div>
                <strong className="text-ink">Databases:</strong> MySQL, MongoDB, PostgreSQL, Supabase
              </div>
              <div>
                <strong className="text-ink">Tools &amp; Platforms:</strong> Git, GitHub, VS Code, Vercel, Netlify
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
                  <strong className="text-ink">Top 15 — RoboMela Hackathon:</strong> Secured a Top 15 finish through
                  rapid prototyping and technical problem-solving under pressure.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-brand mt-1.5" />
                <span>
                  <strong className="text-ink">300+ coding problems solved:</strong> Consistent practice across arrays,
                  dynamic programming, graphs, and trees in Python &amp; C.
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
