import { createFileRoute } from "@tanstack/react-router";
import { ActionLink } from "@/components/ui/action-link";
import { PathCard } from "@/components/path-card";
import { LanguageBanner } from "@/components/language-switcher";
import { useLanguage } from "@/i18n/language-context";
import { site } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Digital Products & AI Business Matching` },
      {
        name: "description",
        content:
          "We develop digital products and help companies find the right service providers through intelligent, AI-powered matching.",
      },
      { property: "og:title", content: `${site.name} — Building products. Connecting businesses.` },
      {
        property: "og:description",
        content:
          "Software products and an AI-powered business matching service connecting companies with qualified providers.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLanguage();

  return (
    <>
      <LanguageBanner />

      <section className="container-page pt-24 pb-20 sm:pt-32 sm:pb-28">
        <p className="eyebrow reveal">{t.home.eyebrow}</p>
        <h1 className="reveal mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          {t.home.title1}
          <br />
          <span className="text-muted-foreground">{t.home.title2}</span>
        </h1>
        <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t.home.lead}
        </p>
        <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
          <ActionLink to="/products">{t.home.ctaProducts}</ActionLink>
          <ActionLink to="/services" variant="outline">
            {t.home.ctaServices}
          </ActionLink>
        </div>
      </section>

      <section aria-label={t.home.pathsLabel} className="container-page pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <PathCard
            index={t.home.path1Index}
            title={t.home.path1Title}
            body={t.home.path1Body}
            cta={t.home.path1Cta}
            to="/products"
          />
          <PathCard
            index={t.home.path2Index}
            title={t.home.path2Title}
            body={t.home.path2Body}
            cta={t.home.path2Cta}
            to="/services"
          />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="rule-top grid gap-10 pt-12 md:grid-cols-3">
          {t.home.facts.map((item) => (
            <div key={item.k}>
              <h2 className="font-display text-base font-semibold">{item.k}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
