import React, { useMemo } from "react";
import ScrollSpySidebar from "../blog/ScrollSpySidebar";
import DownloadSection from "../blog/downloadSection";
import QuoteBlock from "../blog/QuoteBlock";
import CaseStudySidebarMeta from "./CaseStudySidebarMeta";
import { P1, P3 } from "../CustomTags";
import Image from "next/image";
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
          <Image
            id="hero-image"
            src={data.image}
            alt={data.title}
            width={1200}
            height={600}
            unoptimized
            className="w-full max-h-[80vh] object-cover object-center rounded-2xl my-6"
          />
        </div>

        {/* Content Section with Sidebar Layout */}
        <div className="mx-auto">
          {/* Desktop and Large Tablets: Sidebar Layout */}
          <div className="hidden xl:block">
            <div className="flex gap-8">
              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div id="content">
                  {groupedSections.map((section, idx) =>
                    renderSection(section, idx)
                  )}
                </div>
              </div>

              {/* Sticky Sidebar */}
              <div className="w-64 flex-shrink-0">
                <div className="sticky top-20 space-y-4">
                  {headings.length > 0 && (
                    <div>
                      <ScrollSpySidebar headings={headings} />
                    </div>
                  )}
                  <div>
                    <CaseStudySidebarMeta
                      domain={data.domain}
                      targetAudience={data.targetAudience || []}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Content: Sidebar below content */}
          <div className="xl:hidden">
            <div id="content">
              {groupedSections.map((section, idx) =>
                renderSection(section, idx)
              )}
            </div>

            {/* Mobile Sidebar (Below Content) */}
            <div className="mt-8 space-y-6">
              {headings.length > 0 && (
                <div className="rounded-lg p-4 shadow-sm">
                  <ScrollSpySidebar headings={headings} />
                </div>
              )}
              <div className="rounded-lg p-4 shadow-sm">
                <CaseStudySidebarMeta
                  domain={data.domain}
                  targetAudience={data.targetAudience || []}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Download Section */}
        <div className="mx-auto mt-16">
          <DownloadSection
            title={data.downloadCta.title}
            intro={data.downloadCta.intro}
            description={data.downloadCta.description}
            audienceNote={data.downloadCta.audienceNote}
            encouragementNote={data.downloadCta.encouragementNote}
            buttonLabel={data.downloadCta.buttonLabel}
            pdfLink={data.pdfLink}
          />
        </div>
      </article>
    </div>
  );
};

export default CaseStudyPage;
