"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { P2, P3 } from "@/components/CustomTags";

export default function CareerDetails({
  // header/meta
  title,
  category, // e.g., "Learning & Content Development"
  location, // e.g., "Mangalore"
  workModel, // e.g., "Work From Office" | "Remote" | "Onsite"
  employmentType, // e.g., "Full-time"
  postedAgo = "", // e.g., "One Week Ago"
  backHref = "/careers",

  // body
  summary, // string
  responsibilities = [], // string[]
  requirements = [], // string[]

  // apply
  applyEmail = "recruitment@karanji.com",
  applySubject = `Application | ${title}`,
  applyCtaText = "Send us an Email",
}) {
  const mailto = `mailto:${applyEmail}?subject=${encodeURIComponent(
    applySubject
  )}`;

  return (
    <section className="w-full max-w-7xl mx-auto p-4 lg:p-10">
      <div className="gradient rounded-3xl backdrop-blur-[30px] shadow-elevated p-4 sm:p-6 lg:p-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-black/70 hover:text-black"
          >
            <span>←</span>
            <span>Return to Careers</span>
          </Link>
          {postedAgo ? (
            <span className="text-black/60 text-sm">{postedAgo}</span>
          ) : null}
        </div>

        {/* Category chip */}
        {category ? (
          <div className="inline-block px-3 py-1 bg-black/90 text-white text-sm rounded-full mb-4">
            {category}
          </div>
        ) : null}

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">
          {title}
        </h2>

        {/* Meta row */}
        <P3 className="flex flex-wrap gap-x-6 gap-y-2 text-black/80 border-b border-black/10 pb-6 mb-8">
          {location ? <div>📍 {location}</div> : null}
          {workModel ? <div>• {workModel}</div> : null}
          {category ? <div>• {category}</div> : null}
          {employmentType ? <div>• {employmentType}</div> : null}
        </P3>

        {/* Summary */}
        {summary ? (
          <div className="mb-10">
            <h4 className="text-2xl font-medium mb-3">Job Summary</h4>
            <P3 className="text-black/80">{summary}</P3>
          </div>
        ) : null}

        {/* Responsibilities */}
        {responsibilities?.length ? (
          <div className="mb-10">
            <h4 className="text-2xl font-medium mb-3">Key Responsibilities</h4>
            <P3 className="list-disc pl-5 space-y-2 text-black/80">
              {responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </P3>
          </div>
        ) : null}

        {/* Requirements */}
        {requirements?.length ? (
          <div className="mb-10">
            <h4 className="text-2xl font-medium mb-3">
              What We’re Looking For
            </h4>
            <P3 className="list-disc pl-5 space-y-2 text-black/80">
              {requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </P3>
          </div>
        ) : null}

        {/* Apply */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <P3 className="text-black/80">
            To apply for the role please send an email to{" "}
            <a href={mailto} className="underline">
              {applyEmail}
            </a>{" "}
            with subject line as "{applySubject}".
          </P3>
          <div>
            <Button asChild>
              <a href={mailto}>{applyCtaText}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
