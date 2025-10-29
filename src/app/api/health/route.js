// app/api/health/route.js
import { NextResponse } from "next/server";

export async function GET() {
  // Check both standard and NEXT_PUBLIC_ prefixed vars (Amplify compatibility)
  const apiKey =
    process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL;
  const toEmail =
    process.env.RESEND_TO_EMAIL || process.env.NEXT_PUBLIC_RESEND_TO_EMAIL;

  const healthData = {
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "Contact Form API",
    version: "1.0.0",
    environment: {
      nodeVersion: process.version,
      nodeEnv: process.env.NODE_ENV,
      platform: process.platform,
    },
    configuration: {
      hasResendApiKey: !!apiKey,
      hasFromEmail: !!fromEmail,
      hasToEmail: !!toEmail,
      resendApiKeyLength: apiKey?.length || 0,
      fromEmail: fromEmail ? `${fromEmail.substring(0, 3)}***` : "not set",
      toEmail: toEmail ? `${toEmail.substring(0, 3)}***` : "not set",
    },
    checks: {
      environmentVariables: !!apiKey && !!fromEmail && !!toEmail,
      apiRouteWorking: true,
    },
  };

  // Determine overall status
  const allChecksPass = Object.values(healthData.checks).every(
    (check) => check === true
  );

  if (!allChecksPass) {
    healthData.status = "degraded";
    healthData.issues = [];

    if (!healthData.checks.environmentVariables) {
      healthData.issues.push("Missing required environment variables");
    }
  }

  return NextResponse.json(healthData, {
    status: allChecksPass ? 200 : 503,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
