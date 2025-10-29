"use client";
import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

/**
 * Custom hook for scroll speed limiting and smooth scrolling with GSAP ScrollSmoother
 * Prevents users from scrolling too fast and missing ScrollTrigger animations
 */
export const useScrollControl = (options = {}) => {
  const {
    maxSpeed = 100, // Maximum scroll speed in pixels per wheel event
    smoothness = 1.0, // ScrollSmoother smooth value (1 = normal, 2 = very smooth)
    ease = "power2.out", // GSAP easing function
    enabled = true, // Enable/disable the limiter
    useScrollSmoother = true, // Use GSAP ScrollSmoother
    wrapper = "#smooth-wrapper", // ScrollSmoother wrapper selector
    content = "#smooth-content", // ScrollSmoother content selector
    effects = true, // Enable ScrollSmoother effects
    normalizeScroll = true, // Normalize scroll across devices
    ignoreMobileResize = true, // Ignore mobile resize events
  } = options;

  const smoother = useRef(null);
  const isScrolling = useRef(false);
  const scrollTween = useRef(null);
  const velocityTracker = useRef(0);
  const lastWheelTime = useRef(0);
  const customWheelHandler = useRef(null);

  // Initialize ScrollSmoother
  const initScrollSmoother = useCallback(() => {
    if (!useScrollSmoother || typeof window === "undefined") return;

    try {
      // Check if wrapper and content elements exist
      const wrapperEl = document.querySelector(wrapper);
      const contentEl = document.querySelector(content);

      if (!wrapperEl || !contentEl) {
        console.warn(
          "ScrollSmoother elements not found. Make sure your HTML has the required wrapper and content elements."
        );
        return;
      }

      smoother.current = ScrollSmoother.create({
        wrapper: wrapper,
        content: content,
        smooth: smoothness,
        effects: effects,
        normalizeScroll: normalizeScroll,
        ignoreMobileResize: ignoreMobileResize,
        onUpdate: (self) => {
          // Custom update logic if needed
        },
      });

      return smoother.current;
    } catch (error) {
      console.warn("ScrollSmoother initialization failed:", error);
      return null;
    }
  }, [
    useScrollSmoother,
    wrapper,
    content,
    smoothness,
    effects,
    normalizeScroll,
    ignoreMobileResize,
  ]);

  // Smooth scroll to specific position
  const scrollTo = useCallback(
    (target, duration = 1.0, customEase = ease, offset = 0) => {
      if (typeof window === "undefined") return;

      let targetPosition = 0;

      // Handle different target types
      if (typeof target === "number") {
        // Direct pixel value
        targetPosition = target;
      } else if (typeof target === "string") {
        if (target === "top") {
          targetPosition = 0;
        } else if (target === "bottom") {
          if (smoother.current) {
            targetPosition =
              smoother.current.scrollTrigger?.end ||
              document.documentElement.scrollHeight;
          } else {
            targetPosition =
              document.documentElement.scrollHeight - window.innerHeight;
          }
        } else {
          // Assume it's a selector
          const element = document.querySelector(target);
          if (element) {
            if (smoother.current) {
              // Use ScrollSmoother's coordinate system
              const rect = element.getBoundingClientRect();
              targetPosition = smoother.current.scrollTop() + rect.top + offset;
            } else {
              const rect = element.getBoundingClientRect();
              targetPosition = window.pageYOffset + rect.top + offset;
            }
          } else {
            console.warn(`Element with selector "${target}" not found`);
            return;
          }
        }
      } else if (target && target.nodeType === 1) {
        // DOM element
        if (smoother.current) {
          const rect = target.getBoundingClientRect();
          targetPosition = smoother.current.scrollTop() + rect.top + offset;
        } else {
          const rect = target.getBoundingClientRect();
          targetPosition = window.pageYOffset + rect.top + offset;
        }
      }

      // Kill existing scroll animation
      if (scrollTween.current) {
        scrollTween.current.kill();
      }

      // Create smooth scroll animation
      if (smoother.current) {
        // Use ScrollSmoother's scrollTo
        scrollTween.current = gsap.to(smoother.current, {
          duration: duration,
          scrollTop: targetPosition,
          ease: customEase,
          onStart: () => {
            isScrolling.current = true;
          },
          onComplete: () => {
            isScrolling.current = false;
          },
        });
      } else {
        // Fallback to regular window scroll
        const maxScrollTop =
          document.documentElement.scrollHeight - window.innerHeight;
        const clampedPosition = Math.max(
          0,
          Math.min(maxScrollTop, targetPosition)
        );

        scrollTween.current = gsap.to(window, {
          duration: duration,
          scrollTo: { y: clampedPosition, autoKill: false },
          ease: customEase,
          onStart: () => {
            isScrolling.current = true;
          },
          onComplete: () => {
            isScrolling.current = false;
          },
        });
      }

      return scrollTween.current;
    },
    [ease]
  );

  // Scroll to top helper
  const scrollToTop = useCallback(
    (duration = 1.0) => {
      return scrollTo("top", duration);
    },
    [scrollTo]
  );

  // Scroll to bottom helper
  const scrollToBottom = useCallback(
    (duration = 1.0) => {
      return scrollTo("bottom", duration);
    },
    [scrollTo]
  );

  // Scroll to element helper (supports ID, class, or any CSS selector)
  const scrollToElement = useCallback(
    (selector, duration = 1.0, offset = 0) => {
      // If selector doesn't start with # or ., assume it's an ID
      if (
        selector &&
        !selector.startsWith("#") &&
        !selector.startsWith(".") &&
        !selector.includes(" ")
      ) {
        selector = `#${selector}`;
      }
      return scrollTo(selector, duration, ease, offset);
    },
    [scrollTo, ease]
  );

  // Custom wheel handler for speed limiting
  const setupCustomWheelHandler = useCallback(() => {
    if (!enabled || typeof window === "undefined") return;

    customWheelHandler.current = (e) => {
      if (maxSpeed === Infinity) return; // No speed limiting

      e.preventDefault();

      const now = Date.now();
      const timeDelta = now - lastWheelTime.current;

      // Calculate velocity
      const rawDelta = e.deltaY;
      const limitedDelta = Math.max(-maxSpeed, Math.min(maxSpeed, rawDelta));

      // Apply momentum-based scrolling for better feel
      if (timeDelta > 100) {
        velocityTracker.current = 0;
      }

      velocityTracker.current += limitedDelta * 0.3;
      velocityTracker.current = Math.max(
        -maxSpeed,
        Math.min(maxSpeed, velocityTracker.current)
      );

      if (smoother.current) {
        // Use ScrollSmoother for smooth scrolling
        const currentScroll = smoother.current.scrollTop();
        const targetScroll = currentScroll + velocityTracker.current;

        // Kill existing animation
        if (scrollTween.current) {
          scrollTween.current.kill();
        }

        scrollTween.current = gsap.to(smoother.current, {
          duration: 0.8,
          scrollTop: targetScroll,
          ease: "power2.out",
          onStart: () => {
            isScrolling.current = true;
          },
          onComplete: () => {
            isScrolling.current = false;
            velocityTracker.current *= 0.8;
          },
        });
      } else {
        // Fallback to regular scrolling
        const currentScroll = window.pageYOffset;
        const targetScroll = currentScroll + velocityTracker.current;
        const maxScrollTop =
          document.documentElement.scrollHeight - window.innerHeight;
        const clampedScroll = Math.max(0, Math.min(maxScrollTop, targetScroll));

        if (scrollTween.current) {
          scrollTween.current.kill();
        }

        scrollTween.current = gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: clampedScroll, autoKill: false },
          ease: "power2.out",
          onStart: () => {
            isScrolling.current = true;
          },
          onComplete: () => {
            isScrolling.current = false;
            velocityTracker.current *= 0.8;
          },
        });
      }

      lastWheelTime.current = now;
    };

    // Add wheel event listener
    window.addEventListener("wheel", customWheelHandler.current, {
      passive: false,
    });
  }, [enabled, maxSpeed]);

  // Keyboard handler
  const handleKeyDown = useCallback(
    (e) => {
      if (!enabled) return;

      const scrollKeys = [32, 33, 34, 35, 36, 38, 40]; // Space, PageUp, PageDown, End, Home, Up, Down

      if (scrollKeys.includes(e.keyCode)) {
        e.preventDefault();

        let targetPosition = 0;
        const currentScroll = smoother.current
          ? smoother.current.scrollTop()
          : window.pageYOffset;

        switch (e.keyCode) {
          case 32: // Space
            targetPosition = currentScroll + window.innerHeight * 0.8;
            break;
          case 33: // Page Up
            targetPosition = currentScroll - window.innerHeight * 0.8;
            break;
          case 34: // Page Down
            targetPosition = currentScroll + window.innerHeight * 0.8;
            break;
          case 35: // End
            targetPosition = smoother.current
              ? smoother.current.scrollTrigger?.end ||
                document.documentElement.scrollHeight
              : document.documentElement.scrollHeight - window.innerHeight;
            break;
          case 36: // Home
            targetPosition = 0;
            break;
          case 38: // Up Arrow
            targetPosition = currentScroll - maxSpeed;
            break;
          case 40: // Down Arrow
            targetPosition = currentScroll + maxSpeed;
            break;
        }

        scrollTo(targetPosition, 0.8);
      }
    },
    [enabled, maxSpeed, scrollTo]
  );

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    // Initialize ScrollSmoother if enabled
    if (useScrollSmoother) {
      // Wait for DOM to be ready
      const timer = setTimeout(() => {
        initScrollSmoother();
        // Setup custom wheel handler after ScrollSmoother is initialized
        setupCustomWheelHandler();
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Setup custom wheel handler for regular scrolling
      setupCustomWheelHandler();
    }
  }, [enabled, useScrollSmoother, initScrollSmoother, setupCustomWheelHandler]);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    // Add keyboard event listener
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    // Disable default smooth scrolling if not using ScrollSmoother
    if (!useScrollSmoother) {
      document.documentElement.style.scrollBehavior = "auto";
    }

    return () => {
      // Cleanup
      window.removeEventListener("keydown", handleKeyDown);

      if (customWheelHandler.current) {
        window.removeEventListener("wheel", customWheelHandler.current);
      }

      if (scrollTween.current) {
        scrollTween.current.kill();
      }

      if (smoother.current) {
        smoother.current.kill();
        smoother.current = null;
      }

      // Restore default scroll behavior
      if (!useScrollSmoother) {
        document.documentElement.style.scrollBehavior = "";
      }
    };
  }, [enabled, useScrollSmoother, handleKeyDown]);

  return {
    scrollTo, // scrollTo(target, duration?, ease?, offset?)
    scrollToTop, // scrollToTop(duration?)
    scrollToBottom, // scrollToBottom(duration?)
    scrollToElement, // scrollToElement(selector, duration?, offset?)
    smoother: smoother.current, // Direct access to ScrollSmoother instance
    isScrolling: () => isScrolling.current,
    refresh: () => {
      if (smoother.current) {
        smoother.current.refresh();
      }
      ScrollTrigger.refresh();
    },
    killScroll: () => {
      if (scrollTween.current) {
        scrollTween.current.kill();
        isScrolling.current = false;
      }
    },
  };
};

/**
 * React component wrapper for easier usage in layout
 */
export const ScrollController = (props) => {
  useScrollControl(props);
  return null; // This component doesn't render anything
};
