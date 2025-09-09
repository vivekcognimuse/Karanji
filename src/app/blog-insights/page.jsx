// app/blog-insights/page.jsx
import React from "react";
import { notFound } from "next/navigation";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import Upcoming from "@/components/blog/Upcoming";
import { fetchFromStrapi } from "@/lib/strapi";
import { getMediaUrl } from "@/utils/ish";

export const metadata = {
  title: "Karanji Blog: Insights on AI, VR & Digital Learning Innovation",
  description:
    "Explore all Karanji blog posts pulled from Strapi — grid of highlights plus a full upcoming list.",
};

const STRAPI = "https://calm-joy-61798b158b.strapiapp.com/api";

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
  domainField = "category",
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
    _date: a.publishDate || a.publishedAt || a.updatedAt || a.createdAt || null,
  };
};

async function fetchBlogs() {
  return fetchFromStrapi(
    "blogs",
    { populate: "*", pagination: { pageSize: 100 }, sort: "createdAt:desc" },
    STRAPI
  );
}

export default async function BlogInsightsListing() {
  let blogRes;
  try {
    blogRes = await fetchBlogs();
  } catch (e) {
    console.error("Blogs fetch failed:", e);
    notFound();
  }

  const blogCards = asArr(blogRes).map((item) =>
    normalizeCard({
      type: "Blog",
      item,
      basePath: "/blog-insights",
      defaultCTA: "Read Blog",
      domainField: "category",
      imageField: "image",
    })
  );

  if (blogCards.length === 0) {
    return (
      <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 py-16">
        <p>No blog posts found.</p>
      </main>
    );
  }

  // ✅ first 6 to grid, Upcoming gets the rest
  const gridItems = blogCards.slice(0, 6);
  const upcomingItems = blogCards.slice(6);

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <div>
        <div className="space-y-4 pt-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Blog Insights
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
