"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { P2, P3 } from "@/components/CustomTags";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import Link from "next/link";
const IndustryCard = ({ card, index }) => {
  const cardRef = useRef(null);
  const frontContentRef = useRef(null);
  const backContentRef = useRef(null);
  const { icon, title, subTitle, hoverContent, img, ctaText, ctaLink, list } =
    card;
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

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl flex flex-col p-4 bg-cover bg-bottom bg-no-repeat shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-200 overflow-hidden"
      style={{
        Height: "300px",
        maxWidth: "320px", // Set max width of the card to 320px
        background: `url('/gradients/offering-card-gradient.svg')`,
      }}
      data-reveal
      data-reveal-dir="up"
    >
      {/* Front Content - Default State */}
      <div ref={frontContentRef} className="relative z-10 flex flex-col h-full">
        <div className="mb-4 w-16 h-16 flex items-center justify-center">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        <h4 className="mb-2">{title}</h4>
        <div className="h-1">
          <P2 className="text-gray-600 line-clamp-2">{subTitle}</P2>
        </div>

        <Image
          src={img}
          alt={`${title} icon`}
          width={48}
          height={48}
          unoptimized
          className="object-cover w-full h-auto"
        />
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
          }}
        >
          <div className="rounded-xl p-6 h-full flex flex-col">
            <div className="space-y-8 flex flex-col justify-between flex-1">
              <div>
                <div className="mb-6 w-16 h-16 flex items-center ">
                  <Image
                    src={icon}
                    alt={`${title} icon`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h4 className="mb-4">{title}</h4>
                <P2 className="text-gray-600 ">{}</P2>
              </div>
              <div>
                {hoverContent.map((item, idx) => (
                  <div key={idx} className="items-start">
                    <P3 className="text-gray-700">{item}</P3>
                    <hr className="mt-2 w-full text-black-200" />
                  </div>
                ))}
                <div className="flex justify-end mt-8">
                  <Link href={ctaLink}>
                    <Button variant="secondary" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default IndustryCard;
