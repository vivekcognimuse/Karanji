import React from "react";
import Head from "next/head";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import Upcoming from "@/components/blog/Upcoming"; // ✅ import here

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

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        <h2 className="text-3xl font-bold tracking-tight">What’s New?</h2>
        <ResourcesGrid />
        <Upcoming /> {/* ✅ injected here below the grid */}
      </main>
    </>
  );
};

export default ResourcesPage;
