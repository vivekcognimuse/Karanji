// components/IndustryExpertise.js

import { P3 } from "@/components/CustomTags";
import { IndustryCard } from "@/components/ui/advisory";

const IndustryExpertise = ({ title, subtitle, industriesData }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Albert_Sans'] text-black mb-4">
            {title}
          </h3>
          <P3 className="text-lg md:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide">
            {subtitle}
          </P3>
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
};

export default IndustryExpertise;
