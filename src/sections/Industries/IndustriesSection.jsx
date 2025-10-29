import { P3 } from "@/components/CustomTags";
import IndustryCard from "./IndustryCard";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

const IndustriesSection = ({ data, cards }) => {
  const { title, description } = data || {};

  return (
    <section className="w-full">
      <div className="">
        {/* Header Section - Title left 40%, Description right 60% */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-10">
            <div className="lg:w-2/5 w-full flex items-start">
              <RevealWrapper direction="up" duration={0.5} threshold={0.3}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-0 leading-tight">
                  {title}
                </h3>
              </RevealWrapper>
            </div>
            <div className="lg:w-3/5 w-full flex items-center">
              <RevealWrapper
                direction="up"
                duration={0.5}
                delay={0.1}
                threshold={0.3}
              >
                <P3 className="text-gray-600 leading-relaxed">{description}</P3>
              </RevealWrapper>
            </div>
          </div>
        </div>

        {/* Cards Grid - 2x2 layout, centered, equal height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center justify-center content-center max-w-5xl mx-auto">
          {cards?.map((industry, index) => (
            <RevealWrapper
              key={index}
              direction="up"
              duration={0.5}
              delay={0.2 + index * 0.12}
              distance={30}
              threshold={0.3}
            >
              <div
                className={`h-full min-h-[320px] ${
                  index === 0 || index === 2 ? "ml-auto" : ""
                }`}
              >
                <IndustryCard card={industry} />
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
