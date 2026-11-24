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
      "Folio AI is a digital marketplace for literature — a kind of Shopify for written content — where anyone can publish, sell and distribute their work independently. Through a simple PDF-based marketplace, writers can monetise even their smallest creations, build an audience, gain followers and turn individual readers into long-term supporters. Folio AI also helps authors drive traffic to their own independent publications, websites and Amazon listings, giving writers the visibility, ownership and commercial opportunities that traditional publishing often fails to provide.",
    descriptionIt:
      "Folio AI è un marketplace digitale per la letteratura — una sorta di Shopify per i contenuti scritti — dove chiunque può pubblicare, vendere e distribuire le proprie opere in modo indipendente. Grazie a un semplice marketplace basato su PDF, gli autori possono monetizzare anche le loro creazioni più brevi, costruire un pubblico, ottenere follower e trasformare i singoli lettori in sostenitori nel tempo. Folio AI aiuta inoltre gli autori a portare traffico verso le proprie pubblicazioni indipendenti, i propri siti web e le pagine Amazon, offrendo quella visibilità, quel controllo e quelle opportunità commerciali che l'editoria tradizionale spesso non garantisce.",
    problem:
      "The publishing industry remains highly traditional, gatekept and difficult to access. Many talented writers struggle to gain visibility and reach readers, even when producing high-quality content. At the same time, attention spans are shrinking and readers are increasingly drawn to shorter, more accessible pieces. As a result, valuable creative work — individual poems, short stories, essays and independent writing — often remains undiscovered simply because it doesn't fit traditional publishing or commercial models.",
    problemIt:
      "L'editoria è ancora un settore molto tradizionale, chiuso e difficile da raggiungere. Molti autori di talento faticano a ottenere visibilità e a raggiungere i lettori, anche quando producono contenuti di qualità. Allo stesso tempo la soglia di attenzione si riduce e i lettori sono sempre più attratti da contenuti brevi e accessibili. Così opere di valore — singole poesie, racconti, saggi e scritti indipendenti — restano spesso sconosciute solo perché non rientrano nei modelli editoriali e commerciali tradizionali.",
    url: "https://accurate-frame-forge.vercel.app/",
    image: "/products/folio.png",
    imageBg: "#faf9f6",
  },
  {
    name: "Hex World",
    category: "Persistent Strategy Game",
    categoryIt: "Gioco di strategia persistente",
    description:
      "Hex World aims to become the first truly persistent virtual world, where players share a single, evolving universe with a continuous history and no predefined ending. Every player can build cities, territories and civilisations, develop economies, establish trade relationships and wage wars with real, lasting consequences. Everything runs on a shared database and an interconnected economy with dynamic pricing, supply and demand, market fluctuations and competition between players and civilisations. Unlike traditional games, Hex World never resets: its history is written continuously by its players, creating a living world where every decision matters and every civilisation leaves its mark.",
    descriptionIt:
      "Hex World punta a diventare il primo mondo virtuale davvero persistente, in cui i giocatori condividono un unico universo in continua evoluzione, con una storia ininterrotta e senza un finale prestabilito. Ogni giocatore può costruire città, territori e civiltà, sviluppare economie, stringere rapporti commerciali e combattere guerre con conseguenze reali e durature. Tutto si basa su un database condiviso e su un'economia interconnessa, con prezzi dinamici, domanda e offerta, fluttuazioni di mercato e competizione tra giocatori e civiltà. A differenza dei giochi tradizionali, Hex World non si azzera mai: la sua storia viene scritta continuamente dai giocatori, dando vita a un mondo in cui ogni decisione conta e ogni civiltà lascia il segno.",
    problem:
      "Most multiplayer strategy games run in isolated matches, temporary campaigns or predefined scenarios where progress eventually resets and the consequences of players' actions disappear. Players invest time and creativity building armies, cities and civilisations, only to see their achievements confined to a limited game cycle. Meanwhile, virtual economies are often artificial and disconnected, lacking the complexity of genuinely shared markets. There is room for something much bigger: a persistent world where decisions have lasting consequences, wars reshape history, and creativity, strategy, diplomacy and economics are interconnected.",
    problemIt:
      "La maggior parte dei giochi strategici multiplayer si svolge in partite isolate, campagne temporanee o scenari predefiniti, dove i progressi prima o poi si azzerano e le conseguenze delle azioni dei giocatori svaniscono. I giocatori investono tempo e creatività per costruire eserciti, città e civiltà, per poi vedere i propri risultati confinati in un ciclo di gioco limitato. Inoltre le economie virtuali sono spesso artificiali e scollegate, prive della complessità di un vero mercato condiviso. C'è spazio per qualcosa di molto più grande: un mondo persistente in cui le decisioni hanno conseguenze durature, le guerre riscrivono la storia e creatività, strategia, diplomazia ed economia sono interconnesse.",
    url: "https://hex-world-eta.vercel.app/",
  },
];
