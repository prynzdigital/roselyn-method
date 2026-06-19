"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { getInitials } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "New York, NY",
    rating: 5,
    quote:
      "The Roselyn Method changed our lives. We went from complete exhaustion to our baby sleeping 6-hour stretches within two weeks. The guidance is compassionate, practical, and actually works.",
    service: "Comprehensive Consultation",
    babyAge: "6 weeks",
  },
  {
    id: 2,
    name: "Priya K.",
    location: "San Francisco, CA",
    rating: 5,
    quote:
      "As a first-time mom, I was overwhelmed. Dr. Carter's patience and expertise gave me so much confidence. The sleep guide was worth every penny and more.",
    service: "Ultimate Sleep Guide",
    babyAge: "3 months",
  },
  {
    id: 3,
    name: "Amanda & James T.",
    location: "Chicago, IL",
    rating: 5,
    quote:
      "We were skeptical about virtual consultations but Maria was incredible. She caught issues with our baby's schedule we had completely missed. Highly recommend the ongoing support package.",
    service: "Ongoing Support Package",
    babyAge: "8 weeks",
  },
  {
    id: 4,
    name: "Tanya L.",
    location: "Atlanta, GA",
    rating: 5,
    quote:
      "The feeding schedule templates are stunning and practical. I printed them out and they have been my lifeline. My pediatrician even asked where I got them!",
    service: "Feeding Schedule Templates",
    babyAge: "5 weeks",
  },
  {
    id: 5,
    name: "Lisa R.",
    location: "Austin, TX",
    rating: 5,
    quote:
      "After three sleepless weeks, a friend recommended The Roselyn Method. I booked a quick guidance session and had my first 4-hour sleep that very night. Absolute magic.",
    service: "Quick Guidance Session",
    babyAge: "2 weeks",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-24 bg-blush-gradient">
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
            Parent Stories
          </p>
          <h2 className="font-playfair text-4xl font-semibold text-primary mb-4">
            What Families Are Saying
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-xl mx-auto">
            Real results from real families who trusted The Roselyn Method.
          </p>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-playfair text-2xl font-semibold text-primary">4.9</span>
            <span className="font-inter text-sm text-muted-foreground">
              from 2,000+ reviews
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-0"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-secondary/30 mb-4 flex-shrink-0" />

                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-cormorant text-lg italic text-foreground leading-relaxed mb-6 flex-1">
                    "{t.quote}"
                  </p>

                  {/* Service badge */}
                  <div className="mb-4">
                    <span className="font-inter text-xs text-secondary bg-muted px-3 py-1 rounded-full">
                      {t.service}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary text-sm font-semibold font-playfair flex-shrink-0">
                      {getInitials(t.name)}
                    </div>
                    <div>
                      <p className="font-inter text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="font-inter text-xs text-muted-foreground">
                        {t.location} · Baby: {t.babyAge}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className="w-2 h-2 rounded-full bg-secondary/30 hover:bg-secondary transition-colors"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
