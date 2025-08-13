"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoStoryAnimation from "@/components/LandingAnimation";
import HeroSection from "@/sections/home/Hero";
import StatsSection from "@/sections/home/Stats";
import SuccessStoriesSection from "@/sections/home/Successtories";

const KaranjiLanding = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/technology-solutions");
  }, [router]);

  return null;
  // <main className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
  //   <HeroSection />
  //   <StatsSection />
  //   <LogoStoryAnimation />a
  //   <SuccessStoriesSection />
  // </main>
};

export default KaranjiLanding;
