import { P2 } from "@/components/CustomTags";
import { AIAssessmentCard, FeatureCard } from "@/components/ui/Service";

const features = [
  {
    title: "Outcome-Driven Methodology",
    description: "Focused on delivering clear, measurable results.",
    img: "/solutions/icons/outcome-driven.svg",
  },
  {
    title: "Integrated Capabilities",
    description: "Seamless synergy across AI, XR, and digital twins.",
    img: "/solutions/icons/integrated-capabilities.svg",
  },
  {
    title: "Expert Leadership",
    description: "Hands-on advisory and implementation from industry veterans",
    img: "/solutions/icons/expert-leadership.svg",
  },
  {
    title: "Scalable Solutions",
    description: "Tailored approaches that grow with your business.",
    img: "/solutions/icons/scalable-solutions.svg",
  },
];

export default function TechnologyAdvantage() {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <h3 className=" ">The Karanji Technology Advantage</h3>
        <P2 className="">
          Our approach combines strategic insight with hands-on implementation.
          We specialize in integrating artificial intelligence consulting,
          XR/VR/AR experiences, and digital twin technologies to help you
          optimize operations, improve efficiencies, accelerate digital
          transformation. Rooted in the evolution of AI and shaped by today's
          realities-from AI policy to limited memory AI-we bring future-ready
          solutions that align with your long-term vision.
        </P2>
      </div>

      <div className="flex gap-16">
        {/* Features Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* AI Assessment Card */}
        <AIAssessmentCard />
      </div>
    </section>
  );
}
