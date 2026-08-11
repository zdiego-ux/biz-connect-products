import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import { useLanguage } from "@/i18n/language-context";

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="rule-top mt-24 bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-base font-semibold text-foreground">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t.footer.blurb}</p>
          <a href={`mailto:${site.email}`} className={`${linkClass} mt-4 inline-block`}>
            {site.email}
          </a>
          <a href={`tel:${site.phoneHref}`} className={`${linkClass} mt-1 block`}>
            {site.phone}
          </a>
        </div>

        <div>
          <p className="eyebrow">{t.footer.company}</p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/contact" className={linkClass}>
                {t.footer.about}
              </Link>
            </li>
            <li>
              <Link to="/products" className={linkClass}>
                {t.footer.products}
              </Link>
            </li>
            <li>
              <Link to="/services" className={linkClass}>
                {t.footer.services}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                {t.footer.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">{t.footer.getMatched}</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={site.businessFormUrl} className={linkClass}>
                {t.footer.forBusinesses}
              </a>
            </li>
            <li>
              <a href={site.providerFormUrl} className={linkClass}>
                {t.footer.forProviders}
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
          <p className="eyebrow">{t.footer.legal}</p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/contact" className={linkClass}>
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                {t.footer.terms}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                {t.footer.cookies}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-top">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </p>
          <p>{t.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
