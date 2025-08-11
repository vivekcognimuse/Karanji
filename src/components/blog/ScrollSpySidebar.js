"use client";
import React, { useEffect, useState } from "react";

const ScrollSpySidebar = ({ headings }) => {
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const blogContent = document.getElementById("content");
    if (!blogContent) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root: null, threshold: 0.1 }
    );

    observer.observe(blogContent);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers = [];
    let visibleHeadings = [];

    const callback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          visibleHeadings.push(id);
        } else {
          visibleHeadings = visibleHeadings.filter((v) => v !== id);
        }
      });

      const latest = visibleHeadings[visibleHeadings.length - 1];
      if (latest) {
        const idx = headings.findIndex((h) => h.id === latest);
        setActiveId(latest);
        setProgress(idx);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0.1,
    });

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => {
      observers.forEach((el) => observer.unobserve(el));
    };
  }, [headings]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <aside className={`transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="relative h-full min-h-[250px] ml-2">
        {/* Track */}
        <div className="absolute left-0 top-0 w-1 h-full bg-black-950/20 rounded-full" />

        {/* Progress */}
        <div
          className="absolute left-0 w-1 bg-black-950 rounded-full transition-all duration-300"
          style={{ height: `${(progress + 1) / headings.length * 90}%` }}
        />

        {/* Links */}
        <div className="flex flex-col gap-4 pl-4 mt-1">
          {headings.map((h) => (
            <button
              key={h.id}
              onClick={() => scrollTo(h.id)}
              className={`text-left text-sm transition-colors leading-12 break-words ${
                h.id === activeId
                  ? "text-black-950"
                  : "text-black-950/50 hover:text-black-950 cursor-pointer"
              }`}
            >
              {h.content}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ScrollSpySidebar;
