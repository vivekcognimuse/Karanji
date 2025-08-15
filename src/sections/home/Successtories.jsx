import React, { useState } from "react";
import { Icon } from "@iconify/react";
import CaseStudyCard from "@/components/cards/CaseStudyCard";

const SuccessStoriesSection = () => {
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  const caseStudies = [
    {
      title: "AI-Enhanced Healthcare Training",
      // No category here
      stats: [
        { title: "68%", subTitle: "Improved Retention" },
        { title: "42%", subTitle: "Faster Completion" },
        { title: "$1.2M", subTitle: "Annual Savings" },
      ],
      description:
        "By integrating AI-powered personalization with immersive VR training scenarios, we transformed clinical staff training for a major hospital network.",
    },
    {
      title: "Digital Transformation Initiative",
      category: "Manufacturing | Fortune 500 Company", // Category present
      stats: [
        { title: "85%", subTitle: "Process Efficiency" },
        { title: "60%", subTitle: "Cost Reduction" },
        { title: "$2.8M", subTitle: "Revenue Increase" },
      ],
      description:
        "Revolutionized manufacturing processes through digital twin technology and AI-driven optimization systems for enhanced operational excellence.",
    },
    {
      title: "Immersive Learning Platform",
      category: "Education | Global University", // Category present
      stats: [
        { title: "92%", subTitle: "Student Engagement" },
        { title: "55%", subTitle: "Knowledge Retention" },
        { title: "$850K", subTitle: "Cost Savings" },
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
            <CaseStudyCard caseStudy={caseStudies[currentCaseStudy]} />

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
