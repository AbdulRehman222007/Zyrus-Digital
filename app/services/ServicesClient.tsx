// app/services/ServicesClient.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  CurtainImage,
  FadeUp,
  Magnetic,
  MaskLine,
  Marquee,
  MotionConfig,
  ParallaxImage,
  ProgressBar,
  WARM,
  ease,
  motion,
  useIsDesktop,
  useReducedMotion,
  useScroll,
  useTransform,
} from "../components/motion";
import { pillars, type Pillar } from "./data";

const tools = ["Shopify", "WooCommerce", "WordPress", "Elementor", "Meta Ads", "Google Analytics", "Klaviyo"];

const why = [
  { title: "Conversion first development", text: "Every layout decision is judged by one question: does it help a visitor buy?" },
  { title: "Design led by data", text: "We start with an audit of your store and numbers, then design around what the data shows." },
  { title: "Transparent communication", text: "Clear timelines, direct access to the person doing the work, and no jargon." },
];

const THEMES = [
  {
    card: "bg-[#FFF5E8] border border-[#D9B48F]",
    text: "text-[#33241F]",
    muted: "text-[#33241F]/70",
    accent: "text-[#8A5A3B]",
    tick: "bg-[#8A5A3B]/10 text-[#8A5A3B]",
    btn: "bg-[#33241F] text-[#FFF5E8] hover:bg-[#8A5A3B]",
  },
  {
    card: "bg-[#8A5A3B]",
    text: "text-[#FFF5E8]",
    muted: "text-[#FFF5E8]/80",
    accent: "text-[#EAD8C0]",
    tick: "bg-[#FFF5E8]/15 text-[#FFF5E8]",
    btn: "bg-[#FFF5E8] text-[#33241F] hover:bg-[#33241F] hover:text-[#FFF5E8]",
  },
  {
    card: "bg-[#33241F]",
    text: "text-[#FFF5E8]",
    muted: "text-[#EAD8C0]/80",
    accent: "text-[#D9B48F]",
    tick: "bg-[#D9B48F]/15 text-[#D9B48F]",
    btn: "bg-[#D9B48F] text-[#33241F] hover:bg-[#FFF5E8]",
  },
];

