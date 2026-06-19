import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { stripe, CONSULTATION_PRICES } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const schema = z.object({
  consultationType: z.enum(["QUICK_GUIDANCE", "COMPREHENSIVE", "ONGOING_SUPPORT"]),
  consultantId: z.string(),
  scheduledAt: z.string(),
  clientId: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { consultationType, consultantId, scheduledAt, clientId } = schema.parse(body);

    const typeConfig = CONSULTATION_PRICES[consultationType];

    const session = await stripe.checkout.sessions.create({
      mode: consultationType === "ONGOING_SUPPORT" ? "subscription" : "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: typeConfig.label,
              description: typeConfig.description,
            },
            unit_amount: typeConfig.price,
            ...(consultationType === "ONGOING_SUPPORT" && {
              recurring: { interval: "month" },
            }),
          },
          quantity: 1,
        },
      ],
      metadata: {
        consultationType,
        consultantId,
        scheduledAt,
        clientId,
      },
      success_url: absoluteUrl("/dashboard?booking=confirmed"),
      cancel_url: absoluteUrl("/booking"),
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Consultation checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
