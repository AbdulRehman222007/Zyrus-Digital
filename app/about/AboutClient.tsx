// app/about/AboutClient.tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
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
  ScrollWords,
  WARM,
  WARM_STRONG,
  ease,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "../components/motion";
import {
  BRANDS,
  CAPABILITIES,
  CHAPTERS,
  CONTACT,
  IMAGES,
  STATEMENT,
  STATEMENT_EM,
  VALUES,
} from "./content";

/* -------------------------------------------------------------------------- */
/*  Small shared pieces                                                       */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children, tone = "brown" }: { children: ReactNode; tone?: "brown" | "sand" }) {
  const text = tone === "sand" ? "text-[#D9B48F]" : "text-[#8A5A3B]";
  const line = tone === "sand" ? "bg-[#D9B48F]" : "bg-[#8A5A3B]";

  return (
    <p className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] ${text}`}>
      <span className={`h-px w-8 ${line}`} aria-hidden="true" />
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  Values: pinned horizontal scroll on desktop, stacked cards on mobile      */
/* -------------------------------------------------------------------------- */

function ValueCard({ index, title, text }: { index: string; title: string; text: string }) {
  return (
    <div className="flex h-full flex-col rounded-[1.75rem] border border-[#D9B48F] bg-[#EAD8C0]/40 p-8 md:p-10">
      <span className="font-serif text-4xl italic leading-none text-[#8A5A3B]">{index}</span>
      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#33241F] md:text-3xl">{title}</h3>
      <p className="mt-4 text-[15px] leading-relaxed text-[#33241F]/70">{text}</p>
    </div>
  );
}

function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (v) => -v * distance);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      {/* Desktop: the page pins and scroll drives sideways movement */}
      <section
        ref={sectionRef}
        className="relative hidden h-[260vh] bg-[#FFF5E8] md:block"
        aria-labelledby="values_title"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center gap-12 overflow-hidden">
          <div className="mx-auto w-full max-w-[1400px] px-10">
            <div className="mb-6">
              <Eyebrow>What we stand for</Eyebrow>
            </div>
            <h2
              id="values_title"
              className="text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F] lg:text-6xl"
            >
              Four things we{" "}
              <span className="font-serif font-normal italic text-[#8A5A3B]">don&apos;t compromise on.</span>
            </h2>
          </div>

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max items-stretch gap-6 px-10 will-change-transform"
          >
            {VALUES.map((v) => (
              <div key={v.title} className="w-[min(30rem,72vw)] shrink-0">
                <ValueCard {...v} />
              </div>
            ))}
          </motion.div>

          <div className="mx-auto w-full max-w-[1400px] px-10" aria-hidden="true">
            <div className="h-[2px] bg-[#D9B48F]/60">
              <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-[#8A5A3B]" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: simple stack */}
      <section className="bg-[#FFF5E8] py-20 md:hidden" aria-label="What we stand for">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="mb-5">
            <Eyebrow>What we stand for</Eyebrow>
          </div>
          <FadeUp>
            <h2 className="mb-10 text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F]">
              Four things we{" "}
              <span className="font-serif font-normal italic text-[#8A5A3B]">don&apos;t compromise on.</span>
            </h2>
          </FadeUp>
          <div className="flex flex-col gap-4">
            {VALUES.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.05}>
                <ValueCard {...v} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Story visuals: the sticky picture changes with the chapter you are on     */
/* -------------------------------------------------------------------------- */

function BrowserShot({
  src,
  url,
  alt,
  className = "",
}: {
  src: string;
  url: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[#D9B48F] bg-[#FFF5E8] shadow-[0_30px_60px_-30px_rgba(51,36,31,0.5)] ${className}`}
    >
      <div className="flex h-8 items-center gap-1.5 border-b border-[#D9B48F]/60 bg-[#EAD8C0] px-3">
        <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
        <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
        <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
        <span className="ml-3 truncate rounded-full bg-[#FFF5E8]/60 px-3 py-0.5 text-[9px] font-medium text-[#8A5A3B]/70">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 35vw, 90vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

