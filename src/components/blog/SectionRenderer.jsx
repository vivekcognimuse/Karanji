// SectionRenderer.jsx
import React from "react";
import QuoteBlock from "./QuoteBlock";

const SectionRenderer = ({ section }) => {
  switch (section.type) {
    case "heading":
      return (
        <h4
          id={section.content.replace(/\s+/g, "-").toLowerCase()}
          className=" font-semibold mt-10 mb-4 scroll-mt-24"
        >
          {section.content}
        </h4>
      );

    case "subheading":
      return <h5 className=" font-medium  mt-6 mb-2">{section.content}</h5>;

    case "text":
      return <p className="text-base leading-7  mb-4">{section.content}</p>;

    case "list":
      return (
        <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-4">
          {section.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );

    case "quote":
      return <QuoteBlock quote={section.content} />;

    default:
      return null;
  }
};

export default SectionRenderer;
