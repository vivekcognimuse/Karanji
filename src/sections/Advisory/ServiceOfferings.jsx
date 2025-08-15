import CarouselContainer from "@/components/animations/Carousal";
import SectionReveal from "@/components/animations/sectionReveal";
import { P2 } from "@/components/CustomTags";
import { ServiceCard } from "@/components/ui/advisory";
import { cn } from "@/lib/utils";

export default function ServiceOfferings({
  heightDifference,
  className,
  data,
  icon,
}) {
  const { title, description, cards, tag, subTitle = [] } = data || {};

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
      <div className="max-w-[1580px] mx-auto">
        <div className="mb-8">
          <h3
            className=" mb-4 opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
            {title}
          </h3>

          <P2
            className=" text-black mb-16  opacity-0 will-change-transform"
            data-reveal
            data-reveal-dir="up">
            {subTitle || description}
          </P2>
          {tag && <h4>{tag}</h4>}
        </div>

        <div
          className={cn(
            heightDifference
              ? "hidden lg:flex flex-wrap w-full justify-center gap-6 lg:gap-8" // No items-end, use justify-center for proper horizontal centering
              : `lg:grid grid-cols-1 justify-center gap-6 ${
                  cards.length === 3
                    ? "lg:grid-cols-3"
                    : cards.length === 4
                    ? "lg:grid-cols-4"
                    : "lg:grid-cols-5"
                } lg:gap-8 hidden`,
            className
          )}>
          {cards.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              subTitle={service.subTitle}
              description={service.description}
              featured={service.featured}
              index={index}
              heightDifference={heightDifference}
              icon={`${icon}/${index + 1}.svg`}
              // reveal
              data-reveal
              data-reveal-dir={dirForIndex(index)}
              className="opacity-0 will-change-transform"
            />
          ))}
        </div>
        <div className="lg:hidden">
          <CarouselContainer>
            {cards.map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                subTitle={service.subTitle}
                description={service.description}
                featured={service.featured}
                index={i}
                heightDifference={heightDifference}
                icon={`${icon}/${i + 1}.svg`}
                // reveal
                data-reveal
                data-reveal-dir={dirForIndex(i)}
                className="opacity-0 will-change-transform"
              />
            ))}
          </CarouselContainer>
        </div>
      </div>

      {/* run the animation for this section only */}
      <SectionReveal />
    </section>
  );
}
