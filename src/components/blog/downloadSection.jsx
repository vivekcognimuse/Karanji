"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { P2, P3 } from "../CustomTags";

const DownloadSection = ({
  title,
  intro,
  description,
  audienceNote,
  encouragementNote,
  buttonLabel,
  pdfLink,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      // Send data to API
      const response = await fetch("/api/download-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          pdfLink: pdfLink,
          title: title,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("API error:", result);
        alert(result.message || "Failed to submit form. Please try again.");
        return;
      }

      console.log("Form submitted successfully:", result);

      // Trigger download
      handleDownload();

      // Close modal and reset form
      setIsModalOpen(false);
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleDownload = () => {
    if (!pdfLink) {
      console.error("PDF link is not provided");
      return;
    }

    const encodedPdfLink = encodeURI(pdfLink);
    const filename = encodedPdfLink.split("/").pop() || "default-file.pdf";

    const link = document.createElement("a");
    link.href = encodedPdfLink;
    link.target = "_blank";
    link.download = filename;
    link.click();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="space-y-6 mt-24">
      {/* Header content - takes the main content width */}
      <div>
        <h3 className="text-black mb-4">{title}</h3>
        {intro && <P3 className="text-black-500 mb-2">{intro}</P3>}
        {description && <P3 className="text-black-500 mb-4">{description}</P3>}
      </div>

      {/* Download box or form - constrained to content width */}
      {!isModalOpen ? (
        <div className="p-6 shadow-sm rounded-md border border-black/20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4  hover:bg-gray-50 transition-colors duration-200">
          <div className="text-black-500 leading-relaxed flex-1">
            {audienceNote && <P3 className="mb-2">{audienceNote}</P3>}
            {encouragementNote && <P3 className="mt-1">{encouragementNote}</P3>}
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
            className="cursor-pointer flex-shrink-0">
            {buttonLabel}
          </Button>
        </div>
      ) : (
        <div className="p-6 shadow-sm rounded-md border border-black/20 bg-white">
          {/* Form Header */}
          <div className="flex justify-between items-center mb-6">
            <P2 className="text-gray-900">Download Casestudy</P2>
            <button
              onClick={closeModal}
              className="text-black-500 hover:text-black-900 text-3xl leading-none p-1"
              aria-label="Close form">
              ×
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Alex"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 bg-transparent text-gray-900"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alex@meta.com"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 bg-transparent text-gray-900"
                  required
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button type="submit" className="flex-1">
                Download Full Case Study
              </Button>
              <Button
                variant="secondary"
                type="button"
                onClick={closeModal}
                className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default DownloadSection;
