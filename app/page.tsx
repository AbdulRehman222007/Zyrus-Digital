import Hero from "./components/Hero";
import Proof from "./components/Proof";
import CaseStudy from "./components/CaseStudy";
import Offer from "./components/Offer";
import MoreWork from "./components/MoreWork";
import Process from "./components/Process";
import TestimonialFaq from "./components/TestimonialFaq";
import FinalCta from "./components/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proof />

      <section className="bg-[var(--color-paper)] px-[var(--gutter)] py-[var(--section-y)] text-[var(--color-ink)]">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12">
          <h2 className="[font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)] lg:col-span-7">
            Slow stores lose sales before anyone reads the copy.
          </h2>
          <p className="self-end text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)] lg:col-span-4 lg:col-start-9">
            Most ecommerce founders lose customers to pages that take too long, checkouts that break on a phone, and agencies that deliver something pretty but not fast. We start with performance, then design what sits on top of it.
          </p>
        </div>
      </section>

      <CaseStudy />

      <div id="services" className="scroll-mt-20">
        <Offer />
      </div>
      <div id="work" className="scroll-mt-20">
        <MoreWork />
      </div>
      <div id="process" className="scroll-mt-20">
        <Process />
      </div>
      <TestimonialFaq />
      <FinalCta />
    </main>
  );
}
