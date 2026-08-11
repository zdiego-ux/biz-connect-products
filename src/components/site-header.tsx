import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/config/site";
import { useLanguage } from "@/i18n/language-context";
import { LanguageToggle } from "@/components/language-switcher";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/products", label: t.nav.products },
    { to: "/services", label: t.nav.services },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-display text-base font-semibold tracking-tighter text-foreground uppercase"
        >
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="font-display text-sm">
              {open ? "✕" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-surface md:hidden">
          <div className="container-page flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
