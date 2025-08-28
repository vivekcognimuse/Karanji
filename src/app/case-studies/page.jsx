import React from "react";
import Head from "next/head";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import Upcoming from "@/components/blog/Upcoming";
import resourcesData from "@/data/resources.json"; // Import the static resources JSON
export const metadata = {
  title:
    "Karanji Case Studies: Real-World AI, VR & Digital Learning Success Stories",
  description:
    "Explore Karanji's case studies showcasing real-world success in AI, VR, and digital learning. See how our solutions drive measurable results across industries.",
};
const ResourcesPage = () => {
  // Filter the resources to only include Case Studies
  const filteredResources = resourcesData.filter(
    (resource) => resource.type === "Case Study"
  );

  return (
    <>
      <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
        <div>
          {/* Header Section */}
          <div className="space-y-4 pt-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              What's New?
            </h2>
          </div>

          {/* Resources Grid */}
          <section className="space-y-6 pb-16">
            <ResourcesGrid resources={filteredResources} />
          </section>

          {/* Upcoming Section */}
          <section className="space-y-6">
            <Upcoming />
          </section>
        </div>
      </main>
    </>
  );
};

export default ResourcesPage;
