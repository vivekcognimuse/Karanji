// app/casestudies/[id]/page.jsx
import React from "react";
import Head from "next/head";
import caseStudyData from "@/data/casestudies.json";
import CaseStudyPage from "@/components/caseStudy/CaseStudyPage";

const CaseStudyDetail = ({ params }) => {
  const data = caseStudyData.caseStudies.find(
    (cs) => cs.id === parseInt(params.id)
  );

  if (!data) return <p>Case study not found.</p>;

  return (
    <>
      <Head>
        <title>{data.title} | Karanji</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.tags.join(", ")} />
        <meta name="author" content="Karanji Team" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={`/${data.image}`} />
      </Head>

      <main className="w-full max-w-7xl mx-auto p-4 pr-20 lg:p-10 space-y-16 lg:space-y-32">
        <CaseStudyPage data={data} />
      </main>
    </>
  );
};

export default CaseStudyDetail;
