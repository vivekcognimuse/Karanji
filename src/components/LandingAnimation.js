"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PieChartLogo from "./PieChartLogo";
import FinalLogo from "./FinalLogo";
import Button from "./ui/Button";
import { GetLeftContent } from "@/sections/home/LeftContent";
import { GetRightContent } from "@/sections/home/RightContent";

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

  const [leftContent, setLeftContent] = useState(null);
  const [rightContent, setRightContent] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const logo = logoRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const leftContentElem = leftContentRef.current;
    const rightContentElem = rightContentRef.current;
    const finalLogo = finalLogoRef.current;
    const progressBar = progressBarRef.current;

    if (
      !container ||
      !logo ||
      !section1 ||
      !section2 ||
      !section3 ||
      !leftContentElem ||
      !rightContentElem ||
      !finalLogo
    ) {
      return;
    }

    // Set initial content for stage 1 (but keep hidden initially)
    setLeftContent(GetLeftContent(1));
    setRightContent(GetRightContent(1));

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Initial state setup - LEFT AND RIGHT CONTENT HIDDEN
    gsap.set(leftContentElem, {
      opacity: 0,
      x: -120,
      scale: 1,
      rotationY: -20,
    });

    gsap.set(rightContentElem, {
      opacity: 0,
      x: 120,
      scale: 1,
      rotationY: 20,
    });

    gsap.set(finalLogo, {
      opacity: 0,
      scale: 0.7,
      rotation: -360,
    });

    // ALL SECTIONS VISIBLE AT START
    gsap.set([section1, section2, section3], {
      filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
      opacity: 1,
    });

    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        refreshPriority: -1,
        onUpdate: (self) => {
          updateProgressBar(self.progress);
        },
      },
    });

    // Stage 1: Section 2 hides, left and right content (1) appear
    mainTL
      .to(section2, {
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      })
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        "-=0.2"
      )

      // Stage 2: Section 2 reappears, left and right content hide
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 0,
          x: (index, target) => (target === leftContentElem ? -400 : 400),
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "+=0.3"
      )
      .to(
        section2,
        {
          duration: 0.3,
          opacity: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )

      // Stage 3: Section 1 hides, left and right content (2) appear
      .to(
        section1,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        "+=0.3"
      )
      .call(() => {
        setLeftContent(GetLeftContent(2));
        setRightContent(GetRightContent(2));
        // Reset position for new content
        gsap.set([leftContentElem, rightContentElem], {
          x: (index, target) => (target === leftContentElem ? -120 : 120),
          scale: 1,
          rotationY: (index, target) => (target === leftContentElem ? -20 : 20),
        });
      })
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.2)",
        },
        "-=0.2"
      )

      // Stage 4: Section 1 reappears, left and right content hide
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 0,
          x: (index, target) => (target === leftContentElem ? -400 : 400),
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "+=0.3"
      )
      .to(
        section1,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.4"
      )

      // Stage 5: Section 3 hides, left and right content (3) appear
      .to(
        section3,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        "+=0.3"
      )
      .call(() => {
        setLeftContent(GetLeftContent(3));
        setRightContent(GetRightContent(3));
        // Reset position for new content
        gsap.set([leftContentElem, rightContentElem], {
          x: (index, target) => (target === leftContentElem ? -120 : 120),
          scale: 1,
          rotationY: (index, target) => (target === leftContentElem ? -20 : 20),
        });
      })
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.2)",
        },
        "-=0.2"
      )

      // Stage 6: Section 3 reappears (all sections unified), left and right content hide, logo spins
      .to(
        [leftContentElem, rightContentElem],
        {
          opacity: 0,
          x: (index, target) => (target === leftContentElem ? -400 : 400),
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "+=0.3"
      )
      .to(
        section3,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        [section1, section2, section3],
        {
          filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))",
          duration: 0.4,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      .to(
        logo,
        {
          scale: 1.1,
          rotation: 360,
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.4"
      )

      // Stage 7: Final logo transition
      .to(
        logo,
        {
          opacity: 0,
          scale: 0.8,
          rotation: 720,
          duration: 0.8,
          ease: "power2.in",
        },
        "+=0.2"
      )
      .to(
        finalLogo,
        {
          opacity: 1,
          scale: 1,
          rotation: 360,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.4"
      );

    const updateProgressBar = (progress) => {
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: progress,
          duration: 0.1,
          backgroundColor: `hsl(${progress * 240}, 70%, 60%)`,
        });
      }
    };

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="h-screen pt-20   flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0  overflow-hidden pointer-events-none"></div>

        <div ref={leftContentRef} className="   max-w-80 z-20">
          {leftContent} {/* Render dynamic left content */}
        </div>

        <div className="flex items-center  justify-center relative z-10">
          <PieChartLogo
            logoRef={logoRef}
            section1Ref={section1Ref}
            section2Ref={section2Ref}
            section3Ref={section3Ref}
          />
          <FinalLogo finalLogoRef={finalLogoRef} />
        </div>

        <div ref={rightContentRef} className="   z-20">
          {rightContent} {/* Render dynamic right content */}
        </div>
      </div>

      <div className=" flex  items-center justify-center relative overflow-hidden">
        <div className="text-center space-y-8 w-full px-8">
          <h3 className="text-center w-full justify-start text-black text-6xl font-normal">
            Innovate.Design.Transform
          </h3>
          <Button className="">Talk to an Expert</Button>
        </div>
      </div>
    </div>
  );
};

export default LogoStoryAnimation;
