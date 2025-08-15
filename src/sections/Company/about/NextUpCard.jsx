"use client";
import React from "react";
import Link from "next/link";
import { P3, P4 } from "@/components/CustomTags";

const NextUpCard = ({ title, description, image, onClick, href }) => {
  const CardContent = () => (
    <div className="relative rounded-3xl overflow-hidden cursor-pointer transition-transform hover:scale-105 card-gradient-border card-shadow">
      {/* Content Container */}
      <div className="p-6 relative z-10 max-w-xs">
        {/* Header with Title and Arrow */}
        <div className="flex items-start justify-between mb-4">
          <h4 className="text-black pr-4">{title}</h4>
          <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
            <img
              src="/Icons/arrowupicon.svg"
              alt="Arrow"
              className="w-12 h-12"
            />
          </div>
        </div>

        {/* Description */}
        <P4 className="text-gray-600 text-sm leading-relaxed">{description}</P4>
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <style jsx>{`
        .card-gradient-border {
          border: 1px solid;
          border-image-source: linear-gradient(
            180deg,
            #ffffff 0%,
            #dde1ff 100%
          );
          border-image-slice: 1;
        }

        .card-shadow {
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        /* Alternative approach for gradient border that works better in browsers */
        .card-gradient-border {
          background: linear-gradient(180deg, #ffffff 0%, #dde1ff 100%);
          background-clip: border-box;
          border: 1px solid transparent;
          position: relative;
        }

        .card-gradient-border::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(180deg, #ffffff 0%, #dde1ff 100%);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
        }
      `}</style>
    </div>
  );

  // If href is provided, wrap with Link, otherwise use onClick
  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return (
    <div onClick={onClick}>
      <CardContent />
    </div>
  );
};

export default NextUpCard;
