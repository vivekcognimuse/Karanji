"use client";
import { memo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";

export const ServiceCard = memo(function ServiceCard({ data, ...props }) {
  const { title, description, image, list, ctaText, ctaLink, id } = data || {};

  // Refs for GSAP animations
  const cardRef = useRef(null);
  const defaultContentRef = useRef(null);
  const hoverContentRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const defaultContent = defaultContentRef.current;
    const hoverContent = hoverContentRef.current;
    const background = backgroundRef.current;

    if (!card || !defaultContent || !hoverContent || !background) return;

    // Set initial states
    gsap.set(hoverContent, {
      opacity: 0,
      filter: "blur(10px)",
      scale: 1.05,
    });

    gsap.set(background, {
      background: "rgba(255,255,255,0.9)",
    });

    const handleMouseEnter = () => {
      // Background color change only
      gsap.to(background, {
        background: "rgba(255,255,255,0.95)",
        duration: 0.3,
        ease: "power2.inOut",
      });

      // Hide default content
      gsap.to(defaultContent, {
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.3,
        ease: "power2.inOut",
      });

      // Show hover content
      gsap.to(hoverContent, {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.3,
        delay: 0.1,
        ease: "power2.inOut",
      });
    };

    const handleMouseLeave = () => {
      // Background reset
      gsap.to(background, {
        background: "rgba(255,255,255,0.9)",
        duration: 0.3,
        ease: "power2.inOut",
      });

      // Show default content
      gsap.to(defaultContent, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.3,
        delay: 0.1,
        ease: "power2.inOut",
      });

      // Hide hover content
      gsap.to(hoverContent, {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.05,
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    // Add event listeners
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      {...props}
      className="relative h-[400px] lg:h-[500px] w-[350px] lg:w-[450px] rounded-[32px] shadow-lg border border-slate-200 overflow-hidden z-10 backdrop-blur-sm">
      {/* Background layer */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 rounded-[32px] backdrop-blur-sm"
      />

      <div className="relative h-full w-full px-8 py-8">
        {/* Background Image - only visible in default state */}
        {image && (
          <div className="absolute -z-1 bottom-0 right-0 opacity-20">
            <Image
              src={image}
              alt={title}
              width={180}
              height={220}
              className="object-contain"
              sizes="180px"
              priority={false}
            />
          </div>
        )}

        {/* Default Content */}
        <div
          ref={defaultContentRef}
          className="absolute inset-0 px-8 py-8 h-full flex flex-col justify-between">
          <div>
            <h4 className="text-slate-800 text-xl md:text-2xl font-semibold leading-tight mb-4">
              {title}
            </h4>
          </div>

          <div className="flex justify-end items-center gap-2.5">
            <button className="w-12 h-12 p-2 rounded-full border-2 border-slate-400 backdrop-blur-sm flex items-center justify-center hover:bg-slate-100 transition-colors">
              <Icon
                icon="pepicons-pencil:arrow-up-right"
                className="size-6 text-slate-600"
              />
            </button>
          </div>
        </div>

        {/* Hover Content */}
        <div
          ref={hoverContentRef}
          className="absolute inset-0 px-8 py-8 h-full flex flex-col justify-between pointer-events-none">
          <div className="flex-1">
            <h4 className="text-slate-800 text-xl md:text-2xl font-semibold leading-tight mb-4">
              {title}
            </h4>

            {description && (
              <p className="text-slate-700 text-base font-normal leading-relaxed mb-6">
                {description}
              </p>
            )}

            {/* Features list - 2 columns for better use of space */}
            {list && list.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {list.map((item) => (
                  <div key={item.id} className=" rounded-lg p-3 ">
                    <p className="text-slate-700 text-sm font-medium leading-tight">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between items-end">
            {ctaText && ctaLink && (
              <Link href={ctaLink}>
                <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors pointer-events-auto">
                  {ctaText}
                </button>
              </Link>
            )}

            <div className="flex items-center gap-2.5">
              <button className="w-12 h-12 p-2 rounded-full border-2 border-slate-400 backdrop-blur-sm flex items-center justify-center hover:bg-slate-100 transition-colors pointer-events-auto">
                <Icon
                  icon="pepicons-pencil:arrow-up-right"
                  className="size-6 text-slate-600"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
