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
    name: "ThinkingGifts",
    category: "SaaS Platform",
    description:
      "An all-in-one platform for local businesses to sell their services as gifts with no additional platform commissions beyond Stripe fees. Merchants can manage gift vouchers, bookings, online menus, customers through a mini CRM, and AI-powered websites — all from one simple platform designed to increase sales, visibility, and simplify digital operations.",
    problem:
      "Finding meaningful gifts is increasingly difficult in a world already full of physical products. We make simple, local experiences — from a dinner to a massage — easy to discover and gift. At the same time, we help small businesses turn their services into giftable experiences, unlock a new revenue channel, and easily digitalize their operations.",
    url: "https://thinkinggift.click/",
    image: thinkingGiftImage.url,
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
