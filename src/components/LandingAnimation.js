"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/Button";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LogoStoryAnimation = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const finalLogoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const logo = logoRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;
    const finalLogo = finalLogoRef.current;
    const progressBar = progressBarRef.current;

    if (
      !container ||
      !logo ||
      !section1 ||
      !section2 ||
      !section3 ||
      !leftContent ||
      !rightContent ||
      !finalLogo ||
      !progressBar
    ) {
      return;
    }

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Initial state - hide everything except the logo
    gsap.set(leftContent, {
      opacity: 0,
      x: -120,
      scale: 1,
      rotationY: -20,
    });

    gsap.set(rightContent, {
      opacity: 0,
      x: 120,
      scale: 1,
      rotationY: 20,
    });

    gsap.set(finalLogo, {
      opacity: 0,
      x: 0,
      scale: 0.7,
      rotation: -360, // Start rotated so it can spin in
    });

    // Add subtle glow effect to logo sections initially - all at full opacity
    gsap.set([section1, section2, section3], {
      filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
      opacity: 1, // Ensure all start at full opacity
    });

    // Create main timeline with multiple stages
    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=4000", // Increased scroll distance
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        refreshPriority: -1,
        onUpdate: (self) => {
          updateProgressAndContent(self.progress);
        },
      },
    });

    // Stage 1: Focus on Creative Learning (0% - 20%)
    mainTL
      // Highlight section 1, hide AI Innovation completely
      .to(section1, {
        filter: "",
        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        section2,
        {
          opacity: 0, // Completely hide AI Innovation
          duration: 0.3,
        },
        "<"
      )
      .to(
        section3,
        {
          opacity: 1,
          duration: 0.3,
        },
        "<"
      )
      // Bring in left content
      .to(
        leftContent,
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        "-=0.1"
      )

      // Stage 2: Transition to AI Innovation (20% - 45%)
      .to(section1, {
        filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
        scale: 1,
        opacity: 0, // Completely hide Creative Learning
        duration: 0.3,
      })
      .to(
        section2,
        {
          filter: "drop-shadow(0 0 20px rgba(191, 219, 254, 0.8))",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        section3,
        {
          opacity: 1,
          duration: 0.3,
        },
        "<"
      )
      // Bring in right content
      .to(
        rightContent,
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        "-=0.1"
      )

      // Stage 3: Focus on Immersive Tech (45% - 70%)
      .to(section2, {
        filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
        scale: 1,
        opacity: 1,
        duration: 0.3,
      })
      .to(
        section3,
        {
          filter: "drop-shadow(0 0 20px rgba(196, 181, 253, 0.8))",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        section1,
        {
          opacity: 0, // Completely hide Creative Learning
          duration: 0.3,
        },
        "<"
      )

      // Stage 4: Unify all sections (70% - 85%)
      .to([section1, section2, section3], {
        opacity: 1,
        scale: 1,
        filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))",
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(
        logo,
        {
          scale: 1.1,
          rotation: 360,
          duration: 0.6,
          ease: "power2.inOut",
        },
        "<"
      )
      // Clear side content during unification - completely hide
      .to(
        [leftContent, rightContent],
        {
          opacity: 0,
          x: (index, target) => (target === leftContent ? -400 : 400),
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "<"
      )

      // Stage 5: Transform to final logo with spinning transition (85% - 100%)
      .to(logo, {
        opacity: 0,
        scale: 0.8,
        rotation: 720, // Extra spin during exit
        duration: 0.8,
        ease: "power2.in",
      })
      .to(
        finalLogo,
        {
          opacity: 1,
          scale: 1,
          rotation: 360, // Spin in while appearing
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.4" // Overlap the transitions
      );

    const updateProgressAndContent = (progress) => {
      // Update progress bar
      if (progressBar) {
        gsap.to(progressBar, { scaleX: progress, duration: 0.1 });
      }

      // Determine current stage and update content
      let stage = 0;
      if (progress < 0.2) stage = 0; // Initial
      else if (progress < 0.45) stage = 1; // Creative Learning
      else if (progress < 0.7) stage = 2; // AI Innovation
      else if (progress < 0.85) stage = 3; // Immersive Tech
      else stage = 4; // Final unified

      if (stage !== currentStage) {
        setCurrentStage(stage);
        updateContentWithTransition(stage);
      }
    };

    const updateContentWithTransition = (stage) => {
      // Smooth content transitions
      const leftEl = leftContentRef.current;
      const rightEl = rightContentRef.current;

      if (leftEl && rightEl) {
        // For stage 4 and above, completely hide content with more distance
        if (stage >= 4) {
          gsap.to([leftEl, rightEl], {
            opacity: 0,
            x: (index, target) => (target === leftEl ? -500 : 500),
            scale: 0.7,
            duration: 0.5,
            ease: "power2.in",
          });
          return;
        }

        // Fade out current content before updating with new content
        gsap.to([leftEl, rightEl], {
          opacity: 0.7,
          y: 10,
          duration: 0.2,
          onComplete: () => {
            // Update content dynamically based on the current stage
            leftEl.innerHTML = getLeftContent(stage);
            rightEl.innerHTML = getRightContent(stage);

            // Fade in the new content with a smooth animation
            gsap.to([leftEl, rightEl], {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      }
    };

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getLeftContent = (stage) => {
    const contents = {
      0: "", // Initial state
      1: `
        <div class="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg border border-pink-200">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
            <span class="inline-block px-3 py-1 bg-pink-100 rounded-full text-sm font-medium text-pink-800">Creative Learning Focus</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Immersive AR/VR Experiences</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">Leverages narrative immersion to engage learners emotionally and cognitively within virtual environments.</p>
          <div class="flex items-center gap-2 text-pink-600 font-medium cursor-pointer hover:text-pink-700 transition-colors">
            <span class="border-b-2 border-pink-400 pb-1">View Solutions</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      `,
      2: `
        <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-200">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span class="inline-block px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-800">AI Innovation Focus</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Intelligent Analytics Platform</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">Advanced AI algorithms analyze learning patterns and optimize educational outcomes in real-time.</p>
          <div class="flex items-center gap-2 text-blue-600 font-medium cursor-pointer hover:text-blue-700 transition-colors">
            <span class="border-b-2 border-blue-400 pb-1">Explore Technology</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      `,
      3: `
        <div class="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg border border-purple-200">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <span class="inline-block px-3 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-800">Immersive Tech Focus</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Intelligent Simulations & Forecasts</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">Blends experiential learning with AI-driven insights to drive measurable performance and learning outcomes.</p>
          <div class="flex items-center gap-2 text-purple-600 font-medium cursor-pointer hover:text-purple-700 transition-colors">
            <span class="border-b-2 border-purple-400 pb-1">View Simulations</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
      `,
      4: `
        <div class="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-xl border border-indigo-200">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
            <span class="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-medium text-gray-800">Complete Ecosystem</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Unified Learning Platform</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">Integrating creative learning, immersive technology, and AI innovation for transformative educational experiences.</p>
          <div class="flex items-center gap-2 text-indigo-600 font-medium cursor-pointer hover:text-indigo-700 transition-colors">
            <span class="border-b-2 border-indigo-400 pb-1">Discover Platform</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      `,
    };
    return contents[stage] || "";
  };

  const getRightContent = (stage) => {
    const contents = {
      0: "", // Initial state
      1: "", // Only left content in stage 1
      2: `
        <div class="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg border border-cyan-200">
          <h3 class="text-xl font-bold mb-2 text-gray-800">Intelligent Simulations & Real Time Analytics</h3>
          <p class="text-sm text-gray-600 mb-4">Where <strong class="text-blue-600">Immersive Tech</strong> meets <strong class="text-cyan-600">AI Innovation</strong></p>
          <div class="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <div class="w-10 h-10 bg-white rounded-lg opacity-90 flex items-center justify-center">
              <div class="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded"></div>
            </div>
          </div>
          <div class="mt-4 flex items-center text-cyan-600">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span class="text-sm font-medium">Real-time Processing</span>
          </div>
        </div>
      `,
      3: `
        <div class="p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-lg border border-rose-200">
          <h3 class="text-xl font-bold mb-2 text-gray-800">Story Driven VR/AR Experiences</h3>
          <p class="text-sm text-gray-600 mb-4">Where <strong class="text-purple-600">Creative Learning</strong> meets <strong class="text-pink-600">Immersive Tech</strong></p>
          <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
            <div class="w-10 h-10 bg-white rounded-lg opacity-90 flex items-center justify-center">
              <div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
            </div>
          </div>
          <div class="mt-4 flex items-center text-purple-600">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span class="text-sm font-medium">Immersive Storytelling</span>
          </div>
        </div>
      `,
      4: `
        <div class="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-xl border border-emerald-200">
          <h3 class="text-xl font-bold mb-2 text-gray-800">Complete Solution Integration</h3>
          <p class="text-sm text-gray-600 mb-4">Where all <strong class="text-emerald-600">three pillars</strong> converge for maximum impact</p>
          <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <div class="w-10 h-10 bg-white rounded-lg opacity-90 flex items-center justify-center">
              <div class="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded"></div>
            </div>
          </div>
          <div class="mt-4 flex items-center text-emerald-600">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            <span class="text-sm font-medium">Unified Experience</span>
          </div>
        </div>
      `,
    };
    return contents[stage] || "";
  };
  return (
    <div className="">
      {/* Empty div above for viewport entry */}

      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div ref={progressBarRef} className="h-full  origin-left scale-x-0" />
      </div>

      {/* Main container - pinned section */}
      <div
        ref={containerRef}
        className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/90 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        {/* Left content */}
        <div
          ref={leftContentRef}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-80 z-20"
        />

        {/* Logo container - centered */}
        <div className="flex items-center justify-center relative z-10">
          {/* Main pie chart logo */}
          <div ref={logoRef} className="relative">
            <svg
              width="437"
              height="437"
              viewBox="0 0 437 437"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M367.5 43.5H71.5C56.8645 43.5 45 55.3645 45 70V366C45 380.636 56.8645 392.5 71.5 392.5H367.5C382.136 392.5 394 380.636 394 366V70C394 55.3645 382.136 43.5 367.5 43.5Z"
                stroke="#AAAAAA"
                stroke-dasharray="151 151"
              />
              <g ref={section2Ref}>
                <path
                  d="M297.666 336.718L294.755 323.538L295.761 322.841L307.062 330.209L305.553 331.255L296.088 324.958L296.606 324.599L299.146 335.693L297.666 336.718ZM298.054 333.011L297.214 331.798L302.615 328.057L303.455 329.27L298.054 333.011ZM308.554 329.07L300.847 319.238L302.179 318.195L309.885 328.027L308.554 329.07ZM315.039 323.758L306.789 314.378L308.059 313.261L316.309 322.641L315.039 323.758ZM318.465 320.631L309.686 311.744L310.531 310.909L312.268 311.951L319.669 319.442L318.465 320.631ZM324.612 314.559L311.959 312.662L310.531 310.909L323.184 312.781L324.612 314.559ZM324.612 314.559L322.95 313.595L315.474 306.027L316.678 304.838L325.457 313.724L324.612 314.559ZM327.46 311.567L317.946 303.471L318.716 302.567L320.536 303.454L328.556 310.278L327.46 311.567ZM333.059 304.986L320.289 304.189L318.716 302.567L331.483 303.338L333.059 304.986ZM333.059 304.986L331.32 304.169L323.218 297.275L324.315 295.986L333.829 304.082L333.059 304.986ZM339.065 297.216C338.552 297.941 337.942 298.524 337.234 298.964C336.516 299.397 335.751 299.679 334.938 299.81C334.116 299.933 333.293 299.902 332.469 299.717C331.652 299.521 330.881 299.167 330.156 298.654C329.421 298.134 328.83 297.525 328.383 296.827C327.934 296.112 327.631 295.355 327.477 294.555C327.33 293.745 327.342 292.938 327.514 292.134C327.693 291.32 328.038 290.55 328.551 289.825C329.064 289.1 329.671 288.522 330.372 288.092C331.08 287.652 331.84 287.367 332.653 287.236C333.466 287.105 334.284 287.133 335.108 287.319C335.932 287.505 336.711 287.857 337.446 288.377C338.171 288.89 338.758 289.503 339.208 290.218C339.658 290.933 339.956 291.696 340.104 292.505C340.258 293.305 340.251 294.116 340.082 294.937C339.91 295.741 339.571 296.501 339.065 297.216ZM337.722 296.31C338.241 295.576 338.529 294.816 338.584 294.032C338.636 293.231 338.482 292.461 338.123 291.722C337.754 290.976 337.187 290.333 336.423 289.792C335.855 289.39 335.27 289.116 334.668 288.97C334.056 288.816 333.456 288.781 332.868 288.865C332.279 288.949 331.733 289.15 331.228 289.469C330.713 289.781 330.262 290.212 329.874 290.76C329.361 291.485 329.074 292.245 329.012 293.039C328.957 293.823 329.109 294.585 329.469 295.324C329.835 296.053 330.4 296.688 331.164 297.228C331.732 297.63 332.324 297.916 332.938 298.086C333.55 298.24 334.147 298.279 334.728 298.206C335.306 298.115 335.853 297.914 336.368 297.601C336.889 297.28 337.341 296.849 337.722 296.31ZM345.451 287.082L332.149 285.043L333.083 283.461L344.277 285.282L343.939 285.855L336.952 276.904L337.876 275.338L346.073 286.028L345.451 287.082ZM348.302 282.17L339.371 272.05L339.914 270.953L353.37 271.925L352.556 273.571L341.225 272.645L341.505 272.081L349.1 280.557L348.302 282.17ZM346.846 278.739L345.523 278.085L348.436 272.196L349.759 272.85L346.846 278.739ZM354.593 268.638L343.345 264.093L343.979 262.525L355.227 267.069L354.593 268.638ZM342.855 268.477L341.42 267.897L345.23 258.468L346.665 259.048L342.855 268.477ZM357.491 261.254L345.672 257.209L346.219 255.608L358.039 259.653L357.491 261.254ZM360.569 251.394C360.336 252.251 359.962 253.007 359.448 253.663C358.922 254.316 358.3 254.844 357.582 255.245C356.851 255.643 356.068 255.897 355.23 256.004C354.395 256.101 353.55 256.032 352.693 255.799C351.824 255.563 351.06 255.194 350.401 254.691C349.734 254.174 349.19 253.566 348.771 252.867C348.355 252.157 348.089 251.395 347.975 250.58C347.864 249.754 347.925 248.913 348.158 248.056C348.391 247.199 348.763 246.448 349.274 245.804C349.788 245.148 350.405 244.619 351.123 244.218C351.842 243.816 352.62 243.561 353.458 243.453C354.295 243.345 355.148 243.41 356.017 243.646C356.874 243.879 357.636 244.254 358.304 244.771C358.971 245.289 359.513 245.902 359.929 246.613C360.349 247.311 360.62 248.075 360.742 248.904C360.857 249.719 360.799 250.549 360.569 251.394ZM358.996 251.004C359.233 250.135 359.242 249.323 359.025 248.568C358.799 247.797 358.391 247.127 357.8 246.556C357.197 245.981 356.445 245.572 355.541 245.326C354.87 245.143 354.226 245.086 353.61 245.155C352.983 245.221 352.408 245.394 351.884 245.674C351.36 245.955 350.915 246.331 350.55 246.804C350.174 247.274 349.898 247.833 349.721 248.481C349.488 249.338 349.479 250.15 349.693 250.917C349.91 251.673 350.314 252.336 350.905 252.907C351.499 253.466 352.248 253.869 353.151 254.115C353.823 254.297 354.476 254.363 355.112 254.312C355.739 254.246 356.313 254.079 356.834 253.811C357.346 253.527 357.791 253.15 358.167 252.681C358.547 252.2 358.823 251.641 358.996 251.004ZM362.518 243.022L350.212 240.873L350.417 239.702L352.436 239.543L362.809 241.355L362.518 243.022ZM364.004 234.511L352.596 240.302L350.417 239.702L361.811 233.89L364.004 234.511ZM364.004 234.511L362.091 234.688L351.612 232.858L351.903 231.191L364.209 233.34L364.004 234.511Z"
                  fill="black"
                />
                <path
                  d="M233.047 241.442V341.612C264.712 335.314 304.448 324.923 330.524 277.691C356.601 230.459 351.013 186.06 336.733 158.98L242.635 223.277C236.635 227.377 233.047 234.175 233.047 241.442Z"
                  fill="url(#paint0_linear_759_16)"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="2"
                />{" "}
              </g>

              <g ref={section3Ref}>
                <path
                  d="M212.766 241.379V341.549C181.101 335.252 141.365 324.861 115.288 277.628C89.2112 230.396 94.7991 185.998 109.079 158.918L203.177 223.215C209.177 227.314 212.766 234.112 212.766 241.379Z"
                  fill="url(#paint1_linear_759_16)"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="2"
                />
                <path
                  d="M76.0347 219.749L88.5077 219.06L88.601 220.749L76.128 221.438L76.0347 219.749ZM76.3873 224.374L88.7881 222.867L88.9314 224.047L80.9392 230.349L80.8415 229.544L90.1103 233.749L90.2536 234.928L77.8528 236.435L77.6488 234.756L87.1012 233.607L87.0418 234.013L79.7301 230.695L79.5868 229.516L85.8911 224.543L86.0439 224.905L76.5914 226.054L76.3873 224.374ZM78.3568 239.33L90.5383 236.562L90.8015 237.721L83.4961 244.808L83.3167 244.018L92.9671 247.252L93.2304 248.41L81.0489 251.178L80.674 249.528L89.9593 247.419L89.9417 247.829L82.3289 245.276L82.0657 244.117L87.8279 238.526L88.017 238.87L78.7317 240.98L78.3568 239.33ZM81.8241 254.014L93.7203 250.202L94.2366 251.813L82.3404 255.625L81.8241 254.014ZM82.1756 255.111L83.6498 254.638L85.8359 261.461L84.3617 261.933L82.1756 255.111ZM87.5581 253.386L88.9637 252.935L90.9685 259.192L89.5629 259.642L87.5581 253.386ZM92.5977 251.771L94.0718 251.299L96.2305 258.035L94.7563 258.508L92.5977 251.771ZM90.6298 263.111L91.9493 262.581L93.211 265.721C93.4839 266.4 93.8668 266.854 94.3596 267.083C94.8524 267.311 95.3939 267.307 95.984 267.07C96.5408 266.846 96.929 266.477 97.1488 265.962C97.3731 265.458 97.3488 264.866 97.0759 264.187L95.8075 261.031L97.177 260.48L98.4656 263.687C98.7609 264.422 98.8734 265.12 98.8031 265.782C98.744 266.44 98.5276 267.012 98.154 267.498C97.7849 267.995 97.2829 268.372 96.6483 268.627C95.9913 268.891 95.3575 268.971 94.7467 268.867C94.1405 268.774 93.5886 268.511 93.091 268.077C92.6045 267.639 92.2136 267.053 91.9183 266.318L90.6298 263.111ZM85.163 264.085L96.7542 259.428L97.3851 260.998L85.7938 265.655L85.163 264.085ZM87.8474 270.766L91.3506 264.47L92.4656 265.749L88.646 272.754L87.8474 270.766ZM90.6062 277.176C90.1758 276.292 89.9702 275.457 89.9895 274.674C90.0088 273.891 90.2079 273.107 90.5868 272.322L92.1266 272.854C91.8034 273.451 91.6252 274.045 91.5919 274.635C91.5695 275.22 91.7236 275.852 92.0542 276.532C92.3797 277.201 92.7852 277.664 93.2708 277.922C93.7616 278.19 94.2606 278.201 94.7678 277.954C95.1886 277.75 95.4813 277.487 95.6458 277.167C95.8103 276.847 95.8921 276.48 95.8913 276.067C95.9065 275.659 95.8843 275.23 95.8249 274.778C95.7762 274.321 95.7329 273.862 95.695 273.4C95.6679 272.933 95.6889 272.482 95.7581 272.048C95.838 271.609 96.0169 271.195 96.2949 270.806C96.5781 270.428 97.0057 270.1 97.5776 269.822C98.2143 269.512 98.8273 269.401 99.4167 269.488C100.022 269.58 100.572 269.833 101.067 270.247C101.577 270.665 101.995 271.209 102.321 271.878C102.678 272.612 102.852 273.341 102.844 274.066C102.847 274.785 102.706 275.441 102.42 276.034L100.881 275.501C101.106 274.978 101.222 274.475 101.227 273.992C101.238 273.52 101.122 273.035 100.881 272.539C100.587 271.935 100.218 271.52 99.7753 271.295C99.3431 271.065 98.8896 271.065 98.4148 271.296C98.0371 271.48 97.7768 271.727 97.6339 272.037C97.507 272.352 97.4414 272.711 97.437 273.113C97.4326 273.516 97.4547 273.945 97.5034 274.402C97.5681 274.864 97.6141 275.329 97.6412 275.796C97.6683 276.263 97.6364 276.719 97.5457 277.164C97.455 277.608 97.2572 278.025 96.9525 278.413C96.6637 278.807 96.2226 279.148 95.6291 279.437C94.6363 279.92 93.6914 279.953 92.7943 279.535C91.9025 279.128 91.1731 278.342 90.6062 277.176ZM93.6803 282.916L104.627 276.898L105.442 278.381L94.4954 284.399L93.6803 282.916ZM98.1507 290.407L106.096 279.545L107.068 281.103L100.29 290.196L99.9369 289.631L111.101 287.561L112.064 289.103L98.799 291.445L98.1507 290.407ZM102.646 297.382L112.68 289.942L113.688 291.301L103.653 298.741L102.646 297.382ZM103.332 298.308L104.575 297.386L108.842 303.14L107.599 304.062L103.332 298.308ZM107.872 294.941L109.057 294.062L112.971 299.34L111.785 300.219L107.872 294.941ZM112.123 291.789L113.366 290.867L117.579 296.55L116.336 297.472L112.123 291.789ZM113.5 310.949L122.499 302.813L123.634 304.068L114.635 312.204L113.5 310.949ZM118.769 300.458L119.918 299.42L126.738 306.964L125.59 308.002L118.769 300.458ZM118.901 316.758L127.514 307.71L128.739 308.876L120.126 317.924L118.901 316.758ZM119.735 317.552L120.803 316.431L125.992 321.37L124.924 322.491L119.735 317.552ZM123.632 313.458L124.65 312.389L129.409 316.919L128.391 317.988L123.632 313.458ZM127.281 309.625L128.348 308.504L133.472 313.381L132.405 314.502L127.281 309.625ZM130.761 327.524C130.062 326.957 129.517 326.305 129.126 325.569C128.742 324.824 128.512 324.041 128.436 323.222C128.369 322.41 128.461 321.603 128.711 320.801C128.961 319.999 129.366 319.253 129.926 318.564C130.493 317.866 131.144 317.312 131.879 316.904C132.613 316.495 133.38 316.246 134.181 316.155C134.999 316.062 135.803 316.128 136.594 316.353C137.402 316.577 138.155 316.973 138.854 317.541C139.617 318.161 140.182 318.837 140.547 319.567C140.912 320.297 141.137 321.067 141.221 321.877L139.575 322.047C139.547 321.453 139.39 320.876 139.102 320.317C138.823 319.766 138.4 319.259 137.832 318.798C137.32 318.381 136.774 318.092 136.194 317.93C135.622 317.759 135.041 317.712 134.452 317.79C133.863 317.868 133.295 318.063 132.747 318.375C132.208 318.695 131.72 319.125 131.281 319.665C130.842 320.205 130.52 320.772 130.317 321.364C130.123 321.964 130.048 322.561 130.092 323.153C130.136 323.746 130.297 324.309 130.574 324.844C130.858 325.369 131.256 325.84 131.769 326.256C132.374 326.748 132.979 327.078 133.585 327.246C134.199 327.404 134.799 327.436 135.387 327.341L135.568 328.973C134.742 329.076 133.921 329.011 133.104 328.78C132.296 328.556 131.515 328.137 130.761 327.524ZM136.163 331.521L143.179 321.185L144.579 322.136L137.563 332.471L136.163 331.521ZM142.835 336.05L149.851 325.714L151.251 326.665L144.235 337L142.835 336.05ZM140.311 327.462L141.18 326.181L147.242 330.296L146.372 331.576L140.311 327.462Z"
                  fill="black"
                />{" "}
              </g>
              <g ref={section1Ref}>
                <path
                  d="M326.429 141.036L235.23 203.135C227.76 208.221 217.93 208.133 210.48 202.914L172.499 176.306L122.16 141.039C141.582 114.902 170.065 88.4534 222.839 88.4534C275.614 88.4533 306.251 119.623 326.429 141.036Z"
                  fill="url(#paint2_linear_759_16)"
                  stroke="white"
                  stroke-opacity="0.2"
                  stroke-width="2"
                />
                <path
                  d="M149.642 96.5289C148.861 96.9759 148.057 97.2495 147.229 97.3498C146.396 97.4396 145.583 97.3724 144.791 97.1482C144.009 96.9179 143.289 96.5418 142.631 96.0198C141.973 95.4978 141.423 94.8514 140.982 94.0807C140.535 93.2996 140.253 92.493 140.137 91.6611C140.02 90.8291 140.064 90.0231 140.267 89.2431C140.475 88.4466 140.826 87.7201 141.322 87.0633C141.821 86.3903 142.462 85.8302 143.243 85.3832C144.097 84.8945 144.93 84.6111 145.743 84.5332C146.556 84.4553 147.355 84.5233 148.141 84.7371L147.707 86.3337C147.142 86.145 146.548 86.0844 145.923 86.1518C145.308 86.2132 144.683 86.4257 144.048 86.7892C143.475 87.1171 143.008 87.5222 142.648 88.0047C142.283 88.4767 142.03 89.0016 141.89 89.5792C141.751 90.1567 141.728 90.7573 141.822 91.3809C141.927 91.9986 142.152 92.6094 142.498 93.2135C142.843 93.8176 143.256 94.3211 143.736 94.7242C144.225 95.1213 144.755 95.406 145.323 95.5783C145.892 95.7506 146.476 95.8038 147.074 95.7379C147.666 95.6616 148.249 95.4596 148.822 95.1318C149.499 94.7444 150.025 94.2982 150.399 93.7934C150.768 93.2782 151.014 92.7296 151.137 92.1475L152.725 92.5662C152.523 93.3731 152.167 94.116 151.657 94.7951C151.157 95.4682 150.486 96.0461 149.642 96.5289ZM154.164 87.739L153.562 86.4508L156.628 85.0175C157.291 84.7074 157.723 84.3 157.924 83.7953C158.125 83.2906 158.091 82.7502 157.821 82.174C157.567 81.6305 157.177 81.2633 156.651 81.0723C156.135 80.8762 155.546 80.9332 154.883 81.2433L151.801 82.6843L151.176 81.3472L154.306 79.8833C155.024 79.5479 155.715 79.3969 156.38 79.4305C157.039 79.4532 157.622 79.6376 158.129 79.9837C158.646 80.3248 159.049 80.8051 159.339 81.4247C159.639 82.0661 159.754 82.6945 159.684 83.3101C159.625 83.9205 159.393 84.4861 158.987 85.007C158.577 85.5169 158.012 85.9396 157.295 86.2751L154.164 87.739ZM155.44 93.1436L150.148 81.8276L151.681 81.1109L156.972 92.4269L155.44 93.1436ZM161.962 90.0938L155.482 86.9442L156.697 85.7601L163.902 89.1865L161.962 90.0938ZM165.529 88.5526L161.132 76.8599L162.716 76.2643L167.112 87.957L165.529 88.5526ZM166.607 88.1471L166.062 86.6981L172.768 84.1767L173.313 85.6256L166.607 88.1471ZM164.618 82.8567L164.098 81.4752L170.248 79.1628L170.767 80.5443L164.618 82.8567ZM162.755 77.9034L162.21 76.4544L168.832 73.9646L169.376 75.4136L162.755 77.9034ZM174.618 85.1804L176.037 71.7577L177.212 71.4158L185.593 81.9877L183.83 82.5005L176.852 73.5266L177.456 73.3506L176.346 84.6776L174.618 85.1804ZM176.162 81.7881L175.749 80.3709L182.058 78.5357L182.47 79.9529L176.162 81.7881ZM189.046 81.3743L186.582 69.4952L188.238 69.1515L190.703 81.0306L189.046 81.3743ZM182.664 71.5214L182.349 70.0056L192.307 67.9397L192.622 69.4555L182.664 71.5214ZM196.831 79.8491L195.028 67.488L196.702 67.2437L198.505 79.6049L196.831 79.8491ZM205.503 78.9126L199.441 66.8988L201.27 66.7404L206.288 76.9115L205.624 76.969L208.855 66.0837L210.667 65.9269L206.723 78.807L205.503 78.9126ZM213.78 78.3195L213.743 65.8275L215.435 65.8225L215.472 78.3144L213.78 78.3195ZM214.932 78.316L214.928 76.768L222.092 76.7467L222.096 78.2947L214.932 78.316ZM214.915 72.664L214.911 71.188L221.481 71.1685L221.485 72.6445L214.915 72.664ZM214.9 67.3721L214.895 65.8241L221.969 65.803L221.974 67.351L214.9 67.3721ZM228.127 78.6155L229.33 66.1815L231.014 66.3443L229.812 78.7783L228.127 78.6155ZM229.274 78.7263L229.423 77.1855L236.088 77.8299L235.939 79.3707L229.274 78.7263ZM237.996 79.6782L240.106 67.3657L241.774 67.6514L239.664 79.964L237.996 79.6782ZM239.132 79.8728L239.393 78.347L246.454 79.5568L246.193 81.0826L239.132 79.8728ZM240.086 74.302L240.335 72.8472L246.811 73.9567L246.562 75.4115L240.086 74.302ZM240.98 69.086L241.241 67.5602L248.214 68.7548L247.952 70.2806L240.98 69.086ZM247.544 81.3599L255.595 70.5264L256.781 70.83L258.617 84.1952L256.838 83.7397L255.396 72.4636L256.006 72.6199L249.288 81.8064L247.544 81.3599ZM250.599 79.225L250.965 77.7951L257.33 79.4248L256.964 80.8547L250.599 79.225ZM263.257 80.0193L263.725 78.6764L266.92 79.7893C267.612 80.0301 268.206 80.0399 268.702 79.8189C269.198 79.5978 269.551 79.187 269.76 78.5863C269.957 78.0197 269.934 77.4843 269.691 76.9801C269.458 76.4798 268.996 76.1093 268.305 75.8686L265.092 74.7497L265.578 73.3558L268.841 74.4924C269.589 74.7529 270.19 75.1272 270.642 75.6152C271.099 76.0919 271.388 76.6309 271.509 77.2321C271.641 77.8373 271.595 78.4629 271.37 79.1088C271.137 79.7774 270.781 80.3078 270.301 80.6998C269.833 81.0959 269.272 81.3388 268.618 81.4287C267.968 81.5073 267.269 81.4164 266.521 81.1559L263.257 80.0193ZM260.398 84.7799L264.507 72.9828L266.105 73.5393L261.996 85.3364L260.398 84.7799ZM267.198 87.1479L264.755 80.3695L266.452 80.3694L269.221 87.8524L267.198 87.1479ZM270.824 88.5423L275.91 77.1324L276.995 77.6161L276.657 79.6133L272.37 89.2311L270.824 88.5423ZM278.716 92.0598L275.882 79.5832L276.995 77.6161L279.853 90.0835L278.716 92.0598ZM278.716 92.0598L279.01 90.1612L283.341 80.4447L284.887 81.1336L279.801 92.5434L278.716 92.0598ZM282.451 93.827L288.249 82.7616L289.747 83.5468L283.95 94.6123L282.451 93.827ZM286.517 96.0595L292.983 85.3711L294 85.9861L293.415 87.9257L287.965 96.9353L286.517 96.0595ZM293.91 100.532L292.65 87.7994L294 85.9861L295.284 98.7122L293.91 100.532ZM293.91 100.532L294.438 98.6845L299.945 89.5824L301.392 90.4582L294.926 101.147L293.91 100.532ZM301.794 106.309C301.091 105.786 300.529 105.165 300.106 104.447C299.7 103.726 299.442 102.957 299.331 102.142C299.23 101.333 299.283 100.519 299.489 99.7003C299.695 98.8812 300.067 98.1107 300.604 97.3889C301.142 96.667 301.77 96.0949 302.488 95.6724C303.214 95.2404 303.983 94.9605 304.797 94.833C305.61 94.7054 306.421 94.741 307.231 94.9399C308.05 95.1459 308.825 95.5213 309.556 96.066C310.355 96.6609 310.977 97.3631 311.421 98.1728C311.866 98.9825 312.099 99.8445 312.121 100.759L310.484 100.998C310.51 100.3 310.353 99.6369 310.013 99.0092C309.68 98.372 309.205 97.824 308.589 97.3653C307.857 96.8206 307.086 96.5004 306.274 96.4048C305.472 96.3163 304.698 96.4425 303.95 96.7835C303.212 97.1316 302.564 97.681 302.004 98.4317C301.438 99.192 301.099 99.9792 300.987 100.793C300.874 101.607 300.966 102.378 301.261 103.107C301.556 103.836 302.05 104.458 302.743 104.974C303.446 105.497 304.152 105.814 304.863 105.924C305.584 106.042 306.277 105.945 306.943 105.633C307.616 105.311 308.236 104.771 308.802 104.01L309.184 105.215L304.853 101.99L305.778 100.748L310.686 104.403L310.536 104.605C309.669 105.77 308.734 106.593 307.733 107.074C306.748 107.552 305.743 107.717 304.718 107.567C303.702 107.424 302.727 107.004 301.794 106.309Z"
                  fill="black"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_759_16"
                  x1="291.045"
                  y1="97.5312"
                  x2="290.905"
                  y2="341.612"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFFDFD" />
                  <stop offset="1" stop-color="#AAC3E5" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_759_16"
                  x1="97.0488"
                  y1="95.0312"
                  x2="154.907"
                  y2="341.549"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#A08CFA" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_759_16"
                  x1="194.549"
                  y1="239.031"
                  x2="251.502"
                  y2="88.3857"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFF2F2" />
                  <stop offset="1" stop-color="#ECAAAA" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Final detailed logo */}
          <div
            ref={finalLogoRef}
            className="absolute inset-0 flex items-center justify-center">
            <svg
              width="249"
              height="248"
              viewBox="0 0 249 248"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M107.325 107.38C112.285 112.815 115.035 119.907 115.035 127.265V247.501C110.939 247.191 106.898 246.682 102.923 245.983V137.581C102.923 129.94 100.054 122.577 94.8848 116.949L28.957 45.1738C32.3583 41.056 36.0218 37.1629 39.9199 33.5176L107.325 107.38ZM212.8 37.1475C215.883 40.2821 218.801 43.58 221.539 47.0273L157.314 116.949C152.145 122.577 149.277 129.94 149.276 137.581V245.378C145.446 246.156 141.552 246.756 137.603 247.171V127.664C137.603 120.072 140.53 112.771 145.775 107.282L212.8 37.1475ZM73.6016 124.036C78.7541 129.509 81.6239 136.741 81.624 144.258V240.234C75.852 238.105 70.283 235.556 64.9521 232.628V151.754C64.9521 143.966 61.9725 136.472 56.625 130.811L8.66895 80.0361C10.863 74.2587 13.4791 68.689 16.4756 63.3623L73.6016 124.036ZM233.701 65.5098C235.914 69.6319 237.9 73.8933 239.643 78.2783L193.017 124.36C187.219 130.09 183.956 137.903 183.956 146.054V230.525C183.956 231.233 184.027 231.914 184.158 232.566C179.785 234.975 175.251 237.126 170.575 239.001V144.258C170.575 136.741 173.445 129.509 178.598 124.036L233.701 65.5098ZM245.883 99.2549C247.504 107.251 248.357 115.526 248.357 124C248.357 162.166 231.093 196.299 203.949 219.02V152.604C203.949 144.654 207.158 137.041 212.848 131.489L245.883 99.2549ZM36.7314 138.383C41.9837 143.873 44.915 151.179 44.915 158.776V218.908C17.8482 196.188 0.64066 162.104 0.640625 124C0.640625 116.698 1.27429 109.544 2.48633 102.589L36.7314 138.383ZM137.603 0.828125C159.997 3.18299 180.613 11.5057 197.832 24.1768L140.227 89.2969C139.312 90.3312 137.603 89.6845 137.603 88.3037V0.828125ZM115.035 88.1816C115.035 89.5737 113.303 90.2155 112.396 89.1592L54.5547 21.7695C72.0161 9.79977 92.698 2.18672 115.035 0.499023V88.1816Z"
                fill="url(#paint0_linear_2193_10662)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2193_10662"
                  x1="208.474"
                  y1="19.0245"
                  x2="238.602"
                  y2="184.061"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9E87FF" />
                  <stop offset="0.5" stop-color="#6DBFFE" />
                  <stop offset="1" stop-color="#FF8F8F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right content */}
        <div
          ref={rightContentRef}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 z-20"
        />
      </div>

      {/* Final section - scrollable after animation completes */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-purple-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center space-y-8  w-full px-8 ">
          <h3 className=" text-center w-full justify-start text-black text-6xl font-normal ">
            Innovate.Design.Transform{" "}
          </h3>

          <Button className="">Talk to an Expert</Button>
        </div>
      </div>
    </div>
  );
};

export default LogoStoryAnimation;
