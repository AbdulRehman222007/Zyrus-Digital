import Image from "next/image";

const clients = [
  { name: "SWRV Attire", img: "swrv.png", scale: "scale-200" },
  { name: "ChampionShoes", img: "championshoes.png", scale: "scale-175" },
  { name: "Convex Consulting", img: "convex.png", scale: "scale-150" },
];

export default function Proof() {
  return (
    <section className="bg-[var(--color-paper)] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] md:text-base">
            Brands we&apos;ve built for
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {clients.map((c) => (
            <div
              key={c.name}
              className="relative flex h-40 items-center justify-center rounded-3xl bg-[var(--color-paper-raised)] p-4 lg:h-48"
            >
              <Image
                src={`/assets/logo/${c.img}`}
                alt={c.name}
                width={200}
                height={100}
                className={`max-h-24 w-auto max-w-[90%] object-contain mix-blend-multiply lg:max-h-28 ${c.scale}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
