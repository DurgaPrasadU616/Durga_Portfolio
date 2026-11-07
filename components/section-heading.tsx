import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-10 max-w-2xl sm:mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
        <span className="h-px w-8 bg-brand/50" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
        {title}
      </h2>
    </Reveal>
  );
}