function ChapterVisual({ kind }: { kind: (typeof CHAPTERS)[number]["visual"] }) {
  if (kind === "desk") {
    return (
      <ParallaxImage
        src="/assets/images/service_build.jpg"
        alt="A developer writing code at a desk by a window"
        sizes="(min-width: 1024px) 40vw, 100vw"
        fallback="Where it started"
        imgClassName={WARM}
        className="h-full w-full rounded-[1.5rem]"
      />
    );
  }

  if (kind === "swrv") {
    return (
      <div className="flex h-full items-center rounded-[1.5rem] bg-[#D9B48F]/30 p-5 md:p-8">
        <BrowserShot
          src="/assets/work/swrv-desktop.png"
          url="swrvattire.com"
          alt="The SWRV Attire online store built by Zyrus Digital"
          className="w-full"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full rounded-[1.5rem] bg-[#D9B48F]/30 overflow-hidden">
      {/* ChampionShoes - top left */}
      <BrowserShot
        src="/assets/work/championshoes-desktop.png"
        url="championshoes.pk"
        alt="The ChampionShoes online store"
        className="absolute left-[0%] top-[0%] w-[60%] -rotate-6 z-10 origin-top-left"
      />
      {/* Convex Consulting - middle */}
      <BrowserShot
        src="/assets/work/convexconsulting-desktop.png"
        url="convexconsulting.com.pk"
        alt="The Convex Consulting website"
        className="absolute left-[20%] top-[20%] w-[60%] rotate-0 z-20 origin-top-left"
      />
      {/* Zilpk - bottom right */}
      <BrowserShot
        src="/assets/work/zilpk-desktop.png"
        url="zilpk.com"
        alt="The Zilpk online store"
        className="absolute left-[40%] top-[40%] w-[60%] rotate-6 z-30 origin-top-left"
      />
    </div>
  );
}

function Panel({
  i,
  n,
  progress,
  children,
}: {
  i: number;
  n: number;
  progress: MotionValue<number>;
  children: ReactNode;
}) {
  const opacity = useTransform(
    progress,
    [i / n - 0.08, i / n, (i + 1) / n, (i + 1) / n + 0.08],
    [0, 1, 1, 0],
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      {children}
    </motion.div>
  );
}

function Story() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.55", "end 0.55"] });
  const n = CHAPTERS.length;

  return (
    <section id="story" className="bg-[#EAD8C0] py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <div className="mb-6">
                <Eyebrow>Our story</Eyebrow>
              </div>
              <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F] md:text-6xl">
                From a small studio to a{" "}
                <span className="font-serif font-normal italic text-[#8A5A3B]">full agency.</span>
              </h2>
            </FadeUp>

            {/* Desktop: one sticky frame, pictures crossfade as the chapters scroll */}
            {/* Added max-w and aspect ratio to ensure it fits on screen */}
            <div className="relative mx-auto mt-10 hidden aspect-[4/3] w-full max-w-[500px] lg:block">
              {CHAPTERS.map((c, i) => (
                <Panel key={c.index} i={i} n={n} progress={scrollYProgress}>
                  <ChapterVisual kind={c.visual} />
                </Panel>
              ))}
            </div>
          </div>
        </div>

        <div ref={listRef} className="lg:col-span-7">
          {CHAPTERS.map((c) => (
            <FadeUp key={c.index}>
              <article className="border-t border-[#8A5A3B]/40 pb-16 pt-8 md:pb-24 lg:min-h-[70vh]">
                <span className="font-serif text-3xl italic leading-none text-[#8A5A3B]">{c.index}</span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#33241F] md:text-4xl">{c.title}</h3>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#33241F]/70 md:text-base">{c.text}</p>

                {/* Mobile and tablet: the picture sits under its chapter */}
                <div className="mt-8 aspect-[4/3] lg:hidden">
                  <ChapterVisual kind={c.visual} />
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Rooted in Karachi: the two city photos belong here                        */
/* -------------------------------------------------------------------------- */

function Karachi() {
  return (
    <section className="bg-[#FFF5E8] py-24 md:py-36" aria-labelledby="karachi_title">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <FadeUp>
            <div className="mb-6">
              <Eyebrow>Home base</Eyebrow>
            </div>
            <h2
              id="karachi_title"
              className="text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F] md:text-6xl"
            >
              Rooted in <span className="font-serif font-normal italic text-[#8A5A3B]">Karachi.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#33241F]/70 md:text-base">
              We are based in Karachi and work with brands in Pakistan and beyond. Local markets, local customers and
              local payment habits are what we build for every day.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:col-span-7">
          <CurtainImage
            src={IMAGES.story1}
            alt="Karachi's historic clock tower at dusk"
            sizes="(min-width: 1024px) 28vw, 50vw"
            fallback="Karachi"
            className="aspect-[3/4] rounded-[1.25rem] md:rounded-[1.75rem]"
            imgClassName={WARM}
          />
          <CurtainImage
            src={IMAGES.story2}
            alt="A market stall in Pakistan with goods on display"
            sizes="(min-width: 1024px) 28vw, 50vw"
            fallback="Local markets"
            delay={0.15}
            className="mt-10 aspect-[3/4] rounded-[1.25rem] md:mt-16 md:rounded-[1.75rem]"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function AboutClient() {
  const reduce = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <ProgressBar />

      <main>
        {/* 1. Hero: masked headline, curtain image, floating location chip */}
        <section className="relative isolate overflow-hidden bg-[#FFF5E8] pb-20 pt-16 md:pb-28 md:pt-24">
          <div
            className="pointer-events-none absolute -right-40 -top-40 hidden h-[38rem] w-[38rem] rounded-full bg-[#D9B48F]/40 blur-[130px] md:block"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-48 top-1/2 hidden h-[26rem] w-[26rem] rounded-full bg-[#8A5A3B]/10 blur-[120px] md:block"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
            <FadeUp>
              <Eyebrow>About Zyrus Digital</Eyebrow>
            </FadeUp>

            <h1 className="mt-8 text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.035em] text-[#33241F] sm:text-6xl lg:text-7xl xl:text-[6rem]">
              <MaskLine>The team behind</MaskLine>
              <MaskLine delay={0.08}>brands that</MaskLine>
              <MaskLine delay={0.16}>
                <span className="font-serif font-normal italic text-[#8A5A3B]">load fast and sell.</span>
              </MaskLine>
            </h1>

            <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <FadeUp delay={0.2} className="lg:col-span-6">
                <p className="max-w-xl text-[15px] leading-relaxed text-[#33241F]/70 md:text-base">
                  Based in Karachi, working with ecommerce brands in Pakistan and beyond. We combine web development
                  with search, social and paid marketing, so the store and the traffic are built by the same people.
                </p>
              </FadeUp>

              <FadeUp delay={0.3} className="lg:col-span-6 lg:flex lg:justify-end">
                <div className="flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-[#33241F] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFF5E8] transition-colors duration-500 hover:bg-[#8A5A3B]"
                    >
                      Start a project
                      <span
                        className="transition-transform duration-500 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </Magnetic>
                  <Link
                    href="/services"
                    className="inline-flex items-center rounded-full border border-[#33241F]/20 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#33241F] transition-all duration-500 hover:border-[#33241F] hover:bg-[#33241F]/5"
                  >
                    Our services
                  </Link>
                </div>
              </FadeUp>
            </div>

            <div className="relative mt-14 md:mt-20">
              <CurtainImage
                src={IMAGES.hero}
                alt="Karachi, the city where Zyrus Digital is based"
                className="aspect-[4/3] rounded-[1.5rem] md:aspect-[21/9] md:rounded-[2rem]"
                sizes="100vw"
                priority
                fallback="Zyrus Digital"
                imgClassName={WARM_STRONG}
              />
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 1.2, duration: 0.8 },
                  y: { delay: 1.2, duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full bg-[#FFF5E8]/95 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#33241F] shadow-xl backdrop-blur-md md:bottom-8 md:left-8"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#8A5A3B]" aria-hidden="true" />
                Karachi, Pakistan
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Statement: words light up as you scroll */}
        <section className="bg-[#33241F] py-28 md:py-44" aria-label="Who we are">
          <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
            <div className="mb-10">
              <Eyebrow tone="sand">Who we are</Eyebrow>
            </div>
            <ScrollWords
              text={STATEMENT}
              em={STATEMENT_EM}
              className="text-[1.9rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#FFF5E8] sm:text-4xl md:text-6xl"
            />
          </div>
        </section>

        {/* 3. Home base */}
        <Karachi />

        {/* 4. Story: sticky picture changes with each chapter */}
        <Story />

        {/* 5. Values: pinned horizontal scroll */}
        <Values />

        {/* 6. The team: anonymous, image plus animated capability rows */}
        <section className="bg-[#EAD8C0] py-24 md:py-36">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-12 lg:gap-20 lg:px-10">
            <div className="lg:col-span-5">
              <CurtainImage
                src={IMAGES.team}
                alt="Two colleagues working side by side at their laptops"
                className="aspect-[4/5] rounded-[2rem]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                fallback="Two partners, one team"
                imgClassName={WARM}
              />
            </div>

            <div className="lg:col-span-7">
              <FadeUp>
                <div className="mb-6">
                  <Eyebrow>The team</Eyebrow>
                </div>
                <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#33241F] md:text-6xl">
                  A small team with{" "}
                  <span className="font-serif font-normal italic text-[#8A5A3B]">direct access.</span>
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#33241F]/70 md:text-base">
                  Zyrus is run by two partners who work directly on client projects. You talk to the people building
                  your store, not an account manager.
                </p>
              </FadeUp>

              <ul className="mt-10">
                {CAPABILITIES.map((c, i) => (
                  <motion.li
                    key={c.title}
                    initial={reduce ? false : { opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, ease, delay: i * 0.07 }}
                    className="group relative flex items-baseline justify-between gap-6 border-t border-[#8A5A3B]/30 py-5 last:border-b"
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#8A5A3B] transition-transform duration-700 group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif text-lg italic text-[#8A5A3B]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl font-semibold tracking-tight text-[#33241F] transition-transform duration-500 group-hover:translate-x-2 md:text-2xl">
                        {c.title}
                      </h3>
                    </div>
                    <p className="hidden max-w-[16rem] text-right text-[13.5px] leading-relaxed text-[#33241F]/65 sm:block">
                      {c.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Brands marquee */}
        <section className="overflow-hidden bg-[#33241F] py-16 md:py-24" aria-label="Brands we have built for">
          <p className="mb-10 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-[#D9B48F]/80">
            Brands we&apos;ve built for
          </p>
          <Marquee duration={42}>
            {BRANDS.map((b) => (
              <span key={b} className="flex shrink-0 items-center">
                <span className="px-8 font-serif text-4xl italic text-[#EAD8C0]/80 md:px-14 md:text-7xl">{b}</span>
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#8A5A3B]" aria-hidden="true" />
              </span>
            ))}
          </Marquee>
        </section>

        {/* 8. CTA */}
        <section className="relative overflow-hidden bg-[#8A5A3B] py-28 md:py-40">
          <div className="relative mx-auto max-w-5xl px-5 text-center">
            <FadeUp>
              <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-[#FFF5E8]/80">
                Ready when you are
              </p>
              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.035em] text-[#FFF5E8] sm:text-6xl md:text-7xl">
                Let&apos;s build something{" "}
                <span className="font-serif font-normal italic text-[#EAD8C0]">worth talking about.</span>
              </h2>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#FFF5E8] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#33241F] transition-colors duration-500 hover:bg-[#33241F] hover:text-[#FFF5E8]"
                  >
                    Get a free store review
                    <span
                      className="transition-transform duration-500 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-[#FFF5E8]/50 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFF5E8] transition-all duration-500 hover:border-[#FFF5E8] hover:bg-[#FFF5E8]/10"
                  >
                    Chat on WhatsApp
                  </a>
                </Magnetic>
              </div>

              <p className="mt-8 text-sm text-[#FFF5E8]/80">
                or email{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-semibold underline underline-offset-4 hover:text-[#FFF5E8]"
                >
                  {CONTACT.email}
                </a>
              </p>
            </FadeUp>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}