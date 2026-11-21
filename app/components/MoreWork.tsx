import Image from "next/image";

const projects = [
  {
    name: "Convex Consulting",
    tags: ["Redesign", "Social media"],
    desktop: "convexconsulting-desktop.png",
    mobile: "convexconsulting-mobile.png",
    url: "https://convexconsulting.com.pk",
    domain: "convexconsulting.com.pk",
  },
  {
    name: "ChampionShoes",
    tags: ["Custom Shopify"],
    desktop: "championshoes-desktop.png",
    mobile: "championshoes-mobile.png",
    url: "https://championshoes.pk",
    domain: "championshoes.pk",
  },
];

export default function MoreWork() {
  return (
    <section className="bg-[var(--color-paper)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[90rem]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="[font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
            Selected{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              work.
            </em>
          </h2>
          <p className="max-w-sm text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)] md:text-right">
            Brands we have helped launch, redesign, and scale.
          </p>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="group">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper-raised)]">
                  <div className="border-b border-[var(--color-rule)] px-4 py-2.5 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--color-mute)]">
                    {p.domain}
                  </div>

                  <Image
                    src={`/assets/work/${p.desktop}`}
                    alt={`${p.name} homepage`}
                    width={1920}
                    height={1080}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="hidden h-auto w-full transition-transform duration-700 group-hover:scale-[1.02] md:block"
                  />
                  <Image
                    src={`/assets/work/${p.mobile}`}
                    alt={`${p.name} homepage`}
                    width={1080}
                    height={1920}
                    sizes="100vw"
                    className="block h-auto w-full md:hidden"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-inverse-bg)] opacity-0 transition-opacity duration-500 group-hover:opacity-90">
                    <span className="font-semibold text-[var(--color-inverse-ink)]">
                      View live site →
                    </span>
                  </div>
                </div>
              </a>

              <div className="mt-8 flex items-start justify-between gap-6">
                <div>
                  <h3 className="[font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] leading-none tracking-[var(--tracking-display-lg)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                    {p.name}
                  </h3>
                  <p className="mt-4 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-mute)]">
                    {p.tags.join(" / ")}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-[length:var(--text-md)] text-[var(--color-accent)] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
