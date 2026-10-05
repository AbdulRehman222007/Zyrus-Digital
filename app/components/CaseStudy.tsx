import Image from "next/image";

const results = [
  { label: "Mobile Speed", value: "80%+" },
  { label: "SEO Score", value: "100/100" },
  { label: "Store Built", value: "From Scratch" },
];

export default function CaseStudy() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#EAD8C0] overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-[#33241F] opacity-[0.02] whitespace-nowrap pointer-events-none z-0 tracking-tighter">
        SWRV
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          {/* Left: Image with overlapping stat card */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#FFF5E8]">
              <Image
                src="/assets/work/swrv-desktop.png"
                alt="SWRV Attire storefront"
                width={1200}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#33241F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -bottom-8 right-8 md:right-16 bg-[#FFF5E8]/95 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(138,90,59,0.3)] border border-[#D9B48F]/50 z-20">
              <div className="flex flex-col gap-4">
                {results.map((r, i) => (
                  <div key={i} className="flex items-center justify-between gap-8 border-b border-[#D9B48F]/30 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-bold text-[#8A5A3B] uppercase tracking-wider">{r.label}</span>
                    <span className="text-lg font-bold text-[#33241F]">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Editorial Text */}
          <div className="lg:col-span-5 lg:pl-16 xl:pl-24 flex flex-col justify-center mt-12 lg:mt-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#8A5A3B]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#8A5A3B] uppercase">
                Featured Case Study
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#33241F] tracking-tight leading-[1.1] mb-6">
              SWRV <br />
              <span className="font-serif italic text-[#8A5A3B] font-normal">Attire.</span>
            </h2>
            
            <p className="text-lg text-[#5A4A45] font-light leading-relaxed mb-10">
              Built from scratch, with socials fully managed by us. We took SWRV from a concept to a thriving online store, focusing on speed, aesthetic, and conversion.
            </p>

            <a
              href="/portfolio/swrv-attire"
              className="group self-start flex items-center gap-3 text-sm font-bold text-[#33241F] uppercase tracking-widest hover:text-[#8A5A3B] transition-colors duration-300"
            >
              Read the full case study
              <span className="w-10 h-px bg-[#33241F] group-hover:bg-[#8A5A3B] group-hover:w-16 transition-all duration-300"></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}