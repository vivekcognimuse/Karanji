// components/IndustryExpertise.js

import { P3 } from "@/components/CustomTags";
import { IndustryCard } from "@/components/ui/advisory";
import SectionReveal from "@/components/animations/sectionReveal";

const IndustryExpertise = ({ data }) => {
  const { title, subtitle, cards } = data || {};

  return (
    <section
      className=""
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="max-w-[1580px] mx-auto">
        <div className="mb-12">
          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Albert_Sans'] text-black mb-4"
            data-reveal
            data-reveal-dir="up">
            {title}
          </h3>
          <P3
            className="text-lg md:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide"
            data-reveal
            data-reveal-dir="up">
            {subtitle}
          </P3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((industry, index) => (
            <div key={index} data-reveal data-reveal-dir="up">
              <IndustryCard
                title={industry.title}
                description={industry.description}
                icon={`/technologySolutions/digital-industry/${index + 1}.svg`}
                altTag={industry.altTag}
              />
            </div>
          ))}
        </div>
      </div>

      <SectionReveal />
    </section>
  );
};

export default IndustryExpertise;
