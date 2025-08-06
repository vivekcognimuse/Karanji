// components/IndustryExpertise.js

import { P3 } from "@/components/CustomTags";
import { IndustryCard } from "@/components/ui/advisory";

const IndustryExpertise = ({ data }) => {
  const { title, subtitle, cards } = data || {};
  return (
    <section className="">
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
          {cards.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              altTag={industry.altTag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
