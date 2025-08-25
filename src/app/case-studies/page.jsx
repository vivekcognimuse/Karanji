// app/case-studies/page.jsx
import { fetchFromStrapi } from "@/lib/strapi";
import { notFound, redirect } from "next/navigation";

export default async function CaseStudiesIndex() {
  // Change to `publishedAt:asc` if you want the *earliest* instead of latest.
  const list = await fetchFromStrapi(
    "case-studies?sort=publishedAt:desc&pagination[pageSize]=1",
    { populate: "*" },
    "https://calm-joy-61798b158b.strapiapp.com/api"
  );

  const first = Array.isArray(list) ? list[0] : null;
  if (!first) {
    return notFound();
  }

  const slug = first.attributes?.slug || first.slug || String(first.id);
  redirect(`/case-studies/${encodeURIComponent(slug)}`);
}
