import Link from "next/link";
import HeroObjectLoader from "./HeroObjectLoader";

const proof = [
  { value: "80%+", label: "Mobile speed improvement" },
  { value: "100", label: "SEO score at launch" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div className="mx-auto grid min-h-[100svh] max-w-[90rem] items-center gap-12 px-[var(--gutter)] pb-20 pt-40 lg:grid-cols-12 lg:pb-28">
        <div className="relative z-10 lg:col-span-7">
          <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
            Shopify and WooCommerce engineering
          </p>

          <h1 className="mt-8 [font-family:var(--font-display)] [font-size:var(--text-3xl)] [font-weight:var(--weight-display)] leading-[var(--leading-tight)] tracking-[var(--tracking-display-xl)]">
            We build stores that load fast{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              and sell.
            </em>
          </h1>

          <p className="mt-10 max-w-xl text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]">
            Shopify and WooCommerce development, launch, and growth for ecommerce brands that need a store that performs.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[var(--color-inverse-bg)] px-8 py-4 font-semibold text-[var(--color-inverse-ink)] transition-colors duration-300 hover:bg-[var(--color-accent)]"
            >
              Get your free store review <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#case"
              className="border-b border-[var(--color-ink)] pb-1 font-semibold transition-colors hover:text-[var(--color-accent)]"
            >
              See the SWRV build
            </a>
          </div>

          <p className="mt-6 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-mute)]">
            A PDF audit of your store with three recommendations to raise conversions
          </p>

          <div className="mt-20 grid max-w-xl grid-cols-2 border-t border-[var(--color-rule)]">
            {proof.map((p) => (
              <div key={p.label} className="pr-6 pt-6">
                <span className="block [font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] tracking-[var(--tracking-display-xl)] tabular-nums">
                  {p.value}
                </span>
                <span className="mt-2 block font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-mute)]">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block lg:h-[78svh]" aria-hidden="true">
          <div className="relative h-full w-full">
            <HeroObjectLoader />
          </div>
        </div>
      </div>
    </section>
  );
}
