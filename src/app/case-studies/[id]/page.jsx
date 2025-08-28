//app/case-studies/[id]/page.jsx

import CaseStudyPage from "@/components/caseStudy/CaseStudyPage";
import { caseStudies } from "@/data/casestudies";
import { fetchFromStrapi } from "@/lib/strapi";
import {
  getMediaUrl,
  toPlainText,
  arrayifyList,
  splitCommaString,
} from "@/utils/ish";

// Normalize Strapi v5 -> your JSON shape that CaseStudyPage expects
// Normalize Strapi v5 -> your JSON shape that CaseStudyPage expects
const normalizeCaseStudy = (entry) => {
  const a = entry?.attributes ? entry.attributes : entry || {};

  // Static JSON-based downloadCta mapping by Slug (keeping this for downloadCta only)
  const staticData = caseStudies.find((item) => item.slug === a.slug);

  if (!staticData) {
    console.error(`No static data found for case study slug: ${a.slug}`);
  }

  const downloadCta = staticData?.downloadCta || {};
  const pdfLink = staticData?.pdfLink || "";

  // Get image from Strapi first, fallback to static data, then default
  let image = "/CaseStudyImages/default-image.webp"; // default fallback

  // Check if Strapi has an image
  if (a.image) {
    // Handle different possible Strapi image structures
    const strapiImageUrl = getMediaUrl(a.image);
    if (strapiImageUrl) {
      image = strapiImageUrl;
    }
  } else if (staticData?.image) {
    // Fallback to static data image if no Strapi image
    image = staticData.image;
  }

  const sections = Array.isArray(a.sections)
    ? a.sections
        .map((b) => {
          const name = b.__component?.split(".")[1];
          if (!name) return null;

          if (name === "list")
            return {
              type: "list",
              items: arrayifyList(b.items ?? b.content ?? []),
            };

          const content = toPlainText(b.content);
          if (name === "quote") return { type: "quote", content };
          if (name === "subheading") return { type: "subheading", content };
          if (name === "subtext") return { type: "subtext", content };
          if (name === "text") return { type: "text", content };
          if (name === "heading") return { type: "heading", content };
          return null;
        })
        .filter(Boolean)
    : [];

  return {
    id: entry.id,
    title: a.title,
    description: toPlainText(a.description || ""),
    tags: splitCommaString(a.tags),
    domain: a.domain || "",
    targetAudience: splitCommaString(a.targetAudience),
    image, // Now using Strapi image with fallbacks
    sections,
    downloadCta,
    pdfLink,
  };
};

export const revalidate = 60;

export default async function CaseStudyDetail({ params }) {
  const p = await params; // Next.js 15
  const slug = p.slug ?? p.id;

  const data = await fetchFromStrapi(
    `case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}`,
    { populate: "*" },
    "https://calm-joy-61798b158b.strapiapp.com/api"
  );

  const entry = Array.isArray(data) ? data[0] : null;
  if (!entry) return <p>Case study not found.</p>;

  // Normalize the case study data
  const normalized = normalizeCaseStudy(entry);

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <CaseStudyPage data={normalized} />
    </main>
  );
}
