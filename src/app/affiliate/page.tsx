import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AffiliatePageClient } from "@/components/affiliate/affiliate-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Recommendations",
  description: "Products and services recommended by our certified newborn specialists. Everything your family needs, carefully curated.",
};

export default function AffiliatePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-primary pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-4">
              Expert Picks
            </p>
            <h1 className="font-playfair text-5xl font-semibold text-white mb-4">
              Recommended Essentials
            </h1>
            <p className="font-cormorant text-xl text-white/60 max-w-2xl mx-auto">
              Products and services our certified specialists trust and recommend
              to every family in their care.
            </p>
            <p className="font-inter text-xs text-white/30 mt-4">
              * This page contains affiliate links. We may earn a small commission at no extra cost to you.
            </p>
          </div>
        </div>
        <AffiliatePageClient />
      </main>
      <Footer />
    </>
  );
}
