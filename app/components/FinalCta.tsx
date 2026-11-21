"use client";

import Link from "next/link";

export default function FinalCta() {
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[var(--color-inverse-bg)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-inverse-ink)]"
    >
      <div className="mx-auto max-w-[90rem]">
        <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
          Free store review
        </p>

        <h2 className="mt-8 max-w-4xl [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
          Send us your store. We will tell you what is slowing it down.
        </h2>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[var(--color-inverse-ink)] px-8 py-4 font-semibold text-[var(--color-inverse-bg)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]"
          >
            Get your free store review <span aria-hidden="true">→</span>
          </Link>
          <a
            href="mailto:zyrusdigital@gmail.com"
            className="border-b border-current pb-1 font-semibold transition-colors duration-300 hover:text-[var(--color-accent)]"
          >
            zyrusdigital@gmail.com
          </a>
        </div>

        <div className="mt-24 flex justify-end border-t border-current/20 pt-8">
          <button
            type="button"
            onClick={toTop}
            className="inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] transition-colors duration-300 hover:text-[var(--color-accent)]"
          >
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}
