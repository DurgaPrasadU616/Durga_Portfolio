"use client";

import { ReactNode, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  Code2,
  ExternalLink,
  KanbanSquare,
  MapPin,
  MessageSquare,
  Rocket,
  ScanEye,
  Scale,
  Search,
  Sparkles,
  Target,
  X,
} from "lucide-react";

import { projects, type Project } from "@/lib/data";
import { StaggerItem, StaggerList } from "@/components/motion";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

const statusTones: Record<string, string> = {
  blue: "bg-[#e8efff] text-[#3b62e6]",
  violet: "bg-[#f3eaff] text-[#7c3aed]",
  emerald: "bg-emerald-100/70 text-emerald-700",
  amber: "bg-amber-100/70 text-amber-700",
  slate: "bg-slate-100 text-slate-600",
};

const filters = [
  "All",
  "AI",
  "Machine Learning",
  "Full Stack",
  "Frontend",
  "Backend",
  "Computer Vision",
  "Hackathon",
  "Web App",
  "Open Source",
];

export function Projects() {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.tags.includes(filter);
      if (!matchesFilter) return false;
      if (!q) return true;
      const haystack = [p.name, p.tagline, p.category, p.overview, ...p.tags, ...p.tech]
        .join(" ")
        .toLowerCase();
      return q.split(/\s+/).every((token) => haystack.includes(token));
    });
  }, [filter, query]);

  const openProject = (slug: string) => router.push(`/projects/${slug}`);

  return (
    <section id="projects" className="relative section-y">
      <div className="container-x">
        <SectionHeading eyebrow="Case studies" title="Products engineered end to end" />

        {/* search + filters */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-col gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-soft" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by AI, vision, legal, Next.js…"
              aria-label="Search projects"
              className="w-full rounded-full border border-line bg-card py-3.5 pl-11 pr-10 text-sm text-ink shadow-soft outline-none transition-all duration-300 placeholder:text-ink-soft/60 focus:border-brand/50 focus:ring-4 focus:ring-brand-soft"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium transition-all duration-300 ${
                  filter === c
                    ? "bg-brand text-white shadow-[0_8px_20px_-10px_rgba(82,119,232,0.6)]"
                    : "card text-ink-soft hover:-translate-y-0.5 hover:border-brand/40 hover:text-ink hover:shadow-lift"
                }`}
                aria-pressed={filter === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="mx-auto max-w-md rounded-[1.5rem] border border-line bg-card p-10 text-center shadow-soft">
            <Search className="mx-auto size-6 text-ink-soft/50" />
            <p className="mt-3 font-medium">No projects match &ldquo;{query}&rdquo;</p>
            <p className="mt-1 text-sm text-ink-soft">Try a tag like AI, Full Stack, or Hackathon.</p>
          </div>
        ) : (
          <StaggerList className="grid gap-8 lg:grid-cols-2">
            {visible.map((p) => (
              <StaggerItem
                key={p.id}
                className={p.layout === "split" || p.layout === "split-flip" ? "lg:col-span-2" : "lg:col-span-1"}
              >
                <FeaturedCard project={p} onOpen={() => openProject(p.slug)} />
              </StaggerItem>
            ))}
          </StaggerList>
        )}
      </div>
    </section>
  );
}

/* ----------------------------- Card variants ----------------------------- */

function FeaturedCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();
  const wide = project.layout === "split" || project.layout === "split-flip";
  const flip = project.layout === "split-flip";

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -5 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-card shadow-card transition-shadow duration-300 hover:shadow-lift"
    >
      {wide ? (
        <div className={"grid overflow-hidden lg:grid-cols-2 " + (flip ? "lg:[direction:rtl]" : "")}>
          <div className="lg:[direction:ltr]">
            <ProjectVisual project={project} fill />
          </div>
          <div className="flex flex-col justify-between gap-6 p-7 sm:p-9 lg:[direction:ltr]">
            <div>
              <Meta project={project} />
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl">
                <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-brand">
                  {project.name}
                </Link>
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{project.overview}</p>
              <MiniFeatures project={project} className="mt-6" />
            </div>

            <div className="mt-2">
              <ImpactBar project={project} />
              <div className="mt-5 h-px bg-line/70" />
              <TechCloud project={project} className="mt-5" />
              <Buttons project={project} className="mt-6" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <ProjectVisual project={project} />
          <div className="flex flex-1 flex-col justify-between gap-5 p-7">
            <div>
              <Meta project={project} />
              <h3 className="mt-4 text-xl font-bold leading-tight tracking-[-0.02em] sm:text-2xl">
                <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-brand">
                  {project.name}
                </Link>
              </h3>
              <p className="mt-2.5 leading-relaxed text-ink-soft">{project.tagline}</p>
            </div>

            <div className="flex flex-col gap-5">
              <MiniFeatures project={project} />
              <div className="h-px bg-line/70" />
              <TechCloud project={project} />
              <Buttons project={project} className="pt-0.5" />
            </div>
          </div>
        </>
      )}
    </motion.article>
  );
}

/* ------------------------------ shared pieces ----------------------------- */

function Meta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.72rem] font-semibold"
        style={{ background: project.accentSoft, color: project.accentFrom }}
      >
        {squircleIcon(project.icon, 14)}
        {project.category}
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[0.72rem] font-medium text-ink-soft">
        <Calendar className="size-3.5" />
        {project.year}
      </span>
      {project.statuses.slice(0, 2).map((s) => (
        <span
          key={s.label}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.72rem] font-semibold ${statusTones[s.tone]}`}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {s.label}
        </span>
      ))}
    </div>
  );
}

