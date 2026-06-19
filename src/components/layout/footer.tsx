import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Heart } from "lucide-react";

const footerLinks = {
  Services: [
    { href: "/booking", label: "Book a Consultation" },
    { href: "/store", label: "Sleep Guides" },
    { href: "/affiliate", label: "Recommended Products" },
    { href: "/blog", label: "Educational Resources" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
    { href: "/press", label: "Press" },
  ],
  Support: [
    { href: "/faq", label: "FAQ" },
    { href: "/dashboard", label: "My Account" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.jpeg"
                alt="The Roselyn Method"
                width={52}
                height={52}
                className="rounded-full object-cover border-2 border-secondary/30"
              />
              <div>
                <p className="font-playfair text-base font-semibold text-white">
                  The Roselyn Method
                </p>
                <p className="font-cormorant text-sm italic text-secondary">
                  Night Nurse. Better Nights. Brighter Days.
                </p>
              </div>
            </Link>
            <p className="font-inter text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              Expert newborn guidance, personalized consultations, and trusted support for every stage of early parenthood.
            </p>

            {/* Newsletter mini */}
            <div>
              <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-3">
                Join the community
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
                />
                <button
                  type="submit"
                  className="bg-secondary text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-accent transition-colors"
                >
                  Join
                </button>
              </form>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-secondary transition-colors text-sm font-inter"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-secondary transition-colors text-sm font-inter"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="mailto:hello@roselynmethod.com"
                className="text-white/60 hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-inter text-xs font-semibold text-secondary uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-inter text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} The Roselyn Method. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/40 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-secondary fill-secondary" /> for families everywhere
          </p>
          <p className="font-inter text-xs text-white/40">
            This site contains affiliate links. See our{" "}
            <Link href="/affiliate-disclosure" className="text-secondary hover:text-accent">
              disclosure policy
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
