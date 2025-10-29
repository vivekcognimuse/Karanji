// app/api/download-form/route.js
import { Resend } from "resend";
import { NextResponse } from "next/server";

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

  console.log("=== DOWNLOAD FORM API CALLED ===", {
    timestamp: new Date().toISOString(),
    method: request.method,
  });

  try {
    // Initialize Resend inside the handler to ensure env vars are available
    let resend;

    if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
      console.error(
        "NEXT_PUBLIC_RESEND_API_KEY environment variable is not set"
      );
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

    try {
      resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    } catch (initError) {
      console.error("Failed to initialize Resend:", initError);
      return NextResponse.json(
        {
          error: "Email service initialization failed",
          message:
            "Failed to initialize email service. Please contact support.",
          code: "INIT_ERROR",
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
      );
    }

    // Verify environment variables
    const envCheck = {
      hasResendKey: !!process.env.NEXT_PUBLIC_RESEND_API_KEY,
      hasFromEmail: !!process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL,
      hasToEmail: !!process.env.NEXT_PUBLIC_RESEND_TO_EMAIL,
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

    const { name, email, pdfLink, title } = body;

    console.log("Request data received:", {
      hasName: !!name,
      hasEmail: !!email,
      hasPdfLink: !!pdfLink,
      hasTitle: !!title,
    });

    // Validate required fields
    if (!name || !email) {
      const missingFields = [];
      if (!name) missingFields.push("name");
      if (!email) missingFields.push("email");

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
    if (name.length > 100 || email.length > 254) {
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
          message: `You've submitted too many download requests. Please try again in ${rateLimitCheck.remainingTime} minutes.`,
          remainingTime: rateLimitCheck.remainingTime,
          code: "RATE_LIMITED",
          timestamp: new Date().toISOString(),
        },
        { status: 429 }
      );
    }

    // Prepare email data with sanitized HTML
    const emailData = {
      from: process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL,
      to: [process.env.NEXT_PUBLIC_RESEND_TO_EMAIL],
      subject: `New Download Form Submission - ${escapeHtml(
        title || "Document"
      )}`,
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
              word-wrap: break-word;
              color: #333;
            }
            .footer { 
              background: #f9f9f9; 
              padding: 20px; 
              text-align: center; 
              font-size: 12px;
              color: #666;
              border-top: 1px solid #eee;
            }
            .download-link {
              display: inline-block;
              background: #667eea;
              color: white;
              padding: 12px 24px;
              border-radius: 6px;
              text-decoration: none;
              margin-top: 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📥 New Download Request</h1>
              <p>Someone has requested to download a resource</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name</span>
                <div class="value">${escapeHtml(name)}</div>
              </div>
              <div class="field">
                <span class="label">Email</span>
                <div class="value">${escapeHtml(email)}</div>
              </div>
              ${
                title
                  ? `
              <div class="field">
                <span class="label">Case Study Name</span>
                <div class="value">${escapeHtml(title)}</div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <span class="label">Submitted At</span>
                <div class="value">${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated notification from your website's download form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log("Attempting to send email with data:", {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      hasHtml: !!emailData.html,
    });

    // Send email with comprehensive error handling
    let emailResult;
    try {
      emailResult = await resend.emails.send(emailData);
      console.log("Email sent successfully:", {
        id: emailResult.data?.id,
        duration: Date.now() - startTime,
      });
    } catch (emailError) {
      console.error("Resend API error:", {
        message: emailError.message,
        statusCode: emailError.statusCode,
        name: emailError.name,
        stack: emailError.stack,
      });

      return NextResponse.json(
        {
          error: "Failed to send email",
          message:
            "We couldn't send the notification email. Please try again or contact support.",
          code: "EMAIL_SEND_ERROR",
          timestamp: new Date().toISOString(),
          details:
            process.env.NODE_ENV === "development"
              ? {
                  error: emailError.message,
                  statusCode: emailError.statusCode,
                }
              : undefined,
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: "Download request submitted successfully",
        emailId: emailResult.data?.id,
        timestamp: new Date().toISOString(),
        duration: Date.now() - startTime,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in download-form API:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "An unexpected error occurred. Please try again later.",
        code: "INTERNAL_ERROR",
        timestamp: new Date().toISOString(),
        details:
          process.env.NODE_ENV === "development"
            ? {
                error: error.message,
                stack: error.stack,
              }
            : undefined,
      },
      { status: 500 }
    );
  }
}
