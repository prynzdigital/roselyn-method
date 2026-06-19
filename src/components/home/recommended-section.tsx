"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  { emoji: "🫂", name: "Aden + Anais Swaddles", category: "Swaddles", price: "$39", desc: "Ultra-soft muslin swaddles recommended by our experts." },
  { emoji: "🍼", name: "Dr. Brown's Anti-Colic Bottles", category: "Bottles", price: "$32", desc: "Reduce colic and gas with clinically proven design." },
  { emoji: "🥛", name: "Enfamil NeuroPro Formula", category: "Formula", price: "$49", desc: "Brain-nourishing nutrition for formula-fed newborns." },
  { emoji: "🚼", name: "Pampers Swaddlers Diapers", category: "Diapers", price: "$28", desc: "Gentlest diaper for newborn's most sensitive skin." },
  { emoji: "💊", name: "Lansinoh Healing Ointment", category: "Healing", price: "$12", desc: "Essential postpartum healing for nursing mothers." },
  { emoji: "📷", name: "Nanit Pro Baby Monitor", category: "Monitor", price: "$299", desc: "Track sleep patterns and breathing in real-time." },
];

export function RecommendedSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-3">
              Expert Picks
            </p>
            <h2 className="font-playfair text-4xl font-semibold text-primary mb-4">
              Recommended Essentials
            </h2>
            <p className="font-cormorant text-xl text-muted-foreground max-w-xl">
              Products our certified specialists trust and recommend to every family.
            </p>
          </div>
          <Link href="/affiliate">
            <Button variant="secondary" className="group flex-shrink-0">
              See All Recommendations
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-start gap-4 p-5 rounded-xl border border-border hover:border-secondary hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-2xl flex-shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-inter text-xs text-secondary uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h4 className="font-inter text-sm font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  <span className="font-playfair text-sm font-semibold text-primary flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="font-inter text-xs text-muted-foreground mt-1 leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-inter text-xs text-secondary hover:text-primary mt-2 transition-colors"
                >
                  Shop Now <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Affiliate disclosure */}
        <p className="font-inter text-xs text-muted-foreground text-center mt-8">
          *Disclosure: We may earn a small commission from purchases made through our affiliate links at no additional cost to you.{" "}
          <Link href="/affiliate-disclosure" className="text-secondary hover:underline">
            Learn more
          </Link>
        </p>
      </div>
    </section>
  );
}
