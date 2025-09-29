// For App Router: app/api/contact/route.js
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  // Add early logging
  console.log("=== API ROUTE CALLED ===");
  console.log("Environment check:", {
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasFromEmail: !!process.env.RESEND_FROM_EMAIL,
    hasToEmail: !!process.env.RESEND_TO_EMAIL,
    nodeEnv: process.env.NODE_ENV,
  });

  try {
    const body = await request.json();
    console.log("Request body parsed successfully:", Object.keys(body));
    const { name, email, company, project } = body;

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

    console.log("Attempting to send email with following details:");
    console.log({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      senderName: name,
      senderEmail: email,
      hasCompany: !!company,
      projectLength: project.length,
      timestamp: new Date().toISOString(),
    });

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.RESEND_TO_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
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

    console.log("Email sent successfully:", {
      id: emailData.id,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: emailData.id,
      },
      { status: 200 }
    );
  } catch (error) {
    // Detailed error logging
    console.error("=== EMAIL SENDING ERROR ===");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);

    // Try to serialize the error object
    try {
      console.error(
        "Full error object:",
        JSON.stringify(error, Object.getOwnPropertyNames(error), 2)
      );
    } catch (serializeError) {
      console.error("Could not serialize error:", serializeError.message);
    }

    // Log additional error details if available
    if (error.response) {
      console.error("Error response:", JSON.stringify(error.response, null, 2));
    }

    if (error.statusCode) {
      console.error("Error status code:", error.statusCode);
    }

    // Build comprehensive error response
    const errorResponse = {
      error: error.message || "Unknown error occurred",
      errorName: error.name || "Error",
      errorType: typeof error,
      timestamp: new Date().toISOString(),
    };

    // Add optional fields if they exist
    if (error.stack) {
      errorResponse.errorStack = error.stack;
    }
    if (error.statusCode) {
      errorResponse.statusCode = error.statusCode;
    }
    if (error.response) {
      errorResponse.response = error.response;
    }

    // Add all enumerable properties
    Object.keys(error).forEach((key) => {
      if (!errorResponse[key]) {
        errorResponse[key] = error[key];
      }
    });

    console.error("Sending error response:", errorResponse);

    // Return detailed error response with explicit status
    const statusCode = error.statusCode || 500;
    return new NextResponse(JSON.stringify(errorResponse), {
      status: statusCode,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
