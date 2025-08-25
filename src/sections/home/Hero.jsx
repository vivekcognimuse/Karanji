"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { P1 } from "@/components/CustomTags";
import Link from "next/link";
import ScrollButton from "@/components/ScrollButton copy";

const HeroSection = ({ data }) => {
  const {
    title,
    Subtitles,
    cta1_text,
    cta1_link,
    cta2_text,
    cta2_link,
    logo,
    videoUrl,
  } = data || {};

  const videoRef = useRef(null);

  useEffect(() => {
    // Disable right-click context menu on video
    const video = videoRef.current;
    if (video) {
      video.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        return false;
      });
    }
  }, []);

  return (
    <section className="min-h-[calc(100vh-5rem)] items-center pb-32 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 lg:-mt-20 space-y-8">
        <div className="space-y-4">
          <h1 className="">Let's Bring Your Vision to Life</h1>
          <P1 className="">
            We help organizations solve complex business challenges through the
            strategic integration of digital learning, immersive experiences, &
            practical AI implementation.
          </P1>
        </div>
        <div className="w-full lg:hidden lg:w-1/3">
          <div className="w-full flex justify-center">
            <Image
              src={logo || "/home/logo.webp"}
              alt="Karanji Logo"
              className="w-[50vw] h-full aspect-auto lg:w-full"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <ScrollButton
            variant="primary"
            ctaLink="our-services"
            ctaText="Explore Our Solutions"
          />
          <Link href="/resources">
            <Button variant="secondary" className="w-full md:w-fit">
              View Case Studies
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 h-full hidden -mt-16 lg:flex justify-center items-center">
        <div className="relative w-full h-[600px] max-w-[600px] overflow-hidden rounded-lg">
          {/* Overlay to prevent interaction */}
          <div
            className="absolute inset-0 z-10 cursor-default"
            style={{
              backgroundColor: "transparent",
              pointerEvents: "auto",
            }}
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Video element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            style={{
              pointerEvents: "none",
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}>
            <source src={"/output.webm"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* CSS to further prevent selection and downloading */}
      <style jsx>{`
        video::-webkit-media-controls-download-button {
          display: none;
        }

        video::-webkit-media-controls-enclosure {
          overflow: hidden;
        }

        video::-webkit-media-controls-panel {
          width: calc(100% + 30px);
        }

        video::--webkit-media-controls {
          display: none !important;
        }

        video::-webkit-media-controls-start-playback-button {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
