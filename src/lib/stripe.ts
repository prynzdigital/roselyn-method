import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
  typescript: true,
});

export const CONSULTATION_PRICES = {
  QUICK_GUIDANCE: {
    price: 7500,
    duration: 30,
    label: "Quick Guidance Session",
    description: "30-minute personalized consultation",
  },
  COMPREHENSIVE: {
    price: 14500,
    duration: 60,
    label: "Comprehensive Consultation",
    description: "60-minute in-depth consultation",
  },
  ONGOING_SUPPORT: {
    price: 39900,
    duration: 0,
    label: "Ongoing Support Package",
    description: "Monthly unlimited support package",
  },
} as const;
