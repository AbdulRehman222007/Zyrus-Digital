"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "Convex Consulting",
    tags: ["Redesign", "Social media"],
    desktop: "convexconsulting-desktop.png",
    mobile: "convexconsulting-mobile.png",
    url: "https://convexconsulting.com.pk",
    domain: "convexconsulting.com.pk",
  },
  {
    name: "ChampionShoes",
    tags: ["Custom Shopify"],
    desktop: "championshoes-desktop.png",
    mobile: "championshoes-mobile.png",
    url: "https://championshoes.pk",
    domain: "championshoes.pk",
  },
];

export default function MoreWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Light up the dot for whichever card sits closest to the centre of the track.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let best = Infinity;
      Array.from(track.children).forEach((node, i) => {
        const el = node as HTMLElement;
        const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
        if (d < best) {
          best = d;
          closest = i;
        }
      });
      setActive(closest);
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const el = track?.children[i] as HTMLElement | undefined;
    if (!track || !el) return;
    track.scrollTo({
      left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="bg-[var(--color-paper)] py-[var(--section-y)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[90rem] px-[var(--gutter)]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="[font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
            Selected{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              work.
            </em>
          </h2>
          <p className="max-w-sm text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)] md:text-right">
            Brands we have helped launch, redesign, and scale.
          </p>
        </div>
      </div>

      {/* Mobile: swipe carousel. Desktop: two-column grid. */}
      <div
        ref={trackRef}
        className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--gutter)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:max-w-[90rem] md:grid-cols-2 md:gap-x-10 md:gap-y-20 md:overflow-visible md:snap-none"
      >
        {projects.map((p) => (
          <article key={p.name} className="group w-[84vw] shrink-0 snap-center md:w-auto">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper-raised)]">
                <div className="border-b border-[var(--color-rule)] px-4 py-2.5 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--color-mute)]">
                  {p.domain}
                </div>

                <Image
                  src={`/assets/work/${p.desktop}`}
                  alt={`${p.name} homepage`}
                  width={1920}
                  height={1080}
                  sizes="(min-width: 768px) 50vw, 84vw"
                  className="hidden h-auto w-full transition-transform duration-700 group-hover:scale-[1.02] md:block"
                />
                <Image
                  src={`/assets/work/${p.mobile}`}
                  alt={`${p.name} homepage`}
                  width={1080}
                  height={1920}
                  sizes="84vw"
                  className="block h-auto w-full md:hidden"
                />

                <div className="absolute inset-0 hidden items-center justify-center bg-[var(--color-inverse-bg)] opacity-0 transition-opacity duration-500 group-hover:opacity-90 md:flex">
                  <span className="font-semibold text-[var(--color-inverse-ink)]">View live site →</span>
                </div>
              </div>
            </a>

            <div className="mt-8 flex items-start justify-between gap-6">
              <div>
                <h3 className="[font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] leading-none tracking-[var(--tracking-display-lg)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  {p.name}
                </h3>
                <p className="mt-4 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-mute)]">
                  {p.tags.join(" / ")}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="text-[length:var(--text-md)] text-[var(--color-accent)] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile controls: progress dots and a way back to the top. */}
      <div className="mt-10 flex items-center justify-between px-[var(--gutter)] md:hidden">
        <div className="flex">
          {projects.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${p.name}`}
              className="flex items-center py-2 pr-2"
            >
              <span
                className={`h-2 rounded-full transition-all duration-500 ${
                  active === i ? "w-8 bg-[var(--color-accent)]" : "w-2 bg-[var(--color-rule-strong)]"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={toTop}
          className="border-b border-current pb-1 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] transition-colors hover:text-[var(--color-accent)]"
        >
          Back to top ↑
        </button>
      </div>
    </section>
  );
}
