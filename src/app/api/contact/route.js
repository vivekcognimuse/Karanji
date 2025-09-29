// app/api/contact/route.js
import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend - handle missing API key gracefully
let resend;
try {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set");
  } else {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
} catch (error) {
  console.error("Failed to initialize Resend:", error);
}

// Rate limiting store (in-memory, resets on deployment)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

// Helper to check rate limit
function checkRateLimit(identifier) {
  const now = Date.now();
  const attempts = rateLimitStore.get(identifier) || [];
  const validAttempts = attempts.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  );

  if (validAttempts.length >= MAX_ATTEMPTS) {
    const oldestAttempt = Math.min(...validAttempts);
    const remainingTime = Math.ceil(
      (RATE_LIMIT_WINDOW - (now - oldestAttempt)) / 1000 / 60
    );
    return { allowed: false, remainingTime };
  }

  validAttempts.push(now);
  rateLimitStore.set(identifier, validAttempts);
  return { allowed: true };
}

// Helper to sanitize HTML content
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Helper to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request) {
  const startTime = Date.now();

  console.log("=== CONTACT FORM API CALLED ===", {
    timestamp: new Date().toISOString(),
    method: request.method,
  });

  try {
    // Check if Resend is initialized
    if (!resend) {
      console.error("Resend not initialized - missing API key");
      return NextResponse.json(
        {
          error: "Email service not configured",
          message:
            "The email service is not properly configured. Please contact support.",
          code: "SERVICE_UNAVAILABLE",
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
      );
    }

    // Verify environment variables
    const envCheck = {
      hasResendKey: !!process.env.RESEND_API_KEY,
      hasFromEmail: !!process.env.RESEND_FROM_EMAIL,
      hasToEmail: !!process.env.RESEND_TO_EMAIL,
    };

    console.log("Environment check:", envCheck);

    if (!envCheck.hasFromEmail || !envCheck.hasToEmail) {
      console.error("Missing email configuration");
      return NextResponse.json(
        {
          error: "Email configuration incomplete",
          message:
            "Email service configuration is incomplete. Please contact support.",
          code: "CONFIG_ERROR",
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError);
      return NextResponse.json(
        {
          error: "Invalid request format",
          message: "The request body must be valid JSON",
          code: "INVALID_JSON",
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    const { name, email, company, project, metadata } = body;

    console.log("Request data received:", {
      hasName: !!name,
      hasEmail: !!email,
      hasCompany: !!company,
      hasProject: !!project,
      projectLength: project?.length,
    });

    // Validate required fields
    if (!name || !email || !project) {
      const missingFields = [];
      if (!name) missingFields.push("name");
      if (!email) missingFields.push("email");
      if (!project) missingFields.push("project");

      return NextResponse.json(
        {
          error: "Missing required fields",
          message: `The following fields are required: ${missingFields.join(
            ", "
          )}`,
          missingFields,
          code: "VALIDATION_ERROR",
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          error: "Invalid email format",
          message: "Please provide a valid email address",
          code: "INVALID_EMAIL",
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 254 || project.length > 5000) {
      return NextResponse.json(
        {
          error: "Field length exceeded",
          message: "One or more fields exceed maximum length",
          code: "FIELD_TOO_LONG",
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    // Check rate limiting (use email as identifier)
    const rateLimitCheck = checkRateLimit(email.toLowerCase());
    if (!rateLimitCheck.allowed) {
      console.warn(`Rate limit exceeded for ${email}`);
      return NextResponse.json(
        {
          error: "Too many requests",
          message: `You've submitted too many forms. Please try again in ${rateLimitCheck.remainingTime} minutes.`,
          remainingTime: rateLimitCheck.remainingTime,
          code: "RATE_LIMITED",
          timestamp: new Date().toISOString(),
        },
        { status: 429 }
      );
    }

    // Prepare email data with sanitized HTML
    const emailData = {
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.RESEND_TO_EMAIL],
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
              line-height: 1.6; 
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 600px; 
              margin: 20px auto; 
              background: white;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 30px 20px;
              text-align: center;
            }
            .header h1 { 
              margin: 0 0 10px 0; 
              font-size: 24px;
              font-weight: 600;
            }
            .header p {
              margin: 0;
              opacity: 0.95;
              font-size: 14px;
            }
            .content { 
              padding: 30px 20px;
            }
            .field { 
              margin-bottom: 24px;
            }
            .label { 
              font-weight: 600; 
              color: #555; 
              display: block; 
              margin-bottom: 8px;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value { 
              background: #f9f9f9; 
              padding: 12px 16px; 
              border-radius: 6px; 
              border-left: 4px solid #667eea;
              font-size: 15px;
              word-wrap: break-word;
            }
            .project-description { 
              min-height: 60px;
              white-space: pre-wrap;
            }
            .footer {
              padding: 20px;
              border-top: 1px solid #eee;
              background-color: #fafafa;
              font-size: 12px;
              color: #666;
              text-align: center;
            }
            .metadata {
              font-size: 11px;
              color: #999;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
              <p>You have received a new inquiry from your website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name</span>
                <div class="value">${escapeHtml(name)}</div>
              </div>
              
              <div class="field">
                <span class="label">Email</span>
                <div class="value">
                  <a href="mailto:${escapeHtml(
                    email
                  )}" style="color: #667eea; text-decoration: none;">
                    ${escapeHtml(email)}
                  </a>
                </div>
              </div>
              
              ${
                company
                  ? `
              <div class="field">
                <span class="label">Company</span>
                <div class="value">${escapeHtml(company)}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <span class="label">Project Description</span>
                <div class="value project-description">${escapeHtml(
                  project
                )}</div>
              </div>
              
              ${
                metadata
                  ? `
              <div class="field metadata">
                <strong>Submission Details:</strong><br>
                Timezone: ${escapeHtml(metadata.timezone || "Unknown")}<br>
                Language: ${escapeHtml(metadata.language || "Unknown")}<br>
                User Agent: ${escapeHtml(
                  metadata.userAgent?.substring(0, 100) || "Unknown"
                )}
              </div>
              `
                  : ""
              }
            </div>
            <div class="footer">
              <p>This email was sent from your website contact form</p>
              <p style="margin: 5px 0 0 0;">
                ${new Date().toLocaleString("en-US", {
                  dateStyle: "full",
                  timeStyle: "long",
                })}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      // Plain text version as fallback
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}

Project Description:
${project}

Submitted: ${new Date().toISOString()}
      `.trim(),
    };

    console.log("Attempting to send email via Resend...");

    // Send email using Resend
    const result = await resend.emails.send(emailData);

    const processingTime = Date.now() - startTime;

    console.log("Email sent successfully:", {
      id: result.id,
      processingTime: `${processingTime}ms`,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
        id: result.id,
        processingTime,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    const processingTime = Date.now() - startTime;

    // Comprehensive error logging
    console.error("=== EMAIL SENDING ERROR ===");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    console.error("Processing time:", `${processingTime}ms`);

    // Try to get more error details
    if (error.cause) {
      console.error("Error cause:", error.cause);
    }

    // Log Resend-specific error details
    if (error.statusCode) {
      console.error("Resend status code:", error.statusCode);
    }

    if (error.name === "validation_error") {
      console.error("Validation error details:", error.message);
    }

    // Determine appropriate error response
    let statusCode = 500;
    let errorMessage = "Failed to send email. Please try again later.";
    let errorCode = "SEND_ERROR";

    // Handle specific Resend errors
    if (error.message?.includes("API key")) {
      errorMessage = "Email service authentication failed";
      errorCode = "AUTH_ERROR";
      statusCode = 503;
    } else if (error.message?.includes("from")) {
      errorMessage = "Email sender configuration error";
      errorCode = "SENDER_ERROR";
      statusCode = 503;
    } else if (error.statusCode === 429) {
      errorMessage =
        "Email service rate limit exceeded. Please try again later.";
      errorCode = "RATE_LIMITED";
      statusCode = 429;
    } else if (error.statusCode === 422) {
      errorMessage = "Invalid email data format";
      errorCode = "VALIDATION_ERROR";
      statusCode = 422;
    }

    // Build error response
    const errorResponse = {
      error: errorMessage,
      message: errorMessage,
      code: errorCode,
      timestamp: new Date().toISOString(),
      processingTime,
    };

    // In development, include more details
    if (process.env.NODE_ENV === "development") {
      errorResponse.details = {
        errorName: error.name,
        errorMessage: error.message,
        statusCode: error.statusCode,
      };
    }

    return NextResponse.json(errorResponse, {
      status: statusCode,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    {
      error: "Method not allowed",
      message: "This endpoint only accepts POST requests",
      code: "METHOD_NOT_ALLOWED",
      timestamp: new Date().toISOString(),
    },
    { status: 405 }
  );
}
