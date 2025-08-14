import { P3 } from "@/components/CustomTags";
import IndustryCard from "./IndustryCard";

const IndustriesSection = ({ data }) => {
  const { title, description, industries } = data;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-10 py-16">
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
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {industries?.map((industry, index) => (
          <IndustryCard
            key={index}
            title={industry.title}
            description={industry.description}
            icon={industry.icon}
            image={industry.image}
            details={industry.details}
            buttonText={industry.buttonText}
            altTag={industry.altTag}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
