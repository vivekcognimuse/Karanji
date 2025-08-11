import SectionReveal from "@/components/animations/sectionReveal";
import { ServiceCard } from "@/components/ui/advisory";
import { cn } from "@/lib/utils";

export default function ServiceOfferings({
  heightDifference,
  className,
  data,
}) {
  const { title, description, cards = [] } = data || {};

  // columns at lg: 3 when heightDifference, else 4
  const colsLg = heightDifference ? 3 : 4;
  const dirForIndex = (i) => {
    const pos = i % colsLg;
    if (pos === 0) return "left";
    if (pos === colsLg - 1) return "right";
    return "up";
  };

  return (
    <section
      data-reveal-amount="0.25"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12"
      className=" ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Albert_Sans'] text-black mb-4 opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
            {title}
          </h2>

          <p
            className="text-lg md:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide max-w-4xl opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
            {description}
          </p>
        </div>

        <div
          className={cn(
            `grid grid-cols-1 md:grid-cols-2 gap-6 ${
              heightDifference ? "lg:grid-cols-3" : "lg:grid-cols-4"
            } lg:gap-8`,
            className
          )}>
          {cards.map((service, index) => (
            <div key={index} className="flex flex-col justify-end h-full">
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                featured={service.featured}
                index={index}
                heightDifference={heightDifference}
                icon={service.icon}
                // reveal
                data-reveal
                data-reveal-dir={dirForIndex(index)}
                className="opacity-0 will-change-transform"
              />
            </div>
          ))}
        </div>
      </div>

      {/* run the animation for this section only */}
      <SectionReveal />
    </section>
  );
}
