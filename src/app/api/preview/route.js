import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  console.log("Preview API route called");

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");
  const status = searchParams.get("status");

  console.log("Preview params:", {
    hasSecret: !!secret,
    url,
    status,
  });

  // Check for preview secret with Amplify compatibility
  const previewSecret =
    process.env.PREVIEW_SECRET || process.env.NEXT_PUBLIC_PREVIEW_SECRET;

  if (!previewSecret) {
    console.error("PREVIEW_SECRET not configured");
    return new Response("Preview mode not configured", { status: 503 });
  }

  if (secret !== previewSecret) {
    console.log("Invalid secret provided");
    return new Response("Invalid token", { status: 401 });
  }

  console.log("Secret valid, toggling draft mode");

  // Enable/disable draft mode based on status
  const draft = await draftMode();

  if (status === "published") {
    draft.disable();
    console.log("Draft mode disabled (published content)");
  } else {
    draft.enable();
    console.log("Draft mode enabled (draft content)");
  }

  // Validate and sanitize redirect URL
  const redirectUrl = url || "/blog-insights";

  // Security: Only allow relative URLs to prevent open redirect
  if (redirectUrl.startsWith("http://") || redirectUrl.startsWith("https://")) {
    console.error("External redirect blocked:", redirectUrl);
    return new Response("Invalid redirect URL", { status: 400 });
  }

  console.log("Redirecting to:", redirectUrl);

  redirect(redirectUrl);
}
