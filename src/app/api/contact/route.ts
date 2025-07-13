import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Validate input
  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email HTML template
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f9f9f9; border-radius: 8px; padding: 32px;">
      <h2 style="color: #4f46e5;">New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #fff; border-radius: 6px; padding: 16px; margin-top: 8px; border: 1px solid #eee;">${message.replace(/\n/g, "<br>")}</div>
      <hr style="margin: 32px 0;">
      <p style="font-size: 14px; color: #888;">This message was sent from your portfolio contact form.</p>
    </div>
  `;

  // Send to site owner
  const ownerMail = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
    subject: `New message from ${name} via Portfolio Contact Form`,
    html,
    replyTo: email,
  };

  // Send confirmation to sender
  const senderMail = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: "Thank you for contacting Satish!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f9f9f9; border-radius: 8px; padding: 32px;">
        <h2 style="color: #4f46e5;">Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
        <div style="background: #fff; border-radius: 6px; padding: 16px; margin-top: 8px; border: 1px solid #eee;">
          <strong>Your message:</strong><br>${message.replace(/\n/g, "<br>")}
        </div>
        <hr style="margin: 32px 0;">
        <p style="font-size: 14px; color: #888;">Best regards,<br>Satish</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(ownerMail);
    await transporter.sendMail(senderMail);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 