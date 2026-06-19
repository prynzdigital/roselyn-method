import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { sendPurchaseConfirmationEmail, sendBookingConfirmationEmail } from "@/lib/email";
import { absoluteUrl } from "@/lib/utils";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        if (session.metadata?.productId) {
          // Digital product purchase — create download record
          // In production:
          // const order = await db.order.create({ ... })
          // await db.download.create({ ... })
          // await sendPurchaseConfirmationEmail(...)
          console.log("Product purchased:", session.metadata.productId);
        }

        if (session.metadata?.consultationType) {
          // Consultation booking — confirm appointment
          // In production:
          // await db.consultation.update({ ... status: CONFIRMED })
          // await sendBookingConfirmationEmail(...)
          console.log("Consultation booked:", session.metadata.consultationType);
        }
        break;
      }

      case "checkout.session.expired": {
        // Handle expired sessions — clean up pending orders
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("Checkout expired:", session.id);
        break;
      }

      case "charge.refunded": {
        // Handle refunds
        const charge = event.data.object as Stripe.Charge;
        console.log("Charge refunded:", charge.id);
        break;
      }

      case "customer.subscription.deleted": {
        // Handle subscription cancellation for ongoing support packages
        const subscription = event.data.object as Stripe.Subscription;
        console.log("Subscription cancelled:", subscription.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}

