"use client";

import Image from "next/image";

type Project = {
  name: string;
  tags: string[];
  img: string;
  imgMobile?: string;
  soon: boolean;
  url?: string;
  domain: string;
};

const projects: Project[] = [
  {
    name: "Convex Consulting",
    tags: ["Redesign", "Socials"],
    img: "convexconsulting-desktop.png",
    imgMobile: "convexconsulting-mobile.png",
    soon: false,
    url: "https://convexconsulting.com.pk",
    domain: "convexconsulting.com.pk",
  },
  {
    name: "ChampionShoes",
    tags: ["Custom Shopify"],
    img: "championshoes-desktop.png",
    imgMobile: "championshoes-mobile.png",
    soon: false,
    url: "https://championshoes.pk",
    domain: "championshoes.pk",
  },
  {
    name: "Zohaibtex",
    tags: ["Launching soon"],
    img: "zilpk-desktop.png",
    imgMobile: "zilpk-mobile.png",
    soon: true,
    url: "#",
    domain: "zilpk.com",
  },
];

export default function MoreWork() {
  return (
    <section className="py-24 md:py-32 bg-[#FFF5E8]">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold text-[#33241F] tracking-tight">
            Selected <span className="font-serif italic text-[#8A5A3B] font-normal">Work.</span>
          </h2>
          <p className="text-[#5A4A45] max-w-xs text-sm font-medium leading-relaxed md:text-right">
            A collection of brands we&apos;ve helped launch, redesign, and scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.soon ? "#" : p.url}
              target={p.soon ? "_self" : "_blank"}
              rel={p.soon ? "" : "noopener noreferrer"}
              onClick={(e) => p.soon && e.preventDefault()}
              className={`group block ${p.soon ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              <div
                className={`rounded-2xl overflow-hidden mb-6 bg-[#EAD8C0] border border-[#D9B48F]/60 transition-all duration-500 ${
                  p.soon ? "opacity-80" : "group-hover:shadow-2xl group-hover:border-[#8A5A3B]/30"
                }`}
              >
                <div className="h-8 bg-[#EAD8C0] border-b border-[#D9B48F]/60 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  <div className="ml-4 w-1/2 h-4 bg-[#FFF5E8]/50 rounded-full border border-[#D9B48F]/30 flex items-center px-2 overflow-hidden">
                    <span className="text-[9px] text-[#8A5A3B]/50 font-medium truncate">
                      {p.domain}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={`/assets/work/${p.img}`}
                    alt={p.name}
                    width={1920}
                    height={1080}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="hidden h-auto w-full md:block"
                  />
                  <Image
                    src={`/assets/work/${p.imgMobile || p.img}`}
                    alt={p.name}
                    width={1080}
                    height={1920}
                    sizes="100vw"
                    className="block h-auto w-full md:hidden"
                  />

                  {!p.soon && (
                    <div className="absolute inset-0 bg-[#33241F]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                      <span className="bg-[#FFF5E8] text-[#33241F] font-bold text-sm px-6 py-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                        View Live Site
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                  )}

                  {p.soon && (
                    <span className="absolute top-3 right-3 bg-[#8A5A3B]/95 backdrop-blur-md text-[#FFF5E8] text-[10px] font-bold px-3.5 py-1.5 rounded-full tracking-[0.2em] uppercase border border-white/20 shadow-md">
                      Launching Soon
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3
                    className={`text-2xl font-bold text-[#33241F] mb-2 transition-colors duration-300 ${
                      p.soon ? "" : "group-hover:text-[#8A5A3B]"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-bold tracking-wider uppercase bg-[#EAD8C0] text-[#5A4A45] px-3 py-1.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`w-10 h-10 rounded-full border border-[#D9B48F] flex items-center justify-center text-[#8A5A3B] transition-all duration-300 shrink-0 ${
                    p.soon
                      ? ""
                      : "group-hover:bg-[#8A5A3B] group-hover:text-[#FFF5E8] group-hover:border-[#8A5A3B]"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        p.soon
                          ? "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          : "M5 19L19 5M19 5v10M19 5H9"
                      }
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}