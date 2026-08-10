import { createFileRoute } from "@tanstack/react-router";
import { ActionLink } from "@/components/ui/action-link";
import { PathCard } from "@/components/path-card";
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
  return (
    <>
      <section className="container-page pt-24 pb-20 sm:pt-32 sm:pb-28">
        <p className="eyebrow reveal">Products &amp; Business Matching</p>
        <h1 className="reveal mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          Building products.
          <br />
          <span className="text-muted-foreground">Connecting businesses.</span>
        </h1>
        <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We develop digital products and help companies find the right service providers through
          intelligent, AI-powered matching.
        </p>
        <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
          <ActionLink to="/products">Explore Our Products</ActionLink>
          <ActionLink to="/services" variant="outline">
            Discover Our Services
          </ActionLink>
        </div>
      </section>

      <section aria-label="Our two business areas" className="container-page pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <PathCard
            index="01 — Our Products"
            title="We design, build and launch software"
            body="We build and launch digital products designed to solve real business problems. Explore the software platforms and projects we have developed."
            cta="View Our Products"
            to="/products"
          />
          <PathCard
            index="02 — Our Services"
            title="We connect companies with the right partners"
            body="We help businesses find the right partners — from software providers and marketing agencies to legal advisors and M&A specialists — using AI-powered matching."
            cta="Find the Right Partner"
            to="/services"
          />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="rule-top grid gap-10 pt-12 md:grid-cols-3">
          {[
            {
              k: "Product engineering",
              v: "From first concept to a live platform, built by a small senior team.",
            },
            {
              k: "AI-powered matching",
              v: "Requirements and capabilities analysed to surface genuinely relevant partners.",
            },
            {
              k: "One clear outcome",
              v: "We build technology and create valuable business connections.",
            },
          ].map((item) => (
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
