"use client";
import { P2, P3 } from "../CustomTags";
import Image from "next/image";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

export default function SuccessStories({ stories }) {
  return (
    <section
      className="py-20"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="mx-auto">
        {/* Section Title with Reveal Animation */}
        <h3 className="mb-4" data-reveal data-reveal-dir="up">
          Success Stories from Previous Webinars
        </h3>

        {/* Section Description with Reveal Animation */}
        <P2
          className="mb-16 mx-auto text-black"
          data-reveal
          data-reveal-dir="up">
          Hear from businesses that have already experienced the benefits of
          Karanji's Virtual Engine Workshop Training.
        </P2>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left relative flex flex-col h-full"
              data-reveal
              data-reveal-dir="up" // Reveal each success story card
            >
              {/* Company name tag */}
              <div className="inline-block px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 mb-4 w-fit">
                {story.company}
              </div>

              {/* Large gradient quotation mark */}
              <div className="mb-4">
                <Image
                  height={100}
                  width={100}
                  unoptimized
                  src="/Icons/ph_quotes.svg"
                  alt="Quote"
                  className="w-12 h-10"
                />
              </div>

              {/* Testimonial text */}
              <P3 className="text-gray-700 leading-relaxed mb-6 text-base flex-grow">
                {story.testimonial}
              </P3>

              {/* Author section */}
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  height={80}
                  width={80}
                  unoptimized
                  src={story.image}
                  alt={story.author}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <p className="font-outfit font-normal text-gray-900 text-xl">
                    {story.author}
                  </p>
                  <p className="font-outfit font-normal text-gray-900 text-xl">
                    {story.companyFull}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
}
