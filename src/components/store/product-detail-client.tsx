"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, Check, ShoppingBag, Heart, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

interface Product {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  comparePrice: number | null;
  rating: number;
  reviews: number;
  emoji: string;
  badge: string | null;
  features: string[];
  included: string[];
  faqs: { q: string; a: string }[];
}

export function ProductDetailClient({ product }: { product: Product }) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleBuy = () => {
    toast.success("Redirecting to secure checkout...");
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: product.name, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const discount = product.comparePrice
    ? Math.round((1 - product.price / product.comparePrice) * 100)
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <Link
        href="/store"
        className="inline-flex items-center gap-2 font-inter text-sm text-muted-foreground hover:text-secondary mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Store
      </Link>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left — Visual */}
        <div>
          <div className="bg-gradient-to-br from-muted to-accent/30 rounded-3xl h-96 flex items-center justify-center mb-6">
            <span className="text-9xl">{product.emoji}</span>
          </div>

          {/* Preview pages placeholder */}
          <div className="grid grid-cols-3 gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-muted rounded-xl h-24 flex items-center justify-center text-3xl border border-border hover:border-secondary transition-colors cursor-pointer"
              >
                {product.emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Info */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              {product.badge && (
                <Badge className="mb-3 bg-primary text-white">
                  {product.badge}
                </Badge>
              )}
              <h1 className="font-playfair text-3xl font-semibold text-primary leading-tight">
                {product.name}
              </h1>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => setIsInWishlist(!isInWishlist)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-secondary transition-colors"
              >
                <Heart className={`h-4 w-4 ${isInWishlist ? "fill-red-400 text-red-400" : "text-muted-foreground"}`} />
              </button>
              <button
                onClick={handleShare}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-secondary transition-colors"
              >
                <Share2 className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-inter text-sm font-semibold text-foreground">
              {product.rating}
            </span>
            <span className="font-inter text-sm text-muted-foreground">
              ({product.reviews.toLocaleString()} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="font-cormorant text-lg text-muted-foreground leading-relaxed mb-6">
            {product.longDescription}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-inter text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              What's Inside
            </h3>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 font-inter text-sm text-foreground">
                  <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Included files */}
          <div className="bg-muted rounded-xl p-5 mb-8">
            <h4 className="font-inter text-sm font-semibold text-foreground mb-3">
              You'll receive:
            </h4>
            <ul className="space-y-2">
              {product.included.map((item) => (
                <li key={item} className="flex items-center gap-2 font-inter text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Price & CTA */}
          <div className="flex items-end gap-4 mb-6">
            <div>
              <span className="font-playfair text-4xl font-semibold text-primary">
                {formatPrice(product.price / 100)}
              </span>
              {product.comparePrice && (
                <span className="font-inter text-lg text-muted-foreground line-through ml-3">
                  {formatPrice(product.comparePrice / 100)}
                </span>
              )}
            </div>
            {discount && (
              <Badge variant="success" className="mb-1">
                Save {discount}%
              </Badge>
            )}
          </div>

          <Button size="xl" className="w-full mb-3" onClick={handleBuy}>
            <ShoppingBag className="h-5 w-5" />
            Buy Now — Instant Download
          </Button>

          <p className="font-inter text-xs text-muted-foreground text-center">
            Secure checkout via Stripe. 30-day money-back guarantee.
          </p>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
            {["Instant Access", "30-Day Guarantee", "Expert Created"].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-secondary" />
                <span className="font-inter text-xs text-muted-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      {product.faqs.length > 0 && (
        <div className="mt-20 max-w-2xl">
          <h2 className="font-playfair text-2xl font-semibold text-primary mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {product.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
}
