import { Icon } from "@iconify/react";
import { P2 } from "../CustomTags";

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <article className="flex-1 max-w-4xl bg-white rounded-xl lg:rounded-[20px] shadow-lg border border-black/20 p-6 lg:p-8 space-y-8 lg:space-y-12">
      <header className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-normal font-['Albert_Sans'] text-black">
          {caseStudy.title}
        </h3>
        {/* Conditionally render the category */}
        {caseStudy.category && (
          <p className="text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed tracking-wide text-black/50">
            {caseStudy.category}
          </p>
        )}
      </header>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {caseStudy.metrics.map((metric, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-0 h-16 lg:h-24 border-l border-black" />
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold font-['Albert_Sans'] text-black">
                {metric.value}
              </div>
              <p className="text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed tracking-wide text-black">
                {metric.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add description using the custom P2 component */}
      <P2 className="text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed tracking-wide text-black/50">
        {caseStudy.description}
      </P2>

      <footer className="flex justify-end items-center gap-2">
        <a
          href="#"
          className="text-base lg:text-lg font-normal font-['Outfit'] tracking-wide text-black hover:underline"
        >
          Read Full Case Study
        </a>
        <Icon icon="carbon:arrow-up-right" className="w-5 h-5 text-black " />
      </footer>
    </article>
  );
};

export default CaseStudyCard;
