import { P2, P4 } from "@/components/CustomTags";

export default function WebinarAgenda({ agenda }) {
  return (
    <section className="bg-white py-20">
      <div className="m mx-auto ">
        <h3>{agenda.title}</h3>
        <P2 className="mb-10">{agenda.subtitle}</P2>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Agenda timeline */}
          <div className="lg:col-span-2 space-y-6">
            {agenda.sessions.map((item, idx) => (
              <div
                key={idx}
                className="border-l-4 border-purple-300 pl-6 relative"
              >
                <span className="absolute left-[-12px] top-2 h-4 w-4 bg-purple-500 rounded-full"></span>
                <div className="text-sm text-gray-500 mb-1">
                  {item.tag} · {item.time}
                </div>
                <h5 className="font-semibold text-lg">{item.title}</h5>
                <P4 className="text-gray-700 mb-1">{item.description}</P4>
                <p className="text-sm font-medium text-gray-600">
                  Speaker: {item.speaker}
                </p>
              </div>
            ))}
          </div>

          {/* Takeaways */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h4 className="mb-4 font-semibold text-xl">
              What You'll Take Away
            </h4>
            <ul className="space-y-3 list-disc list-inside text-sm text-gray-800">
              {agenda.takeaways.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
