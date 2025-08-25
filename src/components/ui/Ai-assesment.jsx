"use client";
import { memo, useState } from "react";
import { P3 } from "../CustomTags";
import Button from "./Button";
import { cn } from "@/lib/utils";

// Placeholder components - replace with your actual components

export const AIAssessmentCard = memo(function AIAssessmentCard({
  data,
  className = "",
}) {
  const { title, subTitle, ctaLink, ctaText } = data || {};
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You could make an API call here or redirect to ctaLink with form data

    // Reset form and show success message or redirect
    alert("Assessment request submitted successfully!");
    setShowForm(false);
  };

  const handleBack = () => {
    setShowForm(false);
  };

  return (
    <div
      className={cn(
        "w-full bg-[url(/solutions/assessmentCard-bg.svg)]   flex items-center justify-center  bg-no-repeat bg-cover bg-top rounded-2xl border border-black/20 p-8 overflow-hidden",
        className
      )}>
      <div className="w-full max-w-md space-y-8">
        {!showForm ? (
          // Initial state - matching your original design
          <>
            <div className="text-center space-y-4">
              <h4 className="">{title || "AI Assessment"}</h4>
              {subTitle && <P3 className="text-black/80">{subTitle}</P3>}
            </div>
            <div className="flex justify-center">
              <Button onClick={handleButtonClick}>
                {ctaText || "Start Assessment"}
              </Button>
            </div>
          </>
        ) : (
          // Form state - similar to your image
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-black/20  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-black/20  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleBack}
                  className="flex-1 bg-gray-100 text-black hover:bg-gray-200">
                  Back
                </Button>

                <a target="_blank" rel="noreferrer" href={ctaLink}>
                  <Button className="flex-1">Submit Assessment</Button>{" "}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
