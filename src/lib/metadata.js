import { fetchFromStrapi } from "@/lib/strapi";

export async function getMetadata(endpoint) {
  try {
    const data = await fetchFromStrapi(endpoint);
    const { title, description } = data?.metaData || {};

    return {
      title:
        title ||
        "Karanji - Transforming Learning with AI, XR, and Digital Twins",
      description:
        description ||
        "Explore how Karanji is revolutionizing industries with cutting-edge technology.",
    };
  } catch (error) {
    console.error(`Error fetching metadata for ${endpoint}:`, error);
  }
}
