import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  Database,
  ExternalLink,
  FlaskConical,
  Layers,
  Lightbulb,
  Play,
  Rocket,
  Server,
  Target,
  Wrench,
  Zap,
} from "lucide-react";

import { projects, type Project } from "@/lib/data";
import { ProjectVisual } from "@/components/projects";
import { FadeUp, StaggerItem, StaggerList } from "@/components/motion";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — Case Study`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="pt-24 pb-16 sm:pb-20">
      <div className="container-x">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
        >
          <ArrowLeft className="size-4" />
          All projects
        </Link>

        {/* hero */}
        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-line bg-card shadow-card">
          <ProjectVisual project={project} className="aspect-[16/8]" />
          <div className="p-7 sm:p-10">
            <Meta project={project} />
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">{project.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.demo && project.demo !== "#" && (
                <Magnetic>
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink />
                    </a>
                  </Button>
                </Magnetic>
              )}
              {project.github && (
                <Magnetic>
                  <Button asChild variant="ghost">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Code2 />
                      GitHub
                    </a>
                  </Button>
                </Magnetic>
              )}
              {project.video && (
                <Magnetic>
                  <Button asChild variant="ghost">
                    <a href={project.video} target="_blank" rel="noopener noreferrer">
                      <Play />
                      Demo video
                    </a>
                  </Button>
                </Magnetic>
              )}
            </div>
          </div>
        </div>

        {/* overview */}
        <section className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-soft">{project.overview}</p>
        </section>

        {/* problem */}
        <section className="mx-auto mt-14 max-w-3xl">
          <BlockTitle icon={<Target />} title="Problem statement" />
          <div className="mt-4 rounded-[1.5rem] bg-secondary p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-ink-soft">{project.problem}</p>
          </div>
        </section>

        {/* research */}
        <section className="mt-14">
          <BlockTitle icon={<FlaskConical />} title="Research" />
          <StaggerList className="mt-4 grid gap-4 md:grid-cols-3">
            {project.research.map((r, i) => (
              <StaggerItem key={r} className="h-full">
                <div className="h-full rounded-[1.5rem] border border-line bg-card p-5 shadow-soft">
                  <span
                    className="inline-flex rounded-lg px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em]"
                    style={{ background: project.accentSoft, color: project.accentFrom }}
                  >
                    Finding {i + 1}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{r}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </section>

        {/* architecture diagram */}
        <section className="mt-14">
          <BlockTitle icon={<Server />} title="Architecture diagram" />
          <FadeUp className="mt-4">
            <div className="rounded-[1.5rem] border border-line bg-card p-6 shadow-soft sm:p-8">
              <ArchDiagram project={project} />
            </div>
          </FadeUp>
        </section>

        {/* system flow */}
        <section className="mt-14">
          <BlockTitle icon={<Layers />} title="System flow" />
          <StaggerList className="mt-4 grid gap-4 md:grid-cols-3">
            {project.systemFlow.map((s, i) => (
              <StaggerItem key={s} className="h-full">
                <div className="flex h-full flex-col rounded-[1.5rem] bg-secondary p-5">
                  <span
                    className="grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold"
                    style={{ background: project.accentSoft, color: project.accentFrom }}
                  >
                    {i + 1}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </section>

        {/* tech stack */}
        <section className="mt-14">
          <BlockTitle icon={<Wrench />} title="Technology stack" />
          <FadeUp className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-[0.82rem] font-medium text-ink-soft"
              >
                {t}
              </span>
            ))}
          </FadeUp>
        </section>

        {/* database design */}
        <section className="mt-14">
          <BlockTitle icon={<Database />} title="Database design" />
          <StaggerList className="mt-4 grid gap-4 md:grid-cols-2">
            {project.dbDesign.map((d) => (
              <StaggerItem key={d} className="h-full">
                <div className="flex items-start gap-3 rounded-[1.5rem] border border-line bg-card p-5 text-sm leading-relaxed text-ink-soft shadow-soft">
                  <Database className="mt-0.5 size-4 shrink-0 text-brand" />
                  {d}
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </section>

        {/* development process */}
        <section className="mt-14">
          <BlockTitle icon={<Rocket />} title="Development process" />
          <FadeUp className="mt-4">
            <ol className="mx-auto max-w-2xl">
              {project.process.map((step, i) => (
                <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                  <span className="relative flex flex-col items-center">
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold"
                      style={{ background: project.accentSoft, color: project.accentFrom }}
                    >
                      {i + 1}
                    </span>
                    {i < project.process.length - 1 && <span className="mt-1 w-px flex-1 bg-line" aria-hidden />}
                  </span>
                  <p className="pt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{step}</p>
                </li>
              ))}
            </ol>
          </FadeUp>
        </section>

        {/* challenges + solutions */}
        <section className="mt-14 grid gap-5 lg:grid-cols-2">
          <div>
            <BlockTitle icon={<Zap />} title="Challenges" />
            <ul className="mt-4 space-y-3">
              {project.challenges.map((c, i) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-[1.5rem] bg-secondary p-5 text-sm leading-relaxed text-ink-soft"
                >
                  <span
                    className="grid size-6 shrink-0 place-items-center rounded-lg text-[0.7rem] font-bold"
                    style={{ background: project.accentSoft, color: project.accentFrom }}
                  >
                    {i + 1}
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <BlockTitle icon={<Lightbulb />} title="Solutions" />
            <div className="mt-4 rounded-[1.5rem] p-5" style={{ background: project.accentSoft }}>
              <p className="font-medium leading-relaxed" style={{ color: project.accentFrom }}>
                {project.solution}
              </p>
            </div>
            <ul className="mt-3 space-y-2.5">
              {project.impactPoints.map((ip) => (
                <li key={ip} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
                    style={{ background: project.accentSoft, color: project.accentFrom }}
                  >
                    <Check className="size-3" />
                  </span>
                  {ip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* lessons + future */}
        <section className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-line bg-card p-6 shadow-soft sm:p-8">
            <BlockTitle icon={<Target />} title="Lessons learned" />
            <ul className="mt-4 space-y-3">
              {project.lessons.map((l) => (
                <li key={l} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-line bg-card p-6 shadow-soft sm:p-8">
            <BlockTitle icon={<Rocket />} title="Future improvements" />
            <ul className="mt-4 space-y-3">
              {project.future.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/50" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* screenshots */}
        <section className="mt-14">
          <BlockTitle icon={<Layers />} title="Screenshots" />
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {["Main interface", "Workflow view"].map((label, i) => (
              <div key={label} className="overflow-hidden rounded-[1.5rem] border border-line bg-card shadow-soft">
                <div className="flex items-center gap-1.5 border-b border-line bg-bg px-4 py-2.5">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[0.7rem] font-medium text-ink-soft">{label}</span>
                </div>
                <ProjectVisual project={project} className={"aspect-[16/9] " + (i % 2 ? "[&>div]:opacity-90" : "")} />
              </div>
            ))}
          </div>
        </section>

        {/* demo video */}
        <section className="mt-14">
          <BlockTitle icon={<Play />} title="Demo" />
          <FadeUp className="mt-4">
            {project.video ? (
              <div className="overflow-hidden rounded-[1.5rem] border border-line bg-ink shadow-soft">
                <iframe
                  src={project.video}
                  title={`${project.name} demo video`}
                  className="aspect-video w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div
                className="flex flex-col items-center justify-center gap-3 rounded-[1.5rem] p-10 text-center"
                style={{ background: project.accentSoft }}
              >
                <Play className="size-8" style={{ color: project.accentFrom }} />
                <p className="text-sm font-medium" style={{ color: project.accentFrom }}>
                  A walkthrough is on the way — explore the live app below.
                </p>
                {project.demo && project.demo !== "#" && (
                  <Button asChild size="sm">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Open Live Demo
                      <ExternalLink />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </FadeUp>
        </section>

        {/* prev / next */}
        <nav className="mt-14 flex flex-col gap-3 border-t border-line pt-10 sm:mt-16 sm:flex-row sm:justify-between">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-1 items-center gap-3 rounded-[1.5rem] border border-line bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lift"
          >
            <ArrowLeft className="size-4 text-ink-soft transition-transform group-hover:-translate-x-0.5" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft/70">Previous</p>
              <p className="text-sm font-bold">{prev.name}</p>
            </div>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-1 items-center justify-end gap-3 rounded-[1.5rem] border border-line bg-card p-5 text-right shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lift"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft/70">Next</p>
              <p className="text-sm font-bold">{next.name}</p>
            </div>
            <ArrowRight className="size-4 text-ink-soft transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </div>
    </main>
  );
}

function notFound() {
  return (
    <main className="container-x section-y text-center">
      <p className="text-5xl font-bold">404</p>
      <p className="mt-2 text-ink-soft">That project doesn&apos;t exist.</p>
      <a href="/#projects" className="mt-6 inline-flex items-center gap-2 text-brand hover:underline">
        <ArrowLeft className="size-4" /> Back to projects
      </a>
    </main>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className="inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-semibold"
        style={{ background: project.accentSoft, color: project.accentFrom }}
      >
        {project.category}
      </span>
      {project.tags.map((t) => (
        <span key={t} className="rounded-full border border-line px-3 py-1 text-[0.72rem] font-medium text-ink-soft">
          {t}
        </span>
      ))}
      <span className="rounded-full border border-line px-3 py-1 text-[0.72rem] font-medium text-ink-soft">
        {project.year}
      </span>
    </div>
  );
}

function BlockTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
      {icon} {title}
    </h2>
  );
}

/** Simple layered architecture diagram rendered with CSS. */
function ArchDiagram({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-xl">
      <div className="flex flex-col">
        {project.architecture.map((layer, i) => (
          <div key={layer} className="relative flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-bold"
                style={{ background: project.accentSoft, color: project.accentFrom }}
              >
                {i + 1}
              </div>
              {i < project.architecture.length - 1 && <span className="my-1 w-px flex-1 bg-line" aria-hidden />}
            </div>
            <div className="flex-1 rounded-2xl border border-line/70 bg-bg px-4 py-3 text-sm font-medium text-ink">
              {layer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}