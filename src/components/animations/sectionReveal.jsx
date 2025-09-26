"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionReveal() {
  const anchorRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const anchor = anchorRef.current;
    if (!anchor) return;

    const section = anchor.closest("section");
    if (!section) return;

    // read optional per-section settings
    const sectionAmount = parseFloat(
      section.getAttribute("data-reveal-amount") || "0.3"
    ); // 30% in view
    const duration = parseFloat(
      section.getAttribute("data-reveal-duration") || "0.5"
    );
    const staggerGap = parseFloat(
      section.getAttribute("data-reveal-stagger") || "0.12"
    );

    // collect everything with [data-reveal] in DOM order
    const items = Array.from(section.querySelectorAll("[data-reveal]"));
    if (!items.length) return;

    // Fallback timeout to ensure content is visible even if animation fails
    const fallbackTimeout = setTimeout(() => {
      items.forEach((el) => {
        el.classList.remove("opacity-0");
        gsap.set(el, { opacity: 1, x: 0, y: 0, clearProps: "transform" });
      });
    }, 3000); // 3 second fallback

    const ctx = gsap.context(() => {
      // 1) initial state per item (directional offset)
      items.forEach((el) => {
        const dir = (el.getAttribute("data-reveal-dir") || "up").toLowerCase();
        let x = 0,
          y = 0;
        switch (dir) {
          case "down":
            y = -50;
            break;
          case "left":
            x = 50;
            break;
          case "right":
            x = -50;
            break;
          case "up":
          default:
            y = 50;
            break;
        }
        gsap.set(el, { opacity: 0, x, y });
      });

      // 2) one trigger for the whole section; play a staggered tween
      ScrollTrigger.create({
        trigger: section,
        start: `top ${Math.round(
          (1 - Math.max(0, Math.min(sectionAmount, 0.95))) * 100
        )}%`,
        once: true,
        onEnter: () => {
          // Clear the fallback timeout since animation is working
          clearTimeout(fallbackTimeout);
          
          // remove Tailwind opacity-0 before we clear inline styles later
          items.forEach((el) => el.classList.remove("opacity-0"));

          gsap.to(items, {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            ease: "power1.out", // close to framer "easeOut"
            stagger: staggerGap, // << one-after-another
            onComplete: () =>
              gsap.set(items, { clearProps: "opacity,transform" }),
          });
        },
        onRefresh: () => {
          // Additional safety: if ScrollTrigger refreshes and elements are still hidden
          const stillHidden = items.some(el => 
            getComputedStyle(el).opacity === '0' || el.classList.contains('opacity-0')
          );
          if (stillHidden) {
            items.forEach((el) => {
              el.classList.remove("opacity-0");
              gsap.set(el, { opacity: 1, x: 0, y: 0, clearProps: "transform" });
            });
          }
        }
      });
    }, section);

    return () => {
      clearTimeout(fallbackTimeout);
      ctx.revert();
    };
  }, []);

  // invisible anchor to scope to the correct section instance
  return <span ref={anchorRef} style={{ display: "none" }} />;
}
