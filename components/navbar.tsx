"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Info } from "@/lib/data";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    setHidden(y > 300 && y > (scrollY.getPrevious() ?? 0) && !open);
    if (y < 250) {
      setHidden(false);
      setActive("#home");
    }
  });

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: hidden ? -96 : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn("fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4")}
    >
      <nav className="container-x relative mx-auto flex h-14 items-center justify-between rounded-full transition-all duration-300">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-full transition-all duration-300",
            scrolled
              ? "border border-line bg-white shadow-card"
              : "border border-transparent bg-transparent",
          )}
        />
        <div className="relative z-10 flex h-full w-full items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 font-semibold tracking-tight transition-transform duration-200 hover:scale-[1.02]"
            aria-label={`${Info.name} — home`}
          >
            <span className="grid size-8 place-items-center rounded-[10px] bg-gradient-to-br from-brand-deep to-brand text-[0.8rem] font-bold text-white shadow-sm">
              DP
            </span>
            <span className="text-[0.95rem]">dp.dev</span>
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href} className="relative">
                  <a
                    href={l.href}
                    className={cn(
                      "relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-brand"
                        : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {l.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 z-0 rounded-full bg-brand-soft"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30, duration: 0.3 }
                      }
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("opencode:command-palette"))}
              aria-label="Open command palette"
              className="hidden h-10 items-center gap-2 rounded-full card px-3 text-sm text-ink-soft transition-all duration-300 hover:border-brand/40 hover:text-ink lg:inline-flex"
            >
              <Search className="size-4" />
              <span className="text-xs">Search…</span>
              <kbd className="inline-flex items-center gap-0.5 rounded-md border border-line bg-bg px-1.5 py-0.5 text-[0.65rem] font-semibold">
                Ctrl K
              </kbd>
            </button>
            <Magnetic className="hidden lg:block">
              <Button asChild size="sm">
                <a href={`mailto:${Info.email}`}>
                  Let&apos;s talk
                  <ArrowUpRight />
                </a>
              </Button>
            </Magnetic>
            <button
              className="grid size-10 place-items-center rounded-full card lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-x mt-2 overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-lift lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-bg hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="p-2">
                <Button asChild className="w-full">
                  <a href={`mailto:${Info.email}`} onClick={() => setOpen(false)}>
                    Let&apos;s talk
                    <ArrowUpRight />
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}