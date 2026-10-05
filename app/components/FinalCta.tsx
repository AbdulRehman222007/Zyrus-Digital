import Link from "next/link";
export default function FinalCta() {
  return (
    <section id="contact" className="py-20 bg-[#33241F] text-center">
      <div className="max-w-2xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFF5E8] mb-3">
          Have a store to build or fix?
        </h2>
        <p className="text-[#EAD8C0] mb-8">
          Get a free, no-obligation review of your current store.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
  href="/contact"
  className="bg-[#FFF5E8] text-[#33241F] font-semibold px-6 py-3.5 rounded-md hover:bg-[#EAD8C0] transition-colors"
>
  Book a free review
</Link>
          <a href="#" className="border border-[#FFF5E8] text-[#FFF5E8] font-semibold px-6 py-3.5 rounded-md hover:bg-white/10 transition-colors">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}