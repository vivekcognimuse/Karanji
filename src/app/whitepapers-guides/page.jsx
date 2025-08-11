// app/whitepapers-guides/page.jsx - resources page
import React from "react";
import Head from "next/head";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import Upcoming from "@/components/blog/Upcoming";

const ResourcesPage = () => {
  return (
    <>
      <Head>
        <title>What's New | Karanji</title>
        <meta
          name="description"
          content="Explore the latest blogs, webinars, and case studies from Karanji on immersive learning and VR innovation."
        />
        <meta
          name="keywords"
          content="VR training, webinars, case studies, immersive learning, karanji resources"
        />
        <meta name="author" content="Karanji Team" />
        <meta property="og:title" content="What's New | Karanji" />
        <meta
          property="og:description"
          content="Latest updates including VR blogs, immersive webinars, and impactful case studies."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
          {/* Header Section */}
          <div className=" space-y-4 pt-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              What's New?
            </h2>
          </div>

          {/* Resources Grid */}
          <section className="space-y-6">
            <ResourcesGrid />
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
