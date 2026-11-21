import Link from "next/link";

const stats = [
  { value: "80%+", label: "Mobile speed improvement" },
  { value: "100", label: "SEO score" },
  { value: "Custom", label: "Theme built from scratch" },
];

export default function CaseStudy() {
  return (
    <section
      id="case"
      className="scroll-mt-20 bg-[var(--color-inverse-bg)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-inverse-ink)]"
    >
      <div className="mx-auto max-w-[90rem]">
        <p className="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-accent)]">
          Featured case study
        </p>

        <h2 className="mt-8 max-w-5xl [font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
          SWRV Attire,{" "}
          <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
            from a blank page to a live store.
          </em>
        </h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[length:var(--text-md)] leading-[1.5] opacity-80">
              SWRV is a Karachi streetwear brand. We built its store from the first page, tuned it for mobile speed, and manage its social media alongside the site, so the brand reads the same from Instagram to checkout.
            </p>
            <Link
              href="/portfolio/swrv-attire"
              className="mt-10 inline-flex items-center gap-3 border-b border-current pb-1 font-semibold transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              Read the full case study <span aria-hidden="true">→</span>
            </Link>
          </div>

          <blockquote className="border-l-2 border-[var(--color-accent)] pl-8 lg:col-span-5 lg:col-start-8">
            <p className="[font-family:var(--font-body)] text-[length:var(--text-lg)] italic leading-[1.25]">
              “Zyrus Agency built our website from scratch and continues to manage our digital marketing. They understood our vision and turned it into a website and online presence that genuinely represents our brand.”
            </p>
            <footer className="mt-8 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] opacity-70">
              AR, Founder, SWRV Attire
            </footer>
          </blockquote>
        </div>

        <dl className="mt-24 grid grid-cols-1 border-t border-current/20 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-current/20 py-8 sm:border-b-0 sm:pr-8 sm:pt-8">
              <dt className="order-2 mt-3 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] opacity-70">
                {s.label}
              </dt>
              <dd className="m-0 [font-family:var(--font-display)] [font-size:var(--text-xl)] [font-weight:var(--weight-display)] tracking-[var(--tracking-display-xl)] tabular-nums">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
