import { createFileRoute } from "@tanstack/react-router";
import { ActionLink } from "@/components/ui/action-link";
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
  return (
    <section className="container-page pt-24 pb-24 sm:pt-32">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
        Let&apos;s talk.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Whether you want to build a digital product or find the right business partner, we&apos;re
        one message away.
      </p>

      <div className="rule-top mt-16 grid gap-10 pt-12 md:grid-cols-3">
        <div>
          <h2 className="font-display text-base font-semibold">Email</h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold">Social</h2>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold">Get matched</h2>
          <div className="mt-3 flex flex-col items-start gap-2">
            <ActionLink href={site.businessFormUrl} variant="ghost">
              Find a Provider
            </ActionLink>
            <ActionLink href={site.providerFormUrl} variant="ghost">
              Join Our Provider Network
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
