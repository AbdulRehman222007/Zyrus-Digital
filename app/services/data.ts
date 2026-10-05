// app/services/data.ts
export type Pillar = {
  slug: "build" | "launch" | "grow";
  index: string;
  name: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroItalic: string;
  heroText: string;
  image: string;
  imageAlt: string;
  problem: { title: string; points: string[] };
  solution: { title: string; points: string[] };
  included: { title: string; text: string }[];
  process: { title: string; text: string; time?: string }[];
  caseStudy: {
    client: string;
    label: string;
    text: string;
    image: string;
    href?: string;
    stats?: { label: string; value: string }[]; // add ONLY real, verifiable numbers
  };
  faqs: { q: string; a: string }[];
  ctaTitle: string;
};

export const pillars: Pillar[] = [
  {
    slug: "build",
    index: "01",
    name: "Build",
    tagline: "The foundation of your store.",
    seoTitle: "Shopify and WooCommerce Development",
    seoDescription:
      "Custom Shopify and WooCommerce stores designed around your brand and built for speed. No recycled templates. Web development by Zyrus Digital.",
    heroTitle: "Stores built to",
    heroItalic: "perform.",
    heroText:
      "Custom Shopify and WooCommerce stores designed around your brand and built for speed. No recycled templates, no bloat.",
    image: "/assets/images/service_build.jpg",
    imageAlt: "A developer writing code on a wide monitor at a desk by a window",
    problem: {
      title: "Tired of slow, generic templates?",
      points: [
        "A template that looks like every other store in your niche",
        "Pages that take too long to load on mobile",
        "Product and checkout flows that lose buyers",
        "Apps and plugins piled up until nothing works well",
      ],
    },
    solution: {
      title: "We build custom architectures.",
      points: [
        "A theme designed and coded around your brand and catalogue",
        "Clean, lightweight code that loads fast on mobile",
        "Product and checkout flows built to convert",
        "Only the apps and plugins you actually need",
      ],
    },
    included: [
      { title: "Shopify and WooCommerce development", text: "Full store builds on the platform that suits your business, including collections, filtering and integrations." },
      { title: "Custom theme design", text: "Layouts and UX designed for your brand and customers, not adapted from a template." },
      { title: "Speed and performance optimization", text: "Core Web Vitals, image and script optimization, and fixes for mobile." },
      { title: "Layouts built for mobile", text: "Most of your shoppers are on phones, so every page is designed for small screens first." },
      { title: "App and API integrations", text: "Connect the tools you rely on without slowing the store down." },
      { title: "Handover and ownership", text: "Full ownership of the code and assets transfers to you after final payment." },
    ],
    process: [
      { title: "Discover", text: "Audit, strategy and goal setting.", time: "Week 1" },
      { title: "Design", text: "Wireframes, UI and UX, and your approval.", time: "Weeks 2 to 3" },
      { title: "Build", text: "Development, integrations and QA testing.", time: "Weeks 4 to 5" },
      { title: "Launch", text: "Go live, handover and support.", time: "Week 6+" },
    ],
    caseStudy: {
      client: "ChampionShoes",
      label: "Custom Shopify build",
      text: "A custom Shopify storefront for a footwear brand, with bespoke Liquid and JavaScript development.",
      image: "/assets/work/championshoes-desktop.png",
      href: "https://championshoes.pk",
    },
    faqs: [
      { q: "How much does a new store cost?", a: "Pricing depends on the complexity of the design and integrations. We give a custom quote after a short discovery conversation." },
      { q: "How long does a build take?", a: "A typical project runs around six weeks from discovery to launch. Larger catalogues or custom features can take longer, and we confirm the timeline before we start." },
      { q: "Do you use ready made templates?", a: "We build custom themes tailored to your brand, so the experience is unique and the code stays lean and fast." },
      { q: "Who owns the code after launch?", a: "You do. After final payment, full ownership of the code and assets is transferred to you." },
      { q: "Do you offer ongoing support?", a: "Yes. We offer monthly packages for maintenance, marketing and continued growth." },
    ],
    ctaTitle: "Ready to build a store that scales?",
  },
  {
    slug: "launch",
    index: "02",
    name: "Launch",
    tagline: "Ready for the world.",
    seoTitle: "Store Launch, Technical SEO and Payment Setup",
    seoDescription:
      "Payment gateway integration, technical SEO and analytics configured properly before you go live. Launch your online store with Zyrus Digital.",
    heroTitle: "Launch day without the",
    heroItalic: "guesswork.",
    heroText:
      "Payments, technical SEO and analytics set up properly before you go live, so your first customers have a smooth experience and you can measure every one.",
    image: "/assets/images/service_launch.jpg",
    imageAlt: "Preparing and labelling orders for shipment at a packing desk",
    problem: {
      title: "Worried about what breaks on launch day?",
      points: [
        "Payments failing or missing the options your customers use",
        "A site search engines cannot crawl properly",
        "No tracking, so you cannot tell what is working",
        "Redirect, meta and speed issues found after launch",
      ],
    },
    solution: {
      title: "We launch with everything switched on.",
      points: [
        "Payment gateways tested from start to finish",
        "Technical SEO foundations in place from day one",
        "Analytics and conversion tracking configured",
        "A checklist before launch so nothing is missed",
      ],
    },
    included: [
      { title: "Payment gateway integration", text: "Set up and test the payment options your customers expect, local and international." },
      { title: "Technical SEO setup", text: "Site structure, metadata, sitemap, indexing and speed basics so search engines can understand your store." },
      { title: "Analytics and tracking configuration", text: "Analytics and conversion tracking so you can see what drives sales." },
      { title: "Quality checks before launch", text: "Devices, checkout, forms, emails and links tested before the switch." },
      { title: "Redirects and migration", text: "Move from an old site without losing traffic or breaking links." },
      { title: "Search Console setup", text: "Your site verified and sitemap submitted, ready to be found." },
    ],
    process: [
      { title: "Audit and checklist", text: "We review the store and agree what must be ready to go live." },
      { title: "Payments and integrations", text: "Gateways, shipping and connected tools configured and tested." },
      { title: "SEO and tracking", text: "Technical SEO, analytics and conversion tracking set up." },
      { title: "Test and go live", text: "Final QA on every device, then launch with monitoring." },
    ],
    caseStudy: {
      client: "SWRV Attire",
      label: "Concept to live store",
      text: "SWRV Attire went from concept to a live online store, with the website, launch setup and social presence handled by Zyrus.",
      image: "/assets/work/swrv-desktop.png",
      href: "https://swrvattire.com",
    },
    faqs: [
      { q: "Which payment gateways can you integrate?", a: "We integrate the gateways available for your platform and market, including local options and international processors. Tell us where your customers are and we will confirm what is possible." },
      { q: "Will technical SEO get me ranking straight away?", a: "Technical SEO makes sure search engines can find and understand your store. Rankings also depend on content, competition and time, so we set honest expectations rather than promise positions." },
      { q: "Can you launch a store someone else built?", a: "Yes. We can audit an existing store and prepare it for launch or relaunch." },
      { q: "Do you handle moving from another platform?", a: "Yes. We plan redirects and data migration so you keep your traffic and customers." },
    ],
    ctaTitle: "Ready to launch with confidence?",
  },
  {
    slug: "grow",
    index: "03",
    name: "Grow",
    tagline: "Scaling your revenue.",
    seoTitle: "Social Media, Paid Ads and Email Marketing",
    seoDescription:
      "Social media management, paid advertising and email marketing automation for ecommerce brands. Digital marketing by Zyrus Digital.",
    heroTitle: "Marketing that brings",
    heroItalic: "buyers.",
    heroText:
      "Social media, paid ads and email automation that help the right people find your store, visit it and come back.",
    image: "/assets/images/service_grow.jpg",
    imageAlt: "A camera and lighting set up for filming brand content",
    problem: {
      title: "Posting without a plan?",
      points: [
        "Irregular posting and content that does not match your brand",
        "Ad spend with no clear view of what it returns",
        "No follow up after a customer's first purchase",
        "Reports full of numbers that do not explain anything",
      ],
    },
    solution: {
      title: "A growth engine you can measure.",
      points: [
        "Content planned monthly and designed to match your brand",
        "Campaigns built around proper conversion tracking",
        "Email flows for welcome, abandoned cart and repeat purchase",
        "Plain language monthly reporting",
      ],
    },
    included: [
      { title: "Social media management", text: "Content planning, creatives, posting and community engagement across your channels." },
      { title: "Paid advertising campaigns", text: "Meta and Google campaigns built to bring buyers, not just clicks." },
      { title: "Email marketing automation", text: "Welcome, abandoned cart and repeat purchase flows that run on their own." },
      { title: "Content and creatives", text: "Designs, captions and copy that look like one brand." },
      { title: "Audience and campaign testing", text: "We test creatives and audiences, and put budget behind what works." },
      { title: "Monthly reporting", text: "A clear monthly summary of what happened and what we will do next." },
    ],
    process: [
      { title: "Audit and goals", text: "Review your channels and agree what growth means for you." },
      { title: "Strategy and content plan", text: "Channels, content themes and campaign plan mapped out." },
      { title: "Launch and manage", text: "We create, publish, run and manage day to day." },
      { title: "Report and optimize", text: "Monthly reporting and adjustments based on the data." },
    ],
    caseStudy: {
      client: "Convex Consulting",
      label: "Redesign and socials",
      text: "A website redesign plus ongoing social media management for an enterprise software company.",
      image: "/assets/work/convexconsulting-desktop.png",
      href: "https://convexconsulting.com.pk",
    },
    faqs: [
      { q: "Do you manage social media accounts fully?", a: "Yes. We plan, create, schedule and post content and handle engagement, keeping you in the loop on what goes out." },
      { q: "Do you have fixed packages?", a: "Yes. Social media management is offered as monthly packages. Get in touch and we will share current options." },
      { q: "Which ad platforms do you run?", a: "Mainly Meta and Google. We recommend the mix that fits your product and audience." },
      { q: "How long before I see results?", a: "Paid campaigns can give early signals within weeks. Organic social and email build over months. We report monthly so you can see progress either way." },
    ],
    ctaTitle: "Ready to grow your store?",
  },
];

export const getPillar = (slug: string) => pillars.find((p) => p.slug === slug);