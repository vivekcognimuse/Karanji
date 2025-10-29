"use client";
import React, { useRef, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { P1 } from "@/components/CustomTags";
import Link from "next/link";
import ScrollButton from "@/components/ScrollButton copy";

const HeroSection = ({ data, cta1_Text, cta2_Link, cta2_Text }) => {
  const { title, Subtitle } = data || {};

  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [isSafari, setIsSafari] = useState(false);

  // Detect Safari browser
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsSafari(
      ua.includes("safari") && !ua.includes("chrome") && !ua.includes("android")
    );
  }, []);

  // Disable right click on videos
  useEffect(() => {
    const videos = [videoRef.current, mobileVideoRef.current].filter(Boolean);
    videos.forEach((video) => {
      if (video) {
        video.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          return false;
        });
      }
    });
  }, []);

  const VideoSource = () => {
    if (isSafari) {
      return <source src="/output.mov" type="video/quicktime" />;
    }
    return <source src="/output.webm" type="video/webm" />;
  };

  return (
    <section className="lg:min-h-[calc(100vh-5rem)] items-center pb-10 lg:pb-32 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 mt-16 lg:-mt-20 space-y-8">
        <div className="space-y-4">
          <h1 className="font-sans text-black leading-tight text-5xl text-[clamp(2.5rem,5vw,6rem)] font-normal">
            {title}
          </h1>
          <P1>{Subtitle}</P1>
        </div>

        {/* Mobile Video */}
        <div className="w-full lg:hidden">
          <div className="relative w-full aspect-video rounded-lg">
            {/* Overlay to block interactions */}
            <div
              className="absolute inset-0 z-10 cursor-default"
              style={{ backgroundColor: "transparent", pointerEvents: "auto" }}
              onContextMenu={(e) => e.preventDefault()}
            />

            <video
              ref={mobileVideoRef}
              className="w-full h-full object-contain rounded-lg"
              poster="/home/logo.svg"
              autoPlay
              muted
              playsInline
              loop
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
              <VideoSource />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
          <ScrollButton
            variant="primary"
            ctaLink="our-services"
            ctaText={cta1_Text}
          />
          <Link href={cta2_Link || "/resources"} className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full md:w-fit">
              {cta2_Text}
            </Button>
          </Link>
        </div>
      </div>

      {/* Desktop Video */}
      <div className="w-1/2 h-full hidden -mt-16 lg:flex justify-center items-center">
        <div className="relative w-full h-[600px] max-w-[600px] overflow-hidden rounded-lg">
          {/* Overlay to block interactions */}
          <div
            className="absolute inset-0 z-10 cursor-default"
            style={{ backgroundColor: "transparent", pointerEvents: "auto" }}
            onContextMenu={(e) => e.preventDefault()}
          />

          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
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
            <VideoSource />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Extra CSS to hide controls */}
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
