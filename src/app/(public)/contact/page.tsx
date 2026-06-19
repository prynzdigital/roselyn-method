import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactClient } from "@/components/contact-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with The Roselyn Method team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-primary pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-4">Get In Touch</p>
            <h1 className="font-playfair text-5xl font-semibold text-white mb-4">Contact Us</h1>
            <p className="font-cormorant text-xl text-white/60">We'd love to hear from you.</p>
          </div>
        </div>
        <ContactClient />
      </main>
      <Footer />
    </>
  );
}
