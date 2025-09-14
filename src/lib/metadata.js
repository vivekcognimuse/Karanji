import { fetchFromStrapi } from "@/lib/strapi";

export async function getMetadata(endpoint) {
  try {
    const data = await fetchFromStrapi(endpoint);
    const { title, description } = data?.metaData || {};

    return {
      title: title,
      description: description,
    };
  } catch (error) {
    console.error(`Error fetching metadata for ${endpoint}:`, error);
  }
}
