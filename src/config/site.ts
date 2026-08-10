/**
 * Central site configuration.
 * Replace the placeholder values below (company name, form URLs, contacts).
 */
export const site = {
  name: "[COMPANY NAME]",
  shortName: "[COMPANY]",
  tagline: "Building products. Connecting businesses.",
  email: "hello@example.com",
  linkedin: "https://www.linkedin.com/",
  /** Replace with the real intake form URLs. */
  businessFormUrl: "[BUSINESS FORM URL]",
  providerFormUrl: "[SERVICE PROVIDER FORM URL]",
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
