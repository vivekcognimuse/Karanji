// app/case-studies/page.jsx
import { fetchFromStrapi } from "@/lib/strapi";
import { redirect } from "next/navigation";

export const revalidate = 60;

export default async function CaseStudiesIndex() {
  // Change to `publishedAt:asc` if you want the *earliest* instead of latest.
  const list = await fetchFromStrapi(
    "case-studies?sort=publishedAt:desc&pagination[pageSize]=1",
    { populate: "" },
    "https://3e80ef6ecbf1.ngrok-free.app/api"
  );

  const first = Array.isArray(list) ? list[0] : null;
  if (!first) {
    return <main className="p-10">No case studies published yet.</main>;
  }

  const slug = first.attributes?.slug || first.slug || String(first.id);
  redirect(`/case-studies/${encodeURIComponent(slug)}`);
}
