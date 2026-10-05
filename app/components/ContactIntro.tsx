// app/components/ContactIntro.tsx
"use client";

import {
  WARM,
  CurtainImage,
  FadeUp,
  Magnetic,
  MaskLine,
  ease,
  motion,
  useReducedMotion,
} from "./motion";

const points = [
  "A personalized PDF audit of your current store",
  "3 actionable recommendations to increase conversions",
  "No sales pitch, just honest strategy",
];

export default function ContactIntro() {
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col justify-between lg:pt-4">
      <div>
        <FadeUp>
          <p className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8A5A3B]">
            <span className="h-px w-8 bg-[#8A5A3B]" /> Free store review
          </p>
        </FadeUp>

        <h1 className="max-w-[14ch] text-4xl font-semibold leading-[0.95] tracking-[-0.035em] text-[#33241F] md:text-6xl">
          <MaskLine>Let&apos;s build</MaskLine>
          <MaskLine delay={0.08}>something</MaskLine>
          <MaskLine delay={0.16}>
            <span className="font-serif font-normal italic text-[#8A5A3B]">great.</span>
          </MaskLine>
        </h1>

        <FadeUp delay={0.2}>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#33241F]/70">
            The more specific you are about your niche and your biggest problem, the more useful your audit will
            be. It takes about two minutes.
          </p>
        </FadeUp>

        <ul className="mt-10 flex flex-col gap-4">
          {points.map((p, i) => (
            <motion.li
              key={p}
              initial={reduce ? false : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 + i * 0.12 }}
              className="flex items-start gap-4 text-[15px] font-medium text-[#33241F]/80"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8A5A3B]/10 text-[#8A5A3B]">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease, delay: 0.7 + i * 0.12 }}
                  />
                </svg>
              </span>
              <span className="leading-relaxed">{p}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="my-10 lg:my-12">
        <CurtainImage
          src="/assets/images/contact_side.jpg"
          alt="A notebook, phone and coffee on a desk, ready to plan a project"
          sizes="(min-width: 1024px) 40vw, 100vw"
          fallback="Let's talk"
          imgClassName={WARM}
          delay={0.3}
          className="aspect-[16/10] rounded-[1.5rem]"
          speed={6}
        />
        <FadeUp delay={0.2}>
          <div className="mt-6 border-b border-[#D9B48F]/50 pb-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#33241F]/60">Recent work</p>
            <p className="mt-2 text-[15px] font-semibold leading-relaxed text-[#33241F]/80">
              SWRV Attire · ChampionShoes · Convex Consulting
            </p>
          </div>
        </FadeUp>
      </div>

      <FadeUp>
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#33241F]/60">Prefer to chat first?</p>
        <div className="flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href="https://wa.me/92XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#33241F] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFF5E8] transition-colors duration-500 hover:bg-[#8A5A3B]"
            >
              Chat on WhatsApp
              <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </Magnetic>
          <a
            href="mailto:zyrusdigital@gmail.com"
            className="inline-flex items-center rounded-full border border-[#D9B48F]/80 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#33241F] transition-all duration-500 hover:border-[#33241F] hover:bg-[#FFF5E8]"
          >
            zyrusdigital@gmail.com
          </a>
        </div>
      </FadeUp>
    </div>
  );
}