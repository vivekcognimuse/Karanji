"use client";
import React, { useMemo } from "react";
import ScrollSpySidebar from "../blog/ScrollSpySidebar";
import DownloadSection from "../blog/downloadSection";
import QuoteBlock from "../blog/QuoteBlock";
import { P1, P3 } from "../CustomTags";

const slugify = (s) =>
  (s || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const CaseStudyPage = ({ data }) => {
  const headings = useMemo(() => {
    return (data.sections || [])
      .filter((s) => s.type === "heading")
      .map((h, i) => ({
        id: slugify(h.content) || `h-${i}`,
        content: h.content,
      }));
  }, [data.sections]);

  const renderSection = (section, idx) => {
    switch (section.type) {
      case "heading":
        return (
          <h4
            id={slugify(section.content)}
            className="mt-10 mb-4 scroll-mt-24"
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
          <P3 className="text-black-950/50 mb-4" key={idx}>
            {section.content}
          </P3>
        );
      case "list":
        return (
          <ul
            className="font-outfit text-lg font-light sm:text-xl list-disc pl-5 space-y-2 text-black-950/50 mb-4"
            key={idx}
          >
            {(section.items || []).map((item, index) => (
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
      <article>
        {/* Full Width Header */}
        <div className="mx-auto">
          <header className="mb-10">
            <h2 className="mt-20 mb-4">{data.title}</h2>
            <P1 className="text-black-500 text-base mb-4">
              {data.description}
            </P1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4 mt-4">
              {(data.tags || []).map((tag, idx) => (
                <span
                  key={idx}
                  className="leading-[28px] tracking-[0.05em] text-black bg-gray-300/50 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
        </div>

        {/* Full Width Hero Image */}
        <div className="mx-auto">
          <img
            id="hero-image"
            src="/caseStudies/Casestudy 3.webp"
            alt={data.title}
            className="w-full rounded-2xl my-6"
          />
        </div>

        {/* Content Section with Sidebar Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="hidden xl:flex xl:gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <div id="content" className="pr-6">
                {(data.sections || []).map((section, idx) =>
                  renderSection(section, idx)
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-64 shrink-0">
              <div className="sticky top-36">
                {headings.length > 0 && (
                  <ScrollSpySidebar headings={headings} />
                )}
              </div>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="xl:hidden">
            <div className="px-4">
              {(data.sections || []).map((section, idx) =>
                renderSection(section, idx)
              )}
            </div>
          </div>
        </div>

        {/* Full Width Download Section */}
        <div className="mx-auto mt-16">
          <DownloadSection {...(data.downloadCta || {})} />
        </div>
      </article>
    </div>
  );
};

export default CaseStudyPage;
