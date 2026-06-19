import { Resend } from "resend";

let _resend: Resend | null = null;

function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const FROM = process.env.RESEND_FROM_EMAIL || "The Roselyn Method <hello@roselynmethod.com>";

function brandedTemplate(content: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>The Roselyn Method</title>
</head>
<body style="margin:0;padding:0;background-color:#FFFDFB;font-family:Inter,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:#03051A;padding:32px 40px;text-align:center;border-radius:8px 8px 0 0;">
              <p style="color:#D7B0A3;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px;">The Roselyn Method</p>
              <p style="color:#E8CFC8;font-size:13px;font-style:italic;margin:0;">Night Nurse. Better Nights. Brighter Days.</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background:#FFFFFF;padding:40px;border-left:1px solid #E8CFC8;border-right:1px solid #E8CFC8;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#F5EDE9;padding:24px 40px;text-align:center;border-radius:0 0 8px 8px;border:1px solid #E8CFC8;border-top:none;">
              <p style="color:#6B7280;font-size:12px;margin:0 0 8px;">© ${new Date().getFullYear()} The Roselyn Method. All rights reserved.</p>
              <p style="color:#6B7280;font-size:12px;margin:0;">
                <a href="https://roselynmethod.com/privacy" style="color:#D7B0A3;text-decoration:none;">Privacy Policy</a> ·
                <a href="https://roselynmethod.com/terms" style="color:#D7B0A3;text-decoration:none;">Terms of Service</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendWelcomeEmail(to: string, name: string) {
  const content = `
    <h1 style="font-family:Georgia,serif;color:#03051A;font-size:28px;margin:0 0 16px;">Welcome to The Roselyn Method, ${name}!</h1>
    <p style="color:#1B2333;font-size:16px;line-height:1.7;margin:0 0 20px;">
      We're so glad you're here. The Roselyn Method was created to support families through one of the most beautiful — and exhausting — seasons of life.
    </p>
    <p style="color:#1B2333;font-size:16px;line-height:1.7;margin:0 0 24px;">
      Whether you're seeking expert sleep guidance, personalized consultations, or simply a trusted resource, we're here for you every step of the way.
    </p>
    <div style="text-align:center;margin:32px 0;">
      <a href="${process.env.NEXT_PUBLIC_APP_URL}/store" style="background:#03051A;color:#FFFDFB;padding:14px 32px;text-decoration:none;border-radius:4px;font-size:14px;font-weight:600;letter-spacing:0.5px;display:inline-block;">
        Explore Our Sleep Guides
      </a>
    </div>
    <p style="color:#6B7280;font-size:14px;line-height:1.6;margin:24px 0 0;">
      As a welcome gift, download your free <strong>Newborn Sleep Checklist</strong> from your dashboard.
    </p>
  `;
  return getResend().emails.send({ from: FROM, to, subject: "Welcome to The Roselyn Method 🌸", html: brandedTemplate(content) });
}

export async function sendPurchaseConfirmationEmail(
  to: string,
  name: string,
  productName: string,
  downloadUrl: string
) {
  const content = `
    <h1 style="font-family:Georgia,serif;color:#03051A;font-size:26px;margin:0 0 16px;">Your purchase is confirmed!</h1>
    <p style="color:#1B2333;font-size:16px;line-height:1.7;margin:0 0 20px;">
      Thank you, ${name}. Your copy of <strong>${productName}</strong> is ready for download.
    </p>
    <div style="background:#F5EDE9;border-left:3px solid #D7B0A3;padding:20px;border-radius:4px;margin:24px 0;">
      <p style="color:#03051A;font-size:14px;font-weight:600;margin:0 0 8px;">What's included in your purchase:</p>
      <ul style="color:#1B2333;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
        <li>Immediate digital download</li>
        <li>Lifetime access from your dashboard</li>
        <li>Future updates included</li>
      </ul>
    </div>
    <div style="text-align:center;margin:32px 0;">
      <a href="${downloadUrl}" style="background:#03051A;color:#FFFDFB;padding:14px 32px;text-decoration:none;border-radius:4px;font-size:14px;font-weight:600;display:inline-block;">
        Download Now
      </a>
    </div>
    <p style="color:#6B7280;font-size:14px;">
      You can also access all your purchases anytime from your <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" style="color:#D7B0A3;">dashboard</a>.
    </p>
  `;
  return getResend().emails.send({ from: FROM, to, subject: `Your ${productName} is ready to download!`, html: brandedTemplate(content) });
}

export async function sendBookingConfirmationEmail(
  to: string,
  name: string,
  consultantName: string,
  consultationType: string,
  scheduledAt: Date
) {
  const dateStr = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short" }).format(scheduledAt);
  const content = `
    <h1 style="font-family:Georgia,serif;color:#03051A;font-size:26px;margin:0 0 16px;">Your consultation is confirmed!</h1>
    <p style="color:#1B2333;font-size:16px;line-height:1.7;margin:0 0 20px;">
      Hi ${name}, your <strong>${consultationType}</strong> with ${consultantName} has been confirmed.
    </p>
    <div style="background:#F5EDE9;border-radius:8px;padding:24px;margin:24px 0;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="color:#6B7280;font-size:13px;padding:6px 0;">Consultant</td><td style="color:#03051A;font-size:14px;font-weight:600;text-align:right;">${consultantName}</td></tr>
        <tr><td style="color:#6B7280;font-size:13px;padding:6px 0;">Service</td><td style="color:#03051A;font-size:14px;font-weight:600;text-align:right;">${consultationType}</td></tr>
        <tr><td style="color:#6B7280;font-size:13px;padding:6px 0;">Date & Time</td><td style="color:#03051A;font-size:14px;font-weight:600;text-align:right;">${dateStr}</td></tr>
      </table>
    </div>
    <p style="color:#1B2333;font-size:14px;line-height:1.7;">
      Please complete your intake form before the session so your consultant can prepare the most personalized guidance for you.
    </p>
    <div style="text-align:center;margin:32px 0;">
      <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" style="background:#03051A;color:#FFFDFB;padding:14px 32px;text-decoration:none;border-radius:4px;font-size:14px;font-weight:600;display:inline-block;">
        View My Dashboard
      </a>
    </div>
  `;
  return getResend().emails.send({ from: FROM, to, subject: `Consultation Confirmed — ${dateStr}`, html: brandedTemplate(content) });
}

export async function sendNewsletterWelcome(to: string, name?: string) {
  const content = `
    <h1 style="font-family:Georgia,serif;color:#03051A;font-size:26px;margin:0 0 16px;">
      ${name ? `Welcome, ${name}!` : "Welcome to the Roselyn Community!"}
    </h1>
    <p style="color:#1B2333;font-size:16px;line-height:1.7;margin:0 0 20px;">
      Thank you for joining our community of modern parents. You're now part of a growing family of parents who believe rest, recovery, and expert support make all the difference.
    </p>
    <p style="color:#1B2333;font-size:16px;line-height:1.7;margin:0 0 24px;">
      As promised, here is your free <strong>Newborn Sleep Checklist</strong>.
    </p>
    <div style="text-align:center;margin:32px 0;">
      <a href="${process.env.NEXT_PUBLIC_APP_URL}/resources/newborn-sleep-checklist" style="background:#D7B0A3;color:#03051A;padding:14px 32px;text-decoration:none;border-radius:4px;font-size:14px;font-weight:600;display:inline-block;">
        Download Free Checklist
      </a>
    </div>
    <p style="color:#6B7280;font-size:13px;">Expect weekly tips, expert insights, and exclusive offers — delivered straight to your inbox.</p>
  `;
  return getResend().emails.send({ from: FROM, to, subject: "Your Free Newborn Sleep Checklist is here! 🌙", html: brandedTemplate(content) });
}
