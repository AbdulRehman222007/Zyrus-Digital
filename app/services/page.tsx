// app/services/page.tsx
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Digital Marketing and Web Development Services",
  description:
    "Build, launch and grow your online store. Shopify and WooCommerce development, technical SEO, social media management, paid ads and email marketing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesClient />
    </>
  );
}