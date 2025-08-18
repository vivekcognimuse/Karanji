import CaseStudyPage from "@/components/caseStudy/CaseStudyPage";
import { caseStudies } from "@/data/casestudies";
import { fetchFromStrapi } from "@/lib/strapi";
import { toPlainText, arrayifyList, splitCommaString } from "@/utils/ish";
import { notFound } from "next/navigation";

// Normalize Strapi v5 -> your JSON shape that CaseStudyPage expects
const normalizeCaseStudy = (entry) => {
  const a = entry?.attributes ? entry.attributes : entry || {};

  // Static JSON-based downloadCta and image mapping by Slug
  const staticData = caseStudies.find((item) => item.slug === a.slug); // Use slug to find matching data

  if (!staticData) {
    console.error(`No static data found for case study slug: ${a.slug}`);
  }

  const downloadCta = staticData?.downloadCta || {};

  // Ensure pdfLink is included here in the returned object
  const pdfLink = staticData?.pdfLink || ""; // Fallback to empty string if pdfLink is not found

  // If the image path is relative (like '/CaseStudyImages/1_3d_ai_advertisement.webp')
  // directly use it, as Next.js will serve it from the /public folder.
  const image =
    staticData?.image || a.image || "/CaseStudyImages/default-image.webp"; // fallback to a default image

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
    image, // Using image from static data or fallback
    sections,
    downloadCta, // Using downloadCta from static data
    pdfLink, // Make sure pdfLink is returned here
  };
};

export const revalidate = 60;

export default async function CaseStudyDetail({ params }) {
  const p = await params; // Next.js 15
  const slug = p.slug ?? p.id;
  console.log("slug:", slug);
  const data = await fetchFromStrapi(
    `case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}`,
    { populate: "*" },
    "https://275cbcb80c6c.ngrok-free.app/api"
  );

  const entry = Array.isArray(data) ? data[0] : null;
  if (!entry) notFound();

  // Normalize the case study data
  const normalized = normalizeCaseStudy(entry);

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <CaseStudyPage data={normalized} />
    </main>
  );
}
