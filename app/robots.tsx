import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Use environment variable if available, otherwise fallback to Vercel URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zyrusdigital.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // If you have an admin or private API route later, you can disallow it here:
      // disallow: ["/api/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}