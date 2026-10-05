// app/about/page.tsx
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutClient from "./AboutClient";
import { siteUrl } from "./content";

const description =
  "Zyrus Digital is a digital marketing and web development agency in Karachi. We build fast online stores and grow them through SEO, social media and paid channels.";

export const metadata: Metadata = {
  title: "About Us", // layout template adds "| Zyrus Digital"
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Zyrus Digital",
    description,
    url: "/about",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Zyrus Digital",
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "ProfessionalService",
    name: "Zyrus Digital",
    url: siteUrl,
    description,
    email: "zyrusdigital@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}