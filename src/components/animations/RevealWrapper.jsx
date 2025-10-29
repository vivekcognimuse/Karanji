// components/animations/RevealWrapper.jsx
"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Track if GSAP is properly initialized
let isGSAPInitialized = false;

// Initialize GSAP safely for both development and production
const initializeGSAP = () => {
  if (typeof window === "undefined" || isGSAPInitialized) return;

  try {
    gsap.registerPlugin(ScrollTrigger);
    // Ensure ScrollTrigger is refreshed on load
    ScrollTrigger.refresh();
    isGSAPInitialized = true;
  } catch (error) {
    console.warn("Failed to initialize GSAP:", error);
  }
};

export function RevealWrapper({
  children,
  className = "",
  direction = "up",
  duration = 0.6,
  delay = 0,
  distance = 30,
  once = true,
  threshold = 0.2,
  stagger = null,
  ease = "power2.out",
  markers = false, // for debugging
}) {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure client-side mounting
  useEffect(() => {
    setIsMounted(true);
    // Initialize GSAP on mount
    initializeGSAP();

    // Refresh ScrollTrigger after a brief delay to ensure proper calculation
    const refreshTimer = setTimeout(() => {
      if (isGSAPInitialized) {
        ScrollTrigger.refresh();
      }
    }, 100);

    return () => clearTimeout(refreshTimer);
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || !isMounted || !isGSAPInitialized) return;

    // Wait a frame to ensure DOM is stable
    const animationFrame = requestAnimationFrame(() => {
      // Initial setup - progressive enhancement approach
      const ctx = gsap.context(() => {
        // Get direction offsets
        const getInitialTransform = () => {
          switch (direction) {
            case "down":
              return { y: -distance };
            case "up":
              return { y: distance };
            case "left":
              return { x: distance };
            case "right":
              return { x: -distance };
            case "fade":
              return {}; // fade only, no movement
            default:
              return { y: distance };
          }
        };

        const transforms = getInitialTransform();

        // If stagger is enabled, animate children individually
        if (stagger !== null) {
          const elements = gsap.utils.toArray(container.children);

          // Set initial state
          gsap.set(elements, {
            opacity: 0,
            ...transforms,
          });

          // Create scroll trigger
          ScrollTrigger.create({
            trigger: container,
            start: `top ${100 - threshold * 100}%`,
            once,
            markers,
            invalidateOnRefresh: true, // Recalculate on refresh
            onEnter: () => {
              gsap.to(elements, {
                opacity: 1,
                x: 0,
                y: 0,
                duration,
                delay,
                ease,
                stagger: {
                  each: stagger,
                  from: "start",
                },
                clearProps: "all", // Clean up inline styles after animation
              });
            },
            onEnterBack: once
              ? undefined
              : () => {
                  gsap.to(elements, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration,
                    delay,
                    ease,
                    stagger: {
                      each: stagger,
                      from: "start",
                    },
                    clearProps: "all",
                  });
                },
            onLeave: once
              ? undefined
              : () => {
                  gsap.to(elements, {
                    opacity: 0,
                    ...transforms,
                    duration: duration * 0.5,
                    stagger: {
                      each: stagger * 0.5,
                      from: "start",
                    },
                  });
                },
          });
        } else {
          // Animate container as a whole
          gsap.set(container, {
            opacity: 0,
            ...transforms,
          });

          ScrollTrigger.create({
            trigger: container,
            start: `top ${100 - threshold * 100}%`,
            once,
            markers,
            invalidateOnRefresh: true, // Recalculate on refresh
            onEnter: () => {
              gsap.to(container, {
                opacity: 1,
                x: 0,
                y: 0,
                duration,
                delay,
                ease,
                clearProps: "all",
              });
            },
            onEnterBack: once
              ? undefined
              : () => {
                  gsap.to(container, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration,
                    delay,
                    ease,
                    clearProps: "all",
                  });
                },
            onLeave: once
              ? undefined
              : () => {
                  gsap.to(container, {
                    opacity: 0,
                    ...transforms,
                    duration: duration * 0.5,
                  });
                },
          });
        }

        // Mark as ready after setup
        setIsReady(true);
      }, container);

      return () => {
        ctx.revert(); // Proper cleanup
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === container) {
            t.kill();
          }
        });
      };
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [
    direction,
    duration,
    delay,
    distance,
    once,
    threshold,
    stagger,
    ease,
    markers,
    isMounted,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "reveal-wrapper",
        !isMounted && "opacity-0", // Hide until mounted
        !isReady && isMounted && "invisible", // Hide until animation is set up
        className
      )}
      style={{
        // Fallback for no-JS scenarios
        visibility: isMounted && isReady ? "visible" : "hidden",
      }}>
      {children}
    </div>
  );
}

// Specialized variants for common use cases
export function RevealSection({ children, className = "", ...props }) {
  return (
    <RevealWrapper
      className={cn("w-full", className)}
      threshold={0.15}
      {...props}>
      {children}
    </RevealWrapper>
  );
}

export function RevealGrid({ children, className = "", ...props }) {
  return (
    <RevealWrapper
      className={cn("grid", className)}
      stagger={0.1}
      threshold={0.1}
      {...props}>
      {children}
    </RevealWrapper>
  );
}

export function RevealList({ children, className = "", ...props }) {
  return (
    <RevealWrapper
      className={cn("flex flex-col", className)}
      stagger={0.08}
      direction="up"
      distance={20}
      {...props}>
      {children}
    </RevealWrapper>
  );
}

// Batch reveal for multiple elements with different animations
export function BatchReveal({ children, animations = [] }) {
  return (
    <>
      {children.map((child, index) => {
        const animProps = animations[index] || {};
        return (
          <RevealWrapper key={index} {...animProps}>
            {child}
          </RevealWrapper>
        );
      })}
    </>
  );
}

// Hook for programmatic control if needed
export function useRevealAnimation(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    initializeGSAP();
  }, []);

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element || !isMounted || !isGSAPInitialized) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start: `top ${100 - (options.threshold || 0.2) * 100}%`,
        once: options.once ?? true,
        invalidateOnRefresh: true,
        onEnter: () => setIsVisible(true),
        onLeave: () => !options.once && setIsVisible(false),
        onEnterBack: () => !options.once && setIsVisible(true),
      });
    });

    return () => ctx.revert();
  }, [options.threshold, options.once, isMounted]);

  return { ref: elementRef, isVisible, isMounted };
}
