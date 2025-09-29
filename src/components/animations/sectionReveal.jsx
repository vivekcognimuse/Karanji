"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionReveal() {
  const anchorRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const anchor = anchorRef.current;
    if (!anchor) return;

    const section = anchor.closest("section");
    if (!section) return;

    // Read optional per-section settings
    const sectionAmount = parseFloat(
      section.getAttribute("data-reveal-amount") || "0.3"
    );
    const duration = parseFloat(
      section.getAttribute("data-reveal-duration") || "0.5"
    );
    const staggerGap = parseFloat(
      section.getAttribute("data-reveal-stagger") || "0.12"
    );

    // Collect everything with [data-reveal] in DOM order
    const items = Array.from(section.querySelectorAll("[data-reveal]"));
    if (!items.length) return;

    // Helper function to reveal all items immediately
    const revealAll = () => {
      items.forEach((el) => {
        el.classList.remove("opacity-0");
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      setIsRevealed(true);
    };

    // Check if section is already in viewport
    const checkInitialVisibility = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * (1 - sectionAmount);

      // If section is already past trigger point, reveal immediately
      if (rect.top < triggerPoint && rect.bottom > 0) {
        revealAll();
        return true;
      }
      return false;
    };

    // Immediate check
    if (checkInitialVisibility()) {
      return;
    }

    // Fallback timer - reveals content after delay to prevent permanently hidden content
    const fallbackTimeout = setTimeout(() => {
      if (!isRevealed) {
        console.warn("SectionReveal: Fallback triggered for", section);
        revealAll();
      }
    }, 2000);

    // Intersection Observer as additional fallback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isRevealed) {
            // Give ScrollTrigger a moment to work, then check
            setTimeout(() => {
              const stillHidden = items.some(
                (el) => window.getComputedStyle(el).opacity === "0"
              );
              if (stillHidden) {
                revealAll();
              }
            }, 100);
          }
        });
      },
      { threshold: sectionAmount }
    );
    observer.observe(section);

    const ctx = gsap.context(() => {
      // Initial state per item (directional offset)
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

      // Create ScrollTrigger
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: `top ${Math.round((1 - Math.min(sectionAmount, 0.95)) * 100)}%`,
        once: true,
        markers: false, // Set to true for debugging
        onEnter: () => {
          clearTimeout(fallbackTimeout);
          setIsRevealed(true);

          // Remove Tailwind opacity-0 class
          items.forEach((el) => el.classList.remove("opacity-0"));

          // Animate
          gsap.to(items, {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            ease: "power2.out",
            stagger: staggerGap,
            onComplete: () => {
              // Clear inline styles after animation
              gsap.set(items, { clearProps: "all" });
            },
          });
        },
        onRefresh: () => {
          // Re-check visibility on refresh
          checkInitialVisibility();
        },
      });

      // Force immediate refresh
      ScrollTrigger.refresh();

      // Check again after a brief delay (for dynamic content)
      setTimeout(() => {
        if (!isRevealed) {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const triggerPoint = windowHeight * (1 - sectionAmount);

          if (rect.top < triggerPoint && rect.bottom > 0) {
            trigger.kill();
            revealAll();
          }
        }
      }, 500);
    }, section);

    return () => {
      clearTimeout(fallbackTimeout);
      observer.disconnect();
      ctx.revert();
    };
  }, [isRevealed]);

  // Additional safety net using regular useEffect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const anchor = anchorRef.current;
      if (!anchor) return;

      const section = anchor.closest("section");
      if (!section) return;

      const items = Array.from(section.querySelectorAll("[data-reveal]"));
      const stillHidden = items.some(
        (el) => window.getComputedStyle(el).opacity === "0"
      );

      if (stillHidden) {
        items.forEach((el) => {
          el.classList.remove("opacity-0");
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <span ref={anchorRef} style={{ display: "none" }} aria-hidden="true" />
  );
}
