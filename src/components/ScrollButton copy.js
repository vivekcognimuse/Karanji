"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";

const ScrollButton = ({ ctaText, ctaLink, variant = "primary" }) => {
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - 80; // Subtract 80px to scroll 80px above the section

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  return (
    <div className="flex will-change-transform" data-reveal>
      <Button
        variant={variant}
        className="mx-auto whitespace-nowrap"
        rightIcon={
          <Icon icon="material-symbols:arrow-down" className="w-6 h-6" />
        }
        onClick={(e) => handleScrollToSection(e, ctaLink)} // Handle scroll on click
      >
        {ctaText || "Go to solutions"}
      </Button>
    </div>
  );
};

export default ScrollButton;
