"use client";
import React, { useMemo } from "react";
import ArticleHeader from "./ArticleHeader";
import SectionRenderer from "./SectionRenderer";
import ScrollSpySidebar from "./ScrollSpySidebar";
import DownloadSection from "./downloadSection";
import NewsletterSubscribe from "./NewsletterSubscribe";

const BlogPage = ({ blogs = [] }) => {
  const first = blogs[0];

  const { introSections, mainSections, headings } = useMemo(() => {
    if (!first?.content?.sections)
      return { introSections: [], mainSections: [], headings: [] };

    const intro = first.content.sections.filter((s) => s.type === "intro_text");
    const main = first.content.sections.filter((s) => s.type !== "intro_text");
    const headings = main
      .filter((s) => s.type === "heading")
      .map((h) => ({
        id: h.content.replace(/\s+/g, "-").toLowerCase(),
        content: h.content,
      }));

    return { introSections: intro, mainSections: main, headings };
  }, [first]);

  if (!blogs.length) return null;

  return (
    <div className="relative bg-no-repeat flex flex-col h-fit pt-16 md:pt-0 lg:min-h-[calc(100vh-80px)] items-center bg-center bg-contain">
      {blogs.map((blog) => (
        <article key={blog.id} className="mb-24">
          {/* Full Width Header */}
          <div className="mx-auto">
            <ArticleHeader
              title={blog.title}
              author={blog.author}
              date={blog.publishDate}
              readTime={blog.readTime}
              category={blog.category}
            />
          </div>

          {/* Full Width Hero Image */}
          <div className="mx-auto">
            <img
              id="hero-image"
              src="/blog/Casestudy%202.webp"
              alt={blog.title}
              className="w-full rounded-2xl my-6"
            />
          </div>

          {/* Full Width Intro Text */}
          {introSections.length > 0 && (
            <div className="mx-auto mb-8 px-4">
              <SectionRenderer sections={introSections} />
            </div>
          )}

          {/* Content Section with Sidebar Layout */}
          <div className=" mx-auto">
            <div className="hidden xl:flex xl:gap-8">
              {/* Main Content */}
              <div className="flex-1 ">
                <div id="content" className="pr-6">
                  <SectionRenderer sections={mainSections} />
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-64 shrink-0">
                <div className="sticky top-36">
                  <ScrollSpySidebar headings={headings} />
                </div>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="xl:hidden">
              <div className="px-4">
                <SectionRenderer sections={mainSections} />
              </div>
            </div>
          </div>

          {/* Full Width Download Section */}
          <div className="mx-auto">
            <DownloadSection
              title="Why download the VR Healthcare Case Study?"
              intro="This isn't just a story – it's a proven blueprint for impact."
              description="It's a real-world example of how a global organization used immersive VR to upskill healthcare workers – faster, safer, and more effectively. From strategy to execution, see how skill gaps were closed and patient care improved."
              audienceNote="If you're a CSR lead, hospital trainer, or L&D manager driving healthcare transformation — it's built for you."
              encouragementNote="Use it, learn from it, and start your own impact story"
              buttonLabel="Download Full Case Study"
            />
          </div>

          {/* Full Width Newsletter */}
          <div className="mx-auto">
            <NewsletterSubscribe />
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPage;
