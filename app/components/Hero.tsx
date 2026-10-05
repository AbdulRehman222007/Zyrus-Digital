import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#EAD8C0] to-[#FFF5E8] py-20 lg:py-0 overflow-hidden">

      <div className="max-w-[1400px] w-full mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 relative z-10">

        <div className="lg:col-span-7 flex flex-col justify-center lg:pr-10 xl:pr-20">

          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#8A5A3B] animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#8A5A3B] uppercase">
              Available for new projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-[#33241F] font-bold">
            We build online stores that <br className="hidden lg:block" />
            <span className="font-serif italic text-[#8A5A3B] font-normal">load fast</span> and <br className="hidden lg:block" />
            <span className="font-serif italic text-[#8A5A3B] font-normal">sell.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#5A4A45] max-w-xl font-light leading-relaxed">
            Shopify and WooCommerce development, launch, and social media growth for e-commerce brands that demand excellence.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-3 bg-[#8A5A3B] text-[#FFF5E8] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#6F472D] hover:scale-[1.02] shadow-[0_10px_30px_-10px_rgba(138,90,59,0.5)] overflow-hidden"
            >
              <span className="relative z-10">Get a free store review</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href="#work"
              className="group flex items-center justify-center gap-3 bg-transparent text-[#33241F] font-semibold px-8 py-4 rounded-full border border-[#33241F]/20 transition-all duration-300 hover:border-[#33241F] hover:bg-[#33241F]/5"
            >
              See our work
              <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-10 lg:mt-0">
          <div className="relative w-full h-[450px] lg:h-[750px] rounded-[2rem] overflow-hidden shadow-2xl lg:-mr-20 xl:-mr-40">
            <Image
              src="/assets/work/team-working.jpg"
              alt="Zyrus Agency team collaborating"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#33241F]/40 via-transparent to-transparent"></div>
          </div>

          <div className="absolute bottom-6 -left-4 sm:-left-12 bg-[#FFF5E8]/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/40 flex flex-col gap-3 w-[280px] max-w-[calc(100vw-2rem)] z-20">

            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-full bg-[#8A5A3B]/10 flex items-center justify-center shrink-0 text-[#8A5A3B]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span className="text-sm font-bold text-[#33241F] leading-tight">What you get:</span>
            </div>

            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2 text-[11px] text-[#5A4A45] font-medium leading-tight">
                <span className="text-[#8A5A3B] mt-0.5">•</span>
                A personalized PDF audit of your current store.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-[#5A4A45] font-medium leading-tight">
                <span className="text-[#8A5A3B] mt-0.5">•</span>
                3 actionable recommendations to increase conversions.
              </li>
              <li className="flex items-start gap-2 text-[11px] text-[#5A4A45] font-medium leading-tight">
                <span className="text-[#8A5A3B] mt-0.5">•</span>
                No sales pitch, just honest strategy.
              </li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}