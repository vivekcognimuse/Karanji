// app/api/contact/route.js
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, project } = body || {};

    // Basic validation
    if (!name || !email || !project) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Optional: sanity-check required env vars
    if (!process.env.RESEND_FROM_EMAIL || !process.env.RESEND_TO_EMAIL) {
      return NextResponse.json(
        {
          error: "Server misconfiguration",
          message:
            "RESEND_FROM_EMAIL and RESEND_TO_EMAIL must be set in environment variables.",
        },
        { status: 500 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.RESEND_TO_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; word-break: break-word; }
            .project-description { min-height: 100px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>You have received a new inquiry from your website.</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              ${
                company
                  ? `
              <div class="field">
                <span class="label">Company:</span>
                <div class="value">${company}</div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <span class="label">Project Description:</span>
                <div class="value project-description">${project}</div>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                <p>This email was sent from your website contact form at ${new Date().toLocaleString()}.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully", id: emailData?.id },
      { status: 200 }
    );
  } catch (error) {
    // Always log full error server-side
    console.error("Error sending email:", error);

    // Try to surface as much structured info as possible for debugging
    const statusCode =
      error?.status || error?.statusCode || error?.response?.status || 500;

    return NextResponse.json(
      {
        error: "Failed to send email",
        message: error?.message || "Unknown error",
        name: error?.name || "Error",
        stack: error?.stack || null,
        // Some SDKs attach useful payloads here:
        details:
          error?.response?.data ?? error?.response ?? error?.cause ?? null,
        // Echo some context to help diagnose prod issues (safe values only)
        context: {
          hasApiKey: Boolean(process.env.RESEND_API_KEY),
          fromConfigured: Boolean(process.env.RESEND_FROM_EMAIL),
          toConfigured: Boolean(process.env.RESEND_TO_EMAIL),
        },
      },
      { status: typeof statusCode === "number" ? statusCode : 500 }
    );
  }
}
