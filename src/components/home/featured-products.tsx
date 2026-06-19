"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";

const featuredProducts = [
  {
    id: "1",
    slug: "ultimate-sleep-guide",
    name: "Ultimate Sleep Guide for New Parents",
    description:
      "The comprehensive guide to establishing healthy sleep foundations for your newborn. Covers weeks 1–16 with proven techniques.",
    price: 2999,
    comparePrice: 4999,
    rating: 4.9,
    reviews: 847,
    badge: "Bestseller",
    emoji: "🌙",
    color: "bg-primary",
    features: ["Week-by-week schedule", "Troubleshooting guide", "Printable charts"],
  },
  {
    id: "2",
    slug: "feeding-schedule-templates",
    name: "Feeding Schedule Templates",
    description:
      "Beautifully designed, evidence-based feeding trackers and schedules for breastfeeding, formula, and combination feeding.",
    price: 1299,
    comparePrice: null,
    rating: 4.8,
    reviews: 524,
    badge: "New",
    emoji: "🍼",
    color: "bg-secondary",
    features: ["30+ printable templates", "Breastfeeding tracker", "Formula guide"],
  },
  {
    id: "3",
    slug: "newborn-essentials-checklist",
    name: "Newborn Essentials Checklist",
    description:
      "Everything you need — expertly curated. A complete checklist of what you actually need (and what you can skip) for your newborn.",
    price: 799,
    comparePrice: null,
    rating: 4.7,
    reviews: 312,
    badge: null,
    emoji: "✅",
    color: "bg-accent",
    features: ["Hospital bag checklist", "Nursery essentials", "First week guide"],
  },
];

export function FeaturedProductsSection() {
  return (
    <section className="py-24 bg-muted/30">
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
              Digital Guides
            </p>
            <h2 className="font-playfair text-4xl font-semibold text-primary mb-4">
              Featured Sleep Guides
            </h2>
            <p className="font-cormorant text-xl text-muted-foreground max-w-xl">
              Expert-crafted digital resources you can download instantly and
              start using tonight.
            </p>
          </div>
          <Link href="/store">
            <Button variant="secondary" className="group">
              View All Guides
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-border overflow-hidden card-hover shadow-sm"
            >
              {/* Product visual */}
              <div
                className={`${product.color} relative h-48 flex items-center justify-center overflow-hidden`}
              >
                <span className="text-7xl filter drop-shadow-lg">{product.emoji}</span>
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white text-primary border-0">
                      {product.badge}
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="font-inter text-xs text-muted-foreground">
                    {product.rating} ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <h3 className="font-playfair text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-inter text-xs text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-playfair text-xl font-semibold text-primary">
                      {formatPrice(product.price / 100)}
                    </span>
                    {product.comparePrice && (
                      <span className="font-inter text-sm text-muted-foreground line-through ml-2">
                        {formatPrice(product.comparePrice / 100)}
                      </span>
                    )}
                  </div>
                  <Link href={`/store/${product.slug}`}>
                    <Button size="sm" className="group/btn">
                      <Download className="h-3.5 w-3.5" />
                      Get Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
