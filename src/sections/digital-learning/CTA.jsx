"use client";
import { P2 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import React from "react";

const CTA = ({
  title,
  description,
  PrimaryButtonText,
  PrimaryButtonLink,
  SecondaryButtonText,
  SecondaryButtonLink,
}) => {
  return (
    <div className="text-center">
      <h3>{title}</h3>
      <P2>{description}</P2>
      <div className="flex-center mt-8 gap-8">
        {PrimaryButtonText && PrimaryButtonLink && (
          <Button href={PrimaryButtonLink}>{PrimaryButtonText}</Button>
        )}
        {SecondaryButtonText && SecondaryButtonLink && (
          <Button href={SecondaryButtonLink} variant="secondary" className="">
            {SecondaryButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CTA;
