import { P2, P3 } from "@/components/CustomTags";
import React from "react";

const StrategicPriorities = ({ data }) => {
  const {
    sectionTitle,
    sectionDescription,
    businessPrioritiesTitle,
    topRowCards,
    bottomRowCards,
  } = data;

  return (
    <section className="py-12 px-4">
      <div className=" mx-auto space-y-6 ">
        <h3 className="mb-4">{sectionTitle}</h3>

        {/* Section Description - only show if provided */}
        {sectionDescription && (
          <P2 className="text-gray-600 mb-12">{sectionDescription}</P2>
        )}

        {/* Business Priorities Title - only show if provided */}
        {businessPrioritiesTitle && (
          <h4 className="mb-16 text-lg ">{businessPrioritiesTitle}</h4>
        )}

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRowCards.map(({ id, value, title, subtitle, description }) => (
            <div
              key={id}
              className="bg-white rounded-xl border border-gray-300 shadow-md p-6 text-center w-full"
            >
              {value && (
                <h3 className="text-6xl font-thick bg-gradient-to-b from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {value}
                </h3>
              )}
              <h5 className="text-gray-800 font-medium">{title}</h5>
              <P3 className="text-sm text-gray-500">{subtitle}</P3>
              {/* Additional description - only show if provided */}
              {description && (
                <P3 className="text-xs text-gray-400 mt-2">{description}</P3>
              )}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-24 mt-6">
          {bottomRowCards.map(({ id, value, title, subtitle, description }) => (
            <div
              key={id}
              className="bg-white rounded-xl border border-gray-300 shadow-md p-6 text-center w-full"
            >
              {value && (
                <h3 className="text-6xl font-thick bg-gradient-to-b from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {value}
                </h3>
              )}
              <h5 className="text-gray-800 font-medium">{title}</h5>
              <P3 className="text-sm text-gray-500">{subtitle}</P3>
              {/* Additional description - only show if provided */}
              {description && (
                <P3 className="text-xs text-gray-400 mt-2">{description}</P3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPriorities;
