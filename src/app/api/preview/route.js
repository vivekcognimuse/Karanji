import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  console.log("🔍 Preview API route called"); // Debug log
  
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");
  const status = searchParams.get("status");

  console.log("Preview params:", { secret, url, status }); // Debug log

  // Check the secret
  if (secret !== process.env.PREVIEW_SECRET) {
    console.log("❌ Invalid secret:", secret);
    return new Response("Invalid token", { status: 401 });
  }

  console.log("✅ Secret valid, enabling preview mode");

  // Enable Draft Mode
  if (status === "published") {
    draftMode().disable();
    console.log("📝 Draft mode disabled (published content)");
  } else {
    draftMode().enable();
    console.log("🔍 Draft mode enabled (draft content)");
  }

  const redirectUrl = url || "/blog-insights";
  console.log("↗️ Redirecting to:", redirectUrl);
  
  // Redirect to the path
  redirect(redirectUrl);
}