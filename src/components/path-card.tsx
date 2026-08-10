import type { ReactNode } from "react";
import { ActionLink } from "@/components/ui/action-link";
import type { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

export function PathCard({
  index,
  title,
  body,
  cta,
  to,
  href,
  children,
}: {
  index?: string | undefined;
  title: string;
  body: string;
  cta: string;
  to?: ComponentProps<typeof Link>["to"] | undefined;
  href?: string | undefined;
  children?: ReactNode;
}) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-[var(--shadow-lift)] sm:p-10">
      <div>
        {index && <p className="eyebrow">{index}</p>}
        <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{title}</h3>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">{body}</p>
        {children}
      </div>
      <div className="mt-8">
        <ActionLink to={to} href={href} variant="outline">
          {cta}
        </ActionLink>
      </div>
    </article>
  );
}
