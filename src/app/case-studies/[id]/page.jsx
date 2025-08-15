// app/case-studies/[id]/page.jsx
import CaseStudyPage from "@/components/caseStudy/CaseStudyPage";
import { fetchFromStrapi } from "@/lib/strapi";
import {
  toPlainText,
  arrayifyList,
  splitCommaString,
  getMediaUrl,
} from "@/utils/ish";

// Normalize Strapi v5 -> your JSON shape that CaseStudyPage expects
const normalizeCaseStudy = (entry) => {
  const a = entry?.attributes ? entry.attributes : entry || {};

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

  const download = a.downloadCta || {};
  const downloadCta = {
    title: download.title || "Access VR Walkthrough Story",
    intro:
      download.intro ||
      "See how a leading manufacturer used VR to improve product demos, engage clients better, and make onboarding easier.",
    description: download.description || "",
    audienceNote:
      download.audienceNote ||
      "If you're in manufacturing or industrial training, this case study shows what’s possible with immersive technology.",
    encouragementNote:
      download.encouragementNote ||
      "Use it, learn from it, and start your own impact story",
    buttonLabel: download.buttonLabel || "Download Full Case Study",
  };

  return {
    id: entry.id,
    title: a.title,
    description: toPlainText(a.description || ""),
    tags: splitCommaString(a.tags),
    domain: a.domain || "",
    targetAudience: splitCommaString(a.targetAudience),
    image: getMediaUrl(a.image) || getMediaUrl("caseStudies/Casestudy 3.webp"),
    sections,
    downloadCta,
  };
};

export const revalidate = 60;

export default async function CaseStudyDetail({ params }) {
  const p = await params; // Next.js 15
  const slug = p.slug ?? p.id;

  const data = await fetchFromStrapi(
    `case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}`,
    { populate: "*" },
    "https://77586f016802.ngrok-free.app/api"
  );

  const entry = Array.isArray(data) ? data[0] : null;
  if (!entry) return <p>Case study not found.</p>;

  const normalized = normalizeCaseStudy(entry);

  return (
    <main className="w-full max-w-[1580px] mx-auto p-4 pr-20 lg:p-10 space-y-16 lg:space-y-32">
      <CaseStudyPage data={normalized} />
    </main>
  );
}
