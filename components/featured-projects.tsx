"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

import { projects } from "@/lib/data";
import { ProjectVisual } from "@/components/projects";
import { FadeUp } from "@/components/motion";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

type FeaturedEntry = {
  slug: string;
  category: string;
  description: string;
  tech: string[];
  image?: string;
  host: string;
};

const featured: FeaturedEntry[] = [
  {
    slug: "shelfwise-ai",
    category: "AI & Computer Vision",
    description:
      "AI-powered inventory monitoring system designed to detect shelf issues and support inventory management.",
    tech: ["Python", "OpenCV", "TensorFlow", "PyTorch", "FastAPI", "React"],
    image: "/projects/shelfwise-ai.jpg",
    host: "shelf-wise-ai.vercel.app",
  },
  {
    slug: "rightlaw",
    category: "Generative AI & LegalTech",
    description:
      "AI-powered legal document analysis platform featuring OCR, document summaries, and source-referenced insights.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Gemini API",
      "Supabase",
      "PostgreSQL",
      "Tesseract OCR",
      "Chroma",
    ],
    host: "rightlaw · UI preview",
  },
  {
    slug: "civicmind",
    category: "Smart Governance",
    description:
      "Civic issue reporting platform that helps users submit, track, and discuss local problems.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Maps API"],
    image: "/projects/civicmind.jpg",
    host: "aicivilmind.vercel.app",
  },
  {
    slug: "sprint-field-magic",
    category: "Project Management",
    description:
      "Agile project management application for organizing tasks and tracking team progress.",
    tech: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
    image: "/projects/sprint-field-magic.jpg",
    host: "sprint-field-magic.lovable.app",
  },
];

/** A GitHub *profile* URL (single path segment) is not a repository — hide the button. */
function repoUrl(url: string): string {
  if (!url) return "";
  try {
    const parts = new URL(url).pathname.split("/").filter(Boolean);
    return parts.length >= 2 ? url : "";
  } catch {
    return "";
  }
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured projects"
          title="Selected projects, built end to end"
        />

        <div>
          {featured.map((f, i) => {
            const p = projects.find((x) => x.slug === f.slug);
            if (!p) return null;

            const flip = i % 2 === 1;
            const repo = repoUrl(p.github);
            const index = String(i + 1).padStart(2, "0");

            return (
              <FadeUp
                key={f.slug}
                className={i > 0 ? "mt-14 border-t border-line pt-14 sm:mt-16 sm:pt-16" : ""}
              >
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  {/* Media — browser-framed preview with hover zoom */}
                  <Link
                    href={`/projects/${p.slug}`}
                    aria-label={`View ${p.name} case study`}
                    className={`group block overflow-hidden rounded-[1.5rem] border border-line bg-card shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift ${
                      flip ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-1.5 border-b border-line bg-bg px-4 py-2.5">
                      <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="size-2.5 rounded-full bg-[#febc2e]" />
                      <span className="size-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-2 truncate text-[0.7rem] font-medium text-ink-soft">
                        {f.host}
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-bg">
                      {f.image ? (
                        <Image
                          src={f.image}
                          alt={`${p.name} — live application screenshot`}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover transition-transform duration-350 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <ProjectVisual project={p} className="h-full" />
                      )}
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink opacity-0 shadow-lift transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                        View details
                        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>

                  {/* Copy */}
                  <div className={flip ? "lg:order-1" : ""}>
                    <span
                      aria-hidden
                      className="block text-[clamp(2.75rem,5vw,4rem)] font-bold leading-none tracking-[-0.05em]"
                      style={{ color: p.accentFrom, opacity: 0.16 }}
                    >
                      {index}
                    </span>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-semibold"
                        style={{ background: p.accentSoft, color: p.accentFrom }}
                      >
                        {f.category}
                      </span>
                      <span className="rounded-full border border-line px-3 py-1 text-[0.72rem] font-medium text-ink-soft">
                        {p.year}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.025em]">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="transition-colors hover:text-brand"
                      >
                        {p.name}
                      </Link>
                    </h3>

                    <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{f.description}</p>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft/80">
                        Technology
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {f.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-line bg-bg px-3 py-1 text-[0.75rem] font-medium text-ink-soft"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {p.demo && p.demo !== "#" && (
                        <Magnetic>
                          <Button asChild>
                            <a href={p.demo} target="_blank" rel="noopener noreferrer">
                              Live Demo
                              <ExternalLink />
                            </a>
                          </Button>
                        </Magnetic>
                      )}
                      {repo && (
                        <Magnetic>
                          <Button asChild variant="ghost">
                            <a href={repo} target="_blank" rel="noopener noreferrer">
                              <Code2 />
                              GitHub
                            </a>
                          </Button>
                        </Magnetic>
                      )}
                      <Magnetic>
                        <Button asChild variant="subtle">
                          <Link href={`/projects/${p.slug}`}>
                            View Details
                            <ArrowUpRight />
                          </Link>
                        </Button>
                      </Magnetic>
                    </div>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
