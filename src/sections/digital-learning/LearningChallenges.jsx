import { P2, P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

export default function LearningChallenges({ data }) {
  const { title, subTitle, challenges = [], description = "" } = data;

  return (
    <section className="px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-[1580px] space-y-16 mx-auto">
        {/* Header */}
        <div className=" ">
          <h3 className=" mb-4">{title}</h3>
          <P2 className="">{subTitle}</P2>
        </div>

        {/* Challenge Cards */}
        <div className="flex flex-col md:flex-row   gap-8 lg:gap-12 ">
          {challenges.map((challenge, index) => (
            <div key={index} className="border-b border-black-200 pb-8">
              {/* Icon */}
              {challenge.icon && (
                <Image
                  src={challenge.icon}
                  alt={challenge.title}
                  width={64}
                  height={64}
                  className="size-10 mb-8"
                />
              )}

              {/* Title */}
              <h5 className="mb-4">{challenge.title}</h5>

              {/* Description */}
              <P3 className="text-black-500 ">{challenge.description}</P3>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        {description && (
          <p className="text-gray-600 text-lg leading-relaxed ">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
