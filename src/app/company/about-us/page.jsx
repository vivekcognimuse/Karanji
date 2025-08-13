import HeroSection from "@/sections/Advisory/Hero";
import QuoteSection from "@/sections/Company/quoteSection";
import NextUpSection from "@/sections/Company/NextUpSection";
import VisionMission from "@/sections/Company/VisionMission";
import ValuesSection from "@/sections/Company/ValuesSection";

const heroData = {
  title: "Our Identity & Purpose",
  subTitle:
    "Discover who we are, what drives us, and the values that shape every solution we deliver.",
  backgroundImage: "/path/to/your/hero-image.jpg", // Provide the background image URL
};
const cardsData = [
  {
    title: "Our Team",
    description:
      "Meet the minds shaping the future of immersive tech & storytelling",
    image: "/Images/Card images/teamcardimg.png",
  },
  {
    title: "Career",
    description:
      "Build your career at the crossroads of AI, creativity, & impact",
    image: "/Images/Card images/teamcardimg.png",
  },
];

export default async function aboutUs() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} />
      <VisionMission />
      <ValuesSection />
      <NextUpSection heading="Next Up" cards={cardsData} />
      <QuoteSection title="Innovate. Design. Transform." />
    </div>
  );
}
