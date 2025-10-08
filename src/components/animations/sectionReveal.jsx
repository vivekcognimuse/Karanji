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
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // invisible anchor to scope to the correct section instance
  return <span ref={anchorRef} style={{ display: "none" }} />;
}
