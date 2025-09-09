// SectionRenderer.jsx
import React from "react";
import QuoteBlock from "./QuoteBlock";
import { P1, P3 } from "../CustomTags";

const SectionRenderer = ({ sections }) => {
  const groupedSections = [];
  let currentQuoteGroup = [];

  // Group consecutive quotes together
  sections.forEach((section, index) => {
    if (section.type === "quote") {
      currentQuoteGroup.push(section);
    } else {
      // If we have accumulated quotes, add them as a group
      if (currentQuoteGroup.length > 0) {
        groupedSections.push({
          type: "quote_group",
          quotes: currentQuoteGroup,
        });
        currentQuoteGroup = [];
      }
      groupedSections.push(section);
    }
  });

  // Don't forget the last quote group if sections end with quotes
  if (currentQuoteGroup.length > 0) {
    groupedSections.push({
      type: "quote_group",
      quotes: currentQuoteGroup,
    });
  }

  return (
    <>
      {groupedSections.map((section, index) => {
        switch (section.type) {
          case "heading":
            return (
              <h4
                key={index}
                id={section.content.replace(/\s+/g, "-").toLowerCase()}
                className="mt-10 mb-4 scroll-mt-24"
              >
                {section.content}
              </h4>
            );
          case "subheading":
            return (
              <h5 key={index} className="text-black-950/50 mt-6 mb-2">
                {section.content}
              </h5>
            );
          case "text":
            return (
              <P1 key={index} className="mb-4 text-black-950/50">
                {section.content}
              </P1>
            );
          case "intro_text":
            return (
              <P1 key={index} className="mb-4 text-[#333333]">
                {section.content}
              </P1>
            );
          case "subtext":
            return (
              <P3 key={index} className="text-black-950/50 mb-4">
                {section.content}
              </P3>
            );
          case "list":
            return (
              <ul
                key={index}
                className="font-outfit text-lg font-light sm:text-xl list-disc pl-5 space-y-2 text-black-950/50 mb-4"
              >
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );
          case "quote_group":
            return (
              <div key={index} className="relative">
                <div
                  className="absolute inset-0 bg-cover bg-right bg-no-repeat rounded-lg"
                  style={{
                    backgroundImage: "url('/blog/Quotes.svg')",
                    opacity: 0.3, // Adjust opacity as needed
                    pointerEvents: "none", // So child elements are clickable
                  }}
                />
                <div className="relative p-4">
                  {section.quotes.map((quote, quoteIndex) => (
                    <QuoteBlock key={quoteIndex} quote={quote.content} />
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default SectionRenderer;
