import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const schema = z.object({
  productId: z.string(),
  productName: z.string(),
  price: z.number(),
  successUrl: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productId, productName, price, successUrl } = schema.parse(body);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              description: "Instant digital download — The Roselyn Method",
              images: [absoluteUrl("/logo.jpeg")],
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      metadata: { productId },
      success_url: successUrl ?? absoluteUrl(`/dashboard?success=true&product=${productId}`),
      cancel_url: absoluteUrl(`/store/${productId}`),
      allow_promotion_codes: true,
      billing_address_collection: "auto",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
