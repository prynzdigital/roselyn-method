"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/booking", label: "Book a Consultation" },
      { href: "/store", label: "Sleep Guides & Resources" },
      { href: "/affiliate", label: "Recommended Essentials" },
    ],
  },
  { href: "/blog", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-widest font-inter">
        <span className="text-secondary">✦</span>{" "}
        Free Newborn Sleep Checklist with every newsletter signup{" "}
        <span className="text-secondary">✦</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="The Roselyn Method"
              width={48}
              height={48}
              className="rounded-full object-cover"
              priority
            />
            <div className="hidden sm:block">
              <p
                className={cn(
                  "font-playfair text-sm font-semibold leading-tight transition-colors",
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                )}
              >
                The Roselyn Method
              </p>
              <p
                className={cn(
                  "font-cormorant text-xs italic transition-colors",
                  isScrolled || !isHomePage ? "text-secondary" : "text-accent"
                )}
              >
                Night Nurse. Better Nights. Brighter Days.
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-inter font-medium transition-colors rounded",
                      isScrolled || !isHomePage
                        ? "text-foreground hover:text-secondary"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg border border-border shadow-xl py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:text-secondary hover:bg-muted font-inter transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={cn(
                    "px-4 py-2 text-sm font-inter font-medium transition-colors rounded",
                    pathname === link.href
                      ? isScrolled || !isHomePage
                        ? "text-secondary"
                        : "text-accent"
                      : isScrolled || !isHomePage
                      ? "text-foreground hover:text-secondary"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/store" aria-label="Shop">
              <ShoppingBag
                className={cn(
                  "h-5 w-5 transition-colors",
                  isScrolled || !isHomePage ? "text-foreground hover:text-secondary" : "text-white hover:text-accent"
                )}
              />
            </Link>
            <Link href="/auth/signin">
              <Button
                variant={isScrolled || !isHomePage ? "secondary" : "outline"}
                size="sm"
                className={cn(
                  !isScrolled && isHomePage && "border-white text-white hover:bg-white hover:text-primary"
                )}
              >
                <User className="h-3.5 w-3.5" />
                Sign In
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" className="bg-secondary text-primary hover:bg-accent font-semibold">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded transition-colors",
              isScrolled || !isHomePage ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-3 mb-1">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-3 py-2.5 text-sm text-foreground hover:text-secondary font-inter"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={cn(
                    "block px-3 py-2.5 text-sm font-inter font-medium rounded",
                    pathname === link.href ? "text-secondary bg-muted" : "text-foreground hover:text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 flex flex-col gap-2 border-t border-border mt-4">
              <Link href="/auth/signin">
                <Button variant="secondary" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="sm" className="w-full">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
