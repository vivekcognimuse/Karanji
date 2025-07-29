import HeroSection from "@/sections/service/Hero";
import ResourcesSection from "@/sections/service/Resource";
import TechnologyServices from "@/sections/service/Service";
import SuccessStories from "@/sections/service/Stories";
import TechnologyAdvantage from "@/sections/service/Technology";

export default function ServicesPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection />

      <TechnologyAdvantage />

      <TechnologyServices />

      <SuccessStories />

      <ResourcesSection />
    </main>
  );
}
