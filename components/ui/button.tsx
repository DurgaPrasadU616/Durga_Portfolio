import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-250 ease-out select-none whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-250 [&_svg]:ease-out hover:[&_svg:last-child]:translate-x-0.5 hover:[&_svg.lucide-arrow-down]:translate-y-0.5 hover:[&_svg.lucide-arrow-down]:translate-x-0 hover:[&_svg.lucide-arrow-up-right]:-translate-y-0.5 hover:[&_svg.lucide-arrow-up-right]:translate-x-0.5 hover:[&_svg.lucide-external-link]:-translate-y-0.5 hover:[&_svg.lucide-external-link]:translate-x-0.5 motion-reduce:hover:scale-100 motion-reduce:active:scale-100 motion-reduce:hover:[&_svg]:translate-x-0 motion-reduce:hover:[&_svg]:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white shadow-[0_8px_20px_-12px_rgba(82,119,232,0.55)] hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-[0_14px_28px_-12px_rgba(82,119,232,0.6)] active:translate-y-0",
        ghost:
          "card text-ink hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift active:translate-y-0",
        link: "text-brand hover:text-brand-deep p-0",
        subtle:
          "bg-brand-soft text-brand hover:bg-brand-pale hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-12 px-6 text-[0.95rem]",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };