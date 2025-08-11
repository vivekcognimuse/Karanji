// SectionRenderer.jsx
import React from "react";
import QuoteBlock from "./QuoteBlock";
import { P1, P3 } from "../CustomTags";

const SectionRenderer = ({ section }) => {
  switch (section.type) {
    case "heading":
      return (
        <h4
          id={section.content.replace(/\s+/g, "-").toLowerCase()}
          className="mt-10 mb-4 scroll-mt-24"
        >
          {section.content}
        </h4>
      );

    case "subheading":
      return <h5 className="text-black-950 mt-6 mb-2">{section.content}</h5>;

    case "text":
      return <P1 className="mb-4">{section.content}</P1>;

    case "intro_text":
      return <P1 className="mb-4">{section.content}</P1>;

    case "subtext":
      return <P3 className="text-black-950/50 mb-4">{section.content}</P3>;

    case "list":
      return (
        <ul className="font-outfit text-lg font-light sm:text-xl list-disc pl-5 space-y-2 text-black-950/50 mb-4">
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
