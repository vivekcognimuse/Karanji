import { P2 } from "../CustomTags";

export default function MeetSpeakers({ speakers }) {
  return (
    <section className=" py-20 bg-white ">
      <h3>Meet Your Expert Speakers</h3>
      <P2 className=" mx-auto mb-10">
        Learn from industry-leading experts at Karanji, pioneers in virtual
        automotive engineering training.
      </P2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {speakers.map((speaker, index) => (
          <div key={index} className="bg-[#f4f3ff] p-6 rounded-lg">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="mx-auto w-28 h-28 object-cover rounded-full mb-4"
            />
            <h4>{speaker.name}</h4>
            <p className="p4">{speaker.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
