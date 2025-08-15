"use client";
import React, { useMemo } from "react";
import ScrollSpySidebar from "../blog/ScrollSpySidebar";
import DownloadSection from "../blog/downloadSection";
import QuoteBlock from "../blog/QuoteBlock";
import CaseStudySidebarMeta from "./CaseStudySidebarMeta";
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

  // Group consecutive quotes together
  const groupedSections = useMemo(() => {
    const sections = data.sections || [];
    const grouped = [];
    let currentQuoteGroup = [];

    sections.forEach((section, index) => {
      if (section.type === "quote") {
        currentQuoteGroup.push(section);
      } else {
        // If we have accumulated quotes, add them as a group
        if (currentQuoteGroup.length > 0) {
          grouped.push({
            type: "quote_group",
            quotes: currentQuoteGroup,
          });
          currentQuoteGroup = [];
        }
        grouped.push(section);
      }
    });

    // Don't forget the last quote group if sections end with quotes
    if (currentQuoteGroup.length > 0) {
      grouped.push({
        type: "quote_group",
        quotes: currentQuoteGroup,
      });
    }

    return grouped;
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
      case "quote_group":
        return (
          <div key={idx} className="relative mb-6 p-6">
            <div
              className="absolute inset-0 bg-cover bg-right bg-no-repeat rounded-lg"
              style={{
                backgroundImage: "url('/blog/Quotes.svg')",
                opacity: 0.3,
                pointerEvents: "none",
              }}
            />
            <div className="relative z-10">
              {section.quotes.map((quote, quoteIndex) => (
                <QuoteBlock key={quoteIndex} quote={quote.content} />
              ))}
            </div>
          </div>
        );
      case "quote":
        // This case should not occur with grouping, but keeping as fallback
        return <QuoteBlock quote={section.content} key={idx} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <article>
        {/* Full Width Header */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-full mx-auto">
          {/* Desktop and Large Tablets: Sidebar to the right (Absolute Position) */}
          <div className="hidden xl:flex xl:gap-8 relative">
            {/* Main Content */}
            <div className="flex-1 max-w-6xl">
              <div id="content" className="pr-6">
                {groupedSections.map((section, idx) =>
                  renderSection(section, idx)
                )}
              </div>
            </div>

            {/* Sidebar (Positioned to Right Corner) */}
            <div className="absolute right-0 top-36 w-64 shrink-0">
              <div className="sticky top-36">
                {headings.length > 0 && (
                  <ScrollSpySidebar headings={headings} />
                )}
                <CaseStudySidebarMeta
                  domain={data.domain}
                  targetAudience={data.targetAudience || []}
                />
              </div>
            </div>
          </div>

          {/* Mobile Content: Sidebar below content */}
          <div className="xl:hidden">
            <div className="px-4">
              {groupedSections.map((section, idx) =>
                renderSection(section, idx)
              )}
            </div>

            {/* Mobile Sidebar (Below Content) */}
            <div className="mt-8">
              {headings.length > 0 && <ScrollSpySidebar headings={headings} />}
              <CaseStudySidebarMeta
                domain={data.domain}
                targetAudience={data.targetAudience || []}
              />
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
