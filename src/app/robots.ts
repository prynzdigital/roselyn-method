import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://roselynmethod.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/store", "/blog", "/booking", "/affiliate", "/about", "/contact"],
        disallow: ["/dashboard", "/admin", "/consultant", "/api", "/auth"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
