// app/case-studies/page.jsx
import React from "react";
import { notFound } from "next/navigation";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import Upcoming from "@/components/blog/Upcoming";
import { fetchFromStrapi } from "@/lib/strapi";
import { getMediaUrl } from "@/utils/ish";

export const metadata = {
  title:
    "Karanji Case Studies: Real-World AI, VR & Digital Learning Success Stories",
  description:
    "Explore Karanji's case studies showcasing real-world success in AI, VR, and digital learning. See how our solutions drive measurable results across industries.",
};

// helpers
const asArr = (res) =>
  Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : [];

const text = (v, d = "") => (typeof v === "string" ? v : d);

const normalizeCard = ({
  type,
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

async function fetchCaseStudies() {
  return fetchFromStrapi(
    "case-studies",
    { populate: "*", pagination: { pageSize: 100 }, sort: "createdAt:desc" },
    STRAPI
  );
}

async function fetchBlogs() {
  return fetchFromStrapi(
    "blogs",
    { populate: "*", pagination: { pageSize: 100 }, sort: "createdAt:desc" },
    STRAPI
  );
}

async function fetchWebinars() {
  return fetchFromStrapi(
    "webinar",
    { populate: "*", pagination: { pageSize: 100 }, sort: "createdAt:desc" },
    STRAPI
  );
}

async function fetchAllResources() {
  const [csRes, blogRes, webinarRes] = await Promise.all([
    fetchCaseStudies(),
    fetchBlogs(),
    fetchWebinars(),
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
      domainField: "domain",
    })
  );

  const webinarCards = asArr(webinarRes).map((item) =>
    normalizeCard({
      type: "Webinar",
      item,
      basePath: "/webinars",
      defaultCTA: "Register for Webinar",
      domainField: "domain",
    })
  );

  return { caseStudies, blogCards, webinarCards };
}

export default async function CaseStudiesPage() {
  let data;
  try {
    data = await fetchAllResources();
  } catch (e) {
    console.error("Resources fetch failed:", e);
    notFound();
  }

  const { caseStudies, webinarCards } = data;

  // ✅ show first 6 in the grid
  const gridItems = caseStudies.slice(0, 6);

  // ✅ Upcoming shows webinars + remaining case studies (no duplicates)
  const upcomingItems = [...webinarCards, ...caseStudies.slice(6)];

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <div>
        <div className="space-y-4 pt-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Case Studies
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
