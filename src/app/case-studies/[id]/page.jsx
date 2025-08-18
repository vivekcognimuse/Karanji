// app/case-studies/[slug]/page.jsx
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/caseStudy/CaseStudyPage";
import { caseStudies } from "@/data/casestudies";
import { fetchFromStrapi } from "@/lib/strapi";
import { toPlainText, arrayifyList, splitCommaString } from "@/utils/ish";

// Build & serve ONLY the slugs we list here
export const dynamicParams = false;
export const revalidate = 60;

// ⬇️ Hardcode 1..10 so /case-studies/2 exists at build time
export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({ slug: String(i + 1) }));
}

// ---- normalize as you had it ----
const normalizeCaseStudy = (entry) => {
  const a = entry?.attributes ? entry.attributes : entry || {};
  const staticData = caseStudies.find((item) => item.slug === a.slug);
  if (!staticData)
    console.error(`No static data found for case study slug: ${a.slug}`);

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

export default async function CaseStudyDetail({ params }) {
  const slug = params.slug; // folder is [slug] → use slug

  // ✅ Strapi v4/v5 returns { data: [...] }, not a raw array
  const data = await fetchFromStrapi(
    `case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}`,
    { populate: "*" },
    "https://275cbcb80c6c.ngrok-free.app/api"
  );

  const entry = Array.isArray(data) ? data[0] : data?.data?.[0] ?? null; // <-- key fix

  if (!entry) return notFound(); // proper 404 (not a custom <p>)

  const normalized = normalizeCaseStudy(entry);

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <CaseStudyPage data={normalized} />
    </main>
  );
}
