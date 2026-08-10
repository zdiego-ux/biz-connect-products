import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="rule-top mt-24 bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-base font-semibold text-foreground">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            We build technology and create valuable business connections.
          </p>
          <a href={`mailto:${site.email}`} className={`${linkClass} mt-4 inline-block`}>
            {site.email}
          </a>
          <a href={`tel:${site.phoneHref}`} className={`${linkClass} mt-1 block`}>
            {site.phone}
          </a>

        </div>

        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/contact" className={linkClass}>
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className={linkClass}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" className={linkClass}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Get matched</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={site.businessFormUrl} className={linkClass}>
                For businesses — Find a provider
              </a>
            </li>
            <li>
              <a href={site.providerFormUrl} className={linkClass}>
                For providers — Join our network
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className={linkClass}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Legal</p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/contact" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-top">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Products &amp; AI-powered business matching.</p>
        </div>
      </div>
    </footer>
  );
}
