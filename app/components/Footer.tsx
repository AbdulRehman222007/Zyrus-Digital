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
];

// TODO before launch: replace the placeholder values with real accounts.
// Remove any entry you don't use, so no placeholder reaches the live site.
const socials = [
  { label: "Email", href: "mailto:zyrusdigital@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/92XXXXXXXXXX" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/YOUR-PAGE" },
  { label: "Instagram", href: "https://www.instagram.com/zyrusdigital.co/" },
];

const linkClass =
  "text-[var(--color-paper)]/80 transition-colors duration-300 hover:text-[var(--color-accent)]";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-inverse-bg)] px-[var(--gutter)] pb-10 pt-24 text-[var(--color-inverse-ink)]">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="[font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
              Have a store to build or fix?
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-[var(--color-inverse-ink)] px-8 py-4 font-semibold text-[var(--color-inverse-bg)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]"
            >
              Get your free store review <span aria-hidden="true">→</span>
            </Link>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 lg:col-span-4 lg:col-start-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-5 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:col-span-3">
            <h3 className="mb-5 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
              Contact
            </h3>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-[var(--color-paper)]/15 pt-8 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-paper)]/60 md:flex-row md:justify-between">
          <span>© 2026 Zyrus Digital. Pakistan.</span>
          <span>Shopify, WooCommerce, performance, growth</span>
        </div>
      </div>
    </footer>
  );
}
