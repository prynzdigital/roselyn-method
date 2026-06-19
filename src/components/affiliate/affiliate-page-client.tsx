"use client";

import React, { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = ["All", "Swaddles & Sleep", "Feeding", "Health & Healing", "Monitoring", "Bath & Care"];

const products = [
  {
    category: "Swaddles & Sleep", name: "Aden + Anais Dream Blanket", price: "$39",
    rating: 4.8, reviews: 2847,
    description: "Ultra-soft organic muslin swaddles that breathe beautifully and reduce startle reflex for better sleep.",
    why: "Our top pick for newborn swaddling. The breathable muslin fabric keeps babies comfortable across all seasons.",
    badge: "Editor's Choice", emoji: "🫂",
  },
  {
    category: "Swaddles & Sleep", name: "Halo SleepSack Swaddle", price: "$28",
    rating: 4.9, reviews: 15243,
    description: "The safer alternative to loose blankets. A wearable blanket with a 3-way swaddle to transition when baby rolls.",
    why: "Pediatrician and SIDS-prevention certified. We recommend this to every family we work with.",
    badge: "Safety Pick", emoji: "🌙",
  },
  {
    category: "Feeding", name: "Dr. Brown's Anti-Colic Bottles", price: "$32",
    rating: 4.7, reviews: 8924,
    description: "Clinically proven to reduce colic, spit-up, burping, and gas. Compatible with breast pumps.",
    why: "The internal vent system mimics natural breastfeeding flow, making it our #1 recommendation for bottle feeding.",
    badge: null, emoji: "🍼",
  },
  {
    category: "Feeding", name: "Haakaa Silicone Breast Pump", price: "$13",
    rating: 4.6, reviews: 34567,
    description: "Hands-free letdown collector that captures milk from the opposite breast during feeding. A must-have.",
    why: "Every breastfeeding mom should have one. Simple, effective, and an incredible value for building a freezer stash.",
    badge: "Bestseller", emoji: "🥛",
  },
  {
    category: "Health & Healing", name: "Lansinoh Lanolin Ointment", price: "$12",
    rating: 4.8, reviews: 19823,
    description: "100% pure lanolin to soothe and protect sore, cracked nipples during breastfeeding. Safe for baby.",
    why: "The gold standard in nursing care. Apply after every feed in the early weeks to prevent cracking.",
    badge: null, emoji: "💊",
  },
  {
    category: "Health & Healing", name: "FridaMom Postpartum Recovery Kit", price: "$39",
    rating: 4.9, reviews: 6234,
    description: "Everything you need for postpartum healing — padsicles, spray, ice & heat therapy, all in one kit.",
    why: "We send every new mom home with this recommendation. It covers everything for the first recovery week.",
    badge: "Must Have", emoji: "💛",
  },
  {
    category: "Monitoring", name: "Nanit Pro Baby Monitor", price: "$299",
    rating: 4.7, reviews: 3421,
    description: "HD video monitor with sleep tracking, breathing monitoring, and smart alerts. Connects to your phone.",
    why: "The sleep analytics help parents and our consultants identify patterns quickly. Worth the investment.",
    badge: null, emoji: "📷",
  },
  {
    category: "Monitoring", name: "Owlet Dream Sock", price: "$149",
    rating: 4.5, reviews: 2891,
    description: "Tracks heart rate and oxygen levels while baby sleeps. Alerts you via app if readings fall outside normal zones.",
    why: "Provides peace of mind for parents, especially in the early weeks. Our anxiety-prone families love this.",
    badge: null, emoji: "🧦",
  },
  {
    category: "Bath & Care", name: "Pampers Sensitive Wipes", price: "$22",
    rating: 4.9, reviews: 45678,
    description: "Dermatologist-tested, hypoallergenic wipes for newborn's most sensitive skin. 99% pure water.",
    why: "Gentle enough for the most sensitive skin. We recommend water wipes for the first 4 weeks, then these.",
    badge: null, emoji: "✨",
  },
];

export function AffiliatePageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Category filters */}
      <div className="flex gap-2 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-inter text-sm transition-all ${
              activeCategory === cat ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-xl border border-border overflow-hidden group card-hover"
          >
            {/* Visual */}
            <div className="bg-muted h-36 flex items-center justify-center relative">
              <span className="text-5xl">{product.emoji}</span>
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-white text-xs">{product.badge}</Badge>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="font-inter text-xs text-secondary uppercase tracking-wide mb-1">
                {product.category}
              </p>
              <h3 className="font-inter text-base font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="font-inter text-xs text-muted-foreground">
                  {product.rating} ({product.reviews.toLocaleString()})
                </span>
              </div>

              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                {product.description}
              </p>

              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <p className="font-inter text-xs text-secondary font-medium mb-1">Why We Recommend It:</p>
                <p className="font-inter text-xs text-muted-foreground line-clamp-2">{product.why}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-playfair text-lg font-semibold text-primary">
                  {product.price}
                </span>
                <a href="#" target="_blank" rel="noopener noreferrer sponsored">
                  <Button size="sm" className="group/btn">
                    Shop Now
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Disclosure */}
      <div className="mt-16 p-6 bg-muted rounded-xl border border-border">
        <h3 className="font-inter text-sm font-semibold text-foreground mb-2">
          Affiliate Disclosure
        </h3>
        <p className="font-inter text-xs text-muted-foreground leading-relaxed">
          The Roselyn Method participates in affiliate advertising programs. When you purchase through links on this page, we may earn a small commission at no additional cost to you. All products listed are independently selected and genuinely recommended by our certified specialists. We only recommend products we believe in and would recommend to our own families.
        </p>
      </div>
    </div>
  );
}
