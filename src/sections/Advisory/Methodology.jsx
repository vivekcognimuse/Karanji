import { MethodologyStep } from "@/components/ui/advisory";
import { methodologyData } from "@/constant/advisory";

export default function Methodology() {
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Albert_Sans'] text-black mb-4">
            Our Proven Methodology
          </h2>
          <p className="text-lg md:text-xl font-normal font-['Outfit'] text-black leading-relaxed tracking-wide">
            We combine cutting-edge tech with business acumen to build
            AI-powered business solutions that perform.
          </p>
        </div>

        <div className="bg-white/50  -z-1 rounded-2xl  space-y-8">
          {methodologyData.map((item, index) => (
            <MethodologyStep
              key={index}
              step={item.step}
              title={item.title}
              description={item.description}
              isLast={index === methodologyData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
