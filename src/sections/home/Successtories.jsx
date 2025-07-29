import React, { useState } from "react";
import { Icon } from "@iconify/react";

const SuccessStoriesSection = () => {
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  const caseStudies = [
    {
      title: "AI-Enhanced Healthcare Training",
      category: "Healthcare | Major Hospital Network",
      metrics: [
        { value: "68%", label: "Improved Retention" },
        { value: "42%", label: "Faster Completion" },
        { value: "$1.2M", label: "Annual Savings" },
      ],
      description:
        "By integrating AI-powered personalization with immersive VR training scenarios, we transformed clinical staff training for a major hospital network.",
    },
    {
      title: "Digital Transformation Initiative",
      category: "Manufacturing | Fortune 500 Company",
      metrics: [
        { value: "85%", label: "Process Efficiency" },
        { value: "60%", label: "Cost Reduction" },
        { value: "$2.8M", label: "Revenue Increase" },
      ],
      description:
        "Revolutionized manufacturing processes through digital twin technology and AI-driven optimization systems for enhanced operational excellence.",
    },
    {
      title: "Immersive Learning Platform",
      category: "Education | Global University",
      metrics: [
        { value: "92%", label: "Student Engagement" },
        { value: "55%", label: "Knowledge Retention" },
        { value: "$850K", label: "Cost Savings" },
      ],
      description:
        "Created an innovative immersive learning environment that combines AR/VR technology with adaptive AI to revolutionize higher education.",
    },
  ];

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  return (
    <section className="py-10 space-y-16 lg:space-y-32">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1">
          <h2 className="text-black text-5xl font-medium">
            Transforming Business Through Measurable Success
          </h2>
        </div>
        <div className="flex-1">
          <p className="text-black text-xl font-normal leading-9 tracking-wide">
            Discover the significant impact of Karanji's innovative solutions.
            Our metrics showcase how we drive efficiency and savings for our
            clients. Join us in transforming challenges into opportunities for
            growth.
          </p>
        </div>
      </div>

      {/* Case Study Carousel */}
      <div className="py-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Navigation Buttons */}
            <button
              onClick={prevCaseStudy}
              className="w-10 h-10 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Icon icon="mdi:chevron-left" className="w-5 h-5 text-black" />
            </button>

            {/* Case Study Card */}
            <article className="flex-1 max-w-4xl bg-white rounded-xl lg:rounded-[20px] shadow-lg border border-black/20 p-6 lg:p-8 space-y-8 lg:space-y-12">
              <header className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-normal font-['Albert_Sans'] text-black">
                  {caseStudies[currentCaseStudy].title}
                </h3>
                <p className="text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed tracking-wide text-black/50">
                  {caseStudies[currentCaseStudy].category}
                </p>
              </header>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {caseStudies[currentCaseStudy].metrics.map((metric, index) => (
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

              <p className="text-lg md:text-xl font-normal font-['Outfit'] leading-relaxed tracking-wide text-black/50">
                {caseStudies[currentCaseStudy].description}
              </p>

              <footer className="flex justify-end items-center gap-2">
                <a
                  href="#"
                  className="text-base lg:text-lg font-normal font-['Outfit'] tracking-wide text-black hover:underline">
                  Read Full Case Study
                </a>
                <Icon
                  icon="carbon:arrow-up-right"
                  className="w-5 h-5 text-black "
                />
              </footer>
            </article>

            <button
              onClick={nextCaseStudy}
              className="w-10 h-10 bg-gradient-to-br from-indigo-200 via-sky-100 to-rose-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Icon icon="mdi:chevron-right" className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCaseStudy(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentCaseStudy
                    ? "bg-gradient-to-b from-white to-indigo-300 w-4 h-4"
                    : "bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
