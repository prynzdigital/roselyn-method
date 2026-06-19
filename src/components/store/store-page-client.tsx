"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, Star, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";

const categories = ["All", "Sleep Guides", "Feeding", "Checklists", "Bundles"];

const products = [
  {
    id: "1", slug: "ultimate-sleep-guide", category: "Sleep Guides",
    name: "Ultimate Sleep Guide for New Parents",
    description: "The comprehensive guide to establishing healthy sleep foundations for your newborn. Covers weeks 1–16.",
    price: 2999, comparePrice: 4999, rating: 4.9, reviews: 847,
    badge: "Bestseller", emoji: "🌙", features: ["Week-by-week schedule", "Troubleshooting guide", "16 printable charts", "Video tutorial links"],
  },
  {
    id: "2", slug: "feeding-schedule-templates", category: "Feeding",
    name: "Feeding Schedule Templates",
    description: "30+ beautifully designed, evidence-based feeding trackers and schedules for all feeding styles.",
    price: 1299, comparePrice: null, rating: 4.8, reviews: 524,
    badge: "New", emoji: "🍼", features: ["30+ templates", "Breastfeeding tracker", "Formula log", "Combo feeding guide"],
  },
  {
    id: "3", slug: "newborn-essentials-checklist", category: "Checklists",
    name: "Newborn Essentials Checklist",
    description: "Everything you actually need (and what you can skip) expertly curated by certified specialists.",
    price: 799, comparePrice: null, rating: 4.7, reviews: 312,
    badge: null, emoji: "✅", features: ["Hospital bag list", "Nursery guide", "First week essentials", "Budget-friendly picks"],
  },
  {
    id: "4", slug: "sleep-regression-guide", category: "Sleep Guides",
    name: "Sleep Regression Survival Guide",
    description: "Navigate the 4-month, 8-month, and 12-month sleep regressions with expert strategies that actually work.",
    price: 1999, comparePrice: null, rating: 4.8, reviews: 203,
    badge: null, emoji: "😴", features: ["All regression ages", "Action plan templates", "Partner support guide", "When to seek help"],
  },
  {
    id: "5", slug: "postpartum-recovery-guide", category: "Checklists",
    name: "Postpartum Recovery Guide",
    description: "A compassionate, week-by-week guide to physical and emotional recovery after birth.",
    price: 1499, comparePrice: null, rating: 4.9, reviews: 418,
    badge: "Popular", emoji: "💛", features: ["12-week timeline", "Self-care rituals", "Partner checklist", "Resource directory"],
  },
  {
    id: "6", slug: "complete-newborn-bundle", category: "Bundles",
    name: "Complete Newborn Bundle",
    description: "Everything you need in one place. Sleep guide, feeding templates, checklists, and postpartum recovery — bundled and discounted.",
    price: 5999, comparePrice: 8596, rating: 5.0, reviews: 156,
    badge: "Best Value", emoji: "🎁", features: ["All 4 guides included", "Save $28.97", "Priority email support", "30-day money back"],
  },
];

export function StorePageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-inter text-sm transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="font-inter text-sm text-muted-foreground mb-8">
        {filtered.length} {filtered.length === 1 ? "guide" : "guides"} found
      </p>

      {/* Product grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl border border-border overflow-hidden card-hover shadow-sm"
          >
            {/* Visual */}
            <div className="relative bg-muted h-48 flex items-center justify-center">
              <span className="text-7xl">{product.emoji}</span>
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-white border-0 text-xs">
                    {product.badge}
                  </Badge>
                </div>
              )}
              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                aria-label="Toggle wishlist"
              >
                <Heart
                  className={`h-4 w-4 transition-colors ${
                    wishlist.includes(product.id)
                      ? "fill-red-400 text-red-400"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <Badge variant="outline" className="text-xs mb-3">
                {product.category}
              </Badge>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="font-inter text-xs text-muted-foreground">
                  {product.rating} ({product.reviews.toLocaleString()})
                </span>
              </div>

              <h3 className="font-playfair text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                {product.name}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {product.description}
              </p>

              <ul className="space-y-1 mb-5">
                {product.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2 font-inter text-xs text-foreground">
                    <div className="w-1 h-1 rounded-full bg-secondary" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-border">
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
                <div className="flex gap-2">
                  <Link href={`/store/${product.slug}`}>
                    <Button size="sm" variant="secondary">
                      Details
                    </Button>
                  </Link>
                  <Button size="sm">
                    <Download className="h-3.5 w-3.5" />
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="font-playfair text-2xl text-muted-foreground mb-2">No guides found</p>
          <p className="font-inter text-sm text-muted-foreground">
            Try a different search or category filter.
          </p>
        </div>
      )}
    </div>
  );
}
