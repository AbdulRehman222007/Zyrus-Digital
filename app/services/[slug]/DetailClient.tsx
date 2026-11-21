import Image from "next/image";
import Link from "next/link";
import type { Pillar } from "../data";

const label =
  "font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)]";
const h2 =
  "[font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]";
const section = "px-[var(--gutter)] py-[var(--section-y)]";
const wrap = "mx-auto max-w-[90rem]";
const cta =
  "inline-flex items-center gap-3 bg-[var(--color-inverse-bg)] px-8 py-4 font-semibold text-[var(--color-inverse-ink)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]";

type Props = { pillar: Pillar; others: Pillar[]; total: number };

export default function DetailClient({ pillar: p, others, total }: Props) {
  const cs = p.caseStudy;

  return (
    <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
      {/* Hero */}
      <section className="px-[var(--gutter)] pb-[var(--section-y)] pt-40">
        <div className={wrap}>
          <p className={`${label} text-[var(--color-accent)]`}>
            {p.index} / 0{total}
          </p>
          <h1 className="mt-8 max-w-5xl [font-family:var(--font-display)] [font-size:var(--text-3xl)] [font-weight:var(--weight-display)] leading-[var(--leading-tight)] tracking-[var(--tracking-display-xl)]">
            {p.heroTitle}{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              {p.heroItalic}
            </em>
          </h1>
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-end">
            <p className="max-w-xl text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)] lg:col-span-6">
              {p.heroText}
            </p>
            <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              <Link href="/contact" className={cta}>
                Get a free store review <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem and solution */}
      <section className={section}>
        <div className={`${wrap} grid gap-16 lg:grid-cols-2`}>
          <div>
            <p className={`${label} text-[var(--color-mute)]`}>The problem</p>
            <h2 className={`${h2} mt-6`}>{p.problem.title}</h2>
            <ul className="mt-10 border-t border-[var(--color-rule)]">
              {p.problem.points.map((x) => (
                <li
                  key={x}
                  className="border-b border-[var(--color-rule)] py-4 text-[length:var(--text-base)] text-[var(--color-ink-soft)]"
                >
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`${label} text-[var(--color-accent)]`}>What we do</p>
            <h2 className={`${h2} mt-6`}>{p.solution.title}</h2>
            <ul className="mt-10 border-t border-[var(--color-rule)]">
              {p.solution.points.map((x) => (
                <li
                  key={x}
                  className="border-b border-[var(--color-rule)] py-4 text-[length:var(--text-base)]"
                >
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className={`${section} bg-[var(--color-inverse-bg)] text-[var(--color-inverse-ink)]`}>
        <div className={wrap}>
          <p className={`${label} text-[var(--color-accent)]`}>Scope</p>
          <h2 className={`${h2} mt-6`}>
            What is{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              included.
            </em>
          </h2>
          <ol className="mt-16 grid gap-x-16 md:grid-cols-2">
            {p.included.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-current/20 py-10"
              >
                <span className={`${label} pt-1 text-[var(--color-accent)]`}>0{i + 1}</span>
                <div>
                  <h3 className="[font-family:var(--font-display)] [font-size:var(--text-md)] [font-weight:var(--weight-display-sub)] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[length:var(--text-base)] leading-[1.5] opacity-75">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className={section}>
        <div className={wrap}>
          <p className={`${label} text-[var(--color-accent)]`}>How it runs</p>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {p.process.map((s, i) => (
              <li key={s.title} className="border-t border-[var(--color-rule-strong)] pt-6">
                <p className={`${label} text-[var(--color-mute)]`}>{s.time ?? `Step 0${i + 1}`}</p>
                <h3 className="mt-4 [font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] leading-none tracking-[var(--tracking-display-lg)]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)]">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case study */}
      {cs && (
        <section className={`${section} bg-[var(--color-paper-raised)]`}>
          <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-5">
              <p className={`${label} text-[var(--color-accent)]`}>Case study</p>
              <h2 className={`${h2} mt-6`}>{cs.client}</h2>
              <p className={`${label} mt-6 text-[var(--color-mute)]`}>{cs.label}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]">
                {cs.text}
              </p>
              {cs.stats && (
                <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-[var(--color-rule)] pt-8">
                  {cs.stats.map((s) => (
                    <div key={s.label}>
                      <dd className="m-0 [font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] tracking-[var(--tracking-display-xl)] tabular-nums">
                        {s.value}
                      </dd>
                      <dt className={`${label} mt-2 text-[var(--color-mute)]`}>{s.label}</dt>
                    </div>
                  ))}
                </dl>
              )}
              {cs.href && (
                <a
                  href={cs.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-flex items-center gap-2 border-b border-current pb-1 font-semibold transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  Visit the live site <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className={section}>
        <div className={`${wrap} grid gap-16 lg:grid-cols-12`}>
          <h2 className={`${h2} lg:col-span-4`}>
            Common{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              questions.
            </em>
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            {p.faqs.map((f) => (
              <details key={f.q} className="group border-t border-[var(--color-rule)] py-7 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [font-family:var(--font-display)] [font-size:var(--text-md)] [font-weight:var(--weight-display-sub)] leading-tight [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="font-[family-name:var(--font-mono)] text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-xl text-[length:var(--text-base)] leading-[1.6] text-[var(--color-ink-soft)]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[var(--color-inverse-bg)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-inverse-ink)]">
        <div className={wrap}>
          <h2 className={`${h2} max-w-4xl`}>{p.ctaTitle}</h2>
          <div className="mt-12">
            <Link href="/contact" className={cta}>
              Get a free store review <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="px-[var(--gutter)] py-16">
        <div className={`${wrap} grid gap-6 md:grid-cols-2`}>
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="group flex items-center justify-between border-t border-[var(--color-rule)] py-8"
            >
              <span className="[font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] leading-none transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                {o.name}
              </span>
              <span aria-hidden="true" className="text-[var(--color-accent)]">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
