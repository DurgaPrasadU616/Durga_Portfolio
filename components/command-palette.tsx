"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  CornerDownLeft,
  Download,
  FileText,
  Github,
  GraduationCap,
  Home,
  Layers,
  Linkedin,
  Mail,
  Search,
  Sparkles,
  Trophy,
  User,
  X,
} from "lucide-react";

import { Info } from "@/lib/data";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/motion";

type Action = {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: typeof Search;
  onSelect: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("opencode:command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("opencode:command-palette", onOpen);
    };
  }, []);

  const go = (href: string) => {
    setOpen(false);
    requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(Info.email);
    } catch {
      /* noop */
    }
    setOpen(false);
  };

  const actions: Action[] = useMemo(
    () => [
      { id: "home", group: "Navigate", label: "Home", icon: Home, onSelect: () => go("#home") },
      { id: "about", group: "Navigate", label: "About", icon: User, onSelect: () => go("#about") },
      { id: "projects", group: "Navigate", label: "Projects", icon: Layers, onSelect: () => go("#projects") },
      { id: "skills", group: "Navigate", label: "Skills & Toolkit", icon: Sparkles, onSelect: () => go("#skills") },
      { id: "achievements", group: "Navigate", label: "Achievements", icon: Trophy, onSelect: () => go("#achievements") },
      { id: "education", group: "Navigate", label: "Education & Training", icon: GraduationCap, onSelect: () => go("#education") },
      { id: "contact", group: "Navigate", label: "Contact", icon: Mail, onSelect: () => go("#contact") },
      { id: "email", group: "Actions", label: "Copy email address", hint: Info.email, icon: Mail, onSelect: copyEmail },
      { id: "resume", group: "Actions", label: "View resume", hint: "Readable HTML", icon: FileText, onSelect: () => go("/resume") },
      { id: "resume-pdf", group: "Actions", label: "Resume — print / save PDF", icon: Download, onSelect: () => go("/resume#pdf") },
      { id: "github", group: "Links", label: "GitHub", hint: "github.com/DurgaPrasadU616", icon: Github, onSelect: () => window.open(Info.socials.github, "_blank") },
      { id: "linkedin", group: "Links", label: "LinkedIn", hint: "linkedin.com/in/durga-prasad-ungarala", icon: Linkedin, onSelect: () => window.open(Info.socials.linkedin, "_blank") },
      { id: "hackerrank", group: "Links", label: "HackerRank", hint: "hackerrank.com/profile/durga_prasad_616", icon: Code2, onSelect: () => window.open(Info.socials.hackerrank, "_blank") },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) => a.label.toLowerCase().includes(q) || a.group.toLowerCase().includes(q) || a.hint?.toLowerCase().includes(q),
    );
  }, [query, actions]);

  useEffect(() => setActiveIndex(0), [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      e.preventDefault();
      filtered[activeIndex].onSelect();
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-ink/25 backdrop-blur-sm" />
        <Dialog.Content
          data-lenis-prevent
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="fixed left-1/2 top-[16%] z-[100] w-[min(620px,calc(100%-2rem))] -translate-x-1/2 overflow-hidden rounded-[1.5rem] border border-line bg-white p-2 shadow-[0_32px_80px_-24px_rgba(16,24,40,0.35)] outline-none"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                {/* search row */}
                <div className="flex items-center gap-3 border-b border-line px-4 pb-3 pt-2">
                  <Search className="size-4 shrink-0 text-ink-soft" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Jump to a section or action…"
                    className="h-9 w-full bg-transparent text-[0.95rem] text-ink outline-none placeholder:text-ink-soft/60"
                    aria-label="Search"
                  />
                  <kbd className="hidden shrink-0 items-center gap-1 rounded-md border border-line bg-bg px-1.5 py-0.5 text-[0.65rem] font-semibold text-ink-soft sm:inline-flex">
                    <X className="size-2.5" />
                    esc
                  </kbd>
                </div>

                {/* results */}
                <div className="scroll-slim max-h-[320px] overflow-y-auto p-1.5">
                  {filtered.length === 0 ? (
                    <div className="flex flex-col items-center gap-2 py-10 text-center">
                      <Search className="size-6 text-ink-soft/50" />
                      <p className="text-sm text-ink-soft">No results for &ldquo;{query}&rdquo;</p>
                    </div>
                  ) : (
                    groupActions(filtered).map(([group, items]) => (
                      <div key={group} className="mt-1 first:mt-0">
                        <p className="px-3 pb-1.5 pt-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink-soft/60">
                          {group}
                        </p>
                        {items.map((a) => {
                          const Icon = a.icon;
                          const isActive = filtered.indexOf(a) === activeIndex;
                          return (
                            <button
                              key={a.id}
                              onMouseEnter={() => setActiveIndex(filtered.indexOf(a))}
                              onClick={a.onSelect}
                              className={cn(
                                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors duration-150",
                                isActive ? "bg-brand-soft/80 text-ink" : "text-ink-soft",
                              )}
                            >
                              <Icon className={cn("size-4 shrink-0", isActive ? "text-brand" : "text-ink-soft/70")} />
                              <span className="flex-1 font-medium">{a.label}</span>
                              {a.hint && <span className="hidden text-xs text-ink-soft/70 sm:block">{a.hint}</span>}
                              {isActive ? (
                                <CornerDownLeft className="size-3.5 text-brand" />
                              ) : (
                                <ArrowUpRight className="size-3.5 text-ink-soft/40" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ))
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-line px-3 py-2 text-[0.68rem] text-ink-soft/70">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="grid size-4 place-items-center rounded border border-line bg-bg text-[0.6rem] font-bold">↑↓</span>
                    to navigate
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="rounded border border-line bg-bg px-1 text-[0.6rem] font-bold">↵</span>
                    to select
                  </span>
                  <span>
                    <span className="font-bold">{Info.name}</span> · {Info.role}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function groupActions(actions: Action[]): [string, Action[]][] {
  const map = new Map<string, Action[]>();
  actions.forEach((a) => {
    map.set(a.group, [...(map.get(a.group) ?? []), a]);
  });
  return Array.from(map.entries());
}