import CaseStudyPage from "@/components/caseStudy/CaseStudyPage";
import { normalizeCaseStudy } from "@/lib/normalize-casestudy";
import { fetchFromStrapi } from "@/lib/strapi";
import { notFound } from "next/navigation";

// ---- Config ----
const STRAPI_BASE_URL = "https://calm-joy-61798b158b.strapiapp.com/api";
const SLUG = "13";
export const dynamic = "force-static";

export default async function CaseStudyDetail() {
  let data;
  try {
    data = await fetchFromStrapi(
      `case-studies?filters[slug][$eq]=${encodeURIComponent(SLUG)}`,
      { populate: "*" },
      STRAPI_BASE_URL
    );
  } catch {
    // If Strapi is unreachable or errors out, show your not-found page.
    notFound();
  }

  // Handle both array and { data: [] } shapes
  const first = Array.isArray(data)
    ? data[0]
    : Array.isArray(data?.data)
    ? data.data[0]
    : data?.data ?? data ?? null;

  if (!first) notFound();

  const normalized = normalizeCaseStudy(first);

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <CaseStudyPage data={normalized} />
    </main>
  );
}
