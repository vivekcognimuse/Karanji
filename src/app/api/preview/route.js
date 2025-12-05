// app/api/preview/route.js

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");
  const status = searchParams.get("status");
  const uid = searchParams.get("uid");
  const documentId = searchParams.get("documentId");
  const locale = searchParams.get("locale");

  const previewSecret =
    process.env.PREVIEW_SECRET || process.env.NEXT_PUBLIC_PREVIEW_SECRET;

  if (!previewSecret) {
    return new Response("Preview mode not configured", { status: 503 });
  }

  if (secret !== previewSecret) {
    return new Response("Invalid token", { status: 401 });
  }

  const draft = await draftMode();

  if (status === "published") {
    draft.disable();
  } else {
    draft.enable();
  }

  const redirectUrl = url || "/";

  // Security: prevent external redirects (allow localhost and Amplify domains)
  if (redirectUrl.startsWith("http://") || redirectUrl.startsWith("https://")) {
    const urlObj = new URL(redirectUrl);
    const isLocalhost = urlObj.hostname === "localhost" || urlObj.hostname === "127.0.0.1";
    const isAmplify = urlObj.hostname.endsWith(".amplifyapp.com");
    
    if (!isLocalhost && !isAmplify) {
      return new Response("Invalid redirect URL", { status: 400 });
    }
    
    // Extract just the pathname for allowed URLs
    const localPath = urlObj.pathname + urlObj.search + urlObj.hash;
    redirect(localPath);
    return;
  }

  // Log preview request for debugging
  console.log("Preview mode enabled:", {
    url: redirectUrl,
    uid,
    documentId,
    locale,
    status: status || "draft",
  });

  redirect(redirectUrl);
}

// Handle CORS for iframe embedding from Strapi admin
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
