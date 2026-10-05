// app/portfolio/page.tsx
import Link from "next/link";
import PortfolioGrid from "./PortfolioGrid";

export const metadata = {
  title: "Portfolio | Zyrus Digital",
  description:
    "Shopify, WordPress and custom-code projects built by Zyrus Digital.",
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-[#FFF5E8] px-6 pb-20 pt-36">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8A5A3B]">
              Portfolio
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight text-[#33241F] md:text-7xl">
              Real results for <br />
              <span className="font-serif italic font-normal text-[#8A5A3B]">
                ambitious brands.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[#33241F]/70">
              A selection of stores we've built, launched and grown.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-[#33241F] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#FFF5E8]"
          >
            Start a project →
          </Link>
        </div>
      </section>

      <section className="bg-[#EAD8C0] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <PortfolioGrid />
        </div>
      </section>
    </main>
  );
}