import Link from "next/link";

export default function WhatYouGet() {
  const services = [
    {
      id: "01",
      title: "Build",
      description: "The foundation of your store.",
      href: "/services/build",
      items: [
        "Shopify & WooCommerce development",
        "Custom theme design",
        "Speed & performance optimization"
      ]
    },
    {
      id: "02",
      title: "Launch",
      description: "Ready for the world.",
      href: "/services/launch",
      items: [
        "Payment gateway integration",
        "Technical SEO setup",
        "Analytics & tracking configuration"
      ]
    },
    {
      id: "03",
      title: "Grow",
      description: "Scaling your revenue.",
      href: "/services/grow",
      items: [
        "Social media management",
        "Paid advertising campaigns",
        "Email marketing automation"
      ]
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#EAD8C0] overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A5A3B]/20 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#8A5A3B]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#8A5A3B] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#33241F] tracking-tight max-w-2xl">
            What you get when you partner with us.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#FFF5E8] p-8 md:p-10 rounded-[2rem] border border-[#D9B48F]/60 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(138,90,59,0.15)] hover:-translate-y-2 hover:border-[#8A5A3B]/40 overflow-hidden"
            >
              
              <div className="absolute top-6 right-8 text-7xl font-black text-[#EAD8C0] opacity-60 group-hover:opacity-100 group-hover:text-[#8A5A3B]/10 transition-all duration-500 pointer-events-none select-none">
                {service.id}
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-[#33241F] mb-2 group-hover:text-[#8A5A3B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-[#8A5A3B] mb-8 tracking-wide uppercase">
                  {service.description}
                </p>

                <ul className="space-y-5">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#33241F]/70">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#8A5A3B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8A5A3B] transition-colors duration-300">
                        <svg 
                          className="w-3 h-3 text-[#8A5A3B] group-hover:text-[#FFF5E8] transition-colors duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-[15px] leading-relaxed font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-6 border-t border-[#D9B48F]/40 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
                  <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-bold text-[#8A5A3B] hover:text-[#33241F] transition-colors">
                    Explore {service.title}
                    <span>→</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}