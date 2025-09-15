"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google"; // ✅ official GA helper

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");

    const analyticsData = {
      page_path: url,
      page_location: window.location.href,
    };

    // ✅ Log to console for debugging
    console.log("🔍 GA Page Event Fired:", {
      event: "custom_page_view",
      ...analyticsData,
    });

    // ✅ Send to GA (avoids duplication with GA’s built-in page_view)
    sendGAEvent("event", "custom_page_view", analyticsData);
  }, [pathname, searchParams]);

  return null;
}