function MiniFeatures({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft/80">Key features</p>
      <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {project.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
            <span
              className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
              style={{ background: project.accentSoft, color: project.accentFrom }}
            >
              <Check className="size-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCloud({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft/80">Technology</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-[0.75rem] font-medium text-ink-soft">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ImpactBar({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={"flex items-start gap-3 rounded-2xl p-4 " + (className ?? "")} style={{ background: project.accentSoft }}>
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg" style={{ background: "#fff", color: project.accentFrom }}>
        <Target className="size-4" />
      </span>
      <p className="text-sm font-medium leading-relaxed" style={{ color: project.accentFrom }}>
        {project.impact}
      </p>
    </div>
  );
}

function Buttons({ project, className }: { project: Project; className?: string }) {
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  return (
    <div className={"flex flex-wrap gap-3 " + (className ?? "")}>
      {project.demo && project.demo !== "#" && (
        <Magnetic>
          <Button asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={stop}>
              Live Demo
              <ExternalLink />
            </a>
          </Button>
        </Magnetic>
      )}
      {project.github && (
        <Magnetic>
          <Button asChild variant="ghost">
            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={stop}>
              <Code2 />
              GitHub
            </a>
          </Button>
        </Magnetic>
      )}
      <Magnetic>
        <Button asChild variant="subtle">
          <Link href={`/projects/${project.slug}`} onClick={stop} aria-label={`View ${project.name} case study`}>
            Case Study
            <ArrowUpRight />
          </Link>
        </Button>
      </Magnetic>
    </div>
  );
}

/* ------------------------------ visual mockups ---------------------------- */

export function ProjectVisual({
  project,
  fill = false,
  className,
}: {
  project: Project;
  fill?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${
        fill ? "h-full min-h-[18rem]" : "aspect-[16/11] sm:aspect-[16/9]"
      } ${className ?? ""}`}
      style={{
        background: `linear-gradient(135deg, ${project.accentFrom} 0%, ${project.accentTo} 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "26px 26px" }}
      />
      <div className="absolute -right-10 -top-14 size-56 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-10 size-56 rounded-full bg-black/10 blur-3xl" />

      <div className="absolute inset-0 grid place-items-center transition-transform duration-350 ease-out group-hover:scale-[1.04]">
        <MockUi project={project} />
      </div>
    </div>
  );
}

function MockUi({ project }: { project: Project }) {
  switch (project.icon) {
    case "kanban":
      return <KanbanMock accent={project.accentFrom} />;
    case "vision":
      return <VisionMock accent={project.accentFrom} />;
    case "civic":
      return <CivicMock accent={project.accentFrom} />;
    case "law":
      return <LawMock accent={project.accentFrom} />;
    default:
      return null;
  }
}

function GlassPanel({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={"rounded-2xl border border-line bg-white shadow-soft " + (className ?? "")} style={style}>
      {children}
    </div>
  );
}

