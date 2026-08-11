import { createFileRoute } from "@tanstack/react-router";
import { ActionLink } from "@/components/ui/action-link";
import { useLanguage } from "@/i18n/language-context";
import { site } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      {
        name: "description",
        content:
          "Get in touch with our team about product development or AI-powered business matching.",
      },
      { property: "og:title", content: `Contact — ${site.name}` },
      {
        property: "og:description",
        content: "Talk to us about building a product or finding the right business partner.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLanguage();

  return (
    <section className="container-page pt-24 pb-24 sm:pt-32">
      <p className="eyebrow">{t.contact.eyebrow}</p>
      <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
        {t.contact.title}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {t.contact.lead}
      </p>

      <div className="rule-top mt-16 grid gap-10 pt-12 md:grid-cols-4">
        <div>
          <h2 className="font-display text-base font-semibold">{t.contact.email}</h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-signal"
          >
            {site.email}
          </a>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold">{t.contact.phone}</h2>
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-signal"
          >
            {site.phone}
          </a>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold">{t.contact.social}</h2>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-signal"
          >
            LinkedIn
          </a>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">{t.contact.getMatched}</h2>
          <div className="mt-3 flex flex-col items-start gap-2">
            <ActionLink href={site.businessFormUrl} variant="ghost">
              {t.contact.findProvider}
            </ActionLink>
            <ActionLink href={site.providerFormUrl} variant="ghost">
              {t.contact.joinNetwork}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
