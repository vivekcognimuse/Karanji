"use client";
import React, { useMemo } from "react";
import ScrollSpySidebar from "../blog/ScrollSpySidebar";
import DownloadSection from "../blog/downloadSection";
import QuoteBlock from "../blog/QuoteBlock";
import { P1, P3 } from "../CustomTags";
import Image from "next/image";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

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
          <RevealWrapper
            key={idx}
            direction="up"
            duration={0.5}
            delay={0.1}
            threshold={0.2}
          >
            <h4
              id={slugify(section.content)}
              className="mt-10 mb-4 scroll-mt-24"
            >
              {section.content}
            </h4>
          </RevealWrapper>
        );
      case "subheading":
        return (
          <RevealWrapper
            key={idx}
            direction="up"
            duration={0.5}
            delay={0.1}
            threshold={0.2}
          >
            <h5 className="mt-6 text-black-950/50 mb-2">{section.content}</h5>
          </RevealWrapper>
        );
      case "text":
        return (
          <RevealWrapper
            key={idx}
            direction="up"
            duration={0.5}
            delay={0.1}
            threshold={0.2}
          >
            <P3 className="text-black-950/50 mb-4">{section.content}</P3>
          </RevealWrapper>
        );
      case "subtext":
        return (
          <RevealWrapper
            key={idx}
            direction="up"
            duration={0.5}
            delay={0.1}
            threshold={0.2}
          >
            <P3 className="text-black-950/50 mb-4">{section.content}</P3>
          </RevealWrapper>
        );
      case "list":
        return (
          <RevealWrapper
            key={idx}
            direction="up"
            duration={0.5}
            delay={0.1}
            threshold={0.2}
          >
            <div className="font-outfit text-lg font-light sm:text-xl text-black-950/50 mb-4">
              <ul className="list-disc pl-5 space-y-2">
                {(section.items || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
        );
      case "quote_group":
        return (
          <RevealWrapper
            key={idx}
            direction="up"
            duration={0.5}
            delay={0.1}
            threshold={0.2}
          >
            <div className="relative mb-6 p-6">
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
          </RevealWrapper>
        );
      case "quote":
        return (
          <RevealWrapper
            key={idx}
            direction="up"
            duration={0.5}
            delay={0.1}
            threshold={0.2}
          >
            <QuoteBlock quote={section.content} />
          </RevealWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-no-repeat flex flex-col h-fit pt-16 md:pt-0 lg:min-h-[calc(100vh-80px)] items-center bg-center bg-contain">
      <article>
        {/* Full Width Header */}
        <div className="mx-auto">
          <header className="mb-10">
            <RevealWrapper
              direction="up"
              duration={0.6}
              delay={0.2}
              threshold={0.2}
            >
              <h2 className="mt-20 mb-4">{data.title}</h2>
            </RevealWrapper>

            <RevealWrapper
              direction="up"
              duration={0.6}
              delay={0.3}
              threshold={0.2}
            >
              <P1 className="text-[#333333] text-base mb-4">
                {data.description}
              </P1>
            </RevealWrapper>

            <RevealWrapper
              direction="up"
              duration={0.6}
              delay={0.35}
              threshold={0.2}
            >
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
            </RevealWrapper>
          </header>
        </div>

        {/* Full Width Hero Image */}
        <div className="mx-auto">
          <RevealWrapper
            direction="up"
            duration={0.7}
            delay={0.4}
            threshold={0.2}
          >
            <Image
              id="hero-image"
              src={data.image}
              alt={data.title}
              width={1200}
              height={600}
              unoptimized
              className="w-full max-h-[80vh] object-cover object-center rounded-2xl my-6"
            />
          </RevealWrapper>
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

                  {/* Download Section within the main content area */}
                  <RevealWrapper
                    direction="up"
                    duration={0.6}
                    delay={0.2}
                    threshold={0.2}
                  >
                    <DownloadSection
                      title={data.downloadCta.title}
                      intro={data.downloadCta.intro}
                      description={data.downloadCta.description}
                      audienceNote={data.downloadCta.audienceNote}
                      encouragementNote={data.downloadCta.encouragementNote}
                      buttonLabel={data.downloadCta.buttonLabel}
                      pdfLink={data.pdfLink}
                    />
                  </RevealWrapper>
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

            {/* Download Section for mobile - full width */}
            <RevealWrapper
              direction="up"
              duration={0.6}
              delay={0.2}
              threshold={0.2}
            >
              <DownloadSection
                title={data.downloadCta.title}
                intro={data.downloadCta.intro}
                description={data.downloadCta.description}
                audienceNote={data.downloadCta.audienceNote}
                encouragementNote={data.downloadCta.encouragementNote}
                buttonLabel={data.downloadCta.buttonLabel}
                pdfLink={data.pdfLink}
              />
            </RevealWrapper>

            {/* Mobile Sidebar (Below Content) */}
            <div className="mt-8 space-y-6">
              {headings.length > 0 && (
                <div className="rounded-lg p-4 shadow-sm">
                  <ScrollSpySidebar headings={headings} />
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CaseStudyPage;