/** One pillar card. On desktop the cards pin and stack over each other as you scroll. */
function StackCard({ p, i, total }: { p: Pillar; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const t = THEMES[i % THEMES.length];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, i === total - 1 ? 1 : 0.92]);

  return (
    <div ref={ref} className="mb-6 md:mb-0 md:h-[125vh]">
      <div
        className="md:sticky md:top-[var(--t)]"
        style={{ ["--t" as string]: `${96 + i * 20}px` }}
      >
        <motion.article
          style={desktop && !reduce ? { scale, transformOrigin: "top center" } : undefined}
          className={`grid overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(51,36,31,0.5)] md:grid-cols-2 ${t.card}`}
        >
          <ParallaxImage
            src={p.image}
            alt={p.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
            fallback={p.name}
            imgClassName={WARM}
            className="aspect-[4/3] md:aspect-auto md:min-h-[26rem]"
          />

          <div className="flex flex-col p-8 md:p-12">
            <span className={`font-serif text-5xl italic leading-none ${t.accent}`}>{p.index}</span>
            <h2 className={`mt-6 text-4xl font-semibold tracking-[-0.03em] md:text-5xl ${t.text}`}>{p.name}</h2>
            <p className={`mt-3 text-[11px] font-bold uppercase tracking-[0.2em] ${t.accent}`}>{p.tagline}</p>
            <p className={`mt-5 max-w-md text-[15px] leading-relaxed ${t.muted}`}>{p.heroText}</p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {p.included.slice(0, 3).map((item) => (
                <li key={item.title} className={`flex items-start gap-3 text-[14px] font-medium ${t.text}`}>
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.tick}`}>
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item.title}
                </li>
              ))}
            </ul>

            <div className="mt-8 md:mt-auto md:pt-8">
              <Magnetic>
                <Link
                  href={`/services/${p.slug}`}
                  className={`group inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${t.btn}`}
                >
                  Explore {p.name}
                  <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export default function ServicesClient() {
  const stripRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: stripRef, offset: ["start end", "end start"] });
  // Three columns drift at different speeds for depth.
  const y1 = useTransform(scrollYProgress, [0, 1], ["6%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-4%", "12%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["10%", "-6%"]);
  const cols = [
    { y: y1, p: pillars[0], offset: "" },
    { y: y2, p: pillars[1], offset: "md:mt-14" },
    { y: y3, p: pillars[2], offset: "" },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <ProgressBar />

      <main>
        {/* Hero with a three column image strip that drifts at different speeds */}
        <section className="relative isolate overflow-hidden bg-[#FFF5E8] pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="pointer-events-none absolute -right-40 -top-40 hidden h-[38rem] w-[38rem] rounded-full bg-[#D9B48F]/40 blur-[130px] md:block" />
          <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
            <FadeUp>
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8A5A3B]">
                <span className="h-px w-8 bg-[#8A5A3B]" /> Our services
              </p>
            </FadeUp>

            <h1 className="mt-8 text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.035em] text-[#33241F] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              <MaskLine>Ecommerce solutions</MaskLine>
              <MaskLine delay={0.08}>engineered for</MaskLine>
              <MaskLine delay={0.16}>
                <span className="font-serif font-normal italic text-[#8A5A3B]">scale.</span>
              </MaskLine>
            </h1>

            <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <FadeUp delay={0.2} className="lg:col-span-6">
                <p className="max-w-xl text-[15px] leading-relaxed text-[#33241F]/70 md:text-base">
                  Zyrus Digital is a digital marketing and web development agency. We build stores that load
                  fast and convert, launch them properly, then help them grow through search, social and paid
                  channels.
                </p>
              </FadeUp>
              <FadeUp delay={0.3} className="lg:col-span-6 lg:flex lg:justify-end">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#33241F] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFF5E8] transition-colors duration-500 hover:bg-[#8A5A3B]"
                  >
                    Get a free store review
                    <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </Magnetic>
              </FadeUp>
            </div>

            <div ref={stripRef} className="mt-16 grid grid-cols-3 gap-3 md:mt-20 md:gap-6">
              {cols.map((c, i) => (
                <motion.div key={c.p.slug} style={reduce ? undefined : { y: c.y }} className={c.offset}>
                  <CurtainImage
                    src={c.p.image}
                    alt={c.p.imageAlt}
                    sizes="33vw"
                    fallback={c.p.name}
                    delay={i * 0.12}
                    imgClassName={WARM}
                    className="aspect-[3/4] rounded-[1rem] md:rounded-[1.75rem]"
                    speed={6}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars: stacking cards */}
        <section className="bg-[#EAD8C0] pb-10 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <FadeUp>
              <h2 className="mb-12 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F] md:mb-16 md:text-6xl">
                Three pillars. <span className="font-serif font-normal italic text-[#8A5A3B]">One team.</span>
              </h2>
            </FadeUp>
            {pillars.map((p, i) => (
              <StackCard key={p.slug} p={p} i={i} total={pillars.length} />
            ))}
          </div>
        </section>

        {/* Tools marquee */}
        <section className="overflow-hidden bg-[#33241F] py-12 md:py-16">
          <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-[#D9B48F]/80">
            Platforms and tools we work with
          </p>
          <Marquee duration={34}>
            {tools.map((t) => (
              <span key={t} className="flex shrink-0 items-center">
                <span className="px-8 text-lg font-semibold tracking-tight text-[#EAD8C0]/70 md:px-12 md:text-2xl">{t}</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A5A3B]" />
              </span>
            ))}
          </Marquee>
        </section>

        {/* Why Zyrus: rules draw in from the left */}
        <section className="bg-[#FFF5E8] py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <FadeUp>
              <h2 className="mb-14 text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F] md:mb-16 md:text-6xl">
                Why <span className="font-serif font-normal italic text-[#8A5A3B]">Zyrus?</span>
              </h2>
            </FadeUp>
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {why.map((w, i) => (
                <div key={w.title}>
                  <motion.div
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.1, ease, delay: i * 0.12 }}
                    className="h-[2px] origin-left bg-[#8A5A3B]"
                  />
                  <FadeUp delay={0.15 + i * 0.12} className="pt-8">
                    <span className="font-serif text-3xl italic leading-none text-[#8A5A3B]">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#33241F]">{w.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#33241F]/65">{w.text}</p>
                  </FadeUp>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative isolate overflow-hidden bg-[#33241F] py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8A5A3B]/35 blur-[120px] md:block" />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <FadeUp>
              <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#FFF5E8] md:text-5xl">
                Not sure which service <span className="font-serif font-normal italic text-[#D9B48F]">you need?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[#D9B48F]/90">
                Tell us about your store and we will point you to what will move the needle first.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#FFF5E8] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#33241F] transition-colors duration-500 hover:bg-[#EAD8C0]"
                  >
                    Let&apos;s chat
                    <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://wa.me/92XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-[#D9B48F]/50 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFF5E8] transition-all duration-500 hover:border-[#D9B48F] hover:bg-[#FFF5E8]/10"
                  >
                    Chat on WhatsApp
                  </a>
                </Magnetic>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}