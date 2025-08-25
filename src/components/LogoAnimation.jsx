"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PieChartLogo from "./PieChartLogo2";
import FinalLogo from "./FinalLogo";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LogoAnimation = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const finalLogoRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const logo = logoRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const finalLogo = finalLogoRef.current;

    if (
      !container ||
      !logo ||
      !section1 ||
      !section2 ||
      !section3 ||
      !finalLogo
    ) {
      return;
    }

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Initial state setup
    gsap.set(finalLogo, {
      opacity: 0,
      scale: 0.7,
      rotation: -360,
    });

    // INITIAL STATE: Only section 3 visible, others hidden
    gsap.set(section3, {
      filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
      opacity: 1,
    });

    gsap.set([section1, section2], {
      opacity: 0,
    });

    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        refreshPriority: -1,
      },
    });

    // Stage 1: Section 2 appears
    mainTL
      .to(section2, {
        duration: 0.4,
        opacity: 1,
        filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
        ease: "power2.out",
      })

      // Stage 2: Section 1 appears
      .to(
        section1,
        {
          duration: 0.4,
          opacity: 1,
          filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
          ease: "power2.out",
        },
        "+=0.5"
      )

      // Stage 3: All sections unified with enhanced glow, logo spins
      .to(
        [section1, section2, section3],
        {
          filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))",
          duration: 0.4,
          ease: "power2.inOut",
        },
        "+=0.5"
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

      // Stage 4: Final logo transition
      .to(
        logo,
        {
          opacity: 0,
          scale: 0.8,
          rotation: 720,
          duration: 0.8,
          ease: "power2.in",
        },
        "+=0.3"
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
        className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>
        <div className="flex items-center justify-center relative z-10">
          <PieChartLogo
            logoRef={logoRef}
            section1Ref={section1Ref}
            section2Ref={section2Ref}
            section3Ref={section3Ref}
          />
          <FinalLogo finalLogoRef={finalLogoRef} />
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
