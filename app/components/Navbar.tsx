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
    <header className="sticky top-0 z-50 bg-[#EAD8C0]/90 backdrop-blur-md border-b border-[#D9B48F]">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex items-center justify-between py-4">
        
        {/* Logo & Brand Text */}
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 group">
          <div className="h-10 md:h-12 w-auto flex items-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/logo/zyrus-logo.png"
              alt="Zyrus Digital"
              width={48}
              height={48}
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex flex-col font-bold text-[#33241F] leading-tight tracking-wider uppercase">
            <span className="text-base md:text-xl transition-colors duration-300 group-hover:text-[#8A5A3B]">Zyrus</span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#8A5A3B]">Digital Agency</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-10 text-sm font-semibold text-[#33241F]/70">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative group transition-colors duration-300 hover:text-[#8A5A3B]"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#8A5A3B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#8A5A3B] hover:bg-[#6F472D] text-[#FFF5E8] text-sm font-bold px-6 py-3 rounded-full shadow-[0_4px_14px_rgba(138,90,59,0.3)] hover:shadow-[0_6px_20px_rgba(138,90,59,0.4)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Free store review
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#33241F] p-2 focus:outline-none focus:ring-2 focus:ring-[#8A5A3B] rounded-md transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#EAD8C0]/95 backdrop-blur-xl border-b border-[#D9B48F] shadow-2xl px-5 py-6 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#33241F] text-lg font-bold py-3 border-b border-[#D9B48F]/50 hover:text-[#8A5A3B] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#8A5A3B] text-[#FFF5E8] text-center text-sm font-bold px-5 py-4 rounded-full shadow-lg hover:bg-[#6F472D] transition-colors"
          >
            Free store review
          </Link>
        </div>
      )}
    </header>
  );
}