import Link from "next/link";
import { pillars } from "./data";

const why = [
  {
    title: "Conversion first development",
    text: "Every layout decision is judged by one question: does it help a visitor buy?",
  },
  {
    title: "Design led by data",
    text: "We start with an audit of your store and numbers, then design around what the data shows.",
  },
  {
    title: "Clear communication",
    text: "Clear timelines, direct access to the person doing the work, and no jargon.",
  },
];

const label =
  "font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)]";

export default function ServicesClient() {
  return (
    <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
      {/* Intro */}
      <section className="px-[var(--gutter)] pb-[var(--section-y)] pt-40">
        <div className="mx-auto max-w-[90rem]">
          <p className={`${label} text-[var(--color-accent)]`}>Services</p>
          <h1 className="mt-8 max-w-5xl [font-family:var(--font-display)] [font-size:var(--text-3xl)] [font-weight:var(--weight-display)] leading-[var(--leading-tight)] tracking-[var(--tracking-display-xl)]">
            Ecommerce solutions engineered for{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              scale.
            </em>
          </h1>
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-end">
            <p className="max-w-xl text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)] lg:col-span-7">
              Zyrus Digital is a digital marketing and web development agency. We build stores that load fast and convert, launch them properly, then help them grow through search, social and paid channels.
            </p>
            <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[var(--color-inverse-bg)] px-8 py-4 font-semibold text-[var(--color-inverse-ink)] transition-colors duration-300 hover:bg-[var(--color-accent)]"
              >
                Get a free store review <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars as an editorial sequence */}
      <section className="px-[var(--gutter)] pb-[var(--section-y)]">
        <ol className="mx-auto max-w-[90rem] border-t border-[var(--color-rule)]">
          {pillars.map((p) => (
            <li
              key={p.slug}
              className="grid gap-10 border-b border-[var(--color-rule)] py-16 lg:grid-cols-12 lg:gap-10 lg:py-24"
            >
              <span className="[font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-none text-[var(--color-accent)] lg:col-span-2">
                {p.index}
              </span>

              <div className="lg:col-span-5">
                <h2 className="[font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] leading-none tracking-[var(--tracking-display-lg)]">
                  {p.name}
                </h2>
                <p className={`${label} mt-6 text-[var(--color-accent)]`}>{p.tagline}</p>
                <p className="mt-6 max-w-md text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]">
                  {p.heroText}
                </p>
                <Link
                  href={`/services/${p.slug}`}
                  className="mt-10 inline-flex items-center gap-2 border-b border-current pb-1 font-semibold transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  Explore {p.name} <span aria-hidden="true">→</span>
                </Link>
              </div>

              <ul className="lg:col-span-5 lg:self-end">
                {p.included.slice(0, 4).map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-[var(--color-rule)] py-4 text-[length:var(--text-base)] text-[var(--color-ink-soft)]"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Zyrus */}
      <section className="px-[var(--gutter)] pb-[var(--section-y)]">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="[font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
            Why{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              Zyrus?
            </em>
          </h2>
          <ol className="mt-16 border-t border-[var(--color-rule)]">
            {why.map((w, i) => (
              <li
                key={w.title}
                className="grid gap-6 border-b border-[var(--color-rule)] py-10 md:grid-cols-12 md:gap-10"
              >
                <span className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--color-accent)] md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="[font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] leading-tight tracking-[var(--tracking-display-lg)] md:col-span-4">
                  {w.title}
                </h3>
                <p className="text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)] md:col-span-6">
                  {w.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[var(--color-inverse-bg)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-inverse-ink)]">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="max-w-4xl [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
            Not sure which service you{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              need?
            </em>
          </h2>
          <p className="mt-8 max-w-xl text-[length:var(--text-md)] leading-[1.5] opacity-80">
            Tell us about your store and we will point you to what will improve results first.
          </p>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[var(--color-inverse-ink)] px-8 py-4 font-semibold text-[var(--color-inverse-bg)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]"
            >
              Let us talk <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
