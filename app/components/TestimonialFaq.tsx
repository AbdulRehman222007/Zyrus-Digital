const testimonials = [
  {
    quote: "Zyrus Agency built our website from scratch and continues to manage our digital marketing. They understood our vision and turned it into a website and online presence that genuinely represents our brand.",
    role: "Founder, SWRV Attire",
    initials: "AR",
    rating: 5
  }
];

const faqs = [
  { 
    q: "How much does a new store cost?", 
    a: "Every project is unique. Pricing depends on the complexity of the design, custom features, and integrations. We provide a detailed custom quote after our initial discovery call." 
  },
  { 
    q: "Do you use pre-made templates?", 
    a: "No. We build custom themes tailored specifically to your brand's identity and performance goals, ensuring a unique user experience that converts." 
  },
  { 
    q: "Who owns the code after launch?", 
    a: "You do. Upon final payment, full ownership of the codebase, design assets, and integrations is transferred entirely to you." 
  }, 
  { 
    q: "Do you offer ongoing support?", 
    a: "Absolutely. We offer tailored monthly retainer packages for maintenance, performance monitoring, marketing, and continued growth." 
  },
];

export default function TestimonialFaq() {
  return (
    <section className="relative py-24 md:py-32 bg-[#EAD8C0] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A5A3B]/20 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#8A5A3B]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#8A5A3B] uppercase">
                Client Love
              </span>
            </div>

            {testimonials.map((t, index) => (
              <div key={index} className="relative bg-[#FFF5E8] p-10 md:p-12 rounded-[2rem] border border-[#D9B48F]/60 shadow-[0_20px_40px_-15px_rgba(138,90,59,0.15)]">
                <div className="absolute top-8 left-8 text-8xl font-serif text-[#8A5A3B]/10 leading-none select-none pointer-events-none">
                  “
                </div>
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6 text-[#8A5A3B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-serif italic text-[#33241F] leading-relaxed mb-10">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#EAD8C0] border-2 border-[#D9B48F] flex items-center justify-center overflow-hidden shrink-0">
                      <span className="text-lg font-bold text-[#8A5A3B]">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#33241F]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <div className="mb-10">
              <h3 className="text-3xl md:text-5xl font-bold text-[#33241F] tracking-tight mb-4">
                Frequently asked <span className="font-serif italic text-[#8A5A3B] font-normal">questions.</span>
              </h3>
              <p className="text-[#5A4A45] text-lg font-light">
                Everything you need to know before we start building.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((f) => (
                <details 
                  key={f.q} 
                  className="group bg-[#FFF5E8]/60 backdrop-blur-sm border border-[#D9B48F]/50 rounded-2xl transition-all duration-300 hover:bg-[#FFF5E8] hover:border-[#8A5A3B]/30 open:bg-[#FFF5E8] open:shadow-lg open:border-[#8A5A3B]/30"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-bold text-lg text-[#33241F] group-open:text-[#8A5A3B] transition-colors pr-4">
                      {f.q}
                    </span>
                    
                    <div className="w-8 h-8 rounded-full border border-[#D9B48F] flex items-center justify-center shrink-0 bg-[#FFF5E8] group-open:bg-[#8A5A3B] group-open:border-[#8A5A3B] transition-all duration-300">
                      <svg 
                        className="w-4 h-4 text-[#8A5A3B] group-open:text-[#FFF5E8] transition-transform duration-300 group-open:rotate-45" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    </div>
                  </summary>
                  
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[#5A4A45] leading-relaxed border-t border-[#D9B48F]/30 pt-4">
                      {f.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}