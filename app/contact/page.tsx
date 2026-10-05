// app/contact/page.tsx
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactIntro from "../components/ContactIntro";
import ContactForm from "../components/ContactForm";

const title = "Book a Free Store Review";
const description =
  "Tell us about your store and what's holding it back. Get a free personalized PDF audit with 3 actionable recommendations. No sales pitch.";

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
    <>
      <main className="relative isolate overflow-hidden bg-[#EAD8C0] pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="pointer-events-none absolute -right-40 -top-40 hidden h-[38rem] w-[38rem] rounded-full bg-[#D9B48F]/40 blur-[130px] md:block" />
        <div className="pointer-events-none absolute -left-48 top-1/3 hidden h-[26rem] w-[26rem] rounded-full bg-[#8A5A3B]/10 blur-[120px] md:block" />

        <div className="relative mx-auto grid max-w-[1400px] items-stretch gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <ContactIntro />
          <ContactForm />
        </div>
      </main>
    </>
  );
}