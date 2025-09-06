// app/resources/page.jsx
import React from "react";
import { notFound } from "next/navigation";
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

const STRAPI = "https://calm-joy-61798b158b.strapiapp.com/api";

// helpers
const asArr = (res) =>
  Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : [];

const text = (v, d = "") => (typeof v === "string" ? v : d);

const normalizeCard = ({
  type, // "Case Study" | "Blog" | "Webinar"
  item, // Strapi entry
  basePath, // "/case-studies" | "/blog" | "/webinars"
  defaultCTA, // "View Case Study" | "Read Blog" | "Register for Webinar"
  titleField = "title",
  slugField = "slug",
  imageField = "image", // change to "cover" if your blog uses cover
  domainField = "domain", // change to "category" if your blog uses category
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

// fetchers (params object = less brittle)
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
  // API UID is singular: "webinar"
  return fetchFromStrapi(
    "webinar",
    { pagination: { pageSize: 100 }, sort: "createdAt:desc" },
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
      // if your blogs use "category" or "cover", tweak:
      domainField: "domain", // or "category"
      imageField: "image", // or "cover"
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

  // merge EVERYTHING, newest first
  const all = [...caseStudies, ...blogCards, ...webinarCards].sort((a, b) => {
    const da = a._date ? new Date(a._date).getTime() : 0;
    const db = b._date ? new Date(b._date).getTime() : 0;
    return db - da;
  });

  return { all };
}

export default async function ResourcesPage() {
  let data;
  try {
    data = await fetchAllResources();
  } catch (e) {
    console.error("Resources fetch failed:", e);
    notFound();
  }

  const { all } = data;

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <div>
        {/* Header */}
        <div className="space-y-4 pt-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What's New?
          </h2>
        </div>

        {/* Resources Grid – ALL items, no filter */}
        <section className="space-y-6 pb-16">
          <ResourcesGrid resources={all.slice(0, 6)} />
        </section>

        {/* Upcoming – ALL items, no slice */}
        <section className="space-y-6">
          <Upcoming items={all} />
        </section>
      </div>
    </main>
  );
}
