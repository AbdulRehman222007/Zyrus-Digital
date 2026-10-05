// app/services/[slug]/DetailClient.tsx
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CurtainImage,
  FadeUp,
  Magnetic,
  MaskLine,
  MotionConfig,
  ParallaxImage,
  ProgressBar,
  TiltCard,
  WARM,
  ease,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "../../components/motion";
import type { Pillar } from "../data";

type Step = Pillar["process"][number];

const Tick = ({ dark = false }: { dark?: boolean }) => (
  <span
    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
      dark ? "bg-[#D9B48F]/20 text-[#D9B48F]" : "bg-[#8A5A3B]/10 text-[#8A5A3B]"
    }`}
  >
    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

/* ---------------------------- Process timeline ---------------------------- */
/* A line draws across as you scroll and each step lights up when it is reached. */

function DesktopStep({ s, i, n, progress }: { s: Step; i: number; n: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const t = i / n;
  const a = Math.max(0, t - 0.04);
  const b = Math.max(t, a + 0.001);
  const dot = useTransform(progress, [a, b], ["#EAD8C0", "#8A5A3B"]);
  const op = useTransform(progress, [Math.max(0, t - 0.2), Math.max(t, 0.001)], [0.35, 1]);
  return (
    <motion.li style={{ opacity: op }} className="pt-10">
      <motion.span
        style={{ backgroundColor: dot }}
        className="absolute top-0 h-4 w-4 -translate-y-[7px] rounded-full border-2 border-[#8A5A3B]"
        aria-hidden="true"
      />
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <span className="font-serif text-3xl italic leading-none text-[#8A5A3B]">{String(i + 1).padStart(2, "0")}</span>
        {s.time && <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#33241F]/60">{s.time}</span>}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-[#33241F]">{s.title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-[#33241F]/70">{s.text}</p>
    </motion.li>
  );
}

function Process({ steps, name }: { steps: Step[]; name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });

  return (
    <>
      <div ref={ref} className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#D9B48F]" />
        <motion.div style={{ scaleX: scrollYProgress }} className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-[#8A5A3B]" />
        <ol className="relative grid grid-cols-4 gap-6" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <DesktopStep s={s} i={i} n={steps.length} progress={scrollYProgress} />
            </div>
          ))}
        </ol>
      </div>

      <ol className="flex flex-col gap-8 border-l-2 border-[#D9B48F] pl-6 md:hidden" aria-label={`How the ${name} works`}>
        {steps.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.05}>
            <li className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-[#8A5A3B] bg-[#8A5A3B]" aria-hidden="true" />
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <span className="font-serif text-2xl italic leading-none text-[#8A5A3B]">{String(i + 1).padStart(2, "0")}</span>
                {s.time && <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#33241F]/60">{s.time}</span>}
              </div>
              <h3 className="text-lg font-semibold text-[#33241F]">{s.title}</h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-[#33241F]/70">{s.text}</p>
            </li>
          </FadeUp>
        ))}
      </ol>
    </>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */

function Faq({ faqs }: { faqs: Pillar["faqs"] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <FadeUp key={f.q} delay={i * 0.05}>
            <div
              className={`rounded-2xl border bg-[#FFF5E8] transition-colors duration-500 ${
                isOpen ? "border-[#8A5A3B]/50" : "border-[#D9B48F]/70"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq_${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-semibold text-[#33241F]"
              >
                {f.q}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "#8A5A3B" : "rgba(138,90,59,0)", color: isOpen ? "#FFF5E8" : "#8A5A3B" }}
                  transition={{ duration: 0.4, ease }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D9B48F]"
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>
              <motion.div
                id={`faq_${i}`}
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.45, ease }}
                className="overflow-hidden"
                aria-hidden={!isOpen}
              >
                <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-[#33241F]/70">{f.a}</p>
              </motion.div>
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}

/* ---------------------------------- Page ---------------------------------- */

