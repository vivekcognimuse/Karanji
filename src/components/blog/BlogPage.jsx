"use client";
import React from "react";
import ArticleHeader from "./ArticleHeader";
import SectionRenderer from "./SectionRenderer";
import ScrollSpySidebar from "./ScrollSpySidebar";
import DownloadSection from "./downloadSection";
import NewsletterSubscribe from "./NewsletterSubscribe";
import blogData from "../../data/blogs.json";

const BlogPage = () => {
  const blog = blogData.blogs[0];

  const headings = blog.content.sections
    .filter((s) => s.type === "heading")
    .map((h) => ({
      id: h.content.replace(/\s+/g, "-").toLowerCase(),
      content: h.content,
    }));

  return (
    <div className="relative">
      <ScrollSpySidebar headings={headings} />

      <article className=" mx-auto">
        <ArticleHeader
          title={blog.title}
          author={blog.author}
          date={blog.publishDate}
          readTime={blog.readTime}
          category={blog.category}
        />

        {/* Featured image */}
        {blog.image && (
          <img
            id="hero-image"
            src={`/${blog.image}`} // Adjust path if using /public folder
            alt={blog.title}
            className="w-full rounded-2xl my-6"
          />
        )}

        {/* Body */}
        <div id="content" className="pr-6">
          {blog.content.sections.map((section, idx) => (
            <SectionRenderer key={idx} section={section} />
          ))}
        </div>

        {/* Bottom CTA */}
        <DownloadSection
          title="Why download the VR Healthcare Case Study?"
          intro="This isn’t just a story – it’s a proven blueprint for impact."
          description="It’s a real-world example of how a global organization used immersive VR to upskill healthcare workers – faster, safer, and more effectively. From strategy to execution, see how skill gaps were closed and patient care improved."
          audienceNote="If you're a CSR lead, hospital trainer, or L&D manager driving healthcare transformation — it’s built for you."
          encouragementNote="Use it, learn from it, and start your own impact story"
          buttonLabel="Download Full Case Study"
        />
        <NewsletterSubscribe />
      </article>
    </div>
  );
};

export default BlogPage;
