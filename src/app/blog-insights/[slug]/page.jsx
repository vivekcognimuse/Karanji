// app/blog-insights/[slug]/page.jsx
import BlogPage from "@/components/blog/BlogPage";
import { draftMode } from "next/headers";
import { fetchFromStrapi } from "@/lib/strapi";
import { toPlainText, arrayifyList, getMediaUrl } from "@/utils/ish";

export const metadata = {
  title: "Karanji Blog: Insights on AI, VR and Digital Learning Innovation",
  description:
    "Explore the Karanji blog for expert insights on AI, VR, digital learning, and emerging technology trends. Stay updated with cutting-edge strategies and industry innovations.",
};

const STRAPI = "https://calm-joy-61798b158b.strapiapp.com/api";
export const revalidate = 3600;

// Flatten Strapi v5 entries into your BlogPage shape
const normalizeBlog = (entry) => {
  const a = entry?.attributes ? entry.attributes : entry || {};

  const sections = Array.isArray(a.content)
    ? a.content
        .map((b) => {
          const name = b.__component?.split?.(".")[1];
          if (!name) return null;

          if (name === "list") {
            const items = arrayifyList(b.items ?? b.content ?? []);
            return { type: "list", items };
          }
          if (name === "intro-text") {
            return { type: "intro_text", content: toPlainText(b.intro_text) };
          }

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

  const excerpt = toPlainText(a.excerpt ?? "");
  const imageUrl =
    getMediaUrl(a.image) || "/CaseStudyImages/default-image.webp";

  return {
    id: entry.id,
    slug: a.slug,
    title: a.title,
    author: a.author,
    readTime: a.readTime,
    publishDate: a.publishDate,
    category: a.category,
    excerpt,
    imageUrl,
    content: { sections },
  };
};

export default async function BlogInsights() {
  const { isEnabled: isPreview } = await draftMode();

  // ✅ use the params-object style that works in your app
  const res = await fetchFromStrapi(
    "blogs",
    {
      populate: "*",
      pagination: { pageSize: 100 },
      sort: "createdAt:desc",
      preview: isPreview,
    },
    STRAPI
  );

  const blogs = (
    Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : []
  ).map(normalizeBlog);

  if (blogs.length === 0) {
    return (
      <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 py-16">
        <p>No blog posts found.</p>
      </main>
    );
  }

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <BlogPage blogs={blogs} />
    </main>
  );
}
