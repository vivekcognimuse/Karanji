import { P3 } from "@/components/CustomTags";
import IndustryCard from "./IndustryCard";

const IndustriesSection = ({ data, cards }) => {
  const { title, description, industries } = data;

  return (
    <section className="w-full  mx-auto px-4 lg:px-10 py-16">
      {/* Header Section - Title left 40%, Description right 60% */}
      <div className="mb-12 lg:mb-16">
        <div className="flex flex-col lg:flex-row w-full gap-6">
          <div className="lg:w-2/5 w-full flex items-start">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h3>
          </div>
          <div className="lg:w-3/5 w-full flex items-center">
            <P3 className="text-gray-600 leading-relaxed">{description}</P3>
          </div>
        </div>
      </div>

      {/* Cards Grid - 2x2 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {cards?.map((industry, index) => (
          <IndustryCard card={industry} key={index} />
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
