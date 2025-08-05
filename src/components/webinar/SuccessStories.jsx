import { P2 } from "../CustomTags";

export default function SuccessStories({ stories }) {
  return (
    <section className="py-20">
      <h3>Success Stories from Previous Webinars</h3>
      <P2 className="p3 mb-10 mx-auto">
        Hear from businesses that have already experienced the benefits of
        Karanji's Virtual Engine Workshop Training.
      </P2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stories.map((story, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
            <p className="p4 mb-4">“{story.testimonial}”</p>
            <div className="flex items-center gap-4">
              <img
                src={story.image}
                alt={story.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="p5 font-semibold">{story.author}</p>
                <p className="p5 text-sm">{story.companyFull}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
