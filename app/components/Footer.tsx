"use client";

import Link from "next/link";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Shopify development", href: "/services/build" },
      { label: "WooCommerce development", href: "/services/build" },
      { label: "SEO and speed", href: "/services/launch" },
      { label: "Social media", href: "/services/grow" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Case studies", href: "/portfolio" },
      { label: "About", href: "/about" },
      { label: "Process", href: "/#process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "zyrusdigital@gmail.com", href: "mailto:zyrusdigital@gmail.com" }],
  },
];

const label =
  "mb-5 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]";
const link =
  "text-[var(--color-ink-soft)] transition-colors duration-300 hover:text-[var(--color-accent)]";

export default function Footer() {
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-rule)] bg-[var(--color-paper)] px-[var(--gutter)] pb-10 pt-20 text-[var(--color-ink)]">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="[font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] leading-none tracking-[var(--tracking-display-lg)]">
              Zyrus Digital
            </p>
            <p className="mt-5 max-w-xs text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)]">
              Shopify and WooCommerce engineering from Karachi.
            </p>
          </div>

          {columns.map((col, i) => (
            <nav
              key={col.title}
              aria-label={col.title}
              className={`lg:col-span-2 ${i === 0 ? "lg:col-start-7" : ""}`}
            >
              <h3 className={label}>{col.title}</h3>
              <ul className="space-y-3 text-[length:var(--text-base)]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={link}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-[var(--color-rule)] pt-8 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-mute)] md:flex-row md:items-center md:justify-between">
          <span>© 2026 Zyrus Digital. Karachi.</span>
          <button
            type="button"
            onClick={toTop}
            className="inline-flex items-center gap-3 self-start transition-colors duration-300 hover:text-[var(--color-accent)] md:self-auto"
          >
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
