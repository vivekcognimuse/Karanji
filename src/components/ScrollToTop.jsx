"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="scroll-to-top size-8 group right-4 bottom-16 lg:right-[1.7rem] fixed z-50 flex rounded-2xl items-center justify-center text-2xl border-2 border-black cursor-pointer">
        <Icon
          icon="mdi:chevron-up"
          className="size-6 group-hover:animate-bounce text-black"
        />
      </div>
    )
  );
};

export default ScrollToTop;
