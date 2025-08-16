"use client"; // Ensure this is at the top of the file

import React from "react";
import Button from "@/components/ui/Button";
import { P3 } from "../CustomTags";

const DownloadSection = ({
  title,
  intro,
  description,
  audienceNote,
  encouragementNote,
  buttonLabel,
  pdfLink, // Now pdfLink is passed separately
}) => {
  const handleDownload = () => {
    if (!pdfLink) {
      console.error("PDF link is not provided");
      return; // Prevent further execution if pdfLink is not available
    }

    // Ensure pdfLink is properly URL-encoded
    const encodedPdfLink = encodeURI(pdfLink);

    // Safely get the filename from the link
    const filename = encodedPdfLink.split("/").pop() || "default-file.pdf"; // Default filename if split fails

    // Create a temporary anchor tag to trigger the download
    const link = document.createElement("a");
    link.href = encodedPdfLink;
    link.target = "_blank"; // Open in a new tab
    link.download = filename; // Use the filename extracted from the link
    link.click(); // Trigger the download
  };

  return (
    <section className="rounded-md space-y-6 mt-24">
      {/* Outside the box */}
      <h3 className="text-black">{title}</h3>
      {intro && <P3 className="text-black-500">{intro}</P3>}
      {description && <P3 className="text-black-500">{description}</P3>}

      {/* Inside the gradient box */}
      <div className="p-4 shadow-sm rounded-md border border-black/20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="text-black-500 leading-relaxed">
          {audienceNote && <P3>{audienceNote}</P3>}
          {encouragementNote && <P3 className="mt-1">{encouragementNote}</P3>}
        </div>

        {/* Trigger the download on button click */}
        <Button onClick={handleDownload}>{buttonLabel}</Button>
      </div>
    </section>
  );
};

export default DownloadSection;
