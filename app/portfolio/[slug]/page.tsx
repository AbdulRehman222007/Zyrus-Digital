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

// In Next 15+ params is a Promise. On Next 14, use `{ params }: { params: { slug: string } }` without await.
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

    const pad = (n: number) => String(n).padStart(2, "0");

    const snapshotCols =
        cs.snapshot.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3";
    const resultsCols =
        results.length === 1
            ? "md:grid-cols-1"
            : results.length === 2
                ? "md:grid-cols-2"
                : results.length === 3
                    ? "md:grid-cols-3"
                    : "md:grid-cols-4";

    // Shared type scale --------------------------------------------------
    // Eyebrow numbers (01–05): the section index marks.
    const eyebrowNum =
        "text-base font-bold tabular-nums tracking-[0.15em] text-[#8b5a3c] md:text-lg";
    // Small meta labels (nav, category, stat labels, captions, etc.)
    const metaLabel =
        "text-xs font-semibold uppercase tracking-[0.2em] md:text-sm";
    const metaLabelBrown = `${metaLabel} text-[#8b5a3c]`;
    const metaLabelDark = `${metaLabel} text-[#2f221e]/80`;
    const metaLabelMuted = `${metaLabel} text-[#2f221e]/70`;
    // Section heading (The brief, What we built, Results, Stack).
    const sectionHeading =
        "mt-4 text-2xl font-bold tracking-[-0.01em] md:text-4xl";

    return (
        <main className="bg-[#fdf3e7] text-[#2f221e] antialiased">
            {/* CSS-only scroll reveal. Progressive enhancement — no JS, no layout cost. */}
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

            {/* ───────────── Hero ───────────── */}
            <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-40">
                <div
                    className={`flex items-center justify-between ${metaLabelBrown}`}
                >
                    <Link href="/portfolio" className="transition-opacity hover:opacity-60">
                        ← Portfolio
                    </Link>
                    <span className="tabular-nums">
                        {pad(position)} / {pad(total)}
                    </span>
                </div>

                <p className={`mt-14 md:mt-24 ${metaLabelBrown}`}>
                    {p.industry} · {cs.platform} · {cs.year}
                </p>

                <h1 className="mt-5 max-w-5xl text-[clamp(2.25rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.02em]">
                    {cs.headline}
                </h1>

                <div className="mt-12 flex flex-col gap-6 border-t border-[#2f221e]/20 pt-6 md:mt-16 md:flex-row md:items-center md:justify-between md:gap-10">
                    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${metaLabelDark}`}>
                        {cs.services.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>

                    {hasLiveLink && (
                        <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group inline-flex items-center gap-3 text-[#2f221e] ${metaLabel}`}
                        >
                            <span className="border-b border-[#2f221e]/40 pb-1 transition-colors group-hover:border-[#2f221e]">
                                Visit live site
                            </span>
                            <span
                                aria-hidden
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                ↗
                            </span>
                        </a>
                    )}
                </div>
            </section>

            {/* ───────────── Hero image ───────────── */}
            <section className="mx-auto max-w-[1400px] px-6 md:px-10">
                <figure className="reveal">
                    <Image
                        src={p.image}
                        alt={`${p.client} website on desktop`}
                        width={1920}
                        height={1200}
                        priority
                        quality={85}
                        sizes="(min-width: 1440px) 1320px, (min-width: 768px) 90vw, 100vw"
                        className="h-auto w-full rounded-2xl ring-1 ring-[#2f221e]/10 md:rounded-3xl"
                    />
                    <figcaption className={`mt-4 ${metaLabelBrown}`}>
                        Fig. 01 — {p.client} homepage
                    </figcaption>
                </figure>
            </section>

            {/* ───────────── Snapshot ───────────── */}
            <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-28">
                <dl
                    className={`reveal grid gap-y-10 border-y border-[#2f221e]/20 py-10 md:gap-y-0 md:divide-x md:divide-[#2f221e]/20 md:py-14 ${snapshotCols}`}
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
                            <dd className="text-4xl font-bold tracking-tight text-[#8b5a3c] md:text-5xl">
                                {s.value}
                            </dd>
                            <dt className={`mt-3 ${metaLabelMuted}`}>{s.label}</dt>
                        </div>
                    ))}
                </dl>
            </section>

            {/* ───────────── Brief + Challenge ───────────── */}
            <section className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10 md:pb-28">
                <div className="grid gap-14 md:grid-cols-2 md:gap-20">
                    <div className="reveal">
                        <div className="border-t border-[#2f221e]/20 pt-6">
                            <span className={eyebrowNum}>01</span>
                            <h2 className={sectionHeading}>The brief</h2>
                        </div>
                        <p className="mt-8 text-xl leading-[1.45] tracking-[-0.005em] md:text-2xl">
                            {cs.brief}
                        </p>
                    </div>

                    <div className="reveal">
                        <div className="border-t border-[#2f221e]/20 pt-6">
                            <span className={eyebrowNum}>02</span>
                            <h2 className={sectionHeading}>The challenge</h2>
                        </div>
                        <p className="mt-8 text-xl leading-[1.45] tracking-[-0.005em] md:text-2xl">
                            {cs.challenge}
                        </p>
                    </div>
                </div>
            </section>

            {/* ───────────── What we built ───────────── */}
            <section className="bg-[#e9d8c0] py-16 md:py-28">
                <div className="mx-auto max-w-[1400px] px-6 md:px-10">
                    <div className="border-t border-[#2f221e]/25 pt-6">
                        <span className={eyebrowNum}>03</span>
                        <h2 className={sectionHeading}>What we built</h2>
                    </div>

                    <div className="mt-12 divide-y divide-[#2f221e]/20">
                        {cs.built.map((b, i) => (
                            <article
                                key={b.title}
                                className="reveal grid gap-3 py-10 md:grid-cols-12 md:gap-10 md:py-14"
                            >
                                <p className={`${eyebrowNum} md:col-span-2 md:pt-1`}>
                                    {pad(i + 1)}
                                </p>
                                <h3 className="text-2xl font-bold leading-[1.15] tracking-[-0.01em] md:col-span-4 md:text-3xl">
                                    {b.title}
                                </h3>
                                <p className="text-base leading-relaxed text-[#2f221e]/80 md:col-span-6 md:text-lg">
                                    {b.body}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────────── Results (only if provable) ───────────── */}
            {hasResults && (
                <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-28">
                    <div className="border-t border-[#2f221e]/20 pt-6">
                        <span className={eyebrowNum}>04</span>
                        <h2 className={sectionHeading}>Results</h2>
                    </div>

                    <div
                        className={`reveal mt-12 grid gap-y-12 md:gap-y-0 md:divide-x md:divide-[#2f221e]/20 ${resultsCols}`}
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
                                <p className={metaLabelBrown}>{r.label}</p>
                                <p className="mt-4 flex flex-wrap items-baseline gap-3 text-5xl font-bold tracking-tight md:mt-5 md:text-6xl">
                                    {r.before && (
                                        <span className="text-2xl font-medium text-[#2f221e]/35 line-through md:text-3xl">
                                            {r.before}
                                        </span>
                                    )}
                                    <span>{r.after}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 max-w-xl text-xs leading-relaxed text-[#2f221e]/55 md:text-sm">
                        Lighthouse scores via PageSpeed Insights, desktop profile — October 2026.
                    </p>
                </section>
            )}

            {/* ───────────── Quote (only if approved) ───────────── */}
            {hasQuote && cs.quote && (
                <section className="border-y border-[#2f221e]/20">
                    <div className="reveal mx-auto max-w-4xl px-6 py-16 text-center md:py-28">
                        <p className="text-2xl font-medium leading-[1.35] tracking-[-0.01em] md:text-4xl">
                            “{cs.quote.text}”
                        </p>
                        <p className={`mt-8 ${metaLabelBrown}`}>
                            {cs.quote.name} — {cs.quote.role}
                        </p>
                    </div>
                </section>
            )}

            {/* ───────────── Mobile + Stack ───────────── */}
            <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-28">
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
                                    className="h-auto w-full rounded-[2rem] ring-1 ring-[#2f221e]/10"
                                />
                            </div>
                            <figcaption
                                className={`mt-4 text-center md:text-left ${metaLabelBrown}`}
                            >
                                Fig. 02 — Mobile
                            </figcaption>
                        </figure>
                    )}

                    <div
                        className={`reveal ${hasMobile ? "md:col-span-7" : "md:col-span-12"}`}
                    >
                        <div className="border-t border-[#2f221e]/20 pt-6">
                            <span className={eyebrowNum}>05</span>
                            <h2 className={sectionHeading}>Stack</h2>
                        </div>

                        <ul className="mt-8 divide-y divide-[#2f221e]/20 border-b border-[#2f221e]/20">
                            {cs.stack.map((t, i) => (
                                <li
                                    key={t}
                                    className="flex items-baseline justify-between gap-6 py-5"
                                >
                                    <span className="text-lg font-medium md:text-xl">{t}</span>
                                    <span
                                        className={`tabular-nums text-[#8b5a3c] ${metaLabel}`}
                                    >
                                        {pad(i + 1)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ───────────── Next + CTA ───────────── */}
            <section className="bg-[#2f221e] text-[#fdf3e7]">
                <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-28">
                    {hasNext && (
                        <>
                            <div className="flex items-baseline justify-between border-b border-[#fdf3e7]/20 pb-6">
                                <span className={`text-[#e9d8c0] ${metaLabel}`}>
                                    Next case study
                                </span>
                                <span className={`tabular-nums text-[#e9d8c0] ${metaLabel}`}>
                                    {pad(nextPosition)} / {pad(total)}
                                </span>
                            </div>

                            <Link
                                href={`/portfolio/${next.slug}`}
                                className="group mt-12 block md:mt-16"
                            >
                                <p className={`text-[#e9d8c0] ${metaLabel}`}>{next.industry}</p>
                                <h2 className="mt-4 text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.98] tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#e9d8c0]">
                                    {next.client}
                                    <span
                                        aria-hidden
                                        className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2 md:ml-4"
                                    >
                                        →
                                    </span>
                                </h2>
                            </Link>
                        </>
                    )}

                    <div
                        className={[
                            hasNext ? "mt-20 md:mt-32" : "",
                            "border-t border-[#fdf3e7]/20 pt-12 md:pt-16",
                        ].join(" ")}
                    >
                        <div className="grid gap-10 md:grid-cols-2 md:items-end">
                            <h2 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.01em] md:text-5xl">
                                Have a store to build or fix?
                            </h2>

                            <div className="md:justify-self-end">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#8b5a3c] px-6 py-4 font-bold uppercase tracking-[0.15em] text-[#fdf3e7] transition-colors duration-300 hover:bg-[#a06a48] text-xs md:px-7 md:text-sm"
                                >
                                    Get a free store review
                                    <span
                                        aria-hidden
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}