function KanbanMock({ accent }: { accent: string }) {
  return (
    <div className="flex w-[min(78%,24rem)] flex-col gap-3">
      <GlassPanel className="flex items-center gap-2 px-4 py-2.5">
        <KanbanSquare style={{ width: 16, height: 16 }} color={accent} />
        <span className="h-2.5 w-24 rounded-full bg-slate-200" />
        <span className="ml-auto flex gap-1.5">
          <span className="size-5 rounded-full bg-brand-soft" />
          <span className="size-5 rounded-full bg-brand-soft" />
        </span>
      </GlassPanel>
      <div className="grid grid-cols-3 gap-3">
        {[
          { title: "To do", cards: ["Sprint 12", "Wireframe", "Scoping"] },
          { title: "In 1", cards: ["Kanban", "Build UI"] },
          { title: "Done", cards: ["Planning"] },
        ].map((col) => (
          <GlassPanel key={col.title} className="flex flex-col gap-2 p-2.5">
            <span className="text-center text-[0.5rem] font-bold uppercase tracking-wider text-slate-400">{col.title}</span>
            <div className="flex flex-col gap-1.5">
              {col.cards.map((c) => (
                <div
                  key={c}
                  className={`rounded-lg px-2 py-1.5 text-[0.55rem] font-semibold ${c === "Kanban" ? "text-white" : "text-slate-500"}`}
                  style={c === "Kanban" ? { background: accent } : { background: "#f1f5f9" }}
                >
                  {c}
                </div>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  );
}

function VisionMock({ accent }: { accent: string }) {
  return (
    <div className="flex w-[min(80vw,26rem)] flex-col gap-3">
      <GlassPanel className="flex items-center gap-2 px-4 py-2.5">
        <ScanEye size={16} color={accent} />
        <span className="h-2.5 w-20 rounded-full bg-slate-200" />
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[0.5rem] font-bold text-emerald-600">
          <span className="size-1 rounded-full bg-emerald-500" /> LIVE
        </span>
      </GlassPanel>
      <div className="grid grid-cols-4 gap-2.5">
        {[42, 28, 39, 18].map((h, i) => (
          <GlassPanel key={i} className="flex flex-col gap-1.5 p-1.5">
            <div className="rounded-md" style={{ height: h * 1.6, background: accent, opacity: 0.9 - i * 0.12 }} />
            <span className={`mx-auto size-1.5 rounded-full ${i === 2 ? "bg-red-400" : "bg-emerald-400"}`} />
          </GlassPanel>
        ))}
      </div>
      <GlassPanel className="flex items-center justify-between px-3 py-2">
        <span className="text-[0.55rem] font-semibold text-slate-500">Low stock detected · Aisle 3</span>
        <Rocket size={14} color={accent} />
      </GlassPanel>
    </div>
  );
}

function CivicMock({ accent }: { accent: string }) {
  return (
    <div className="flex w-[min(80vw,26rem)] flex-col gap-3">
      <GlassPanel className="flex items-center gap-2 px-4 py-2.5">
        <MapPin size={16} color={accent} />
        <span className="h-2.5 w-28 rounded-full bg-slate-200" />
      </GlassPanel>
      <GlassPanel className="flex items-center gap-3 p-3">
        <div className="flex flex-col gap-1">
          <MessageSquare size={16} color={accent} />
          <span className="text-[0.5rem] font-bold uppercase tracking-wider text-slate-400">12 votes</span>
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="h-2 w-4/5 rounded-full bg-slate-200" />
          <span className="h-2 w-3/5 rounded-full bg-slate-100" />
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[0.5rem] font-bold text-amber-600">
            <span className="size-1 rounded-full bg-amber-500" /> In review
          </span>
        </div>
      </GlassPanel>
      <div className="grid grid-cols-3 gap-2">
        {[33, 52, 41].map((h, i) => (
          <GlassPanel key={i} className="flex items-end justify-center pb-1" style={{ height: "3.4rem", background: i === 2 ? accent : "rgba(255,255,255,0.6)" }}>
            <span className={`text-[0.5rem] font-bold ${i === 2 ? "text-white" : "text-slate-500"}`}>{h}%</span>
          </GlassPanel>
        ))}
      </div>
    </div>
  );
}

function LawMock({ accent }: { accent: string }) {
  return (
    <div className="flex w-[min(82vw,28rem)] flex-col gap-3">
      <GlassPanel className="flex items-center gap-2 px-4 py-2.5">
        <Scale size={16} color={accent} />
        <span className="h-2.5 w-24 rounded-full bg-slate-200" />
        <span className="ml-auto flex gap-1.5">
          <span className="size-5 rounded-full bg-brand-soft" />
          <span className="size-5 rounded-full bg-brand-soft" />
        </span>
      </GlassPanel>
      <div className="flex gap-3">
        <GlassPanel className="flex-1 flex-col gap-2 p-3">
          <p className="text-[0.55rem] font-extrabold uppercase tracking-wider text-slate-400">IRAC Summary</p>
          {[
            { k: "Issue", h: 6 },
            { k: "Rule", h: 6 },
          ].map((r) => (
            <div key={r.k}>
              <span className="text-[0.5rem] font-bold" style={{ color: accent }}>{r.k}</span>
              <div className="h-2 rounded-full bg-slate-100" style={{ height: r.h }} />
            </div>
          ))}
        </GlassPanel>
        <GlassPanel className="flex flex-col gap-2 p-3">
          <Sparkles size={16} color={accent} />
          <ul className="flex flex-col gap-1.5">
            {[80, 95, 60].map((w, i) => (
              <li key={i} className="flex items-center gap-1">
                <CheckCircle2 size={10} className="text-emerald-500" />
                <span className="h-1.5 rounded-full bg-slate-200" style={{ width: `${w}%` }} />
              </li>
            ))}
          </ul>
        </GlassPanel>
      </div>
    </div>
  );
}

function squircleIcon(icon: Project["icon"], size: number) {
  const common = { width: size, height: size } as const;
  switch (icon) {
    case "kanban":
      return <KanbanSquare {...common} />;
    case "vision":
      return <ScanEye {...common} />;
    case "civic":
      return <Building2 {...common} />;
    case "law":
      return <Scale {...common} />;
  }
}