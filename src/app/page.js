"use client";
import LogoStoryAnimation from "@/components/LandingAnimation";
import HeroSection from "@/sections/home/Hero";
import StatsSection from "@/sections/home/Stats";
import SuccessStoriesSection from "@/sections/home/Successtories";
import React from "react";

const KaranjiLanding = () => {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection />
      <StatsSection />
      <LogoStoryAnimation />
      <SuccessStoriesSection />
    </main>
  );
};

export default KaranjiLanding;
