const faqs = [
  {
    q: "How much does a new store cost?",
    a: "Every project is different. Pricing depends on design complexity, custom features, and integrations. We provide a detailed quote after our initial discovery call.",
  },
  {
    q: "Do you use ready made templates?",
    a: "No. We build custom themes around your brand and performance goals, so the store is unique and the code stays lean.",
  },
  {
    q: "Who owns the code after launch?",
    a: "You do. On final payment, ownership of the codebase, design assets, and integrations transfers to you.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer monthly packages for maintenance, performance monitoring, marketing, and continued growth.",
  },
];

export default function TestimonialFaq() {
  return (
    <section className="bg-[var(--color-paper)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-ink)]">
      <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
            Questions
          </p>
          <h2 className="mt-6 [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
            Frequently asked{" "}
            <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
              questions.
            </em>
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-t border-[var(--color-rule)] py-7 last:border-b"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [font-family:var(--font-display)] [font-size:var(--text-md)] [font-weight:var(--weight-display-sub)] leading-tight [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="font-[family-name:var(--font-mono)] text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-xl text-[length:var(--text-base)] leading-[1.6] text-[var(--color-ink-soft)]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
