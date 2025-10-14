"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { P3 } from "@/components/CustomTags";
import Image from "next/image";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

export default function CareerDetails({
  // header/meta
  title,
  category,
  location,
  workModel,
  employmentType,
  postedAgo = "",
  backHref = "/careers",

  // body
  summary,
  responsibilities = [],
  requirements = [],
  trainingProvided = [],
  preferred = [],
  techStack = [],

  // apply
  applyEmail = "recruitment@karanji.com",
  applySubject = `Application | ${title}`,
  applyCtaText = "Send us an Email",
}) {
  const mailto = `mailto:${applyEmail}?subject=${encodeURIComponent(
    applySubject
  )}`;

  return (
    <section className="w-full mx-auto p-4 lg:p-10">
      <RevealWrapper
        direction="up"
        duration={0.7}
        delay={0.2}
        distance={40}
        threshold={0.15}
      >
        <div
          className="p-10 rounded-[32px]"
          style={{
            background:
              "linear-gradient(93.27deg, rgba(158, 135, 255, 0.1) 8.1%, rgba(109, 191, 254, 0.1) 41.6%, rgba(255, 143, 143, 0.1) 95.33%, rgba(255, 255, 255, 0.1) 127.34%)",
            backdropFilter: "blur(28.100000381469727px)",
            boxShadow: "0px 4px 4px 0px rgba(204, 204, 204, 0.25)",
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-black/70 hover:text-black"
            >
              <Image
                height={20}
                width={20}
                src="/hero/carbon_return.svg"
                alt="Return"
                unoptimized
                className="w-5 h-5"
              />
              <span>Return to Careers</span>
            </Link>
            {postedAgo ? (
              <span className="text-black/60 text-sm">{postedAgo}</span>
            ) : null}
          </div>

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
          <div className="font-outfit font-light sm:text-xl flex flex-wrap gap-x-6 gap-y-2 text-black/80 border-b border-black/10 pb-6 mb-8">
            {location ? <span>📍 {location}</span> : null}
            {workModel ? <span>• {workModel}</span> : null}
            {category ? <span>• {category}</span> : null}
            {employmentType ? <span>• {employmentType}</span> : null}
          </div>

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
              <h4 className="text-2xl font-medium mb-3">
                Key Responsibilities
              </h4>
              <ul className="font-outfit font-light sm:text-xl list-disc pl-5 space-y-2 text-black/80">
                {responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Requirements */}
          {requirements?.length ? (
            <div className="mb-10">
              <h4 className="text-2xl font-medium mb-3">
                What We're Looking For
              </h4>
              <ul className="font-outfit font-light sm:text-xl list-disc pl-5 space-y-2 text-black/80">
                {requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Training Provided */}
          {trainingProvided?.length ? (
            <div className="mb-10">
              <h4 className="text-2xl font-medium mb-3">Training Provided</h4>
              <ul className="font-outfit font-light sm:text-xl list-disc pl-5 space-y-2 text-black/80">
                {trainingProvided.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Preferred Qualifications */}
          {preferred?.length ? (
            <div className="mb-10">
              <h4 className="text-2xl font-medium mb-3">
                Preferred Qualifications
              </h4>
              <ul className="font-outfit font-light sm:text-xl list-disc pl-5 space-y-2 text-black/80">
                {preferred.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Tech Stack */}
          {techStack?.length ? (
            <div className="mb-10">
              <h4 className="text-2xl font-medium mb-3">Tech Stack</h4>
              <ul className="font-outfit font-light sm:text-xl list-disc pl-5 space-y-2 text-black/80">
                {techStack.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
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
              <a href={mailto}>
                <Button>{applyCtaText}</Button>
              </a>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
