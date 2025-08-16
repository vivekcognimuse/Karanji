import { P3 } from "@/components/CustomTags";
import IndustryCard from "./IndustryCard";

const IndustriesSection = ({ data, cards }) => {
  const { title, description } = data || {};

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 lg:px-10 py-16 lg:py-20">
        {/* Header Section - Title left 40%, Description right 60% */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-10">
            <div className="lg:w-2/5 w-full flex items-start">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-0 leading-tight">
                {title}
              </h3>
            </div>
            <div className="lg:w-3/5 w-full flex items-center">
              <P3 className="text-gray-600 leading-relaxed">{description}</P3>
            </div>
          </div>
        </div>

        {/* Cards Grid - 2x2 layout, centered, equal height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center justify-center content-center max-w-5xl mx-auto">
          {cards?.map((industry, index) => (
            <div
              key={index}
              className={`h-full min-h-[320px] ${
                index === 0 || index === 2 ? "ml-auto" : ""
              }`}>
              <IndustryCard card={industry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
