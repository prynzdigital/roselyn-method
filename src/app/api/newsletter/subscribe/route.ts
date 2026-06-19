import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendNewsletterWelcome } from "@/lib/email";

const schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name } = schema.parse(body);

    // In production, save to DB here:
    // await db.newsletterSubscriber.upsert({ where: { email }, update: {}, create: { email, name } })

    await sendNewsletterWelcome(email, name);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    console.error("Newsletter subscribe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
