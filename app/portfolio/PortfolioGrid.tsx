"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, filters } from "./data";

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-16 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`px-5 py-2.5 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] transition-colors duration-300 ${
              active === f
                ? "bg-[var(--color-inverse-bg)] text-[var(--color-inverse-ink)]"
                : "border border-[var(--color-rule)] text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-24">
        {visible.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={p.slug}
              className="group grid gap-10 lg:grid-cols-12 lg:items-center"
            >
              <Link
                href={`/portfolio/${p.slug}`}
                className={`block overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper-raised)] lg:col-span-7 lg:row-start-1 ${
                  flip ? "lg:col-start-6" : "lg:col-start-1"
                }`}
              >
                <Image
                  src={p.image}
                  alt={`${p.client} homepage`}
                  width={1920}
                  height={1080}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="hidden h-auto w-full transition-transform duration-700 group-hover:scale-[1.02] md:block"
                />
                <Image
                  src={p.imageMobile || p.image}
                  alt={`${p.client} homepage`}
                  width={1080}
                  height={1920}
                  sizes="100vw"
                  className="block h-auto w-full md:hidden"
                />
              </Link>

              <div
                className={`lg:col-span-4 lg:row-start-1 ${
                  flip ? "lg:col-start-1" : "lg:col-start-9"
                }`}
              >
                <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
                  {p.industry}
                </p>
                <h2 className="mt-6 [font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] leading-[0.95] tracking-[var(--tracking-display-lg)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  {p.client}
                </h2>
                <p className="mt-6 text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)]">
                  {p.caseStudy?.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-mute)]">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="mt-10 inline-flex items-center gap-2 border-b border-current pb-1 font-semibold transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="py-20 text-[var(--color-mute)]">No projects in this category yet.</p>
      )}
    </>
  );
}
