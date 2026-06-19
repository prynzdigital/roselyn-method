import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StorePageClient } from "@/components/store/store-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Guides & Resources — Digital Store",
  description:
    "Shop expert-crafted sleep guides, feeding schedule templates, and newborn care resources. Instant digital download after purchase.",
};

export default function StorePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="bg-primary pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-4">
              Digital Store
            </p>
            <h1 className="font-playfair text-5xl font-semibold text-white mb-4">
              Sleep Guides & Resources
            </h1>
            <p className="font-cormorant text-xl text-white/60 max-w-2xl mx-auto">
              Expert-crafted, evidence-based digital guides. Download instantly and
              start seeing results tonight.
            </p>
          </div>
        </div>
        <StorePageClient />
      </main>
      <Footer />
    </>
  );
}
