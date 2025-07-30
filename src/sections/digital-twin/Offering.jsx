import React from "react";
import Image from "next/image";
import { P2, P3 } from "@/components/CustomTags";

const DigitalTwinOfferings = ({
  title = "Our Digital Twin Offerings",
  subtitle = "From initial concept to real-world impact, we help you harness Digital Twin technology to drive efficiency, resilience, and innovation",
  services = [
    "Consulting & Strategy",
    "Design & Architecture",
    "Data Integration & IoT Connectivity",
    "Development & Implementation",
    "Deployment & Integration",
    "Monitoring & Maintenance",
    "Training & Change Management",
    "Continuous Improvement & Innovation",
  ],
  ctaText = "Get expert guidance tailored to your goals.",
  ctaButtonText = "Talk to our Digital Avatars",
  onCtaClick = () => {},
  featuredCards = [
    {
      icon: null,
      title: "Consulting & Strategy",
      description:
        "Foundations for impactful and scalable digital twin adoption",
    },
    {
      icon: null,
      title: "Design & Architecture",
      description:
        "Blueprints for intelligent, connected, scalable twin systems",
    },
    {
      icon: null,
      title: "Data Integration & IoT Connectivity",
      description:
        "Seamless integration for real-time digital twin connectivity",
    },
    {
      icon: null,
      title: "Development & Implementation",
      description:
        "Smart development, immersive interfaces for virtual precision",
    },
  ],
  showNavigation = true,
  onPrevClick = () => {},
  onNextClick = () => {},
  className = "",
}) => {
  return (
    <div className={` py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h3>
          <P2 className="text-lg text-gray-700 max-w-4xl">{subtitle}</P2>
        </div>

        {/* Services List and CTA */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Services Lists */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {services.map((service, index) => (
                <P3 key={index} className="flex items-start">
                  <span className="text-black-400 mr-3 mt-1">{index + 1}.</span>
                  <span className="text-black-400 ">{service}</span>
                </P3>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-blue-100 rounded-2xl p-8 text-center">
            <p className="text-gray-900 font-semibold text-lg mb-6">
              {ctaText}
            </p>
            <button
              onClick={onCtaClick}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
              {ctaButtonText}
            </button>
          </div>
        </div>

        {/* Featured Cards Section */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl flex flex-col p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                {card.icon && (
                  <div className="mb-6 w-16 h-16 flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                )}
                <h4 className=" mb-40">{card.title}</h4>
                <P3 className="text-gray-600 leading-relaxed">
                  {card.description}
                </P3>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {showNavigation && (
            <div className="flex justify-end mt-8 space-x-4">
              <button
                onClick={onPrevClick}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                aria-label="Previous">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={onNextClick}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                aria-label="Next">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalTwinOfferings;
