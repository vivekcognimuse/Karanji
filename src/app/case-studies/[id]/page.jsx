// app/case-studies/[id]/page.jsx
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import CaseStudyPage from "@/components/caseStudy/CaseStudyPage";
import { fetchFromStrapi } from "@/lib/strapi";
import {
  getMediaUrl,
  toPlainText,
  arrayifyList,
  splitCommaString,
} from "@/utils/ish";

export const dynamicParams = true;

const normalizeCaseStudy = (entry) => {
  const a = entry?.attributes ? entry.attributes : entry || {};

  const image = getMediaUrl(a.image) || "/CaseStudyImages/default-image.webp";

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

  const downloadCta = a.downloadCta
    ? {
        title: a.downloadCta.title ?? "",
        intro: toPlainText(a.downloadCta.intro ?? ""),
        audienceNote: a.downloadCta.audienceNote ?? "",
        buttonLabel: a.downloadCta.buttonLabel ?? "",
      }
    : {};

  const pdfLink = getMediaUrl(a.pdf) || "";

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
  const { isEnabled: isPreview } = await draftMode();

  // ✅ Next 15: params is a Promise — await it
  const p = await params;
  const slug = p?.id ?? p?.slug; // folder is [id], so id is expected
  if (!slug) notFound();

  let res;
  try {
    res = await fetchFromStrapi(
      `case-studies?filters[slug][$eq]=${encodeURIComponent(slug)}`,
      { populate: "*", preview: isPreview }
    );
  } catch (e) {
    console.error("Strapi fetch failed:", e);
    notFound();
  }

  const entry = Array.isArray(res)
    ? res[0]
    : Array.isArray(res?.data)
    ? res.data[0]
    : res?.data ?? res ?? null;

  if (!entry) notFound();

  const normalized = normalizeCaseStudy(entry);

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <CaseStudyPage data={normalized} />
    </main>
  );
}

export async function generateStaticParams() {
  try {
    const res = await fetchFromStrapi("case-studies", {
      fields: ["slug"],
      pagination: { pageSize: 100 },
    });
    const items = Array.isArray(res)
      ? res
      : Array.isArray(res?.data)
      ? res.data
      : [];
    // ✅ folder is [id] → the param key must be "id"
    return items
      .map((it) => {
        const a = it?.attributes ?? it ?? {};
        return a.slug ? { id: String(a.slug) } : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}
