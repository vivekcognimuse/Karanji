import HeroSection from "@/sections/Advisory/Hero";
import QuoteSection from "@/sections/Company/quoteSection";

const heroData = {
  title: "Animation",
};

export default async function companyLanding() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <HeroSection data={heroData} />

      <QuoteSection title="Innovate. Design. Transform." />
    </div>
  );
}