export default function DetailClient({ pillar: p, others, total }: { pillar: Pillar; others: Pillar[]; total: number }) {
  const reduce = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <ProgressBar />

      <main>
        {/* 1. Hero: split layout, masked headline, curtain image with floating tag */}
        <section className="relative isolate overflow-hidden bg-[#FFF5E8] pb-20 pt-14 md:pb-28 md:pt-20">
          <div className="pointer-events-none absolute -right-40 -top-40 hidden h-[38rem] w-[38rem] rounded-full bg-[#D9B48F]/40 blur-[130px] md:block" />
          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
            <div className="lg:col-span-7">
              <FadeUp>
                <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#33241F]/60">
                  <Link href="/services" className="transition-colors hover:text-[#8A5A3B]">Services</Link>
                  <span aria-hidden="true">/</span>
                  <span className="text-[#8A5A3B]">{p.name}</span>
                </nav>
              </FadeUp>

              <h1 className="text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.035em] text-[#33241F] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                <MaskLine>{p.heroTitle}</MaskLine>
                <MaskLine delay={0.1}>
                  <span className="font-serif font-normal italic text-[#8A5A3B]">{p.heroItalic}</span>
                </MaskLine>
              </h1>

              <FadeUp delay={0.2}>
                <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-[#33241F]/70 md:text-base">{p.heroText}</p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="mt-10">
                  <Magnetic>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-[#33241F] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFF5E8] transition-colors duration-500 hover:bg-[#8A5A3B]"
                    >
                      Get a free store review
                      <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  </Magnetic>
                </div>
              </FadeUp>
            </div>

            <div className="relative lg:col-span-5">
              <CurtainImage
                src={p.image}
                alt={p.imageAlt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
                fallback={p.name}
                imgClassName={WARM}
                className="aspect-[4/3] rounded-[2rem]"
              />
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, y: [0, -6, 0] }}
                transition={{ opacity: { delay: 1.1, duration: 0.8 }, y: { delay: 1.1, duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute -left-2 bottom-8 rounded-2xl bg-[#FFF5E8]/95 px-5 py-4 shadow-xl backdrop-blur-md md:-left-8"
              >
                <p className="font-serif text-3xl italic leading-none text-[#8A5A3B]">{p.index}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#33241F]">
                  {p.name} <span className="text-[#33241F]/50">of {String(total).padStart(2, "0")}</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Problem and solution: cards slide in from opposite sides */}
        <section className="bg-[#EAD8C0] py-20 md:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-5 px-5 md:grid-cols-2 md:gap-6 lg:px-10">
            <FadeUp x={-70} y={0} className="h-full">
              <div className="h-full rounded-[1.75rem] bg-[#33241F] p-8 md:p-12">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D9B48F]">The problem</p>
                <h2 className="text-2xl font-semibold tracking-tight text-[#FFF5E8] md:text-3xl">{p.problem.title}</h2>
                <ul className="mt-8 flex flex-col gap-4">
                  {p.problem.points.map((pt, i) => (
                    <motion.li
                      key={pt}
                      initial={reduce ? false : { opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-[#EAD8C0]/85"
                    >
                      <Tick dark />
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp x={70} y={0} className="h-full">
              <div className="h-full rounded-[1.75rem] border border-[#D9B48F] bg-[#FFF5E8] p-8 md:p-12">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8A5A3B]">The Zyrus way</p>
                <h2 className="text-2xl font-semibold tracking-tight text-[#33241F] md:text-3xl">{p.solution.title}</h2>
                <ul className="mt-8 flex flex-col gap-4">
                  {p.solution.points.map((pt, i) => (
                    <motion.li
                      key={pt}
                      initial={reduce ? false : { opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-[#33241F]/80"
                    >
                      <Tick />
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* 3. What is included: tilting cards */}
        <section className="bg-[#FFF5E8] py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <FadeUp>
              <h2 className="mb-14 text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F] md:mb-16 md:text-6xl">
                What&apos;s <span className="font-serif font-normal italic text-[#8A5A3B]">included.</span>
              </h2>
            </FadeUp>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {p.included.map((item, i) => (
                <FadeUp key={item.title} delay={(i % 3) * 0.08} className="h-full">
                  <TiltCard className="h-full">
                    <div className="h-full rounded-[1.5rem] border border-[#D9B48F]/70 bg-[#EAD8C0]/30 p-7 transition-colors duration-500 hover:border-[#8A5A3B]/40 hover:bg-[#EAD8C0]/60 md:p-8">
                      <span className="font-serif text-2xl italic leading-none text-[#8A5A3B]">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#33241F]">{item.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-[#33241F]/70">{item.text}</p>
                    </div>
                  </TiltCard>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Process: timeline that draws as you scroll */}
        <section className="bg-[#EAD8C0] py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <FadeUp>
              <h2 className="mb-14 text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F] md:mb-20 md:text-6xl">
                How it <span className="font-serif font-normal italic text-[#8A5A3B]">works.</span>
              </h2>
            </FadeUp>
            <Process steps={p.process} name={p.name.toLowerCase()} />
          </div>
        </section>

        {/* 5. Case study */}
        <section className="bg-[#FFF5E8] py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <div className="grid items-center gap-10 rounded-[2rem] border border-[#D9B48F] bg-[#EAD8C0]/40 p-6 md:p-10 lg:grid-cols-2 lg:gap-14">
              {/* Replaced CurtainImage with standard Image to prevent cropping */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#D9B48F]/60 bg-[#FFF5E8]">
                <Image
                  src={p.caseStudy.image}
                  alt={`${p.caseStudy.client} website`}
                  width={0}
                  height={0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
              <FadeUp delay={0.1}>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8A5A3B]">{p.caseStudy.label}</p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#33241F] md:text-4xl">{p.caseStudy.client}</h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#33241F]/70">{p.caseStudy.text}</p>

                {p.caseStudy.stats && p.caseStudy.stats.length > 0 && (
                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[#D9B48F]/60 pt-6">
                    {p.caseStudy.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#33241F]/60">{s.label}</dt>
                        <dd className="mt-1 font-serif text-2xl italic text-[#8A5A3B]">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {p.caseStudy.href && (
                  <a
                    href={p.caseStudy.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8A5A3B] transition-all hover:gap-3 hover:text-[#33241F]"
                  >
                    View live site <span aria-hidden="true">↗</span>
                  </a>
                )}
              </FadeUp>
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="bg-[#EAD8C0] py-20 md:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <FadeUp>
                  <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F] md:text-5xl">
                    Frequently asked <span className="font-serif font-normal italic text-[#8A5A3B]">questions.</span>
                  </h2>
                </FadeUp>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Faq faqs={p.faqs} />
            </div>
          </div>
        </section>

        {/* 7. CTA with image backdrop and links to the other pillars */}
        <section className="relative isolate overflow-hidden bg-[#33241F] py-24 md:py-32">
          <ParallaxImage
            src={p.image}
            alt=""
            sizes="100vw"
            fallback=""
            speed={8}
            imgClassName={WARM}
            className="absolute inset-0 -z-10 opacity-20"
          />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <FadeUp>
              <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#FFF5E8] md:text-5xl">{p.ctaTitle}</h2>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[#D9B48F]/90">
                Get a free review of your store and a clear idea of what to do first.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#FFF5E8] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#33241F] transition-colors duration-500 hover:bg-[#EAD8C0]"
                  >
                    Book a free review
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

              <div className="mt-16 border-t border-[#D9B48F]/20 pt-8">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D9B48F]/70">Also explore</p>
                <div className="flex flex-wrap justify-center gap-8">
                  {others.map((o) => (
                    <Link
                      key={o.slug}
                      href={`/services/${o.slug}`}
                      className="group text-sm font-semibold text-[#EAD8C0] transition-colors hover:text-[#FFF5E8]"
                    >
                      {o.name}{" "}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}