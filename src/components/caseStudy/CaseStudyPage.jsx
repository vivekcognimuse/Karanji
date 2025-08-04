// components/CaseStudyPage.jsx
"use client";
import React from "react";
import ScrollSpySidebar from "../blog/ScrollSpySidebar";
import DownloadSection from "../blog/downloadSection";
import QuoteBlock from "../blog/QuoteBlock";
import { P1, P3 } from "../CustomTags";

const CaseStudyPage = ({ data }) => {
  const headings = data.sections
    .filter((s) => s.type === "heading")
    .map((h) => ({
      id: h.content.replace(/\s+/g, "-").toLowerCase(),
      content: h.content,
    }));

  const renderSection = (section, idx) => {
    switch (section.type) {
      case "heading":
        return (
          <h4
            id={section.content.replace(/\s+/g, "-").toLowerCase()}
            className=" mt-10 mb-4 scroll-mt-24"
            key={idx}
          >
            {section.content}
          </h4>
        );
      case "subheading":
        return (
          <h5 className="mt-6 mb-2" key={idx}>
            {section.content}
          </h5>
        );
      case "text":
        return (
          <P3 className=" text-black-950/50 mb-4" key={idx}>
            {section.content}
          </P3>
        );
      case "list":
        return (
          <ul
            className="font-outfit text-lg font-light sm:text-xl list-disc pl-5 space-y-2 text-black-950/50 mb-4"
            key={idx}
          >
            {section.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case "quote":
        return <QuoteBlock quote={section.content} key={idx} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <ScrollSpySidebar headings={headings} />

      <article className="mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h2 className="text-3xl font-bold leading-tight mb-4">
            {data.title}
          </h2>
          <P1 className="text-gray-600 text-base  mb-4">{data.description}</P1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4 mt-4">
            {data.tags.map((tag, idx) => (
              <span
                key={idx}
                className="leading-[28px] tracking-[0.05em] text-black bg-gray-300/50 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Image */}
        {data.image && (
          <>
            <img
              src={`/${data.image}`}
              alt={data.title}
              id="case-study-image"
              className="w-full rounded-2xl my-6"
            />
            <div id="image-end-sentinel" className="h-1" />{" "}
            {/* This is the trigger */}
          </>
        )}

        {/* Body */}
        <div id="content" className="pr-12">
          {data.sections.map((section, idx) => renderSection(section, idx))}
        </div>

        {/* Download section */}
        <div className="mt-16 pr-12">
          <DownloadSection {...data.downloadCta} />
        </div>
      </article>
    </div>
  );
};

export default CaseStudyPage;
