"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import BlogPage from "@/components/blog/BlogPage"; // adjust the path as per your project structure

const BlogInsights = () => {
  useEffect(() => {
    // scroll to top when mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Immersive Healthcare VR Training | Karanji Case Study</title>
        <meta
          name="description"
          content="Discover how immersive VR training bridged healthcare skill gaps across dialysis, lab, and patient care with Karanji's innovative solution."
        />
        <meta
          name="keywords"
          content="VR healthcare training, Karanji, medical skill gap, case study"
        />
        <meta name="author" content="Karanji Team" />
        <meta
          property="og:title"
          content="Immersive Healthcare Education with VR Training"
        />
        <meta
          property="og:description"
          content="How VR training helped a multinational company bridge skill gaps in healthcare."
        />
      </Head>

      <main className="w-full max-w-7xl mx-auto p-4 pr-20 lg:p-10 space-y-16 lg:space-y-32">
        <BlogPage />
      </main>
    </>
  );
};

export default BlogInsights;
