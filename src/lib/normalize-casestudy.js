import { caseStudies } from "@/data/casestudies";
import { toPlainText, arrayifyList, splitCommaString } from "@/utils/ish";
export const normalizeCaseStudy = (entry) => {
  const a = entry?.attributes ? entry.attributes : entry || {};

  // Static JSON-based downloadCta and image mapping by Slug
  const staticData = caseStudies.find((item) => item.slug === a.slug);
  if (!staticData) {
    console.error(`No static data found for case study slug: ${a.slug}`);
  }

  const downloadCta = staticData?.downloadCta || {};
  const pdfLink = staticData?.pdfLink || "";
  const image =
    staticData?.image || a.image || "/CaseStudyImages/default-image.webp";

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
    image,
    sections,
    downloadCta,
    pdfLink,
  };
};
