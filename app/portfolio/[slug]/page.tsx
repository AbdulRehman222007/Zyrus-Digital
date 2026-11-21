// app/portfolio/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "../data";

const live = projects.filter((p) => p.caseStudy);

export function generateStaticParams() {
  return live.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = live.find((x) => x.slug === slug);
  if (!p?.caseStudy) return {};
  return {
    title: `${p.client} case study | Zyrus Digital`,
    description: `${p.caseStudy.summary} ${p.caseStudy.platform} project for a ${p.industry.toLowerCase()} brand.`,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const label =
  "font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)]";
const eyebrow = `${label} text-[var(--color-accent)]`;
const wrap = "mx-auto max-w-[90rem] px-[var(--gutter)]";
const section = "py-[var(--section-y)]";
const rule = "border-t border-[var(--color-rule)] pt-6";
const sectionNum = `${label} text-[var(--color-accent)]`;
const sectionHead =
  "mt-4 [font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] leading-none tracking-[var(--tracking-display-lg)]";
const body = "text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]";
const cta =
  "inline-flex items-center gap-3 bg-[var(--color-inverse-ink)] px-8 py-4 font-semibold text-[var(--color-inverse-bg)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = live.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();

  const p = live[index];
  const cs = p.caseStudy!;
  const next = live[(index + 1) % live.length];
  const hasNext = next.slug !== p.slug;

  const total = live.length;
  const position = index + 1;
  const nextPosition = ((index + 1) % total) + 1;
  const results = cs.results ?? [];
  const hasResults = results.length > 0;
  const hasQuote = Boolean(cs.quote);
  const hasMobile = Boolean(p.imageMobile);
  const hasLiveLink = Boolean(p.href);

  const snapshotCols = cs.snapshot.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  const resultsCols =
    results.length === 1
      ? "md:grid-cols-1"
      : results.length === 2
        ? "md:grid-cols-2"
        : results.length === 3
          ? "md:grid-cols-3"
          : "md:grid-cols-4";

  return (
    <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
      {/* CSS-only scroll reveal. Progressive enhancement, off under reduced motion. */}
      <style>{`
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .reveal {
              animation: reveal-up linear both;
              animation-timeline: view();
              animation-range: entry 0% entry 55%;
            }
            @keyframes reveal-up {
              from { opacity: 0; transform: translateY(28px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          }
        }
      `}</style>

      {/* Hero */}
      <section className={`${wrap} pb-[var(--section-y)] pt-40`}>
        <div className="flex items-center justify-between">
          <Link
            href="/portfolio"
            className={`${label} transition-colors duration-300 hover:text-[var(--color-accent)]`}
          >
            ← Portfolio
          </Link>
          <span className={`${label} tabular-nums text-[var(--color-mute)]`}>
            {pad(position)} / {pad(total)}
          </span>
        </div>

        <p className={`mt-16 md:mt-24 ${eyebrow}`}>
          {p.industry} · {cs.platform} · {cs.year}
        </p>

        <h1 className="mt-6 max-w-6xl [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
          {cs.headline}
        </h1>

        <div className="mt-14 flex flex-col gap-6 border-t border-[var(--color-rule)] pt-6 md:mt-16 md:flex-row md:items-center md:justify-between md:gap-10">
          <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${label} text-[var(--color-ink-soft)]`}>
            {cs.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          {hasLiveLink && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-3 ${label}`}
            >
              <span className="border-b border-current pb-1 transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                Visit live site
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          )}
        </div>
      </section>

      {/* Hero image */}
      <section className={wrap}>
        <figure className="reveal">
          <Image
            src={p.image}
            alt={`${p.client} website on desktop`}
            width={1920}
            height={1200}
            priority
            quality={85}
            sizes="(min-width: 1440px) 1320px, (min-width: 768px) 90vw, 100vw"
            className="h-auto w-full border border-[var(--color-rule)]"
          />
          <figcaption className={`mt-4 ${label} text-[var(--color-mute)]`}>
            Fig. 01: {p.client} homepage
          </figcaption>
        </figure>
      </section>

      {/* Snapshot */}
      <section className={`${wrap} py-16 md:py-28`}>
        <dl
          className={`reveal grid gap-y-10 border-y border-[var(--color-rule)] py-10 md:gap-y-0 md:divide-x md:divide-[var(--color-rule)] md:py-14 ${snapshotCols}`}
        >
          {cs.snapshot.map((s, i) => (
            <div
              key={s.label}
              className={[
                "md:px-10",
                i === 0 ? "md:pl-0" : "",
                i === cs.snapshot.length - 1 ? "md:pr-0" : "",
              ].join(" ")}
            >
              <dd className="m-0 [font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] tracking-[var(--tracking-display-xl)] tabular-nums text-[var(--color-accent)]">
                {s.value}
              </dd>
              <dt className={`mt-3 ${label} text-[var(--color-mute)]`}>{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Brief and challenge */}
      <section className={`${wrap} pb-16 md:pb-28`}>
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div className="reveal">
            <div className={rule}>
              <span className={sectionNum}>01</span>
              <h2 className={sectionHead}>The brief</h2>
            </div>
            <p className={`mt-8 ${body}`}>{cs.brief}</p>
          </div>

          <div className="reveal">
            <div className={rule}>
              <span className={sectionNum}>02</span>
              <h2 className={sectionHead}>The challenge</h2>
            </div>
            <p className={`mt-8 ${body}`}>{cs.challenge}</p>
          </div>
        </div>
      </section>

      {/* What we built */}
      <section className={`${section} bg-[var(--color-paper-raised)]`}>
        <div className={wrap}>
          <div className={rule}>
            <span className={sectionNum}>03</span>
            <h2 className={sectionHead}>What we built</h2>
          </div>

          <div className="mt-12 divide-y divide-[var(--color-rule)]">
            {cs.built.map((b, i) => (
              <article
                key={b.title}
                className="reveal grid gap-3 py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <p className={`${sectionNum} md:col-span-2 md:pt-1`}>{pad(i + 1)}</p>
                <h3 className="[font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] leading-tight tracking-[var(--tracking-display-lg)] md:col-span-4">
                  {b.title}
                </h3>
                <p className="text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)] md:col-span-6">
                  {b.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results: only metrics that are in the data with a source */}
      {hasResults && (
        <section className={`${wrap} py-16 md:py-28`}>
          <div className={rule}>
            <span className={sectionNum}>04</span>
            <h2 className={sectionHead}>Results</h2>
          </div>

          <div
            className={`reveal mt-12 grid gap-y-12 md:gap-y-0 md:divide-x md:divide-[var(--color-rule)] ${resultsCols}`}
          >
            {results.map((r, i) => (
              <div
                key={r.label}
                className={[
                  "md:px-10",
                  i === 0 ? "md:pl-0" : "",
                  i === results.length - 1 ? "md:pr-0" : "",
                ].join(" ")}
              >
                <p className={`${label} text-[var(--color-mute)]`}>{r.label}</p>
                <p className="mt-4 flex flex-wrap items-baseline gap-3 [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] tracking-[var(--tracking-display-xl)] tabular-nums md:mt-5">
                  {r.before && (
                    <span className="[font-size:var(--text-md)] font-normal text-[var(--color-mute)] line-through">
                      {r.before}
                    </span>
                  )}
                  <span className="text-[var(--color-accent)]">{r.after}</span>
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-xl text-[length:var(--text-xs)] leading-relaxed text-[var(--color-mute)]">
            Lighthouse scores measured with PageSpeed Insights, desktop, October 2026.
          </p>
        </section>
      )}

      {/* Quote: only when the client has approved it */}
      {hasQuote && cs.quote && (
        <section className="border-y border-[var(--color-rule)]">
          <div className="reveal mx-auto max-w-4xl px-[var(--gutter)] py-16 text-center md:py-28">
            <p className="[font-family:var(--font-body)] [font-size:var(--text-lg)] italic leading-[1.25]">
              “{cs.quote.text}”
            </p>
            <p className={`mt-8 ${label} text-[var(--color-accent)]`}>
              {cs.quote.name}, {cs.quote.role}
            </p>
          </div>
        </section>
      )}

      {/* Mobile and stack */}
      <section className={`${wrap} py-16 md:py-28`}>
        <div className="grid items-start gap-14 md:grid-cols-12 md:gap-20">
          {hasMobile && (
            <figure className="reveal md:col-span-5">
              <div className="mx-auto max-w-[300px] md:max-w-[320px]">
                <Image
                  src={p.imageMobile!}
                  alt={`${p.client} website on mobile`}
                  width={390}
                  height={844}
                  quality={80}
                  sizes="(min-width: 768px) 320px, 300px"
                  className="h-auto w-full border border-[var(--color-rule)]"
                />
              </div>
              <figcaption className={`mt-4 text-center md:text-left ${label} text-[var(--color-mute)]`}>
                Fig. 02: Mobile
              </figcaption>
            </figure>
          )}

          <div className={`reveal ${hasMobile ? "md:col-span-7" : "md:col-span-12"}`}>
            <div className={rule}>
              <span className={sectionNum}>05</span>
              <h2 className={sectionHead}>Stack</h2>
            </div>

            <ul className="mt-8 divide-y divide-[var(--color-rule)] border-b border-[var(--color-rule)]">
              {cs.stack.map((t, i) => (
                <li key={t} className="flex items-baseline justify-between gap-6 py-5">
                  <span className="[font-family:var(--font-display)] [font-size:var(--text-md)] [font-weight:var(--weight-display-sub)]">
                    {t}
                  </span>
                  <span className={`${label} tabular-nums text-[var(--color-accent)]`}>{pad(i + 1)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next case study and closing CTA */}
      <section className={`${section} bg-[var(--color-inverse-bg)] text-[var(--color-inverse-ink)]`}>
        <div className={wrap}>
          {hasNext && (
            <>
              <div className="flex items-baseline justify-between border-b border-current/20 pb-6">
                <span className={`${label} text-[var(--color-accent)]`}>Next case study</span>
                <span className={`${label} tabular-nums opacity-70`}>
                  {pad(nextPosition)} / {pad(total)}
                </span>
              </div>

              <Link href={`/portfolio/${next.slug}`} className="group mt-12 block md:mt-16">
                <p className={`${label} opacity-70`}>{next.industry}</p>
                <h2 className="mt-4 [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  {next.client}
                  <span
                    aria-hidden="true"
                    className="ml-4 inline-block transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </h2>
              </Link>
            </>
          )}

          <div className={`${hasNext ? "mt-20 md:mt-32" : ""} border-t border-current/20 pt-12 md:pt-16`}>
            <div className="grid gap-10 md:grid-cols-2 md:items-end">
              <h2 className="max-w-xl [font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
                Have a store to build or fix?
              </h2>
              <div className="md:justify-self-end">
                <Link href="/contact" className={cta}>
                  Get a free store review <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
