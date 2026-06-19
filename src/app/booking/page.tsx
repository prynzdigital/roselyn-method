import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BookingPageClient } from "@/components/booking/booking-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a personalized newborn care consultation with a certified specialist. Quick guidance, comprehensive, or ongoing support packages available.",
};

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="bg-primary pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-4">
              Consultations
            </p>
            <h1 className="font-playfair text-5xl font-semibold text-white mb-4">
              Book a Consultation
            </h1>
            <p className="font-cormorant text-xl text-white/60 max-w-2xl mx-auto">
              Personalized, expert guidance from certified newborn specialists.
              Your better nights start here.
            </p>
          </div>
        </div>
        <BookingPageClient />
      </main>
      <Footer />
    </>
  );
}
