"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { P2, P3 } from "@/components/CustomTags";
import { gsap } from "gsap";

const IndustryCard = ({ card, index }) => {
  const cardRef = useRef(null);
  const frontContentRef = useRef(null);
  const backContentRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const frontContent = frontContentRef.current;
    const backContent = backContentRef.current;

    // Only initialize hover effect if there is hover content
    if (card.hoverContent) {
      // Initial state - hide back content
      gsap.set(backContent, {
        opacity: 0,
        y: 20,
        pointerEvents: "none",
      });

      // Create hover timeline with height increase effect
      const tl = gsap.timeline({ paused: true });

      // Increase card height by 1.1x (grow symmetrically)
      tl.to(cardElement, {
        height: "110%", // Increase the height by 1.1x
        transformOrigin: "center", // Grow both up and down symmetrically
        duration: 0.3,
        ease: "power2.inOut",
      })
        .to(frontContent, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.inOut",
          pointerEvents: "none",
        })
        .to(
          backContent,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
            pointerEvents: "auto",
          },
          "-=0.3" // Start back content fade-in simultaneously with height increase
        );

      // Mouse enter handler
      const handleMouseEnter = () => {
        tl.play();
      };

      // Mouse leave handler
      const handleMouseLeave = () => {
        tl.reverse();
      };

      cardElement.addEventListener("mouseenter", handleMouseEnter);
      cardElement.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        cardElement.removeEventListener("mouseenter", handleMouseEnter);
        cardElement.removeEventListener("mouseleave", handleMouseLeave);
        tl.kill();
      };
    }
  }, [card.hoverContent]);

  // Get hover content, fallback to null if not available
  const hoverContent = card.hoverContent;

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl flex flex-col p-4 bg-cover bg-bottom bg-no-repeat shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-200 overflow-hidden"
      style={{
        minHeight: "380px",
        maxWidth: "320px", // Set max width of the card to 320px
        background: `url('/gradients/offering-card-gradient.svg')`,
      }}
      data-reveal
      data-reveal-dir="up">
      {/* Front Content - Default State */}
      <div ref={frontContentRef} className="relative z-10">
        <div className="mb-6 w-16 h-16 flex items-center justify-center">
          <Image
            src={`/technologySolutions/digital-offering/${index + 1}.svg`}
            alt={`${card.title} icon`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        <h4 className="mb-4">{card.title}</h4>
        <P2 className="text-gray-600 ">{card.description}</P2>
      </div>

      {/* Back Content - Hover State */}
      {hoverContent ? (
        <div
          ref={backContentRef}
          className="absolute inset-0 flex flex-col z-0"
          style={{
            background: "url('/gradients/offering-card-gradient.svg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}>
          <div className="rounded-xl p-6 h-full flex flex-col">
            <div className="space-y-8 flex-1">
              {hoverContent.map((item, idx) => (
                <div key={idx} className="items-start">
                  <P3 className="text-gray-700">{item.text}</P3>
                  <hr className="mt-2 w-full text-black-200" />
                </div>
              ))}
            </div>
            <div className="mt-auto flex justify-start">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src={`/technologySolutions/digital-offering/${index + 1}.svg`}
                  alt={`${card.title} icon`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default IndustryCard;
