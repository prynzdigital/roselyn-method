"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/lib/utils";

const experts = [
  {
    id: "1",
    name: "Dr. Roselyn Carter",
    title: "Founder & Lead Consultant",
    photo: "/images/expert-roselyn.jpg",
    credentials: ["RN, BSN", "Certified Newborn Care Specialist", "Pediatric Sleep Consultant"],
    yearsExp: 12,
    bio: "With over a decade supporting families through the newborn stage, Dr. Carter created The Roselyn Method to bring compassionate, expert care to modern parents.",
    specialties: ["Newborn Sleep", "Feeding Support", "Postpartum Recovery"],
    available: true,
  },
  {
    id: "2",
    name: "Maria Santos, RN",
    title: "Senior Newborn Specialist",
    photo: "/images/expert-maria.jpg",
    credentials: ["Registered Nurse", "IBCLC Certified", "Sleep Training Expert"],
    yearsExp: 8,
    bio: "Maria specializes in feeding challenges and sleep foundations, supporting over 500 families with culturally sensitive, evidence-based care.",
    specialties: ["Breastfeeding", "Sleep Routines", "Multiple Births"],
    available: true,
  },
  {
    id: "3",
    name: "Jennifer Walsh",
    title: "Postpartum Wellness Consultant",
    photo: "/images/expert-jennifer.jpg",
    credentials: ["Certified Postpartum Doula", "CBE", "Newborn Care Specialist"],
    yearsExp: 6,
    bio: "Jennifer brings warmth and expertise to postpartum recovery, helping mothers heal and thrive while navigating the beautiful chaos of early parenthood.",
    specialties: ["Postpartum Wellness", "Newborn Care", "Partner Support"],
    available: false,
  },
];

export function ExpertsSection() {
  return (
    <section className="py-24 bg-white">
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
            Our Team
          </p>
          <h2 className="font-playfair text-4xl font-semibold text-primary mb-4">
            Meet Your Experts
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Certified specialists with real-world experience supporting thousands of
            families through the newborn journey.
          </p>
        </motion.div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-border p-8 card-hover text-center group"
            >
              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto border-4 border-muted shadow-lg group-hover:border-secondary transition-colors duration-300">
                  <Image
                    src={expert.photo}
                    alt={expert.name}
                    width={112}
                    height={112}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                {expert.available && (
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white" />
                )}
              </div>

              {/* Info */}
              <h3 className="font-playfair text-xl font-semibold text-primary mb-1 group-hover:text-secondary transition-colors">
                {expert.name}
              </h3>
              <p className="font-cormorant text-base italic text-secondary mb-3">
                {expert.title}
              </p>

              {/* Years exp */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="font-inter text-xs text-muted-foreground">
                  {expert.yearsExp} years experience
                </span>
              </div>

              {/* Bio */}
              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                {expert.bio}
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 justify-center mb-5">
                {expert.credentials.slice(0, 2).map((cred) => (
                  <Badge key={cred} variant="accent" className="text-xs">
                    <Award className="h-2.5 w-2.5 mr-1" />
                    {cred}
                  </Badge>
                ))}
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-6">
                {expert.specialties.map((s) => (
                  <span
                    key={s}
                    className="font-inter text-xs text-secondary bg-muted px-2.5 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Link href={`/booking?consultant=${expert.id}`}>
                <Button size="sm" className="w-full group/btn" disabled={!expert.available}>
                  {expert.available ? (
                    <>
                      Book Now
                      <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  ) : (
                    "Currently Unavailable"
                  )}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
