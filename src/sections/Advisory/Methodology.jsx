import { P2 } from "@/components/CustomTags";
import { MethodologyStep } from "@/components/ui/advisory";
import SectionReveal from "@/components/animations/sectionReveal";
import CarouselContainer from "@/components/animations/Carousal";

export default function Methodology({ column, data }) {
  const { title, subtitle, list } = data || {};

  return (
    <section
      className=" "
      data-reveal-amount="0.3"
      data-reveal-duration="0.5"
      data-reveal-stagger="0.12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="" data-reveal data-reveal-dir="up">
            {title}
          </h3>
          <P2 className="" data-reveal data-reveal-dir="up">
            {subtitle}
          </P2>
        </div>

        <div className=" hidden lg:block lg:px-32  -z-1 rounded-2xl  space-y-8">
          {list.map((item, index) => (
            <div key={index} data-reveal data-reveal-dir="up">
              <MethodologyStep
                column={column}
                step={index + 1}
                title={item.title}
                tags={item.tags}
                description={item.description}
              />
            </div>
          ))}
        </div>

        <div className="lg:hidden lg:px-32 -z-1 rounded-2xl  space-y-8">
          <CarouselContainer>
            {list.map((item, index) => (
              <div key={index} data-reveal data-reveal-dir="up">
                <MethodologyStep
                  column={column}
                  step={index + 1}
                  title={item.title}
                  tags={item.tags}
                  description={item.description}
                />
              </div>
            ))}
          </CarouselContainer>
        </div>
      </div>

      <SectionReveal />
    </section>
  );
}
