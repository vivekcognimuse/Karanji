// app/api/exit-preview/route.js

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const redirectUrl = searchParams.get("url") || "/";

  // Disable draft mode
  const draft = await draftMode();
  draft.disable();

  console.log("Preview mode disabled, redirecting to:", redirectUrl);

  // Security: prevent external redirects
  if (redirectUrl.startsWith("http://") || redirectUrl.startsWith("https://")) {
    redirect("/");
  }

  redirect(redirectUrl);
}
