// Example usage:
// <LearningOutcomesCard data={{
//   title: "The Result",
//   subTitle: "Better learning outcomes & professional growth for everyone involved.",
//   adaptiveContent: "Adaptive Content",
//   personalizedLearning: "Personalized Learning",
//   proactiveSupport: "Proactive Support"
// }} />

import { P3 } from "@/components/CustomTags";
import Image from "next/image";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export default function Results({ data = {} }) {
  const {
    title = "The Result",
    subTitle = "Better learning outcomes & professional growth for everyone involved.",
    adaptiveContent = "Adaptive Content",
    personalizedLearning = "Personalized Learning",
    proactiveSupport = "Proactive Support",
  } = data;

  return (
    <div className=" ">
      {/* Header */}
      <div className="mb-8">
        <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
          <h4 className=" mb-4">{title}</h4>
        </RevealWrapper>
        
        <RevealWrapper
          direction="up"
          duration={0.6}
          delay={0.1}
          threshold={0.2}>
          <P3 className="text-sm text-gray-600">{subTitle}</P3>
        </RevealWrapper>
      </div>
      
      <RevealWrapper
        direction="up"
        duration={0.6}
        delay={0.2}
        threshold={0.2}
        className="flex-center">
        <Image
          src="/digital-learning/analytics/theResult.svg"
          alt="Descriptive Alt Text"
          width={1360}
          height={317}
          className="object-contain w-full lg:max-w-xl h-auto"
        />
      </RevealWrapper>

      {/* Content Layout */}
      {/* <div className="space-y-6">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700 text-center">
            {adaptiveContent}
          </span>{" "}
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
            <svg
              className="w-6 h-6 text-pink-500"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          </div>
        </div>

        <div className="flex justify-between items-center px-4">
         
          <div className="flex gap-4  items-center">
            <span className="text-xs text-gray-700 text-center">
              {personalizedLearning}
            </span>{" "}
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-2">
              <svg
                className="w-5 h-5 text-pink-500"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </div>
          </div>

       
          <div className="flex  gap-4 items-center">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-2">
              <svg
                className="w-5 h-5 text-pink-500"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17L7,12L8.41,10.59L12,14.17L15.59,10.59L17,12L12,17Z" />
              </svg>
            </div>
            <span className="text-xs text-gray-700 text-center">
              {proactiveSupport}
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
