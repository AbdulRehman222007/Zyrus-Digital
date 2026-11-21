import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="bg-[var(--color-paper)] px-[var(--gutter)] pb-[var(--section-y)] pt-40 text-[var(--color-ink)]">
      <div className="mx-auto max-w-[90rem]">
        <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
          Error 404
        </p>

        <h1 className="mt-8 max-w-4xl [font-family:var(--font-display)] [font-size:var(--text-3xl)] [font-weight:var(--weight-display)] leading-[var(--leading-tight)] tracking-[var(--tracking-display-xl)]">
          This page{" "}
          <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
            does not exist.
          </em>
        </h1>

        <p className="mt-10 max-w-xl text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]">
          The link may be out of date or mistyped. Start from one of these pages instead.
        </p>

        <nav aria-label="Helpful links" className="mt-16 grid gap-6 border-t border-[var(--color-rule)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between border-b border-[var(--color-rule)] pb-4 [font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              {l.label}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
