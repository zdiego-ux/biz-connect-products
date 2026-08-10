import { createFileRoute } from "@tanstack/react-router";
import { ActionLink } from "@/components/ui/action-link";
import { PathCard } from "@/components/path-card";
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

const buyerCategories = [
  "Software providers",
  "SaaS solutions",
  "Technology partners",
  "Marketing agencies",
  "Creative agencies",
  "Consulting firms",
  "Legal firms",
  "M&A advisors",
  "Professional services",
  "Specialized B2B services",
];

const providerCategories = [
  "Software companies",
  "SaaS providers",
  "Marketing agencies",
  "Development agencies",
  "Creative agencies",
  "Consultants",
  "Legal firms",
  "M&A advisors",
  "Professional service firms",
];

const buyerBenefits = [
  ["Save time", "Outsource the research and initial provider discovery process."],
  [
    "Access qualified providers",
    "Receive introductions to providers relevant to your specific requirements.",
  ],
  [
    "AI-powered matching",
    "Technology identifies providers based on capabilities and business requirements.",
  ],
  ["Free for businesses", "Companies looking for providers do not pay for the matching service."],
];

const providerBenefits = [
  ["Qualified lead generation", "Receive opportunities aligned with your services and expertise."],
  [
    "Outsource business development",
    "Let experienced professionals identify relevant potential clients.",
  ],
  [
    "Relevant opportunities",
    "AI-assisted matching helps prioritize opportunities that fit your capabilities.",
  ],
  [
    "Performance-based model",
    "No unnecessary upfront lead-generation costs. A commission may apply only when a qualified introduction results in an actual project.",
  ],
];

const steps = [
  ["01 — Submit", "Businesses tell us what they need. Providers tell us what they offer."],
  [
    "02 — Match",
    "Our AI-assisted process analyzes requirements, capabilities, industries and other relevant criteria to identify potential matches.",
  ],
  [
    "03 — Connect",
    "When there is a strong fit, we facilitate an introduction between the company and the relevant provider.",
  ],
];

function Tags({ items }: { items: string[] }) {
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

function Benefits({ items }: { items: string[][] }) {
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
  return (
    <>
      <section className="container-page pt-24 pb-16 sm:pt-32">
        <p className="eyebrow">02 — Services</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
          Find the right partner.
          <br />
          <span className="text-muted-foreground">Or your next client.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We connect companies looking for specialized expertise with qualified service providers.
          Tell us what you need — or what you offer — and our AI-powered matching process will
          identify relevant opportunities.
        </p>
      </section>

      <section aria-label="Choose your path" className="container-page pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <PathCard
            index="For businesses"
            title="I'm looking for a service"
            body="For businesses searching for a provider."
            cta="Find a Provider"
            href={site.businessFormUrl}
          />
          <PathCard
            index="For providers"
            title="I'm a service provider"
            body="For agencies, consultants, software companies and professional service firms."
            cta="Join Our Provider Network"
            href={site.providerFormUrl}
          />
        </div>
      </section>

      <section id="for-businesses" className="container-page py-20">
        <div className="rule-top pt-12">
          <p className="eyebrow">For businesses</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
            Find qualified providers without spending weeks searching.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Submit your requirements once and outsource the vendor discovery process. We identify
            and qualify providers across a wide range of B2B categories.
          </p>
          <Tags items={buyerCategories} />
          <Benefits items={buyerBenefits} />
          <div className="mt-10">
            <ActionLink href={site.businessFormUrl}>Tell Us What You&apos;re Looking For</ActionLink>
          </div>
        </div>
      </section>

      <section id="for-providers" className="container-page pb-20">
        <div className="rule-top pt-12">
          <p className="eyebrow">For service providers</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
            Turn your expertise into qualified opportunities.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Join the network and be considered whenever a company is looking for services matching
            your expertise.
          </p>
          <Tags items={providerCategories} />
          <Benefits items={providerBenefits} />
          <div className="mt-10">
            <ActionLink href={site.providerFormUrl}>Join Our Provider Network</ActionLink>
          </div>
        </div>
      </section>

      <section aria-label="How it works" className="container-page pb-20">
        <div className="rule-top pt-12">
          <p className="eyebrow">How it works</p>
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map(([title, body]) => (
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
            title="Looking for a solution?"
            body="Tell us what your company needs and we'll help you identify relevant providers."
            cta="Find a Provider"
            href={site.businessFormUrl}
          />
          <PathCard
            title="Looking for new clients?"
            body="Join our network and get considered for relevant business opportunities."
            cta="Join the Provider Network"
            href={site.providerFormUrl}
          />
        </div>
      </section>
    </>
  );
}
