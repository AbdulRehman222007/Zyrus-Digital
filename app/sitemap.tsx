// app/sitemap.ts
import type { MetadataRoute } from "next";
import { pillars } from "./services/data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use env variable if available, otherwise fallback to the Vercel URL
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://zyrusdigital.vercel.app";

  // 1. Static routes
  const staticRoutes = ["", "/contact", "/services", "/portfolio", "/about"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic service routes
  const serviceRoutes = pillars.map((p) => ({
    url: `${base}/services/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}