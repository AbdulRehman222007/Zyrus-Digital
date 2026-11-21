import type { Metadata } from "next";
import Link from "next/link";

const title = "About Zyrus Digital";
const description =
  "Zyrus Digital is a Karachi agency that builds, launches and grows Shopify and WooCommerce stores. Here is how we work and who we work with.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${title} | Zyrus Digital`,
    description,
    url: "/about",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
};

const label =
  "font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)]";
const h2 =
  "[font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]";
const section = "px-[var(--gutter)] py-[var(--section-y)]";
const wrap = "mx-auto max-w-[90rem]";

const principles = [
  {
    title: "Performance is the starting point",
    text: "We measure speed and checkout before we design anything. Layout decisions follow from what the numbers show.",
  },
  {
    title: "Custom over stacked",
    text: "Where a feature can be built cleanly in the theme, we build it there instead of adding another paid app that slows the store.",
  },
  {
    title: "You own what we build",
    text: "Code, design assets and accounts are handed over to you at launch. Nothing is locked behind our agency.",
  },
  {
    title: "Plain answers",
    text: "Clear timelines, direct access to the person doing the work, and no jargon.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
      {/* Intro */}
      <section className="px-[var(--gutter)] pb-[var(--section-y)] pt-40">
        <div className={wrap}>
          <p className={`${label} text-[var(--color-accent)]`}>About</p>
          <h1 className="mt-8 max-w-5xl [font-family:var(--font-display)] [font-size:var(--text-3xl)] [font-weight:var(--weight-display)] leading-[var(--leading-tight)] tracking-[var(--tracking-display-xl)]">
            We build stores that{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              earn their place.
            </em>
          </h1>
          <p className="mt-16 max-w-2xl text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]">
            Zyrus Digital is a digital marketing and web development agency based in Karachi. We build Shopify and WooCommerce stores for brands that sell, then help them grow through search, social and paid channels.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className={section}>
        <div className={wrap}>
          <h2 className={h2}>
            How we{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              work.
            </em>
          </h2>
          <ol className="mt-16 border-t border-[var(--color-rule)]">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="grid gap-6 border-b border-[var(--color-rule)] py-10 md:grid-cols-12 md:gap-10"
              >
                <span className={`${label} text-[var(--color-accent)] md:col-span-1`}>0{i + 1}</span>
                <h3 className="[font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] leading-tight tracking-[var(--tracking-display-lg)] md:col-span-4">
                  {p.title}
                </h3>
                <p className="text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)] md:col-span-6">
                  {p.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[var(--color-inverse-bg)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-inverse-ink)]">
        <div className={wrap}>
          <h2 className={`${h2} max-w-4xl`}>
            Want to see what we would{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              change first?
            </em>
          </h2>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[var(--color-inverse-ink)] px-8 py-4 font-semibold text-[var(--color-inverse-bg)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]"
            >
              Get a free store review <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/portfolio"
              className="border-b border-current pb-1 font-semibold transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
