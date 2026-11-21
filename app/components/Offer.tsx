import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Build",
    outcome: "A store built around your catalog, not a theme you have to fight.",
    href: "/services/build",
    items: [
      "Shopify and WooCommerce development",
      "Custom theme design",
      "Speed and performance optimization",
    ],
  },
  {
    id: "02",
    title: "Launch",
    outcome: "Ready to sell on day one, with the technical foundations already tested.",
    href: "/services/launch",
    items: [
      "Payment gateway integration",
      "Technical SEO setup",
      "Analytics and tracking configuration",
    ],
  },
  {
    id: "03",
    title: "Grow",
    outcome: "More traffic and repeat orders, measured against revenue.",
    href: "/services/grow",
    items: [
      "Social media management",
      "Paid advertising campaigns",
      "Email marketing automation",
    ],
  },
];

export default function Offer() {
  return (
    <section className="bg-[var(--color-paper)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[90rem]">
        <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
          Services
        </p>
        <h2 className="mt-6 max-w-3xl [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
          Three stages, in the order your store needs them.
        </h2>

        <ol className="mt-20">
          {services.map((s) => (
            <li
              key={s.id}
              className="grid gap-8 border-t border-[var(--color-rule)] py-16 lg:grid-cols-12 lg:gap-10 lg:py-24"
            >
              <span className="[font-family:var(--font-display)] [font-size:var(--text-3xl)] [font-weight:var(--weight-display)] leading-none text-[var(--color-accent)] lg:col-span-2">
                {s.id}
              </span>

              <div className="lg:col-span-5">
                <h3 className="[font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] leading-none tracking-[var(--tracking-display-lg)]">
                  {s.title}
                </h3>
                <p className="mt-6 max-w-md text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]">
                  {s.outcome}
                </p>
                <Link
                  href={s.href}
                  className="mt-8 inline-flex items-center gap-2 border-b border-[var(--color-ink)] pb-1 font-semibold transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  Explore {s.title} <span aria-hidden="true">→</span>
                </Link>
              </div>

              <ul className="lg:col-span-5 lg:self-end">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-[var(--color-rule)] py-4 text-[length:var(--text-base)] text-[var(--color-ink-soft)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
