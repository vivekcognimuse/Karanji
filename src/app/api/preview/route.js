import { NextResponse } from "next/server";
import { draftMode } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret") || "";
  const status = (searchParams.get("status") || "").toLowerCase();
  const rawUrl = searchParams.get("url") || "/";

  // 1) Check secret
  if (secret !== process.env.PREVIEW_SECRET) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  // 2) Enable/disable draft mode
  if (status === "published") {
    draftMode().disable();
  } else {
    draftMode().enable();
  }

  // 3) Only allow internal redirects
  const target = rawUrl.startsWith("/") ? rawUrl : "/";
  return NextResponse.redirect(new URL(target, request.url));
}
