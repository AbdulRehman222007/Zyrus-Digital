const points = [
  "A personalized PDF audit of your current store",
  "Three recommendations to raise conversions",
  "No sales pitch, just honest strategy",
];

const work = ["SWRV Attire", "ChampionShoes", "Convex Consulting"];

export default function ContactIntro() {
  return (
    <div className="flex flex-col justify-between gap-16 lg:pt-6">
      <div>
        <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
          Free store review
        </p>

        <h1 className="mt-8 [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
          Tell us about{" "}
          <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
            your store.
          </em>
        </h1>

        <p className="mt-8 max-w-md text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]">
          The more specific you are about your niche and your biggest problem, the more useful your audit will be. It takes about two minutes.
        </p>

        <ul className="mt-12 border-t border-[var(--color-rule)]">
          {points.map((p, i) => (
            <li
              key={p}
              className="flex gap-6 border-b border-[var(--color-rule)] py-5 text-[length:var(--text-base)]"
            >
              <span className="pt-1 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--color-accent)]">
                0{i + 1}
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-mute)]">
            Recent work
          </p>
          <ul className="mt-4 space-y-2 text-[length:var(--text-base)] text-[var(--color-ink-soft)]">
            {work.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-mute)]">
            Prefer email
          </p>
          <a
            href="mailto:zyrusdigital@gmail.com"
            className="mt-4 inline-block border-b border-current pb-1 font-semibold transition-colors duration-300 hover:text-[var(--color-accent)]"
          >
            zyrusdigital@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
