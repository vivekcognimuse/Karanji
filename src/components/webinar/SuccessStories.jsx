import { P2, P3 } from "../CustomTags";

export default function SuccessStories({ stories }) {
  return (
    <section className="py-20">
      <div className="mx-auto">
        <h3 className="mb-4">Success Stories from Previous Webinars</h3>
        <P2 className="mb-16 mx-auto text-black">
          Hear from businesses that have already experienced the benefits of
          Karanji's Virtual Engine Workshop Training.
        </P2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left relative flex flex-col h-full"
            >
              {/* Company name tag */}
              <div className="inline-block px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 mb-4 w-fit">
                {story.company}
              </div>

              {/* Large gradient quotation mark */}
              <div className="mb-4">
                <img
                  src="/Icons/ph_quotes.svg"
                  alt="Quote"
                  className="w-12 h-10"
                />
              </div>

              {/* Testimonial text - this will grow to fill available space */}
              <P3 className="text-gray-700 leading-relaxed mb-6 text-base flex-grow">
                {story.testimonial}
              </P3>

              {/* Author section - this will be pushed to bottom */}
              <div className="flex items-center gap-4 mt-auto">
                <img
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
    </section>
  );
}
