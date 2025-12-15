// app/resources/page.jsx
import React from "react";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import Upcoming from "@/components/blog/Upcoming";
import { fetchFromStrapi } from "@/lib/strapi";
import { getMediaUrl } from "@/utils/ish";

export const metadata = {
  title:
    "Karanji Resources: Case Studies, Blogs, Webinars — AI, VR & Digital Learning",
  description:
    "Browse all Karanji resources: case studies, blogs, and webinars powered by Strapi. No filters — everything in one place.",
};

// --- helpers ---
// Handle both collectionType and singleType shapes
const asArr = (res) => {
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.data)) return res.data;
  // singleType: { data: { id, attributes } }
  if (res?.data && typeof res.data === "object") return [res.data];
  // already a single entry object? (id + attributes)
  if (res && typeof res === "object" && "id" in res && "attributes" in res)
    return [res];
  return [];
};

const text = (v, d = "") => (typeof v === "string" ? v : d);

// normalize each entry to the card shape
const normalizeCard = ({
  type, // "Case Study" | "Blog" | "Webinar"
  item,
  basePath,
  defaultCTA,
  titleField = "title",
  slugField = "slug",
  imageField = "image",
  domainField = "domain",
}) => {
  const a = item?.attributes ?? item ?? {};
  const title = text(a[titleField]);
  const slug = text(a[slugField]);
  const image =
    getMediaUrl(a[imageField]) || "/CaseStudyImages/default-image.webp";
  const domain = text(a[domainField]) || type;

  // SingleType webinar likely has no slug; link to basePath itself
  const link = slug ? `${basePath}/${encodeURIComponent(slug)}` : basePath;

  return {
    type,
    title,
    image,
    link,
    cta: defaultCTA,
    domain,
    _date: a.eventDate || a.publishedAt || a.updatedAt || a.createdAt || null,
  };
};

// --- fetchers ---
async function fetchCaseStudies(preview = false) {
  return fetchFromStrapi("case-studies", {
    populate: "*",
    pagination: { pageSize: 100 },
    sort: "createdAt:desc",
    preview,
  });
}

async function fetchBlogs(preview = false) {
  return fetchFromStrapi("blogs", {
    populate: "*",
    pagination: { pageSize: 100 },
    sort: "createdAt:desc",
    preview,
  });
}

async function fetchWebinars(preview = false) {
  // singleType: no pagination/sort
  return fetchFromStrapi("webinar", { preview });
}

async function fetchAllResources(preview = false) {
  const [csRes, blogRes, webinarRes] = await Promise.all([
    fetchCaseStudies(preview),
    fetchBlogs(preview),
    fetchWebinars(preview),
  ]);

  const caseStudies = asArr(csRes).map((item) =>
    normalizeCard({
      type: "Case Study",
      item,
      basePath: "/case-studies",
      defaultCTA: "View Case Study",
      domainField: "domain",
    })
  );

  const blogCards = asArr(blogRes).map((item) =>
    normalizeCard({
      type: "Blog",
      item,
      basePath: "/blog-insights",
      defaultCTA: "Read Blog",
      domainField: "domain", // change to "category" if that’s what your blog uses
      imageField: "image",
    })
  );

  // Treat singleType as an array of 1 (asArr handles that now)
  const webinarCards = asArr(webinarRes).map((item) =>
    normalizeCard({
      type: "Webinar",
      item,
      basePath: "/webinar", // ← make sure you actually have a /webinar page
      defaultCTA: "Register for Webinar",
      domainField: "domain",
    })
  );

  // newest first (eventDate > publishedAt > updatedAt > createdAt)
  const all = [...caseStudies, ...blogCards, ...webinarCards].sort((a, b) => {
    const da = a._date ? new Date(a._date).getTime() : 0;
    const db = b._date ? new Date(b._date).getTime() : 0;
    return db - da;
  });

  return { all };
}

export default async function ResourcesPage() {
  const { isEnabled: isPreview } = await draftMode();

  let data;
  try {
    data = await fetchAllResources(isPreview);
  } catch (e) {
    console.error("Resources fetch failed:", e);
    notFound();
  }

  const { all } = data;

  const gridItems = all.slice(0, 6);
  const upcomingItems = all.slice(6); // show ALL remaining

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <div>
        <div className="space-y-4 pt-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What's New?
          </h2>
        </div>

        <section className="space-y-6 pb-16">
          <ResourcesGrid resources={gridItems} />
        </section>

        {upcomingItems.length > 0 && (
          <section className="space-y-6">
            <Upcoming items={upcomingItems} />
          </section>
        )}
      </div>
    </main>
  );
}
