// app/company/careers/[slug]/page.jsx
import CareerDetails from "@/sections/Company/careers/CareerDetails";
import {
  getCareerDetailsBySlug,
  getAllCareerSlugs,
} from "@/data/careerDetailsData";
import { notFound } from "next/navigation";

export default function CareerDetailsPage({ params }) {
  const { slug } = params;
  const job = getCareerDetailsBySlug(slug);
  if (!job) return notFound();

  return (
    <CareerDetails
      title={job.title}
      category={job.category}
      location={job.location}
      workModel={job.workModel}
      employmentType={job.employmentType}
      postedAgo={job.postedAgo}
      summary={job.summary}
      responsibilities={job.responsibilities}
      requirements={job.requirements}
      applyEmail="recruitment@karanji.com"
      // Optional: override subject line etc.
      // applySubject={`Application | ${job.title}`}
      backHref="/company/careers"
    />
  );
}

// (Optional) If you want SSG:
export async function generateStaticParams() {
  return getAllCareerSlugs();
}
