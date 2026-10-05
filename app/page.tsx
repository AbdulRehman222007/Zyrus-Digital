import Hero from "./components/Hero";
import Proof from "./components/Proof";
import Offer from "./components/Offer";
import CaseStudy from "./components/CaseStudy";
import MoreWork from "./components/MoreWork";
import Process from "./components/Process";
import TestimonialFaq from "./components/TestimonialFaq";
import FinalCta from "./components/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proof />
      <div id="services" className="scroll-mt-20">
        <Offer />
      </div>
      <CaseStudy />
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