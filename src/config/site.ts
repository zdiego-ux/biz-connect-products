import thinkingGiftImage from "@/assets/thinkinggift.png.asset.json";

/**
 * Central site configuration.
 */
export const site = {
  name: "[THINKING LINKS]",
  shortName: "[THINKING LINKS]",
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
  /** Italian translations (optional). */
  categoryIt?: string;
  descriptionIt?: string;
  problemIt?: string;
};

/** Add new products here — the Products page renders them automatically. */
export const products: Product[] = [
  {
    name: "ThinkingGifts",
    category: "SaaS Platform",
    categoryIt: "Piattaforma SaaS",
    description:
      "An all-in-one platform for local businesses to sell their services as gifts with no additional platform commissions beyond Stripe fees. Merchants can manage gift vouchers, bookings, online menus, customers through a mini CRM, and AI-powered websites — all from one simple platform designed to increase sales, visibility, and simplify digital operations.",
    descriptionIt:
      "Una piattaforma all-in-one che permette alle attività locali di vendere i propri servizi sotto forma di regalo, senza commissioni aggiuntive oltre alle fee di Stripe. I merchant possono gestire gift card, prenotazioni, menu online, clienti tramite un mini CRM e siti web generati con l'AI — tutto da un'unica piattaforma pensata per aumentare vendite e visibilità e semplificare la gestione digitale.",
    problem:
      "Finding meaningful gifts is increasingly difficult in a world already full of physical products. We make simple, local experiences — from a dinner to a massage — easy to discover and gift. At the same time, we help small businesses turn their services into giftable experiences, unlock a new revenue channel, and easily digitalize their operations.",
    problemIt:
      "Trovare regali significativi è sempre più difficile in un mondo già pieno di prodotti fisici. Rendiamo semplice scoprire e regalare esperienze locali — da una cena a un massaggio. Allo stesso tempo aiutiamo le piccole attività a trasformare i propri servizi in esperienze regalabili, aprendo un nuovo canale di ricavi e digitalizzando facilmente le operazioni.",
    url: "https://thinkinggift.click/",
    image: thinkingGiftImage.url,
  },
  {
    name: "[PRODUCT NAME 02]",
    category: "Marketplace",
    categoryIt: "Marketplace",
    description:
      "A short description explaining what the platform does and who it is designed for. Replace this copy with the real product summary.",
    descriptionIt:
      "Una breve descrizione che spiega cosa fa la piattaforma e a chi è rivolta. Sostituisci questo testo con la descrizione reale del prodotto.",
    problem:
      "Buyers and suppliers struggle to discover each other and to qualify fit quickly.",
    problemIt:
      "Acquirenti e fornitori faticano a trovarsi e a valutare rapidamente la compatibilità.",
    url: "https://example.com",
  },
  {
    name: "[PRODUCT NAME 03]",
    category: "AI Tooling",
    categoryIt: "Strumenti AI",
    description:
      "A short description explaining what the platform does and who it is designed for. Replace this copy with the real product summary.",
    descriptionIt:
      "Una breve descrizione che spiega cosa fa la piattaforma e a chi è rivolta. Sostituisci questo testo con la descrizione reale del prodotto.",
    problem:
      "Business-critical data stays unused because it is too slow to analyse manually.",
    problemIt:
      "I dati critici per il business restano inutilizzati perché analizzarli manualmente è troppo lento.",
    url: "https://example.com",
  },
];
