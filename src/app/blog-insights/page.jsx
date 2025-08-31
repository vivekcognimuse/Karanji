// app/blog-insights/page.jsx
import BlogPage from "@/components/blog/BlogPage";
import { fetchFromStrapi } from "@/lib/strapi";
import { toPlainText, arrayifyList, slugify, getMediaUrl } from "@/utils/ish";
import Head from "next/head";

// ---- static SEO for the listing page ----
export const metadata = {
  title: "Karanji Blog: Insights on AI, VR and Digital Learning Innovation",
  description:
    "Explore the Karanji blog for expert insights on AI, VR, digital learning, and emerging technology trends. Stay updated with cutting-edge strategies and industry innovations.",
};

// Flatten Strapi v5 entries into your old JSON shape
const normalizeBlog = (entry) => {
  const a = entry?.attributes ? entry.attributes : entry || {};

  const sections = Array.isArray(a.content)
    ? a.content
        .map((b) => {
          const name = b.__component?.split(".")[1];
          if (!name) return null;

          if (name === "list") {
            // handle b.items (array/string/object) or fallback to b.content
            const items = arrayifyList(b.items ?? b.content ?? []);
            return { type: "list", items };
          }

          // Handle intro-text component specifically
          if (name === "intro-text") {
            const content = toPlainText(b.intro_text);
            return { type: "intro_text", content };
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

  const imageUrl = getMediaUrl(a.image) || getMediaUrl("blog/Casestudy 2.webp"); // static fallback

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
  const data = await fetchFromStrapi(
    "blogs",
    { populate: "*" },
    "https://calm-joy-61798b158b.strapiapp.com/api"
  );
  const blogs = (Array.isArray(data) ? data : []).map(normalizeBlog);

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
      <BlogPage blogs={blogs} />
    </main>
  );
}
