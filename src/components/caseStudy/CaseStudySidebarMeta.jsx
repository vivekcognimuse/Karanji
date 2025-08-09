// components/caseStudyCaseStudySidebarMeta.jsx
"use client";
import React from "react";

const CaseStudySidebarMeta = ({ domain, targetAudience }) => {
  return (
    <div className="mt-10 space-y-6">
      <div>
        <h4 className="font-semibold mb-2">Domain</h4>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm bg-gray-200 px-3 py-1 rounded-full text-gray-600">
            {domain}
          </span>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Target Audience</h4>
        <div className="flex flex-wrap gap-2">
          {targetAudience.map((aud, idx) => (
            <span
              key={idx}
              className="text-sm bg-gray-200 px-3 py-1 rounded-full text-gray-600"
            >
              {aud}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudySidebarMeta;
