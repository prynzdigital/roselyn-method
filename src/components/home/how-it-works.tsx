"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Moon } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: BookOpen,
    title: "Purchase Expert Guides",
    description:
      "Choose from our curated library of evidence-based sleep guides, feeding schedules, and newborn care resources crafted by certified experts.",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Book Personalized Consultations",
    description:
      "Connect one-on-one with our certified newborn specialists for personalized guidance tailored to your baby's unique needs and your family's routine.",
  },
  {
    step: "03",
    icon: Moon,
    title: "Enjoy Better Nights",
    description:
      "Implement proven strategies with ongoing support. Watch your little one — and your whole family — settle into peaceful, restful nights.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="font-playfair text-4xl font-semibold text-primary mb-4">
            How The Roselyn Method Works
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your family's nights and reclaim the
            rest you deserve.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Step number + icon */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-muted border-2 border-border group-hover:border-secondary transition-colors duration-300 flex items-center justify-center shadow-lg">
                  <step.icon className="h-8 w-8 text-secondary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-inter text-xs font-bold text-secondary">
                    {step.step}
                  </span>
                </div>
              </div>

              <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
