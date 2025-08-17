import { P2, P3 } from "@/components/CustomTags";
import CarouselContainer from "@/components/animations/Carousal";
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
    const { value, title, subTitle, description, number, metric } = card;

    return (
      <>
        {/* Title first for services portfolio layout */}
        {isServicesPortfolio && (
          <h5 className="text-black-800 font-medium mb-4">{title}</h5>
        )}

        {/* Subtitle/description for services portfolio */}
        {isServicesPortfolio && subTitle && (
          <P3 className="text-black-500 mb-6">{subTitle}</P3>
        )}

        {/* Primary value/number display */}
        {(value || number) && (
          <h3 className="text-6xl font-thick bg-gradient-to-b from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">
            {value || number}
          </h3>
        )}

        {/* For non-services portfolio: Title after number */}
        {!isServicesPortfolio && (
          <h5 className="text-black-800 font-medium">{title}</h5>
        )}

        {/* For non-services portfolio: Subtitle after title */}
        {!isServicesPortfolio && subTitle && (
          <P3 className="text-black-500">{subTitle}</P3>
        )}

        {/* Metric (for services portfolio use case) */}
        {metric && <P3 className="text-black-500 font-medium">{metric}</P3>}

        {/* Additional description */}
        {description && (
          <P3 className="text-xs text-black-400 mt-2">{description}</P3>
        )}
      </>
    );
  };

  // Individual priority card component for carousel
  const PriorityCard = ({ card }) => (
    <div className="w-full px-4">
      <div className="bg-white rounded-2xl border border-gray-300 shadow-[0px_7px_10px_0px_rgba(0,0,0,0.10)] p-6 text-center w-full h-full">
        {renderCardContent(card)}
      </div>
    </div>
  );

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
    <section className="">
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

        {/* Desktop Layout - Hidden on Mobile */}
        <div className="hidden md:block px-24">
          {/* Top row */}
          {topRowCards && topRowCards.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topRowCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl border border-gray-300 shadow-[0px_7px_10px_0px_rgba(0,0,0,0.10)] p-6 text-center w-full"
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
                  className="bg-white rounded-2xl border border-gray-300 shadow-[0px_7px_10px_0px_rgba(0,0,0,0.10)] p-6 text-center w-full"
                >
                  {renderCardContent(card)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Layout - Shown only on Mobile */}
        <div className="block md:hidden">
          {(() => {
            // Combine all cards into a single array
            const allCards = [
              ...(topRowCards || []),
              ...(bottomRowCards || []),
            ];

            if (allCards.length === 0) return null;

            if (allCards.length === 1) {
              // Single card - no carousel needed
              return (
                <div className="px-4">
                  <PriorityCard card={allCards[0]} />
                </div>
              );
            }

            // Multiple cards - use single carousel
            return (
              <CarouselContainer
                key={`all-cards-${allCards.length}`}
                autoPlay={true}
                autoPlayInterval={5000}
                showDots={true}
                showArrows={false}
                className="w-full"
              >
                {allCards.map((card) => (
                  <PriorityCard key={card.id} card={card} />
                ))}
              </CarouselContainer>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default StrategicPriorities;
