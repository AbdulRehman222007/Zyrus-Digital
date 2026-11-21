import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import {
  Bricolage_Grotesque,
  Source_Serif_4,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

// Use environment variable if available, otherwise fallback to Vercel URL
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zyrusdigital.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zyrus Digital | Digital Marketing & Web Development Agency",
    template: "%s | Zyrus Digital",
  },
  description:
    "Zyrus Digital is a digital marketing agency in Karachi. We build fast Shopify and WooCommerce stores and grow brands with SEO, social media management and paid advertising.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Zyrus Digital",
    title: "Zyrus Digital | Digital Marketing & Web Development Agency",
    description: "We build online stores that load fast and sell, then grow them.",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zyrus Digital",
  url: siteUrl,
  email: "zyrusdigital@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  areaServed: ["Pakistan", "GCC", "Singapore"],
  serviceType: [
    "Digital marketing",
    "Web development",
    "Shopify development",
    "WooCommerce development",
    "SEO",
    "Social media management",
    "Paid advertising",
    "Email marketing",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <SmoothScroll>
    <Navbar />
    <div className="flex-1">{children}</div>
    <Footer />
  </SmoothScroll>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
</body>
    </html>
  );
}
