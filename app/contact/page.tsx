import type { Metadata } from "next";
import ContactIntro from "../components/ContactIntro";
import ContactForm from "../components/ContactForm";

const title = "Book a Free Store Review";
const description =
  "Tell us about your store and what's holding it back. Get a free personalized PDF audit with three actionable recommendations. No sales pitch.";

export const metadata: Metadata = {
  title, // layout template adds "| Zyrus Digital"
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | Zyrus Digital`,
    description,
    url: "/contact",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-paper)] px-[var(--gutter)] pb-[var(--section-y)] pt-40 text-[var(--color-ink)]">
      <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <ContactIntro />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
