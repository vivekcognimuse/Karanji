import SectionReveal from "@/components/animations/sectionReveal";
import { P3 } from "@/components/CustomTags";
import Image from "next/image";

export default function Results({ data = {} }) {
  const {
    title = "The Result",
    subTitle = "Better learning outcomes & professional growth for everyone involved.",
    adaptiveContent = "Adaptive Content",
    personalizedLearning = "Personalized Learning",
    proactiveSupport = "Proactive Support",
  } = data;

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
      className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1580px] space-y-16 mx-auto">
        {/* Header */}
        <div
          className="opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          <h4 className="mb-4">{title}</h4>
          <P3 className="text-sm text-gray-600">{subTitle}</P3>
        </div>

        {/* Image */}
        <div
          className="flex-center opacity-0 will-change-transform"
          data-reveal
          data-reveal-dir="up">
          <Image
            src="/digital-learning/analytics/theResult.svg"
            alt="Descriptive Alt Text"
            width={1360}
            height={317}
            className="object-contain w-full lg:max-w-lg h-auto"
          />
        </div>
      </div>
      <SectionReveal />
    </section>
  );
}
