"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { P2, P3 } from "../CustomTags";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export default function RegisterForWebinar({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Reset form on successful submission
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
      });

      // You can add a success message here
      alert("Registration successful!");
    } catch (error) {
      console.error("Submission error:", error);
      // Handle submission error
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="mx-auto">
        {/* Title and Description with Reveal Animation */}
        <RevealWrapper direction="up" duration={0.5} threshold={0.3}>
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              {data.title}
            </h3>
            <P2 className="text-gray-600 text-lg">{data.description}</P2>
          </div>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column with Reveal Animation */}
          <div className="flex flex-col justify-between space-y-8">
            {/* Features List with Reveal Animation */}
            <div className="space-y-6">
              {data.features.map((feature, idx) => (
                <RevealWrapper
                  key={idx}
                  direction="up"
                  duration={0.5}
                  delay={0.2 + idx * 0.12}
                  distance={30}
                  threshold={0.3}
                >
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <P3 className="text-gray-600">{feature.description}</P3>
                  </div>
                </RevealWrapper>
              ))}
            </div>

            {/* Register for Free Box with Reveal Animation */}
            <RevealWrapper
              direction="up"
              duration={0.5}
              delay={0.2 + data.features.length * 0.12}
              distance={30}
              threshold={0.3}
            >
              <div className="bg-gradient-to-br from-purple-200 via-purple-300 to-pink-200 p-8 rounded-3xl">
                <div className="text-center">
                  <h5 className="text-black-950 mb-4">REGISTER FOR FREE</h5>
                  <P3 className="text-black-700 text-lg ">
                    Transform Your Workforce with Karanji's Virtual Engine
                    Workshop Today
                  </P3>
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Right Column - Form with Reveal Animation */}
          <RevealWrapper
            direction="up"
            duration={0.5}
            delay={0.3}
            distance={30}
            threshold={0.3}
          >
            <div className="pl-12 flex flex-col">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex-grow flex flex-col"
              >
                <div>
                  <label className="block text-gray-900 font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Alex"
                    className={`w-full px-0 py-3 border-0 border-b-2 ${
                      errors.name ? "border-red-500" : "border-black-500"
                    } focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Meta"
                    className={`w-full px-0 py-3 border-0 border-b-2 ${
                      errors.company ? "border-red-500" : "border-black-500"
                    } focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400`}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-900 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@meta.com"
                    className={`w-full px-0 py-3 border-0 border-b-2 ${
                      errors.email ? "border-red-500" : "border-black-500"
                    } focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="flex-grow">
                  <label className="block text-gray-900 font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 01234 45678"
                    className={`w-full px-0 py-3 border-0 border-b-2 ${
                      errors.phone ? "border-red-500" : "border-black-500"
                    } focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <Button type="submit" className="" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
