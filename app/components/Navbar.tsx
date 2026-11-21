"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-[var(--gutter)] py-4">
        <Link href="/" onClick={() => setOpen(false)} className="group flex items-center gap-3">
          <Image
            src="/assets/logo/zyrus-logo.png"
            alt="Zyrus Digital"
            width={48}
            height={48}
            className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105 md:h-12"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg tracking-[-0.01em] [font-family:var(--font-display)] [font-weight:var(--weight-display)] md:text-xl">
              Zyrus
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
              Digital Agency
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="group relative text-sm font-semibold text-[var(--color-ink-soft)] transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden bg-[var(--color-inverse-bg)] px-6 py-3 text-sm font-semibold text-[var(--color-inverse-ink)] transition-colors duration-300 hover:bg-[var(--color-accent)] md:inline-block"
        >
          Free store review
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="p-2 md:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-rule)] bg-[var(--color-paper)] px-[var(--gutter)] py-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[var(--color-rule)] py-4 text-xl [font-family:var(--font-display)] [font-weight:var(--weight-display-sub)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 block bg-[var(--color-inverse-bg)] px-6 py-4 text-center text-sm font-semibold text-[var(--color-inverse-ink)]"
          >
            Free store review
          </Link>
        </div>
      )}
    </header>
  );
}
