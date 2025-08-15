//components/webinar/RegisterForWebinar.jsx
import Button from "@/components/ui/Button";
import { P2, P3 } from "../CustomTags";

export default function RegisterForWebinar({ data }) {
  return (
    <section className="py-20">
      <div className=" mx-auto ">
        {/* Title and Description Above */}
        <div className=" mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h3>
          <P2 className="text-gray-600 text-lg">{data.description}</P2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-between space-y-8">
            {/* Features List */}
            <div className="space-y-6">
              {data.features.map((feature, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <P3 className="text-gray-600">{feature.description}</P3>
                </div>
              ))}
            </div>

            {/* Register for Free Box */}
            <div className="bg-gradient-to-br from-purple-200 via-purple-300 to-pink-200 p-8 rounded-3xl">
              <div className="text-center">
                <h5 className=" font-semibold text-black-950 mb-4">
                  REGISTER FOR FREE
                </h5>
                <P3 className="text-gray-700 text-lg leading-relaxed">
                  {data.registerBox.subTitle}
                </P3>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="pl-12 flex flex-col">
            <form className="space-y-6 flex-grow flex flex-col">
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Alex"
                  className="w-full px-0 py-3 border-0 border-b-2 border-black-500 focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  placeholder="Meta"
                  className="w-full px-0 py-3 border-0 border-b-2 border-black-500 focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="alex@meta.com"
                  className="w-full px-0 py-3 border-0 border-b-2 border-black-500 focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="flex-grow">
                <label className="block text-gray-900 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+91 01234 45678"
                  className="w-full px-0 py-3 border-0 border-b-2 border-black-500 focus:border-purple-500 focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-full text-lg font-medium mt-auto">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
