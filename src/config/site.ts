/**
 * Central site configuration.
 * Replace the placeholder values below (company name, form URLs, contacts).
 */
export const site = {
  name: "Thinking Links",
  shortName: "Thinking Links",
  tagline: "Building products. Connecting businesses.",
  email: "zdiego@thinkinglinks.net",
  phone: "+39 347 565 0985",
  phoneHref: "+393475650985",
  linkedin: "https://www.linkedin.com/in/diego-zuccolo-994b26195/",
  businessFormUrl: "https://tally.so/r/pbqbME",
  providerFormUrl: "https://tally.so/r/yPAXM4",
} as const;


export type Product = {
  name: string;
  category: string;
  description: string;
  problem: string;
  url: string;
  /** Optional image/logo URL. */
  image?: string;
};

/** Add new products here — the Products page renders them automatically. */
export const products: Product[] = [
  {
    name: "[PRODUCT NAME 01]",
    category: "SaaS Platform",
    description:
      "A short description explaining what the platform does and who it is designed for. Replace this copy with the real product summary.",
    problem:
      "Teams lose hours to manual, fragmented workflows with no single source of truth.",
    url: "https://example.com",
  },
  {
    name: "[PRODUCT NAME 02]",
    category: "Marketplace",
    description:
      "A short description explaining what the platform does and who it is designed for. Replace this copy with the real product summary.",
    problem:
      "Buyers and suppliers struggle to discover each other and to qualify fit quickly.",
    url: "https://example.com",
  },
  {
    name: "[PRODUCT NAME 03]",
    category: "AI Tooling",
    description:
      "A short description explaining what the platform does and who it is designed for. Replace this copy with the real product summary.",
    problem:
      "Business-critical data stays unused because it is too slow to analyse manually.",
    url: "https://example.com",
  },
];
