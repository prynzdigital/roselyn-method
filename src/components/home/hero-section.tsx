"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mother-newborn.jpg"
          alt="Mother holding newborn baby"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-primary/75" />
        {/* Subtle gradient over image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30" />
      </div>

      {/* Blush accent blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="font-inter text-xs text-white/80 tracking-wide">
                Trusted by 2,000+ families
              </span>
            </motion.div>

            {/* Logo on hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <Image
                src="/logo.jpeg"
                alt="The Roselyn Method"
                width={72}
                height={72}
                className="rounded-full border-2 border-secondary/40 shadow-2xl"
              />
              <div>
                <p className="font-inter text-xs text-secondary uppercase tracking-widest">
                  The Roselyn Method
                </p>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
            >
              Helping New Parents{" "}
              <span className="italic text-secondary">Sleep Better</span>,{" "}
              Heal Better, and Thrive.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-cormorant text-xl text-white/70 leading-relaxed mb-10 max-w-lg"
            >
              Expert newborn guidance, personalized consultations, and trusted
              support for every stage of early parenthood.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/booking">
                <Button
                  size="lg"
                  className="bg-secondary text-primary hover:bg-accent font-semibold group w-full sm:w-auto"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/store">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto"
                >
                  Shop Sleep Guides
                </Button>
              </Link>
            </motion.div>

            {/* Social proof row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              {[
                { value: "2,000+", label: "Families Supported" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "5★", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-playfair text-2xl font-semibold text-secondary">
                    {stat.value}
                  </p>
                  <p className="font-inter text-xs text-white/50 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo frame + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Photo frame */}
            <div className="relative w-80 h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex-shrink-0">
              <Image
                src="/images/hero-mother-newborn.jpg"
                alt="Mother holding newborn baby"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            </div>

            {/* Testimonial card — bottom overlay */}
            <div className="absolute bottom-6 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-cormorant text-base italic text-white/90 leading-relaxed mb-2">
                "Our newborn went from waking every 45 min to 4-hour stretches in one week."
              </p>
              <p className="font-inter text-xs text-white/50">— Sarah M., Mother of newborn</p>
            </div>

            {/* Floating top-right badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-secondary text-primary rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="font-inter text-xs font-semibold">Next available</p>
              <p className="font-playfair text-sm font-bold">Tomorrow, 10am</p>
            </motion.div>

            {/* Floating bottom-left badge */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="font-inter text-xs text-white/60 mb-0.5">Instant Access</p>
              <p className="font-playfair text-sm font-semibold text-white">Sleep Guide Bundle</p>
              <p className="font-inter text-xs text-secondary font-semibold mt-0.5">$29.99</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
