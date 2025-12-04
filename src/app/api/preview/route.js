// app/api/preview/route.js

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");
  const status = searchParams.get("status");

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

  if (redirectUrl.startsWith("http://") || redirectUrl.startsWith("https://")) {
    return new Response("Invalid redirect URL", { status: 400 });
  }

  redirect(redirectUrl);
}
