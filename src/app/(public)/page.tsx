import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { FeaturedProductsSection } from "@/components/home/featured-products";
import { ExpertsSection } from "@/components/home/experts-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { RecommendedSection } from "@/components/home/recommended-section";
import { BlogPreviewSection } from "@/components/home/blog-preview";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { FAQSection } from "@/components/home/faq-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Roselyn Method — Expert Newborn Care & Sleep Guidance",
  description:
    "Helping new parents sleep better, heal better, and thrive. Expert newborn guidance, personalized consultations, and premium sleep guides for modern families.",
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <HowItWorksSection />
      <FeaturedProductsSection />
      <ExpertsSection />
      <TestimonialsSection />
      <RecommendedSection />
      <BlogPreviewSection />
      <NewsletterSection />
      <FAQSection />
    </div>
  );
}
