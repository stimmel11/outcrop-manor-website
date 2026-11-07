import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, message, innerCircle } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const interestLabels: Record<string, string> = {
      booking: "Booking a retreat",
      wedding: "Wedding or ceremony",
      corporate: "Corporate offsite",
      wellness: "Wellness or yoga retreat",
      family: "Family reunion or celebration",
      info: "General information",
      other: "Something else",
    };
    const interestLabel = interestLabels[interest] ?? interest ?? "Not specified";

    await resend.emails.send({
      from: "Outcrop Manor Contact Form <contact@outcrop-manor.com>",
      to: "admin@outcrop-manor.com",
      replyTo: email,
      subject: `New inquiry from ${name}${innerCircle ? " · Inner Circle" : ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
          <div style="background: #3d4f3c; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f5f0e8; font-size: 22px; margin: 0; font-weight: 400; letter-spacing: 0.5px;">
              Outcrop Manor — New Inquiry
            </h1>
          </div>
          <div style="background: #faf8f4; padding: 32px; border: 1px solid #e0d9cc; border-top: none; border-radius: 0 0 8px 8px;">

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; color: #6b7c6b; font-size: 13px; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7c6b; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #3d4f3c;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7c6b; font-size: 13px; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; font-size: 15px;"><a href="tel:${phone}" style="color: #3d4f3c;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7c6b; font-size: 13px; vertical-align: top;">Interest</td>
                <td style="padding: 8px 0; font-size: 15px;">${interestLabel}</td>
              </tr>
              ${innerCircle ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7c6b; font-size: 13px; vertical-align: top;">Inner Circle</td>
                <td style="padding: 8px 0; font-size: 15px; color: #3d4f3c; font-weight: 600;">✓ Yes — add to list</td>
              </tr>` : ""}
            </table>

            ${message ? `
            <div style="background: #fff; border: 1px solid #e0d9cc; border-radius: 6px; padding: 20px; margin-top: 8px;">
              <div style="color: #6b7c6b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Message</div>
              <p style="margin: 0; font-size: 15px; line-height: 1.65; white-space: pre-wrap;">${message}</p>
            </div>` : ""}

            <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e0d9cc; font-size: 12px; color: #9aaa9a;">
              Sent from the contact form at outcrop-manor.com
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
