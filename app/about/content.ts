// app/about/content.ts
// All About page copy lives here. No names or personal photos are shown on purpose.

export const siteUrl = "https://zyrusdigital.vercel.app";

export const CONTACT = {
  email: "zyrusdigital@gmail.com",
  whatsapp: "https://wa.me/92XXXXXXXXXX", // TODO: replace with the real number
};

export const IMAGES = {
  hero: "/assets/images/about_hero.jpg",
  story1: "/assets/images/about_story1.jpg",
  story2: "/assets/images/about_story2.jpg",
  team: "/assets/images/about_team.jpg",
};

export const STATEMENT =
  "We build fast online stores that convert, then grow them through search, social and paid channels. One team, from the first line of code to the last campaign.";

// Words from STATEMENT to highlight (must match exactly, including punctuation).
export const STATEMENT_EM = ["fast", "grow"];

export const CHAPTERS = [
  {
    index: "01",
    visual: "desk" as const,
    title: "From freelance to agency.",
    text: "Zyrus Digital started as a freelance web development practice. We kept what mattered, building things properly, and grew into a full agency covering websites, search, social media and paid growth.",
  },
  {
    index: "02",
    visual: "swrv" as const,
    title: "We built SWRV Attire from scratch.",
    text: "SWRV Attire, a Karachi streetwear label, was one of our biggest builds: a custom store, the launch setup and the social media, all handled by us. It taught us what really moves the needle for an online store.",
  },
  {
    index: "03",
    visual: "clients" as const,
    title: "Today we do the same for other brands.",
    text: "We build and grow stores for brands including ChampionShoes, Convex Consulting and Zilpk, with Zohaibtex International launching soon, alongside other projects. One team that understands both the code and the campaign.",
  },
];

export const VALUES = [
  {
    index: "01",
    title: "Speed is a feature",
    text: "A slow store loses sales before a visitor reads a word. We treat performance as part of the design, not an afterthought.",
  },
  {
    index: "02",
    title: "Honest strategy",
    text: "We tell you what will move the needle and what will not, including when that means doing less. No sales pitch, no padding.",
  },
  {
    index: "03",
    title: "Built to be owned",
    text: "You own the code, the assets and the accounts. Everything we build is clean enough to hand to anyone.",
  },
  {
    index: "04",
    title: "Design that sells",
    text: "Beautiful matters, but only when it helps someone buy. Every layout decision has to earn its place.",
  },
];

export const CAPABILITIES = [
  { title: "Development", text: "Shopify, WooCommerce and WordPress builds" },
  { title: "Performance", text: "Speed, Core Web Vitals and mobile fixes" },
  { title: "Search", text: "Technical SEO, tracking and analytics" },
  { title: "Social", text: "Content, creatives and community management" },
  { title: "Paid and email", text: "Meta and Google ads, email automation" },
];

export const BRANDS = ["SWRV Attire", "ChampionShoes", "Convex Consulting", "Zilpk", "Zohaibtex International"];