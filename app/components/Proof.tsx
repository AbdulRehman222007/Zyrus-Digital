import Image from "next/image";

const clients = [
  // Added scale classes to match the visual weight of Zohaibtex
  { name: "SWRV Attire", img: "swrv.png", scale: "scale-200" },
  { name: "ChampionShoes", img: "championshoes.png", scale: "scale-175" },
  { name: "Convex Consulting", img: "convex.png", scale: "scale-150" },
  { name: "Zohaibtex (soon)", img: "zohaibtex.png", scale: "scale-100" }, // Left as is since you said it's ok
];

export default function Proof() {
  return (
    <section className="py-24 bg-[#EAD8C0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-bold text-[#8A5A3B] tracking-[0.2em] uppercase">
            Brands we've built for
          </h2>
          <div className="w-12 h-[2px] bg-[#8A5A3B]/30 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group relative flex items-center justify-center h-40 lg:h-48 bg-[#FFF5E8] rounded-3xl p-4
                         shadow-[0_4px_20px_rgba(51,36,31,0.04)] 
                         hover:shadow-[0_12px_40px_rgba(51,36,31,0.12)] 
                         hover:-translate-y-1 transition-all duration-300 ease-out
                         border border-transparent hover:border-[#D9B48F]/50"
            >
              <Image
                src={`/assets/logo/${c.img}`}
                alt={c.name}
                width={200}
                height={100}
                className={`max-h-24 lg:max-h-28 w-auto max-w-[90%] object-contain 
                           mix-blend-multiply 
                           group-hover:grayscale group-hover:opacity-60 group-hover:scale-105 
                           transition-all duration-500 ease-out ${c.scale}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}