import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { ActionLink } from "@/components/ui/action-link";
import { useLanguage } from "@/i18n/language-context";
import { products, site } from "@/config/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: `Our Products — ${site.name}` },
      {
        name: "description",
        content:
          "Explore the digital products, platforms and software projects we have designed, built and launched.",
      },
      { property: "og:title", content: `Our Products — ${site.name}` },
      {
        property: "og:description",
        content: "Digital products, platforms and software projects built by our team.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  const { t } = useLanguage();

  return (
    <>
      <section className="container-page pt-24 pb-12 sm:pt-32">
        <p className="eyebrow">{t.products.eyebrow}</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
          {t.products.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t.products.lead}
        </p>
      </section>

      <section className="container-page pb-12">
        {products.map((product, i) => (
          <ProductCard key={product.name} product={product} index={i} />
        ))}
      </section>

      <section className="container-page">
        <div className="rule-top flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">{t.products.ctaTitle}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{t.products.ctaBody}</p>
          </div>
          <ActionLink to="/services">{t.products.ctaButton}</ActionLink>
        </div>
      </section>
    </>
  );
}
