import { P2 } from "@/components/CustomTags";
import { MethodologyStep } from "@/components/ui/advisory";

export default function Methodology({ title, description, methodologyData }) {
  return (
    <section className=" ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="">{title}</h3>
          <P2 className="">{description}</P2>
        </div>

        <div className=" lg:px-40  -z-1 rounded-2xl  space-y-8">
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
