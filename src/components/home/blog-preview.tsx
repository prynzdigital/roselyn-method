"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    slug: "newborn-sleep-schedule-week-by-week",
    category: "Sleep",
    title: "Your Newborn's Sleep Schedule: Week-by-Week Guide",
    excerpt:
      "Understanding your newborn's sleep cycles is the first step to peaceful nights. Here's exactly what to expect — and how to work with their natural rhythms.",
    readTime: 8,
    emoji: "🌙",
    color: "from-primary to-[#1B2333]",
  },
  {
    slug: "breastfeeding-tips-for-new-mothers",
    category: "Feeding",
    title: "The First 30 Days of Breastfeeding: What No One Tells You",
    excerpt:
      "Honest, expert-backed advice for navigating the most challenging (and rewarding) weeks of breastfeeding. From latch struggles to supply concerns.",
    readTime: 10,
    emoji: "🍼",
    color: "from-secondary to-accent",
  },
  {
    slug: "postpartum-recovery-timeline",
    category: "Recovery",
    title: "Postpartum Recovery: A Realistic Week-by-Week Timeline",
    excerpt:
      "What does true postpartum recovery look like? Our certified specialists share an honest, compassionate guide to healing your body after birth.",
    readTime: 12,
    emoji: "💛",
    color: "from-amber-400 to-amber-300",
  },
];

export function BlogPreviewSection() {
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
              Educational Resources
            </p>
            <h2 className="font-playfair text-4xl font-semibold text-primary mb-4">
              From the Resource Center
            </h2>
            <p className="font-cormorant text-xl text-muted-foreground max-w-xl">
              Evidence-based articles from our certified specialists to support your
              parenting journey.
            </p>
          </div>
          <Link href="/blog">
            <Button variant="secondary" className="group flex-shrink-0">
              Explore Resources
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Cover */}
              <div className={`bg-gradient-to-br ${post.color} h-40 flex items-center justify-center`}>
                <span className="text-6xl">{post.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="accent" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="font-inter text-xs">{post.readTime} min read</span>
                  </div>
                </div>

                <h3 className="font-playfair text-lg font-semibold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-inter text-sm text-secondary font-medium hover:gap-2 transition-all group/link"
                >
                  Read Article
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
