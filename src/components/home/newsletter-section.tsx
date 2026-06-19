"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setIsSuccess(true);
        toast.success("You're in! Check your email for your free checklist.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 border border-secondary/30 mb-8">
            <Mail className="h-7 w-7 text-secondary" />
          </div>

          <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-4">
            Join the Community
          </p>
          <h2 className="font-playfair text-4xl font-semibold text-white mb-4">
            Join the Roselyn Community
          </h2>
          <p className="font-cormorant text-xl text-white/60 mb-3">
            Weekly expert tips, exclusive resources, and compassionate support delivered
            straight to your inbox.
          </p>
          <p className="font-inter text-sm text-secondary font-medium mb-10">
            🎁 Free Newborn Sleep Checklist when you join
          </p>

          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-3 bg-green-500/20 border border-green-400/30 rounded-full px-8 py-4"
            >
              <Check className="h-5 w-5 text-green-400" />
              <span className="font-inter text-white font-medium">
                You're subscribed! Check your inbox.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-secondary flex-1"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-secondary text-primary hover:bg-accent font-semibold flex-shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Join Free"
                )}
              </Button>
            </form>
          )}

          <p className="font-inter text-xs text-white/30 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
