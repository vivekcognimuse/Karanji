import React from "react";

const ArticleHeader = ({ title, author, date, readTime, category }) => (
  <header className="mb-10 mt-20">
    <h2 className="  mb-4">{title}</h2>
    <div className="flex flex-wrap gap-4 text-sm text-gray-500 ">
      <span className="leading-[28px] tracking-[0.05em] text-black bg-gray-300/50 rounded-full lg:px-3 lg:py-1 px-2 py-1">
        {author}
      </span>
      <span className="leading-[28px] tracking-[0.05em] text-black bg-gray-300/50 rounded-full lg:px-3 lg:py-1 px-2 py-1">
        {readTime}
      </span>
      <span className="leading-[28px] tracking-[0.05em] text-black bg-gray-300/50 rounded-full lg:px-3 lg:py-1 px-2 py-1">
        {new Date(date)
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, ".")}
      </span>
    </div>
  </header>
);

export default ArticleHeader;
