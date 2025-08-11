// components/caseStudy/CaseStudySidebarMeta.jsx
"use client";
import React from "react";
import { P3 } from "../CustomTags";

const CaseStudySidebarMeta = ({ domain, targetAudience }) => {
  // Don't render if no data
  if (!domain && (!targetAudience || targetAudience.length === 0)) {
    return null;
  }

  return (
    <div className="mt-8 space-y-6 ml-2">
      {/* Domain Section */}
      {domain && (
        <div>
          <P3 className="text-black-950  mb-3">Domain</P3>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-black-100 px-3 py-1.5 rounded-full text-black-600 font-medium">
              {domain}
            </span>
          </div>
        </div>
      )}

      {/* Target Audience Section */}
      {targetAudience && targetAudience.length > 0 && (
        <div>
          <P3 className="text-sm font-medium text-black-950 mb-3">
            Target Audience
          </P3>
          <div className="flex flex-wrap gap-2">
            {targetAudience.map((aud, idx) => (
              <span
                key={idx}
                className="text-xs bg-black-100 px-3 py-1.5 rounded-full text-black-600 font-medium"
              >
                {aud}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudySidebarMeta;
