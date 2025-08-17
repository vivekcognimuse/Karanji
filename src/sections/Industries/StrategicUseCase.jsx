"use client";
import { P2, P3, P4, P5 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import CarouselContainer from "@/components/animations/Carousal";
import FilterDropdown from "@/components/ui/filter";
import React, { useState } from "react";
import Image from "next/image";

const StrategicUseCase = ({ data, icon }) => {
  const {
    sectionTitle,
    sectionDescription,
    filterButtons,
    useCaseCards,
    categoryMapping,
  } = data;

  // Step 1: Track the selected filter category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Filter the useCaseCards based on the selected short category name
  const filteredCards =
    selectedCategory === "All"
      ? useCaseCards
      : useCaseCards.filter(
          (card) => card.category === categoryMapping[selectedCategory]
        );

  // Step 3: Handle button click and set active category
  const handleFilterClick = (fullCategoryName) => {
    setSelectedCategory(fullCategoryName);
  };

  // Individual use case card component
  const UseCaseCard = ({ card, index, iconPath }) => {
    const {
      id,
      category,
      title,
      description,
      duration,
      complexity,
      iconIndex,
    } = card;

    return (
      <div className="w-full px-2 md:px-0">
        <div className="border border-black-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition h-full bg-white">
          <div className="flex items-center justify-between mb-2 text-sm font-semibold">
            <div className="p-2 rounded-full">
              {/* Dynamic icon path */}
              <Image
                src={`${iconPath}/${index + 1}.svg`}
                alt={title}
                width={40}
                height={40}
                unoptimized
                className="size-10"
              />
            </div>
            <P5 className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent border border-gray-300 px-2 py-1 rounded-sm">
              {category}
            </P5>
          </div>

          <P2 className="mb-2 border-b border-gray-300">{title}</P2>

          <P3 className="text-black-500 mb-3">{description}</P3>

          <div className="flex justify-between text-black-500">
            <P4>{duration}</P4>
            <P4>{complexity}</P4>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-6">
      <div className="mx-auto">
        <h3 className="mb-2">{sectionTitle}</h3>
        <P2 className="mb-8">{sectionDescription}</P2>

        {/* Filter Buttons */}
        <div className="mb-10">
          {/* Desktop Filter Buttons - Hidden on Mobile */}
          <div className="hidden md:flex flex-wrap gap-4">
            {filterButtons.map((button, idx) => (
              <Button
                key={idx}
                size="sm"
                variant="secondary"
                onClick={() => handleFilterClick(button.label)}
                className={
                  selectedCategory === button.label
                    ? "bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] text-white px-4 py-2 rounded-full text-sm"
                    : "px-4 py-2 rounded-full text-sm"
                }
              >
                {button.label}
              </Button>
            ))}
          </div>

          {/* Mobile Filter Dropdown - Shown only on Mobile */}
          <div className="block md:hidden">
            <FilterDropdown
              selectedValue={selectedCategory}
              showSelectedInButton={true}
              buttonText="Filter Categories"
              position="left"
              className="w-full max-w-xs"
            >
              {filterButtons.map((button, idx) => (
                <button
                  key={idx}
                  onClick={() => handleFilterClick(button.label)}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                    selectedCategory === button.label
                      ? "bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] text-white font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </FilterDropdown>
          </div>
        </div>

        {/* Content Area */}
        {filteredCards.length > 0 ? (
          <>
            {/* Desktop Grid - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCards.map((card, index) => (
                <div
                  key={card.id}
                  className="border border-black-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between mb-2 text-sm font-semibold">
                    <div className="p-2 rounded-full">
                      <Image
                        src={`${icon}/${index + 1}.svg`}
                        alt={card.title}
                        width={40}
                        height={40}
                        unoptimized
                        className="size-10"
                      />
                    </div>
                    <P5 className="bg-gradient-to-r from-[rgb(105,189,242)] via-[rgb(212,128,242)] to-[rgb(255,191,128)] bg-clip-text text-transparent border border-gray-300 px-2 py-1 rounded-sm">
                      {card.category}
                    </P5>
                  </div>

                  <P2 className="mb-2 border-b border-gray-300">
                    {card.title}
                  </P2>

                  <P3 className="text-black-500 mb-3">{card.description}</P3>

                  <div className="flex justify-between text-black-500">
                    <P4>{card.duration}</P4>
                    <P4>{card.complexity}</P4>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel - Shown only on Mobile */}
            <div className="block md:hidden">
              <CarouselContainer
                key={`${selectedCategory}-${filteredCards.length}`}
                autoPlay={true}
                autoPlayInterval={6000}
                showDots={true}
                showArrows={false}
                className="w-full"
              >
                {filteredCards.map((card, index) => (
                  <UseCaseCard
                    key={card.id}
                    card={card}
                    index={index}
                    iconPath={icon}
                  />
                ))}
              </CarouselContainer>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <P3>No cards available for the selected category.</P3>
          </div>
        )}
      </div>
    </section>
  );
};

export default StrategicUseCase;
