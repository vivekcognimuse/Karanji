"use client";
import { P2, P3, P4 } from "@/components/CustomTags";
import Image from "next/image";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

export default function WebinarAgenda({ agenda }) {
  return (
    <section
      className="py-16 px-6"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
    >
      <div className="max-w-[1580px] mx-auto">
        {/* Header */}
        <div className="mb-12" data-reveal data-reveal-dir="up">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {agenda.title}
          </h3>
          <P2 className="text-lg mx-auto">{agenda.subTitle}</P2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline Section */}
          <div
            className="lg:col-span-2 relative"
            data-reveal
            data-reveal-dir="up"
          >
            {/* Continuous Timeline Line */}
            <div className="absolute left-1 top-6 bottom-0 w-0.5 bg-black"></div>

            <div className="space-y-12">
              {agenda.sessions.map((session, index) => (
                <div
                  key={index}
                  className="relative flex gap-6"
                  data-reveal
                  data-reveal-dir="up"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    {/* Black Dot */}
                    <div className="w-3 h-3 bg-black rounded-full flex-shrink-0 mt-1"></div>
                  </div>

                  {/* Clock Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-b from-[#FFCFCF] to-[#D3C9FF] rounded-xl flex items-center justify-center">
                      <Image
                        height={40}
                        width={40}
                        unoptimized
                        src="/Icons/Clock-1.svg"
                        alt="Clock"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Tag and Time */}
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-purple-100 text-black-900 text-sm font-medium rounded-full mb-2">
                        {session.tag}
                      </span>
                      <div className="text-gray-500 text-sm font-medium">
                        {session.time}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl text-gray-900 mb-3">
                      {session.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {session.description}
                    </p>

                    {/* Speaker */}
                    <p className="text-gray-900 font-medium">
                      <span className="font-semibold">Speaker:</span>{" "}
                      <span className="font-semibold">{session.speaker}</span>
                    </p>

                    {/* Horizontal Line */}
                    {index < agenda.sessions.length - 1 && (
                      <hr className="mt-6 border-gray-300" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div
            className="lg:sticky lg:top-8 lg:self-start"
            data-reveal
            data-reveal-dir="up"
          >
            <div className="bg-gradient-to-br from-[#F9DCDC] to-[#BAABFC] rounded-2xl p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <h5 className="text-xl font-semibold text-gray-900 mb-2">
                  What You'll Take Away
                </h5>
                <p className="text-gray-600">Exclusive resources & insights</p>
              </div>

              {/* Takeaways List */}
              <div className="space-y-4 mb-8">
                {agenda.takeaways.slice(0, 4).map((t, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                    data-reveal
                    data-reveal-dir="up"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Image
                        height={40}
                        width={40}
                        src="/Icons/Check box.svg"
                        alt="Check"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium text-sm leading-relaxed">
                        {t.title}
                      </p>
                      {t.description && (
                        <p className="text-gray-600 text-sm mt-1">
                          {t.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificate Section */}
              <div className="pt-6 border-t border-purple-200">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Image
                      height={40}
                      width={40}
                      src="/Icons/ph_certificate-light.svg"
                      alt="Certificate"
                      className="w-16 h-16"
                    />
                  </div>
                  <p className="text-gray-900 font-medium text-sm mb-2">
                    Certificate of completion
                  </p>
                  <p className="text-gray-600 text-sm">
                    30-day access to exclusive resource library
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
}
