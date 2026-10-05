// app/portfolio/PortfolioGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, filters } from "./data";

export default function PortfolioGrid() {
    const [active, setActive] = useState<(typeof filters)[number]>("All");

    const visible =
        active === "All"
            ? projects
            : projects.filter((p) => p.tags.includes(active));

    return (
        <>
            {/* Filter bar */}
            <div className="mb-12 flex flex-wrap gap-2.5">
                {filters.map((f) => (
                    <button
                        key={f}
                        type="button"
                        onClick={() => setActive(f)}
                        aria-pressed={active === f}
                        className={`rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${active === f
                            ? "bg-[#33241F] text-[#FFF5E8] shadow-md -translate-y-0.5"
                            : "border border-[#D9B48F]/70 text-[#33241F]/70 hover:border-[#8A5A3B] hover:text-[#8A5A3B] hover:-translate-y-0.5"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((p) => (
                    <article
                        key={p.slug}
                        className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#D9B48F]/70 bg-[#FFF5E8] transition-all duration-500 hover:-translate-y-1 hover:border-[#8A5A3B]/40 hover:shadow-[0_30px_60px_-30px_rgba(138,90,59,0.35)]"
                    >
                        {/* Image — full screenshot with optional "Launching Soon" overlay */}
                        <div className="relative w-full overflow-hidden bg-[#EAD8C0]">
                            <Image
                                src={p.image}
                                alt={`${p.client} desktop`}
                                width={1920}
                                height={1080}
                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                className="hidden h-auto w-full md:block"
                            />
                            <Image
                                src={p.imageMobile || p.image}
                                alt={`${p.client} mobile`}
                                width={1080}
                                height={1920}
                                sizes="100vw"
                                className="block h-auto w-full md:hidden"
                            />

                            {p.soon && (
                                <span className="absolute right-3 top-3 rounded-full bg-[#8A5A3B]/95 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFF5E8] shadow-md backdrop-blur-sm">
                                    Launching Soon
                                </span>
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex flex-1 flex-col p-6 md:p-7">
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A5A3B]">
                                {p.industry}
                            </p>

                            <h3 className="text-xl font-semibold tracking-tight text-[#33241F]">
                                {p.client}
                            </h3>

                            {/* Tags */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-[#8A5A3B]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8A5A3B]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Footer link — pinned to bottom */}
                            <div className="mt-auto border-t border-[#D9B48F]/50 pt-5" style={{ marginTop: "auto" }}>
                                <Link
                                    href={`/portfolio/${p.slug}`}
                                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A5A3B] transition-all duration-300 hover:gap-3 hover:text-[#33241F]"
                                >
                                    View case study <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {visible.length === 0 && (
                <p className="py-20 text-center text-sm text-[#33241F]/50">
                    No projects in this category yet.
                </p>
            )}
        </>
    );
}