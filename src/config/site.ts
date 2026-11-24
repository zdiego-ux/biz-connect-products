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
  /** Optional image/logo path (served from /public). */
  image?: string;
  /** Background colour behind the logo, matched to the image's own background. */
  imageBg?: string;
  /** "contain" (default) for logos, "cover" for screenshots that should fill the frame. */
  imageFit?: "contain" | "cover";
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
    image: "/products/thinkinggifts.webp",
    imageBg: "#fefefe",
  },
  {
    name: "Folio AI",
    category: "Digital Marketplace",
    categoryIt: "Marketplace digitale",
    description:
      "A digital marketplace for literature — a kind of Shopify for written content. Writers publish and sell their work as PDFs, monetise even their shortest pieces, grow a following and drive traffic to their own websites, publications and Amazon listings.",
    descriptionIt:
      "Un marketplace digitale per la letteratura — una sorta di Shopify per i contenuti scritti. Gli autori pubblicano e vendono le proprie opere in PDF, monetizzano anche i testi più brevi, costruiscono un seguito e portano traffico verso i propri siti, pubblicazioni e pagine Amazon.",
    problem:
      "Traditional publishing is gatekept and hard to access. Talented writers struggle to reach readers, while shorter formats — poems, short stories, essays — rarely fit commercial models and remain undiscovered, even as readers increasingly prefer them.",
    problemIt:
      "L'editoria tradizionale è chiusa e difficile da raggiungere. Molti autori di talento faticano a farsi leggere, mentre i formati brevi — poesie, racconti, saggi — raramente rientrano nei modelli commerciali e restano sconosciuti, proprio quando i lettori li preferiscono sempre di più.",
    url: "https://accurate-frame-forge.vercel.app/",
    image: "/products/folio.png",
    imageBg: "#faf9f6",
  },
  {
    name: "Hex World",
    category: "Persistent Strategy Game",
    categoryIt: "Gioco di strategia persistente",
    description:
      "A persistent online strategy world with no resets and no predefined ending. Players build cities and civilisations, trade in a shared economy with dynamic prices and real supply and demand, and wage wars with lasting consequences — writing one continuous history together.",
    descriptionIt:
      "Un mondo strategico online persistente, senza reset e senza un finale prestabilito. I giocatori costruiscono città e civiltà, commerciano in un'economia condivisa con prezzi dinamici e vera domanda e offerta, e combattono guerre con conseguenze durature — scrivendo insieme un'unica storia continua.",
    problem:
      "Most multiplayer strategy games live in isolated matches that eventually reset, so players' achievements disappear. Their virtual economies are often artificial and disconnected, lacking the depth of a genuinely shared market.",
    problemIt:
      "La maggior parte dei giochi strategici multiplayer si basa su partite isolate che prima o poi si azzerano, cancellando i risultati dei giocatori. Le loro economie virtuali sono spesso artificiali e scollegate, prive della profondità di un vero mercato condiviso.",
    url: "https://hex-world-eta.vercel.app/",
    image: "/products/hexworld.webp",
    imageFit: "cover",
  },
];
