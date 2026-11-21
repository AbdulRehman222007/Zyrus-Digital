const steps = [
  { n: "01", title: "Discover", text: "Audit, strategy, and goal setting." },
  { n: "02", title: "Design", text: "Wireframes, UI and UX, and client approval." },
  { n: "03", title: "Build", text: "Development, integrations, and QA testing." },
  { n: "04", title: "Launch and grow", text: "Go live, SEO, and marketing handoff." },
];

export default function Process() {
  return (
    <section className="bg-[var(--color-paper)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[90rem]">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
              How we work
            </p>
            <h2 className="mt-6 max-w-2xl [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
              A proven process for{" "}
              <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
                predictable growth.
              </em>
            </h2>
          </div>
          <p className="max-w-sm text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)] md:text-right">
            We do not just build stores. We build systems that keep working after launch.
          </p>
        </div>

        <ol className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[7px] hidden h-px bg-[var(--color-rule-strong)] md:block"
          />
          {steps.map((s) => (
            <li key={s.n} className="relative pt-12">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[15px] w-[15px] rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-paper)]"
              />
              <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] tracking-[var(--tracking-label)] text-[var(--color-mute)]">
                {s.n}
              </p>
              <h3 className="mt-6 [font-family:var(--font-display)] [font-size:var(--text-lg)] [font-weight:var(--weight-display)] leading-none tracking-[var(--tracking-display-lg)]">
                {s.title}
              </h3>
              <p className="mt-5 max-w-[16rem] text-[length:var(--text-base)] leading-[1.5] text-[var(--color-ink-soft)]">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
