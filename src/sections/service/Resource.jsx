// Updated Resource.jsx
"use client";
import { P2 } from "@/components/CustomTags";
import { ResourceCard } from "@/components/ui/Service";
import useCMSStore from "@/stores/cmsStore";

export default function ResourcesSection() {
  const { resources } = useCMSStore();

  return (
    <section className="space-y-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-4xl md:text-5xl font-medium text-black">
            Technology Resources & Insights
          </h3>
          <P2 className="text-xl text-black leading-9 tracking-wide">
            Stay ahead with our latest insights on technology implementation and
            digital innovation. Explore whitepapers, webinars, and thought
            leadership articles that delve into emerging trends and solutions.
          </P2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            type={resource.type}
            title={resource.title}
            action={resource.action}
            image={resource.image}
          />
        ))}
      </div>
    </section>
  );
}
