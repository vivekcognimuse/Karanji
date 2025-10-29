import { CaseStudyCarousel } from "@/components/ui/Service";

export default function SuccessStories() {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-medium text-black">
          Technology Implementation Success Stories
        </h2>
        <p className="text-xl text-black leading-9 tracking-wide">
          Real-world examples demonstrate the tangible benefits of our
          technology solutions. Explore case studies showcasing measurable
          improvements across industries.
        </p>
      </div>

      <CaseStudyCarousel />
    </section>
  );
}
