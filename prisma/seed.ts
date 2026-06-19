import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  console.log("🌱 Seeding The Roselyn Method database...");

  // Feature Flags
  const featureFlags = [
    { name: "STAFFING_DIVISION", description: "Night Nurse & Doula staffing marketplace", isEnabled: false },
    { name: "AFFILIATE_TRACKING", description: "Advanced affiliate link tracking", isEnabled: true },
    { name: "LIVE_CHAT", description: "Live chat support widget", isEnabled: false },
    { name: "GIFT_CARDS", description: "Digital gift cards", isEnabled: false },
  ];

  for (const flag of featureFlags) {
    await db.featureFlag.upsert({
      where: { name: flag.name },
      update: flag,
      create: flag,
    });
  }

  // Categories
  const categories = [
    { name: "Sleep Guides", slug: "sleep-guides", description: "Evidence-based sleep guides for newborns and infants" },
    { name: "Feeding Resources", slug: "feeding", description: "Breastfeeding, formula, and combination feeding support" },
    { name: "Checklists & Templates", slug: "checklists", description: "Printable checklists and planning templates" },
    { name: "Bundles", slug: "bundles", description: "Multi-guide bundles at discounted prices" },
  ];

  for (const cat of categories) {
    await db.category.upsert({
      where: { slug: cat.slug },
      update: cat,
      create: cat,
    });
  }

  const sleepCategory = await db.category.findUnique({ where: { slug: "sleep-guides" } });
  const feedingCategory = await db.category.findUnique({ where: { slug: "feeding" } });
  const checklistCategory = await db.category.findUnique({ where: { slug: "checklists" } });
  const bundleCategory = await db.category.findUnique({ where: { slug: "bundles" } });

  if (!sleepCategory || !feedingCategory || !checklistCategory || !bundleCategory) {
    throw new Error("Categories not found");
  }

  // Products
  const products = [
    {
      name: "Ultimate Sleep Guide for New Parents",
      slug: "ultimate-sleep-guide",
      description: "The comprehensive guide to establishing healthy sleep foundations for your newborn. Covers weeks 1–16 with proven techniques.",
      price: 29.99,
      comparePrice: 49.99,
      images: [],
      features: ["Week-by-week schedule", "Wake window guide", "Troubleshooting guide", "16 printable charts", "Partner support section"],
      isFeatured: true,
      pageCount: 47,
      fileSize: "3.2 MB",
      categoryId: sleepCategory.id,
    },
    {
      name: "Feeding Schedule Templates",
      slug: "feeding-schedule-templates",
      description: "30+ beautifully designed, evidence-based feeding trackers and schedules.",
      price: 12.99,
      comparePrice: null,
      images: [],
      features: ["30+ templates", "Breastfeeding tracker", "Formula log", "Combo feeding guide"],
      isFeatured: true,
      pageCount: 32,
      fileSize: "1.8 MB",
      categoryId: feedingCategory.id,
    },
    {
      name: "Newborn Essentials Checklist",
      slug: "newborn-essentials-checklist",
      description: "Everything you actually need (and what you can skip) expertly curated.",
      price: 7.99,
      comparePrice: null,
      images: [],
      features: ["Hospital bag list", "Nursery guide", "First week essentials", "Budget picks"],
      isFeatured: true,
      pageCount: 18,
      fileSize: "0.9 MB",
      categoryId: checklistCategory.id,
    },
    {
      name: "Sleep Regression Survival Guide",
      slug: "sleep-regression-guide",
      description: "Navigate the 4-month, 8-month, and 12-month sleep regressions with expert strategies.",
      price: 19.99,
      comparePrice: null,
      images: [],
      features: ["All regression ages", "Action plan templates", "When to seek help"],
      isFeatured: false,
      pageCount: 35,
      fileSize: "2.1 MB",
      categoryId: sleepCategory.id,
    },
    {
      name: "Complete Newborn Bundle",
      slug: "complete-newborn-bundle",
      description: "All four guides bundled together at one discounted price.",
      price: 59.99,
      comparePrice: 85.96,
      images: [],
      features: ["All 4 guides included", "Save $25.97", "Priority support"],
      isFeatured: true,
      pageCount: null,
      fileSize: "8 MB",
      categoryId: bundleCategory.id,
    },
  ];

  for (const product of products) {
    await db.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  // Consultants
  const consultants = [
    {
      name: "Dr. Roselyn Carter",
      email: "roselyn@roselynmethod.com",
      bio: "With over a decade supporting families through the newborn stage, Dr. Carter created The Roselyn Method to bring compassionate, expert care to modern parents.",
      credentials: ["RN, BSN", "Certified Newborn Care Specialist", "Pediatric Sleep Consultant"],
      specialties: ["Newborn Sleep", "Feeding Support", "Postpartum Recovery"],
      yearsExp: 12,
      isActive: true,
    },
    {
      name: "Maria Santos",
      email: "maria@roselynmethod.com",
      bio: "Maria specializes in feeding challenges and sleep foundations, supporting over 500 families with culturally sensitive, evidence-based care.",
      credentials: ["Registered Nurse", "IBCLC Certified", "Sleep Training Expert"],
      specialties: ["Breastfeeding", "Sleep Routines", "Multiple Births"],
      yearsExp: 8,
      isActive: true,
    },
    {
      name: "Jennifer Walsh",
      email: "jennifer@roselynmethod.com",
      bio: "Jennifer brings warmth and expertise to postpartum recovery, helping mothers heal and thrive while navigating early parenthood.",
      credentials: ["Certified Postpartum Doula", "CBE", "Newborn Care Specialist"],
      specialties: ["Postpartum Wellness", "Newborn Care", "Partner Support"],
      yearsExp: 6,
      isActive: true,
    },
  ];

  for (const consultant of consultants) {
    await db.consultant.upsert({
      where: { email: consultant.email },
      update: consultant,
      create: consultant,
    });
  }

  // Testimonials
  const testimonials = [
    {
      name: "Sarah M.", location: "New York, NY", rating: 5,
      quote: "The Roselyn Method changed our lives. We went from complete exhaustion to our baby sleeping 6-hour stretches within two weeks.",
      service: "Comprehensive Consultation", babyAge: "6 weeks", isFeatured: true,
    },
    {
      name: "Priya K.", location: "San Francisco, CA", rating: 5,
      quote: "Dr. Carter's patience and expertise gave me so much confidence. The sleep guide was worth every penny.",
      service: "Ultimate Sleep Guide", babyAge: "3 months", isFeatured: true,
    },
    {
      name: "Amanda & James T.", location: "Chicago, IL", rating: 5,
      quote: "We were skeptical about virtual consultations but Maria was incredible. Highly recommend the ongoing support package.",
      service: "Ongoing Support Package", babyAge: "8 weeks", isFeatured: true,
    },
    {
      name: "Tanya L.", location: "Atlanta, GA", rating: 5,
      quote: "The feeding schedule templates are stunning and practical. My pediatrician even asked where I got them!",
      service: "Feeding Schedule Templates", babyAge: "5 weeks", isFeatured: false,
    },
    {
      name: "Lisa R.", location: "Austin, TX", rating: 5,
      quote: "I booked a quick guidance session and had my first 4-hour sleep that very night. Absolute magic.",
      service: "Quick Guidance Session", babyAge: "2 weeks", isFeatured: true,
    },
  ];

  for (const t of testimonials) {
    await db.testimonial.create({ data: t }).catch(() => null);
  }

  // Blog Posts
  const posts = [
    {
      title: "Your Newborn's Sleep Schedule: A Week-by-Week Guide",
      slug: "newborn-sleep-schedule-week-by-week",
      excerpt: "Understanding your newborn's sleep cycles is the first step to peaceful nights.",
      content: "<p>Full article content here...</p>",
      category: "Sleep", tags: ["sleep", "schedule", "newborn"],
      author: "Dr. Roselyn Carter", readTime: 8, isPublished: true, isFeatured: true,
      publishedAt: new Date("2026-06-01"),
    },
    {
      title: "The First 30 Days of Breastfeeding: What No One Tells You",
      slug: "breastfeeding-tips-for-new-mothers",
      excerpt: "Honest, expert-backed advice for navigating the most challenging weeks of breastfeeding.",
      content: "<p>Full article content here...</p>",
      category: "Feeding", tags: ["breastfeeding", "feeding", "newborn"],
      author: "Maria Santos, RN", readTime: 10, isPublished: true, isFeatured: true,
      publishedAt: new Date("2026-06-05"),
    },
  ];

  for (const post of posts) {
    await db.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  // Settings
  const settings = [
    { key: "SITE_NAME", value: "The Roselyn Method" },
    { key: "SITE_TAGLINE", value: "Night Nurse. Better Nights. Brighter Days." },
    { key: "CONTACT_EMAIL", value: "hello@roselynmethod.com" },
    { key: "BOOKING_ENABLED", value: "true" },
    { key: "STORE_ENABLED", value: "true" },
  ];

  for (const setting of settings) {
    await db.settings.upsert({
      where: { key: setting.key },
      update: setting,
      create: setting,
    });
  }

  console.log("✅ Seed complete!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
