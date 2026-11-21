import Link from "next/link";
import PortfolioGrid from "./PortfolioGrid";

export const metadata = {
  title: "Portfolio | Zyrus Digital",
  description:
    "Shopify, WordPress and custom code projects built by Zyrus Digital.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
      <section className="px-[var(--gutter)] pb-[var(--section-y)] pt-40">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
              Portfolio
            </p>
            <h1 className="mt-8 [font-family:var(--font-display)] [font-size:var(--text-3xl)] [font-weight:var(--weight-display)] leading-[var(--leading-tight)] tracking-[var(--tracking-display-xl)]">
              Real results for{" "}
              <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
                ambitious brands.
              </em>
            </h1>
            <p className="mt-8 max-w-xl text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]">
              A selection of stores we have built, launched and grown.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 self-start bg-[var(--color-inverse-bg)] px-8 py-4 font-semibold text-[var(--color-inverse-ink)] transition-colors duration-300 hover:bg-[var(--color-accent)] md:self-auto"
          >
            Start a project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="px-[var(--gutter)] pb-[var(--section-y)]">
        <div className="mx-auto max-w-[90rem]">
          <PortfolioGrid />
        </div>
      </section>
    </main>
  );
}
