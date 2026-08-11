import { createFileRoute } from "@tanstack/react-router";
import { ActionLink } from "@/components/ui/action-link";
import { PathCard } from "@/components/path-card";
import { useLanguage } from "@/i18n/language-context";
import { site } from "@/config/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `AI-Powered Business Matching — ${site.name}` },
      {
        name: "description",
        content:
          "Find the right partner, or your next client. We connect companies looking for specialized expertise with qualified service providers.",
      },
      { property: "og:title", content: `AI-Powered Business Matching — ${site.name}` },
      {
        property: "og:description",
        content:
          "Tell us what you need — or what you offer — and our AI-powered matching identifies relevant opportunities.",
      },
    ],
  }),
  component: Services,
});

function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {items.map((c) => (
        <li
          key={c}
          className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

function Benefits({ items }: { items: readonly (readonly string[])[] }) {
  return (
    <dl className="mt-10 grid gap-8 sm:grid-cols-2">
      {items.map(([title, body]) => (
        <div key={title}>
          <dt className="font-display text-base font-semibold">{title}</dt>
          <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
        </div>
      ))}
    </dl>
  );
}

function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <>
      <section className="container-page pt-24 pb-16 sm:pt-32">
        <p className="eyebrow">{s.eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
          {s.title1}
          <br />
          <span className="text-muted-foreground">{s.title2}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{s.lead}</p>
      </section>

      <section aria-label={s.pathsLabel} className="container-page pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <PathCard
            index={s.forBusinesses}
            title={s.buyerCardTitle}
            body={s.buyerCardBody}
            cta={s.buyerCta}
            href={site.businessFormUrl}
          />
          <PathCard
            index={s.forProviders}
            title={s.providerCardTitle}
            body={s.providerCardBody}
            cta={s.providerCta}
            href={site.providerFormUrl}
          />
        </div>
      </section>

      <section id="for-businesses" className="container-page py-20">
        <div className="rule-top pt-12">
          <p className="eyebrow">{s.forBusinesses}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">{s.buyerHeading}</h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{s.buyerBody}</p>
          <Tags items={s.buyerCategories} />
          <Benefits items={s.buyerBenefits} />
          <div className="mt-10">
            <ActionLink href={site.businessFormUrl}>{s.buyerMainCta}</ActionLink>
          </div>
        </div>
      </section>

      <section id="for-providers" className="container-page pb-20">
        <div className="rule-top pt-12">
          <p className="eyebrow">{s.forProvidersLong}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">{s.providerHeading}</h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{s.providerBody}</p>
          <Tags items={s.providerCategories} />
          <Benefits items={s.providerBenefits} />
          <div className="mt-10">
            <ActionLink href={site.providerFormUrl}>{s.providerCta}</ActionLink>
          </div>
        </div>
      </section>

      <section aria-label={s.howItWorks} className="container-page pb-20">
        <div className="rule-top pt-12">
          <p className="eyebrow">{s.howItWorks}</p>
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            {s.steps.map(([title, body]) => (
              <li key={title}>
                <p className="font-display text-sm tracking-widest text-signal">{title}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <PathCard
            title={s.finalBuyerTitle}
            body={s.finalBuyerBody}
            cta={s.buyerCta}
            href={site.businessFormUrl}
          />
          <PathCard
            title={s.finalProviderTitle}
            body={s.finalProviderBody}
            cta={s.finalProviderCta}
            href={site.providerFormUrl}
          />
        </div>
      </section>
    </>
  );
}
