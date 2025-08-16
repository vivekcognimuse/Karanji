import { P2 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

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
    <div className={`text-center pb-16 ${className}`}>
      <h3>{title}</h3>
      <P2>{description}</P2>
      <div className="flex-center flex-col lg:flex-row mt-8 gap-8">
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
    </div>
  );
};

export default CTA;
