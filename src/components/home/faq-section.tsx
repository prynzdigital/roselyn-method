"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is The Roselyn Method?",
    a: "The Roselyn Method is a premium newborn care platform offering expert sleep guides, personalized consultations with certified specialists, and trusted resources for modern parents. We combine compassionate support with evidence-based guidance to help families navigate the newborn stage with confidence.",
  },
  {
    q: "Who are your consultants?",
    a: "Our consultants are certified Registered Nurses, Newborn Care Specialists, Lactation Consultants (IBCLC), and Postpartum Doulas with extensive real-world experience. Each specialist is carefully vetted and trained in The Roselyn Method approach.",
  },
  {
    q: "How do consultations work?",
    a: "After booking, you'll complete a brief intake form about your baby and concerns. Your consultation takes place via secure video call at your chosen time. You'll receive a personalized care plan and follow-up resources within 24 hours.",
  },
  {
    q: "When can I access my purchased guides?",
    a: "All digital guides are available for immediate download after payment is confirmed. You can also access them anytime from your dashboard — they're yours forever with no expiration.",
  },
  {
    q: "Is The Roselyn Method appropriate for newborns of all ages?",
    a: "Yes. Our resources and consultations cover the full newborn and early infancy period — from birth through 6 months. We offer specific guidance for preemies, multiples, and babies with special considerations.",
  },
  {
    q: "What if I'm not satisfied with my consultation?",
    a: "We stand behind every consultation with a satisfaction guarantee. If your consultation doesn't meet your expectations, contact us within 7 days and we'll make it right — whether that's a complimentary follow-up session or a refund.",
  },
  {
    q: "Do you offer postpartum support for mothers?",
    a: "Absolutely. We believe maternal wellbeing is inseparable from newborn care. Our consultants are trained to address postpartum recovery, feeding challenges, emotional wellness, and partner support alongside newborn sleep guidance.",
  },
  {
    q: "Are you launching night nurse staffing services?",
    a: "Yes! We're preparing to launch our Night Nurse Marketplace, where certified caregivers can be matched with families for in-home overnight support. Join our newsletter to be the first to know when this launches.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-3">
            Questions & Answers
          </p>
          <h2 className="font-playfair text-4xl font-semibold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground">
            Everything you need to know before you begin.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-inter text-base font-medium text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center p-8 bg-muted rounded-2xl border border-border"
        >
          <p className="font-playfair text-xl font-medium text-primary mb-2">
            Still have questions?
          </p>
          <p className="font-inter text-sm text-muted-foreground mb-4">
            Our team is here to help. Reach out anytime.
          </p>
          <a
            href="mailto:hello@roselynmethod.com"
            className="font-inter text-sm text-secondary font-medium hover:text-primary transition-colors"
          >
            hello@roselynmethod.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
