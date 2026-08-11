import { ActionLink } from "@/components/ui/action-link";
import type { Product } from "@/config/site";
import { useLanguage } from "@/i18n/language-context";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const { t, lang } = useLanguage();
  const isIt = lang === "it";
  const description = isIt && product.descriptionIt ? product.descriptionIt : product.description;
  const problem = isIt && product.problemIt ? product.problemIt : product.problem;
  const category = isIt && product.categoryIt ? product.categoryIt : product.category;

  return (
    <article className="rule-top grid gap-8 py-12 md:grid-cols-12 md:py-16">
      <div className="md:col-span-4">
        <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{product.name}</h2>

        <div className="mt-6 max-w-prose border-l-2 border-signal pl-4">
          <p className="eyebrow">{t.products.problemLabel}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem}</p>
        </div>

        <span className="mt-6 inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          {category}
        </span>
      </div>

      <div className="md:col-span-8">
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name} — ${t.products.imageAlt}`}
            loading="lazy"
            className="mb-8 w-full rounded-lg border border-border object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="mb-8 flex h-44 items-center justify-center rounded-lg border border-dashed border-border bg-muted/60 font-display text-sm text-muted-foreground"
          >
            Product image
          </div>
        )}

        <p className="max-w-prose text-base leading-relaxed text-foreground">{description}</p>

        <div className="mt-8">
          <ActionLink href={product.url} variant="outline">
            {t.products.visit}
          </ActionLink>
        </div>
      </div>
    </article>
  );
}
