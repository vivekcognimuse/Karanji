//components/webinar/WebinarAgenda.jsx
import { P2, P3, P4 } from "@/components/CustomTags";

export default function WebinarAgenda({ agenda }) {
  return (
    <section className="py-16 px-6 ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {agenda.title}
          </h3>
          <P2 className="text-lg  mx-auto">{agenda.subtitle}</P2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Section */}
          <div className="lg:col-span-2">
            <div className="space-y-0">
              {agenda.sessions.map((session, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    {/* Clock Icon Circle */}
                    <div className="w-12 h-12 bg-white border-2 border-purple-200 rounded-full flex items-center justify-center z-10 shadow-sm">
                      <img
                        src="/Icons/clock.svg"
                        alt="Clock"
                        className="w-5 h-5 text-purple-600"
                      />
                    </div>

                    {/* Connecting Line */}
                    {index < agenda.sessions.length - 1 && (
                      <div className="w-0.5 h-24 bg-purple-200 -mt-1"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    {/* Time and Tag */}
                    <div className="flex flex-col gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-black-800 text-lg font-normal rounded-full w-fit">
                        {session.tag}
                      </span>
                      <span className="text-lg text-black-500 font-outfit">
                        {session.time}
                      </span>
                    </div>

                    {/* Title */}
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">
                      {session.title}
                    </h5>

                    {/* Description */}
                    <P3 className="text-gray-600 mb-3 leading-relaxed">
                      {session.description}
                    </P3>

                    {/* Speaker */}
                    <p className="text-lg text-black font-outfit">
                      <span className="font-medium">Speaker:</span>{" "}
                      {session.speaker}
                    </p>
                    {/* Divider */}
                    <hr className="my-4 border-black-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-8 lg:self-start min-w-sm">
            <div className="bg-gradient-to-br from-[#BAABFC] to-[#F9DCDC] rounded-2xl p-6 border border-purple-200">
              {/* Header */}
              <h5 className="text-center text-xl font-semibold text-gray-900 mb-2">
                What You'll Take Away
              </h5>
              <p className="text-center text-lg text-gray-600 mb-6">
                Exclusive resources & insights
              </p>

              {/* Takeaways List */}
              <div className="space-y-4 mb-8">
                {agenda.takeaways.slice(0, 4).map((takeaway, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src="/Icons/Check box.svg"
                        alt="Check"
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="flex-1">
                      <P3>{takeaway.split(" – ")[0]}</P3>
                      {takeaway.split(" – ")[1] && (
                        <div className="text-lg text-black-500 mt-1">
                          {takeaway.split(" – ")[1]}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificate Section */}
              <div className="pt-6 border-t border-purple-200">
                <div className="bg-white rounded-xl p-6 text-center border border-purple-100 shadow-sm">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/Icons/ph_certificate-light.svg"
                      alt="Certificate"
                      className="w-20 h-20"
                    />
                  </div>
                  <P3 className=" mb-2">Certificate of completion</P3>
                  <P3 className="">
                    30-day access to exclusive resource library
                  </P3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
