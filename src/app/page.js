import HeroSection from "@/sections/home/Hero";
import StatsSection from "@/sections/home/Stats";
import SuccessStoriesSection from "@/sections/home/Successtories";
import ScrollImageSequence from "@/components/LandingAnimation";

const KaranjiLanding = () => {
  return (
    <main className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection />
      <StatsSection />
      <ScrollImageSequence />
      {/* <SuccessStoriesSection /> */}
    </main>
  );
};

export default KaranjiLanding;
