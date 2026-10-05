// app/portfolio/data.ts
export type CaseStudy = {
  headline: string;
  summary: string;
  services: string[];
  platform: string;
  year: string;
  snapshot: { label: string; value: string }[];
  brief: string;
  challenge: string;
  built: { title: string; body: string }[];
  // Only add results you can prove (source + date). Omit the field otherwise.
  results?: { label: string; before?: string; after: string }[];
  stack: string[];
  quote?: { text: string; name: string; role: string };
};

export type Project = {
  slug: string;
  client: string;
  industry: string;
  tags: string[];
  image: string;
  imageMobile?: string;
  href?: string;
  soon?: boolean;
  stats?: { label: string; value: string }[];
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "swrv-attire",
    client: "SWRV Attire",
    industry: "Fashion",
    tags: ["WordPress", "Social Media"],
    image: "/assets/work/swrv-desktop.png",
    imageMobile: "/assets/work/swrv-mobile.png",
    href: "https://swrvattire.com",
    caseStudy: {
      headline:
        "A streetwear brand built from a blank page to a live store, drop after drop.",
      summary:
        "Built from scratch by Zyrus, with performance work and social media managed alongside it.",
      services: ["Web development", "Performance", "Social media"],
      platform: "WordPress + Elementor",
      year: "2025 – present",
      snapshot: [
        { label: "Built", value: "From scratch" },
        { label: "Drops supported", value: "3" },
        { label: "Socials", value: "Managed by Zyrus" },
      ],
      brief:
        "SWRV is a Karachi unisex streetwear brand. It needed a store that felt as considered as the product and could keep up with a new drop every season.",
      challenge:
        "Streetwear lives and dies on its drops. The site had to look premium, stay fast under launch traffic, and handle video-heavy hero sections without the layout jumping or the page crawling on mobile.",
      built: [
        {
          title: "A custom storefront",
          body: "Brand-led design with category browsing for hoodies, jerseys, tees, co-ords and sweatshirts, so each new drop slots in without a redesign.",
        },
        {
          title: "A performance layer",
          body: "Preloaded hero assets with separate desktop and mobile logic for the video background, tuned caching, and no external font loading to protect load time.",
        },
        {
          title: "Detail-level fixes",
          body: "A resolved CSS conflict from a global heading rule, a mobile footer accordion, and clean SEO setup on key pages.",
        },
        {
          title: "Social media management",
          body: "Content aligned to each drop and run alongside the site, so the story is consistent from Instagram to checkout.",
        },
      ],
      results: [
        { label: "Performance", after: "75+" },
        { label: "Accessibility", after: "90+" },
        { label: "Best practices", after: "96+" },
        { label: "SEO", after: "100" },
      ],
      stack: ["WordPress", "Elementor", "LiteSpeed Cache", "Rank Math"],
    },
  },
  {
    slug: "championshoes",
    client: "ChampionShoes",
    industry: "Footwear",
    tags: ["Shopify", "Redesign"],
    image: "/assets/work/championshoes-desktop.png",
    imageMobile: "/assets/work/championshoes-mobile.png",
    href: "https://championshoes.pk",
    caseStudy: {
      headline:
        "A footwear retailer with four Karachi stores and no website, launched on Shopify with conversion features built in custom Liquid instead of stacked apps.",
      summary:
        "Countdown timers, five custom emails, colour swatches, a store locator and a 17track-powered order tracking page, all built in custom Liquid rather than stacked apps.",
      services: ["Shopify development", "Custom features", "Payments"],
      platform: "Shopify",
      year: "2026",
      snapshot: [
        { label: "Custom features", value: "10+" },
        { label: "Built in", value: "Liquid + JS" },
        { label: "Local payments", value: "Integrated" },
      ],
      brief:
        "ChampionShoes is a Pakistani footwear retailer with four Karachi stores and no website at all. Their marketing agency brought us in to build one from scratch. The storefront needed to hold its own against national competitors, and it needed to suit local shoppers' payment and delivery habits rather than assume a US or EU checkout flow.",
      challenge:
        "The usual fix for each missing feature is another paid app, which adds monthly cost, slows the store and creates design inconsistencies. They needed urgency, better product selection and local logistics without the bloat.",
      built: [
        {
          title: "Conversion tools",
          body: "A sale countdown timer, a cart urgency timer and mobile category search, written in Liquid and JavaScript.",
        },
        {
          title: "Smarter product selection",
          body: "A linked-product colour swatch system and size swatches so shoppers switch colourways without leaving the page, plus custom SKU formatting for cleaner inventory.",
        },
        {
          title: "Five custom emails",
          body: "Five branded transactional emails written into the theme, covering order confirmation through to refund.",
        },
        {
          title: "A custom order tracking page",
          body: "A hand built tracking form that hands off to 17track's lookup API and renders live delivery status on the page. No tracking app, no redirect. Includes Enter key submit, empty input handling, and an on page note explaining the 24 to 48 hour courier delay.",
        },
        {
          title: "A custom store locator",
          body: "Four Karachi stores, N. Nazimabad, Saddar, Saddar Mega Store and Gulshan. Each one with address, two phone numbers and a Google Maps deep link. Built as a single page rather than a store locator app.",
        },

      ],
      stack: ["Shopify", "Liquid", "JavaScript", "Rapid Gateway"],
    },
  },
  {
    slug: "convex-consulting",
    client: "Convex Consulting",
    industry: "B2B Services",
    tags: ["Custom Code"],
    image: "/assets/work/convexconsulting-desktop.png",
    imageMobile: "/assets/work/convexconsulting-mobile.png",
    href: "https://convexconsulting.com.pk",
    caseStudy: {
      headline:
        "Turning 20 years of Oracle and enterprise IT expertise into a website that looks like it.",
      summary:
        "Homepage and case studies redesigned, three new pages added, socials managed.",
      services: ["Website redesign", "New pages", "Social media"],
      platform: "Custom code",
      year: "2026",
      snapshot: [
        { label: "Pages redesigned", value: "2" },
        { label: "New pages", value: "3" },
        { label: "Socials", value: "Managed by Zyrus" },
      ],
      brief:
        "Convex Consulting started in Oracle database and infrastructure work and has grown into web, software, mobile, automation and AI. Their website had to present them as a serious enterprise IT partner.",
      challenge:
        "Their strongest asset is a long list of delivered projects, but the original site didn't make that proof easy to scan. Our first redesign was visually ambitious, and the client found it too complex for a B2B audience.",
      built: [
        {
          title: "A cleaner enterprise-style homepage",
          body: "Aimed at decision-makers who want credibility fast.",
        },
        {
          title: "A case studies page rebuilt around feedback",
          body: "We moved from an editorial layout to a uniform card grid, then to a screenshot-first portfolio, with full challenge, solution and outcome revealed on click so skimmers and detail-readers are both served.",
        },
        {
          title: "A dedicated FBR digital invoicing page",
          body: "A service with real search demand in Pakistan, given its own page.",
        },
        {
          title: "Contact and client list pages",
          body: "They complete the trust-building path from first visit to enquiry.",
        },
      ],
      stack: ["Custom code", "Responsive design"],
    },
  },
  {
    slug: "zohaibtex",
    client: "Zohaibtex",
    industry: "Textiles / B2B",
    tags: ["Shopify"],
    image: "/assets/work/zilpk-desktop.png",
    imageMobile: "/assets/work/zilpk-mobile.png",
    soon: true,
    // No caseStudy yet: add it on launch day and the page generates itself.
  },
];

export const filters = [
  "All",
  "Shopify",
  "WordPress",
  "Custom Code",
  "Social Media",
] as const;