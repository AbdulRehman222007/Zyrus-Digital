"use client";

const steps = [
  { step: "01", title: "Discover", desc: "Audit, strategy, and goal setting." },
  { step: "02", title: "Design", desc: "Wireframes, UI/UX, and client approval." },
  { step: "03", title: "Build", desc: "Development, integrations, and QA testing." },
  { step: "04", title: "Launch & Grow", desc: "Go live, SEO, and marketing handoff." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#EAD8C0] overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFF5E8] rounded-full blur-[120px] opacity-40 pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#8A5A3B]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#8A5A3B] uppercase">
                How we work
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#33241F] tracking-tight max-w-2xl">
              A proven process for <span className="font-serif italic text-[#8A5A3B] font-normal">predictable growth.</span>
            </h2>
          </div>
          <p className="text-[#5A4A45] max-w-sm text-lg font-light leading-relaxed md:text-right">
            We don't just build stores. We engineer scalable e-commerce systems designed for longevity.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-[2px] bg-gradient-to-r from-[#D9B48F] via-[#8A5A3B]/40 to-[#D9B48F] z-0"></div>

          {steps.map((s, index) => (
            <div
              key={s.step}
              className="group relative bg-[#FFF5E8]/70 backdrop-blur-lg p-8 rounded-[2rem] border border-[#D9B48F]/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(138,90,59,0.2)] hover:-translate-y-2 hover:bg-[#FFF5E8] z-10"
            >
              
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#8A5A3B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-light text-[#8A5A3B] transition-transform duration-500 group-hover:scale-110 origin-left">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#D9B48F] flex items-center justify-center text-[#8A5A3B] bg-[#FFF5E8] group-hover:bg-[#8A5A3B] group-hover:text-[#FFF5E8] group-hover:border-[#8A5A3B] transition-all duration-300 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={index === 3 ? "M5 13l4 4L19 7" : "M9 5l7 7-7 7"}></path>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#33241F] mb-3 group-hover:text-[#8A5A3B] transition-colors duration-300">
                  {s.title}
                </h3>
                
                <p className="text-[15px] text-[#5A4A45] leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}