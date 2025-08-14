import { P2, P3 } from "@/components/CustomTags";
import React from "react";

const StrategicPriorities = ({ data }) => {
  const {
    sectionTitle,
    sectionDescription,
    businessPrioritiesTitle,
    topRowCards,
    bottomRowCards,
    isServicesPortfolio, // New flag to identify use case 4
  } = data;

  // Function to render card content based on available data
  const renderCardContent = (card) => {
    const { value, title, subtitle, description, number, metric } = card;

    return (
      <>
        {/* Title first for services portfolio layout */}
        {isServicesPortfolio && (
          <h5 className="text-gray-800 font-medium mb-4">{title}</h5>
        )}

        {/* Subtitle/description for services portfolio */}
        {isServicesPortfolio && subtitle && (
          <P3 className="text-sm text-gray-500 mb-6">{subtitle}</P3>
        )}

        {/* Primary value/number display */}
        {(value || number) && (
          <h3 className="text-6xl font-thick bg-gradient-to-b from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">
            {value || number}
          </h3>
        )}

        {/* For non-services portfolio: Title after number */}
        {!isServicesPortfolio && (
          <h5 className="text-gray-800 font-medium">{title}</h5>
        )}

        {/* For non-services portfolio: Subtitle after title */}
        {!isServicesPortfolio && subtitle && (
          <P3 className="text-sm text-gray-500">{subtitle}</P3>
        )}

        {/* Metric (for services portfolio use case) */}
        {metric && (
          <P3 className="text-sm text-gray-500 font-medium">{metric}</P3>
        )}

        {/* Additional description */}
        {description && (
          <P3 className="text-xs text-gray-400 mt-2">{description}</P3>
        )}
      </>
    );
  };

  // Determine grid layout for bottom row based on number of cards
  const getBottomRowGridCols = () => {
    if (!bottomRowCards || bottomRowCards.length === 0) return "";

    const cardCount = bottomRowCards.length;
    if (cardCount === 2) return "grid-cols-1 md:grid-cols-2";
    if (cardCount === 3) return "grid-cols-1 md:grid-cols-3";
    return "grid-cols-1 md:grid-cols-2"; // fallback
  };

  // Determine padding for bottom row
  const getBottomRowPadding = () => {
    // No padding for services portfolio (use case 4) or 3-card layouts
    if (isServicesPortfolio || !bottomRowCards || bottomRowCards.length !== 2)
      return "";
    return "md:px-24"; // Only apply padding for 2-card layouts
  };

  return (
    <section className="py-12 px-4">
      <div className="mx-auto space-y-6">
        {/* Section Title */}
        {sectionTitle && <h3 className="mb-4">{sectionTitle}</h3>}

        {/* Section Description - only show if provided */}
        {sectionDescription && (
          <P2 className="text-gray-600 mb-12">{sectionDescription}</P2>
        )}

        {/* Business Priorities Title - only show if provided */}
        {businessPrioritiesTitle && (
          <h4 className="mb-16 text-lg">{businessPrioritiesTitle}</h4>
        )}

        {/* Top row */}
        {topRowCards && topRowCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRowCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl border border-gray-300 shadow-md p-6 text-center w-full"
              >
                {renderCardContent(card)}
              </div>
            ))}
          </div>
        )}

        {/* Bottom row */}
        {bottomRowCards && bottomRowCards.length > 0 && (
          <div
            className={`grid ${getBottomRowGridCols()} gap-6 ${getBottomRowPadding()} mt-6`}
          >
            {bottomRowCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl border border-gray-300 shadow-md p-6 text-center w-full"
              >
                {renderCardContent(card)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StrategicPriorities;
