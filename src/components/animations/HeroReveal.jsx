"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroReveal() {
  const anchorRef = useRef(null);
  const ranRef = useRef(false);

  useLayoutEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    gsap.registerPlugin(ScrollTrigger);

    const anchor = anchorRef.current;
    if (!anchor) return;

    const section = anchor.closest("section");
    if (!section) return;

    const items = Array.from(section.querySelectorAll("[data-reveal]"));
    if (!items.length) return;

    const ctx = gsap.context(() => {
      // Optional per-section settings (defaults like BoxReveal)
      const dir = (
        section.getAttribute("data-reveal-dir") || "up"
      ).toLowerCase();
      const duration = parseFloat(
        section.getAttribute("data-reveal-duration") || "0.5"
      );
      const delay = parseFloat(
        section.getAttribute("data-reveal-delay") || "0.25"
      );
      const amount = Math.min(
        0.95,
        Math.max(
          0,
          parseFloat(section.getAttribute("data-reveal-amount") || "0.3")
        )
      );

      // Direction offset
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

      // Initial hidden state
      gsap.set(items, { opacity: 0, x, y });

      // One ScrollTrigger for the section
      ScrollTrigger.create({
        trigger: section,
        start: `top ${Math.round((1 - amount) * 100)}%`,
        once: true,
        onEnter: () => {
          items.forEach((el) => el.classList.remove("opacity-0")); // remove Tailwind opacity-0

          gsap.to(items, {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            ease: "power1.out",
            stagger: delay, // <- stagger between each element
            clearProps: "opacity,transform",
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return <span ref={anchorRef} style={{ display: "none" }} />;
}
