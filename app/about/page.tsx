import type { Metadata } from "next";
import Link from "next/link";

const title = "About Zyrus Digital";
const description =
  "Zyrus Digital is a Karachi agency that builds, launches and grows Shopify and WooCommerce stores. Here is who we are, what we are working toward, and how we work.";

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
const cta =
  "inline-flex items-center gap-3 bg-[var(--color-inverse-ink)] px-8 py-4 font-semibold text-[var(--color-inverse-bg)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]";

const principles = [
  {
    title: "Performance comes first",
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
      {/* Hero */}
      <section className="px-[var(--gutter)] pb-[var(--section-y)] pt-40">
        <div className={wrap}>
          <p className={`${label} text-[var(--color-accent)]`}>About</p>
          <h1 className="mt-8 max-w-5xl [font-family:var(--font-display)] [font-size:var(--text-3xl)] [font-weight:var(--weight-display)] leading-[var(--leading-tight)] tracking-[var(--tracking-display-xl)]">
            The team behind stores that{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              load fast and sell.
            </em>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className={`${section} pt-0`}>
        <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
          <div className="lg:col-span-4">
            <p className={`${label} text-[var(--color-accent)]`}>Introduction</p>
          </div>
          <div className="space-y-6 text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)] lg:col-span-7 lg:col-start-6">
            <p>
              Zyrus Digital is a digital agency based in Karachi. We build Shopify and WooCommerce stores, launch them
              properly, and grow them through search, social and paid channels.
            </p>
            <p>
              The same team handles the build and the marketing, so nothing is lost between a developer and a marketer.
              We work with ecommerce brands in Pakistan and beyond, and we build for local markets, local customers and
              local payment habits from the first day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={`${section} bg-[var(--color-inverse-bg)] text-[var(--color-inverse-ink)]`}>
        <div className={wrap}>
          <p className={`${label} text-[var(--color-accent)]`}>Our mission</p>
          <h2 className={`${h2} mt-8 max-w-5xl`}>
            Make every store faster, clearer and easier to sell from.{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              Then stay accountable for the results.
            </em>
          </h2>
          <p className="mt-10 max-w-2xl text-[length:var(--text-md)] leading-[1.5] opacity-80">
            A store that loads slowly or confuses a buyer loses sales before any marketing can help. Our job is to
            remove those problems at the start, and to keep watching the numbers after launch.
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
            <Link href="/contact" className={cta}>
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
