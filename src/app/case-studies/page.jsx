//app/case-studies/page.jsx
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

const STRAPI = "https://calm-joy-61798b158b.strapiapp.com/api";

// tiny helpers
const asArr = (res) =>
  Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : [];

const text = (v, d = "") => (typeof v === "string" ? v : d);

// normalize each entry to the card shape your grid expects
const normalizeCard = ({
  type,
  item,
  basePath,
  defaultCTA,
  titleField = "title",
  slugField = "slug",
  imageField = "image",
  domainField = "domain", // change to "category" for blogs if needed
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

// --- fetchers (params object avoids fragile query strings) ---
async function fetchCaseStudies() {
  return fetchFromStrapi(
    "case-studies",
    {
      populate: "*",
      pagination: { pageSize: 100 },
      sort: "createdAt:desc", // <- safer than publishedAt
    },
    STRAPI
  );
}

async function fetchBlogs() {
  return fetchFromStrapi(
    "blogs",
    {
      populate: "*",
      pagination: { pageSize: 100 },
      sort: "createdAt:desc",
    },
    STRAPI
  );
}

async function fetchWebinars() {
  return fetchFromStrapi(
    "webinar", // <- singular per your API
    {
      populate: "*",
      pagination: { pageSize: 100 },
      sort: "createdAt:desc", // if you have eventDate, you can switch to "eventDate:desc"
    },
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
      basePath: "/blog",
      defaultCTA: "Read Blog",
      // if blogs use "category", change:
      domainField: "domain", // or "category"
    })
  );

  const webinarCards = asArr(webinarRes).map((item) =>
    normalizeCard({
      type: "Webinar",
      item,
      basePath: "/webinars", // your listing route; detail can be /webinars/[slug]
      defaultCTA: "Register for Webinar",
      domainField: "domain",
    })
  );

  return { caseStudies, blogCards, webinarCards };
}

export default async function ResourcesPage() {
  let data;
  try {
    data = await fetchAllResources();
  } catch (e) {
    console.error("Resources fetch failed:", e);
    notFound();
  }

  const { caseStudies, blogCards, webinarCards } = data;

  // keep grid as Case Studies only (like before)
  const filteredResources = caseStudies.slice(0, 6);

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <div>
        <div className="space-y-4 pt-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What's New?
          </h2>
        </div>

        <section className="space-y-6 pb-16">
          <ResourcesGrid resources={filteredResources} />
        </section>

        <section className="space-y-6">
          <Upcoming
            items={[
              ...webinarCards, // typically “upcoming”
              ...caseStudies, // latest case studies
            ]}
          />
        </section>
      </div>
    </main>
  );
}
