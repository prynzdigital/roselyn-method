"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Sleep", "Feeding", "Recovery", "Development", "Nursery Tips"];

const posts = [
  {
    slug: "newborn-sleep-schedule-week-by-week", category: "Sleep",
    title: "Your Newborn's Sleep Schedule: A Week-by-Week Guide",
    excerpt: "Understanding your newborn's sleep cycles is the first step to peaceful nights. Here's exactly what to expect — and how to work with their natural rhythms rather than against them.",
    author: "Dr. Roselyn Carter", readTime: 8, emoji: "🌙", featured: true,
  },
  {
    slug: "breastfeeding-tips-for-new-mothers", category: "Feeding",
    title: "The First 30 Days of Breastfeeding: What No One Tells You",
    excerpt: "Honest, expert-backed advice for navigating the most challenging weeks of breastfeeding. From latch struggles to supply concerns, we cover it all.",
    author: "Maria Santos, RN", readTime: 10, emoji: "🍼", featured: true,
  },
  {
    slug: "postpartum-recovery-timeline", category: "Recovery",
    title: "Postpartum Recovery: A Realistic Week-by-Week Timeline",
    excerpt: "What does true postpartum recovery look like? Our certified specialists share an honest, compassionate guide to healing your body after birth.",
    author: "Jennifer Walsh", readTime: 12, emoji: "💛", featured: false,
  },
  {
    slug: "4-month-sleep-regression-guide", category: "Sleep",
    title: "Surviving the 4-Month Sleep Regression",
    excerpt: "The 4-month sleep regression is real — and it affects nearly every baby. Here's what's happening developmentally and exactly how to navigate it.",
    author: "Dr. Roselyn Carter", readTime: 7, emoji: "😴", featured: false,
  },
  {
    slug: "establishing-feeding-routine", category: "Feeding",
    title: "How to Establish a Feeding Routine in the First 6 Weeks",
    excerpt: "Whether breastfeeding, formula feeding, or combination feeding, establishing a flexible routine in the first six weeks makes everything easier.",
    author: "Maria Santos, RN", readTime: 9, emoji: "🍼", featured: false,
  },
  {
    slug: "nursery-setup-guide", category: "Nursery Tips",
    title: "The Expert's Guide to a Safe, Functional Nursery",
    excerpt: "What you actually need (and what you absolutely don't) when setting up your baby's nursery. Evidence-based safety tips and space-saving essentials.",
    author: "Jennifer Walsh", readTime: 6, emoji: "🛏️", featured: false,
  },
];

export function BlogPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = posts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Search & filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
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
                activeCategory === cat ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured posts */}
      {featured.length > 0 && (
        <div className="mb-12">
          <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-border overflow-hidden card-hover block"
              >
                <div className="bg-gradient-to-br from-primary to-[#1B2333] h-52 flex items-center justify-center">
                  <span className="text-8xl">{post.emoji}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="accent">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span className="font-inter text-xs">{post.readTime} min</span>
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-xs text-muted-foreground">By {post.author}</span>
                    <span className="inline-flex items-center gap-1 font-inter text-sm text-secondary font-medium group-hover:gap-2 transition-all">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All posts */}
      {rest.length > 0 && (
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-border overflow-hidden card-hover block"
              >
                <div className="bg-muted h-36 flex items-center justify-center">
                  <span className="text-5xl">{post.emoji}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span className="font-inter text-xs">{post.readTime} min</span>
                    </div>
                  </div>
                  <h3 className="font-playfair text-base font-semibold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="font-playfair text-2xl text-muted-foreground">No articles found</p>
        </div>
      )}
    </div>
  );
}
