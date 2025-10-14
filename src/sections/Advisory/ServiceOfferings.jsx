// Updated ServiceOfferings.jsx
import CarouselContainer from "@/components/animations/Carousal";
import { RevealWrapper } from "@/components/animations/RevealWrapper";
import { P2 } from "@/components/CustomTags";
import { ServiceCard } from "@/components/ui/advisory";
import { cn } from "@/lib/utils";

export default function ServiceOfferings({
  heightDifference,
  className,
  bgImage,
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
    <section className="">
      <div className="max-w-[1580px] mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <RevealWrapper direction="up" duration={0.6} threshold={0.2}>
            <h3 className="mb-4">{title}</h3>
          </RevealWrapper>

          <RevealWrapper
            direction="up"
            duration={0.6}
            delay={0.1}
            threshold={0.2}>
            <P2 className="text-black mb-16">{subTitle || description}</P2>
          </RevealWrapper>

          {tag && (
            <RevealWrapper
              direction="up"
              duration={0.5}
              delay={0.15}
              threshold={0.2}>
              <h4>{tag}</h4>
            </RevealWrapper>
          )}
        </div>

        {/* Desktop Grid/Flex Layout */}
        <div
          className={cn(
            heightDifference
              ? "hidden lg:flex flex-wrap items-end w-full justify-center gap-6 lg:gap-8"
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
            <RevealWrapper
              key={index}
              direction={dirForIndex(index)}
              duration={0.5}
              delay={0.25 + index * 0.12} // Staggered cards
              distance={30}
              threshold={0.15}>
              <ServiceCard
                title={service.title}
                subTitle={service.subTitle}
                description={service.description}
                featured={service.featured}
                index={index}
                bgImage={bgImage}
                heightDifference={heightDifference}
                icon={`${icon}/${index + 1}.svg`}
              />
            </RevealWrapper>
          ))}
        </div>

        {/* Mobile Carousel */}
        <RevealWrapper
          direction="up"
          duration={0.7}
          delay={0.2}
          distance={30}
          threshold={0.2}
          className="lg:hidden">
          <CarouselContainer>
            {cards.map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                subTitle={service.subTitle}
                description={service.description}
                featured={service.featured}
                index={i}
                bgImage={bgImage}
                heightDifference={heightDifference}
                icon={`${icon}/${i + 1}.svg`}
              />
            ))}
          </CarouselContainer>
        </RevealWrapper>
      </div>
    </section>
  );
}
