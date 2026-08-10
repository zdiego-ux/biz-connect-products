import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

const base =
  "group inline-flex items-center gap-2 rounded-md font-display text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const sizes = "px-5 py-3";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)]",
  outline:
    "border border-border bg-surface text-foreground hover:border-foreground/40 hover:-translate-y-0.5",
  ghost: "px-0 py-0 text-foreground hover:text-signal",
};

function Arrow() {
  return (
    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  );
}

export function ActionLink({
  to,
  href,
  variant = "solid",
  arrow = true,
  children,
  className,
  ...rest
}: {
  to?: ComponentProps<typeof Link>["to"];
  href?: string;
  variant?: Variant;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const classes = cn(base, variant !== "ghost" && sizes, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {arrow && <Arrow />}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer noopener" : undefined}
      className={classes}
      {...rest}
    >
      {children}
      {arrow && <Arrow />}
    </a>
  );
}
