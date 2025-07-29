import { IndustryCard } from "@/components/ui/advisory";
import { industriesData } from "@/constant/advisory";

export default function IndustryExpertise() {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Albert_Sans'] text-black mb-4">
            Industry-Specific Expertise in AI Consulting
          </h2>
          <p className="text-lg md:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide">
            Tailored approaches that address unique challenges in diverse
            sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {industriesData.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
