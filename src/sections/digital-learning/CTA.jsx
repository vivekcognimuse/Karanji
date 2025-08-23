import { P2 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

const CTA = ({ className = "", data }) => {
  const {
    title,
    description,
    PrimaryButtonText,
    PrimaryButtonLink,
    SecondaryButtonText,
    SecondaryButtonLink,
  } = data || {};

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
      className={`text-center ${className}`}>
      {/* Title and Description */}
      <div
        className="opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        <h3>{title}</h3>
        <P2>{description}</P2>
      </div>

      {/* Button Container */}
      <div
        className="flex-center flex-col lg:flex-row mt-8 gap-8 opacity-0 will-change-transform"
        data-reveal
        data-reveal-dir="up">
        {PrimaryButtonText && PrimaryButtonLink && (
          <Link href={PrimaryButtonLink}>
            <Button href={PrimaryButtonLink}>{PrimaryButtonText}</Button>
          </Link>
        )}
        {SecondaryButtonText && SecondaryButtonLink && (
          <Link href={SecondaryButtonLink}>
            <Button href={SecondaryButtonLink} variant="secondary" className="">
              {SecondaryButtonText}
            </Button>
          </Link>
        )}
      </div>

      {/* Run the animation for this section */}
      <SectionReveal />
    </section>
  );
};

export default CTA;
