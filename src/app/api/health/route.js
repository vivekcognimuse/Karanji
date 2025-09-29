// app/api/health/route.js
import { NextResponse } from "next/server";

export async function GET() {
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
      hasResendApiKey: !!process.env.RESEND_API_KEY,
      hasFromEmail: !!process.env.RESEND_FROM_EMAIL,
      hasToEmail: !!process.env.RESEND_TO_EMAIL,
      resendApiKeyLength: process.env.RESEND_API_KEY?.length || 0,
      fromEmail: process.env.RESEND_FROM_EMAIL
        ? `${process.env.RESEND_FROM_EMAIL.substring(0, 3)}***`
        : "not set",
      toEmail: process.env.RESEND_TO_EMAIL
        ? `${process.env.RESEND_TO_EMAIL.substring(0, 3)}***`
        : "not set",
    },
    checks: {
      environmentVariables:
        !!process.env.RESEND_API_KEY &&
        !!process.env.RESEND_FROM_EMAIL &&
        !!process.env.RESEND_TO_EMAIL,
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
