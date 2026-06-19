import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductDetailClient } from "@/components/store/product-detail-client";
import type { Metadata } from "next";

const products: Record<string, {
  slug: string; name: string; description: string; longDescription: string;
  price: number; comparePrice: number | null; rating: number; reviews: number;
  emoji: string; badge: string | null; features: string[]; included: string[];
  faqs: { q: string; a: string }[];
}> = {
  "ultimate-sleep-guide": {
    slug: "ultimate-sleep-guide",
    name: "Ultimate Sleep Guide for New Parents",
    description: "The comprehensive guide to establishing healthy sleep foundations for your newborn.",
    longDescription: "Our most popular resource, the Ultimate Sleep Guide covers every aspect of newborn sleep from week 1 through month 4. Created by certified Newborn Care Specialists, this guide combines the latest sleep science with practical, compassionate guidance that works in the real world. Whether you're dealing with frequent night wakings, trouble settling, or simply want to establish healthy sleep foundations from day one — this guide has you covered.",
    price: 2999, comparePrice: 4999, rating: 4.9, reviews: 847,
    emoji: "🌙", badge: "Bestseller",
    features: ["Week-by-week sleep schedule", "Age-appropriate wake windows", "Settling techniques for every temperament", "Troubleshooting common sleep issues", "16 printable tracking charts", "Partner support guide"],
    included: ["47-page PDF guide", "16 printable chart templates", "Quick reference card", "Emergency troubleshooting checklist"],
    faqs: [
      { q: "What age range does this guide cover?", a: "This guide covers birth through 4 months (approximately 16 weeks), with detailed week-by-week guidance." },
      { q: "Is this a sleep training guide?", a: "This guide covers both gentle and graduated approaches. We present multiple evidence-based methods so you can choose what feels right for your family." },
      { q: "Will I receive physical copies?", a: "This is a digital download only. After purchase, you can download and print the included charts and templates." },
    ],
  },
  "feeding-schedule-templates": {
    slug: "feeding-schedule-templates",
    name: "Feeding Schedule Templates",
    description: "30+ beautifully designed feeding trackers for breastfeeding, formula, and combination feeding.",
    longDescription: "Tracking feeds doesn't have to be overwhelming. Our beautifully designed templates make it easy to log, analyze, and adjust your baby's feeding schedule — whether you're breastfeeding, formula feeding, or doing a combination of both. Created with input from our IBCLC-certified lactation consultants.",
    price: 1299, comparePrice: null, rating: 4.8, reviews: 524,
    emoji: "🍼", badge: "New",
    features: ["30+ printable templates", "Breastfeeding duration & side tracker", "Formula amount log", "Solid food introduction tracker", "Pediatrician visit prep template", "Freezer stash calculator"],
    included: ["30+ PDF templates", "Digital fillable versions", "Printable log sheets", "Quick start guide"],
    faqs: [
      { q: "Are these compatible with any printer?", a: "Yes, all templates are formatted for standard US Letter and A4 paper sizes." },
      { q: "Is there a digital fill-in option?", a: "Yes! All templates come in both print-ready PDF and digitally fillable PDF formats." },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug] ?? {
    slug, name: "Sleep Resource", description: "Expert sleep guidance for new parents.",
    longDescription: "A premium resource created by certified newborn care specialists.",
    price: 1999, comparePrice: null, rating: 4.8, reviews: 100,
    emoji: "📖", badge: null,
    features: ["Expert guidance", "Printable templates", "Evidence-based strategies"],
    included: ["Digital PDF guide"],
    faqs: [],
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ProductDetailClient product={product} />
      </main>
      <Footer />
    </>
  );
}
