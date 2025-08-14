import { P3 } from "@/components/CustomTags";
import Image from "next/image";
import React from "react";

const Deliverables = ({ data }) => {
  const { heroImage, features } = data;

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Hero Image */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-700 to-red-500">
          <Image
            src={heroImage}
            alt="Student learning with laptop"
            className="w-full h-full object-cover"
            width={800}
            height={800}
          />
        </div>

        {/* Right Side - Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-10 h-10 object-contain"
                  width={40}
                  height={40}
                />
              </div>

              {/* Title */}
              <h5 className="mb-2">{feature.title}</h5>

              {/* Description */}
              <P3 className="text-black-500">{feature.description}</P3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
