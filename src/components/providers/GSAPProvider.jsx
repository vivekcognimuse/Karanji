// components/providers/GSAPProvider.jsx
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GSAPProvider({ children }) {
  useEffect(() => {
    // Global GSAP setup for production reliability
    const initGSAP = () => {
      try {
        gsap.registerPlugin(ScrollTrigger);

        // Configure ScrollTrigger for better performance
        ScrollTrigger.config({
          autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
          ignoreMobileResize: true, // Better mobile performance
        });

        // Refresh all ScrollTriggers after page load
        ScrollTrigger.refresh();

        // Handle route changes in Next.js
        const handleRouteChange = () => {
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        };

        // Listen for Next.js route changes
        if (typeof window !== "undefined") {
          window.addEventListener("beforeunload", () => {
            ScrollTrigger.killAll();
          });

          // For Next.js router events (if using app router)
          window.addEventListener("popstate", handleRouteChange);
        }

        return () => {
          if (typeof window !== "undefined") {
            window.removeEventListener("popstate", handleRouteChange);
          }
        };
      } catch (error) {
        console.warn("Failed to initialize GSAP globally:", error);
      }
    };

    const cleanup = initGSAP();
    return cleanup;
  }, []);

  return <>{children}</>;
}
