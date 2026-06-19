import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://roselynmethod.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/store`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/booking`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${BASE_URL}/affiliate`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const productPages = [
    "ultimate-sleep-guide",
    "feeding-schedule-templates",
    "newborn-essentials-checklist",
    "sleep-regression-guide",
    "postpartum-recovery-guide",
    "complete-newborn-bundle",
  ].map((slug) => ({
    url: `${BASE_URL}/store/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = [
    "newborn-sleep-schedule-week-by-week",
    "breastfeeding-tips-for-new-mothers",
    "postpartum-recovery-timeline",
    "4-month-sleep-regression-guide",
    "establishing-feeding-routine",
    "nursery-setup-guide",
  ].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
