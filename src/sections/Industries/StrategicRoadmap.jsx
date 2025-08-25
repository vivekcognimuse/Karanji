import { P2, P3 } from "@/components/CustomTags";
import CarouselContainer from "@/components/animations/Carousal";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const StrategicRoadmap = ({ data }) => {
  const { sectionTitle, sectionDescription, roadmapData } = data;

  // Individual roadmap card component
  const RoadmapCard = ({ title, timeframe, intro, points, note }) => (
    <div className="w-full px-4" data-reveal data-reveal-dir="up">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
        <h4 className="mb-1">{title}</h4>
        <P3 className="text-black-500">{timeframe}</P3>
        <div className="border-b border-gray-300 mb-3 mt-1"></div>

        {intro && <P3 className="text-black-500 mb-2">{intro}</P3>}

        <ul className="text-black-700 px-2 list-disc list-inside space-y-1">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <P3 className="mt-4 font-medium text-black-900">{note}</P3>
      </div>
    </div>
  );

  return (
    <section
      className=""
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="mx-auto">
        {/* Section Title */}
        <h3 className="pb-4" data-reveal data-reveal-dir="up">
          {sectionTitle}
        </h3>

        {/* Section Description */}
        <P2 className="text-gray-600 mb-16" data-reveal data-reveal-dir="up">
          {sectionDescription}
        </P2>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapData.map(({ title, timeframe, intro, points, note }, idx) => (
            <div key={idx} data-reveal data-reveal-dir="up">
              <h4 className="mb-1">{title}</h4>
              <P3 className="text-black-500">{timeframe}</P3>
              <div className="border-b border-gray-300 mb-3 mt-1"></div>

              {intro && <P3 className="text-black-500 mb-2">{intro}</P3>}

              <ul className="text-black-700 px-2 list-disc list-inside space-y-1">
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <P3 className="mt-4 font-medium text-black-900">{note}</P3>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Shown only on Mobile */}
        <div className="block md:hidden">
          <CarouselContainer
            autoPlay={true}
            autoPlayInterval={5000}
            showDots={true}
            showArrows={false}
            className="w-full">
            {roadmapData.map(
              ({ title, timeframe, intro, points, note }, idx) => (
                <RoadmapCard
                  key={idx}
                  title={title}
                  timeframe={timeframe}
                  intro={intro}
                  points={points}
                  note={note}
                />
              )
            )}
          </CarouselContainer>
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
};

export default StrategicRoadmap;
