"use client";
import Button from "@/components/ui/Button";
import { P2, P3 } from "../CustomTags";
import SectionReveal from "@/components/animations/sectionReveal"; // Import SectionReveal

export default function RegisterForWebinar({ data }) {
  return (
    <section
      className="py-20"
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="mx-auto">
        {/* Title and Description with Reveal Animation */}
        <div className="mb-16" data-reveal data-reveal-dir="up">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h3>
          <P2 className="text-gray-600 text-lg">{data.description}</P2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column with Reveal Animation */}
          <div
            className="flex flex-col justify-between space-y-8"
            data-reveal
            data-reveal-dir="up">
            {/* Features List with Reveal Animation */}
            <div className="space-y-6">
              {data.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="space-y-2"
                  data-reveal
                  data-reveal-dir="up">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <P3 className="text-gray-600">{feature.description}</P3>
                </div>
              ))}
            </div>

            {/* Register for Free Box with Reveal Animation */}
            <div
              className="bg-gradient-to-br from-purple-200 via-purple-300 to-pink-200 p-8 rounded-3xl"
              data-reveal
              data-reveal-dir="up">
              <div className="text-center">
                <h5 className="text-black-950 mb-4">REGISTER FOR FREE</h5>
                <P3 className="text-black-700 text-lg ">
                  Transform Your Workforce with Karanji’s Virtual Engine
                  Workshop Today
                </P3>
              </div>
            </div>
          </div>

          {/* Right Column - Form with Reveal Animation */}
          <div className="pl-12 flex flex-col" data-reveal data-reveal-dir="up">
            <form className="space-y-6 flex-grow flex flex-col">
              <div data-reveal data-reveal-dir="up">
                <label className="block text-gray-900 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Alex"
                  className="w-full px-0 py-3 border-0 border-b-2 border-black-500 focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div data-reveal data-reveal-dir="up">
                <label className="block text-gray-900 font-medium mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  placeholder="Meta"
                  className="w-full px-0 py-3 border-0 border-b-2 border-black-500 focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div data-reveal data-reveal-dir="up">
                <label className="block text-gray-900 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="alex@meta.com"
                  className="w-full px-0 py-3 border-0 border-b-2 border-black-500 focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="flex-grow" data-reveal data-reveal-dir="up">
                <label className="block text-gray-900 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+91 01234 45678"
                  className="w-full px-0 py-3 border-0 border-b-2 border-black-500 focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <Button type="submit" className="">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Include SectionReveal to trigger the animations */}
      <SectionReveal />
    </section>
  );
}
