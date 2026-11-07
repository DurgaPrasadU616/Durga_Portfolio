import { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Consistent section shell — identical vertical rhythm and optional
 * background blobs so every section reads as part of one system.
 */
export function Section({
  id,
  children,
  className,
  blobs = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  blobs?: boolean;
}) {
  return (
    <section id={id} className={cn("relative isolate section-y", className)}>
      {blobs && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob left-[-10%] top-0 h-[420px] w-[420px] bg-brand-pale" />
          <div className="blob right-[-12%] top-[35%] h-[460px] w-[460px] bg-brand-soft/50" />
          <div className="blob bottom-[-16%] left-[30%] h-[380px] w-[380px] bg-brand-pale/70" />
        </div>
      )}
      <div className="container-x relative">{children}</div>
    </section>
  );
}