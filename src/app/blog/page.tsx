import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlogPageClient } from "@/components/blog/blog-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Resources — Blog",
  description: "Evidence-based articles on newborn sleep, feeding, postpartum recovery, and baby development from certified specialists.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-primary pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-4">
              Resource Center
            </p>
            <h1 className="font-playfair text-5xl font-semibold text-white mb-4">
              Expert Resources
            </h1>
            <p className="font-cormorant text-xl text-white/60 max-w-2xl mx-auto">
              Evidence-based guidance from certified newborn specialists. Real answers
              for real parents.
            </p>
          </div>
        </div>
        <BlogPageClient />
      </main>
      <Footer />
    </>
  );
}
