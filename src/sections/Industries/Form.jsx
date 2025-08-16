import React, { useState } from "react";
import { X, Mail, User, MessageCircle } from "lucide-react";

const SubmitForm = ({
  heading = "To Know More",
  description = "For industry-specific use cases, please fill out the form below",
  btnLabel = "Submit",
  responseHeading = "Thank you for your interest.",
  responseDescription = "Our team will review your message and respond within 48 hours.",
  isOpen = true,
  onClose = () => {},
  onSubmit = (data) => console.log(data),
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    onSubmit(formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        className="relative w-full max-w-md bg-[url('/page/form.svg')] bg-cover bg-right bg-no-repeat rounded-[32px] p-8 sm:p-10 border border-gray-200 shadow-2xl"
        style={{ width: "544px", maxWidth: "90vw", minHeight: "749px" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          /* Form Content */
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
                {heading}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium text-sm">
                  Name*
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Alex"
                    className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:border-gray-600 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium text-sm">
                  Email*
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="alex@meta.com"
                    className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:border-gray-600 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium text-sm">
                  How can we help you?*
                </label>
                <div className="relative">
                  <MessageCircle
                    className="absolute left-3 top-4 text-gray-400"
                    size={18}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Your query, interest, or discussion point"
                    className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:border-gray-600 focus:outline-none transition-colors text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="flex items-center space-x-3 py-4">
                <div className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                </div>
                <span className="text-sm text-gray-600">I'm not a robot</span>
                <div className="ml-auto">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">re</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
              >
                {isSubmitting ? "Submitting..." : btnLabel}
              </button>
            </div>
          </div>
        ) : (
          /* Success Message */
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
              {responseHeading}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base max-w-xs leading-relaxed">
              {responseDescription}
            </p>
            <button
              onClick={onClose}
              className="mt-8 bg-gray-900 text-white py-3 px-8 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SubmitForm;
