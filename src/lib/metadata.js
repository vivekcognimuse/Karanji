import { fetchFromStrapi } from "@/lib/strapi";

export async function getMetadata(
  endpoint,
  fallbackTitle,
  fallbackDescription
) {
  try {
    const data = await fetchFromStrapi(endpoint);
    const { title, description } = data?.metaData || {};

    console.log(`Metadata for ${endpoint}:`, title, description);

    return {
      title: title || fallbackTitle,
      description: description || fallbackDescription,
    };
  } catch (error) {
    console.error(`Error fetching metadata for ${endpoint}:`, error);

    return {
      title: fallbackTitle,
      description: fallbackDescription,
    };
  }
}

// You can also create a more comprehensive version with additional metadata
export async function getFullMetadata(endpoint, fallbacks = {}) {
  try {
    const data = await fetchFromStrapi(endpoint);
    const metadata = data?.metaData || {};

    return {
      title: metadata.title || fallbacks.title,
      description: metadata.description || fallbacks.description,
      keywords: metadata.keywords || fallbacks.keywords,
      openGraph: {
        title: metadata.ogTitle || metadata.title || fallbacks.title,
        description:
          metadata.ogDescription ||
          metadata.description ||
          fallbacks.description,
        images: metadata.ogImage ? [metadata.ogImage] : fallbacks.ogImages,
        ...metadata.openGraph,
      },
      twitter: {
        card: metadata.twitterCard || "summary_large_image",
        title: metadata.twitterTitle || metadata.title || fallbacks.title,
        description:
          metadata.twitterDescription ||
          metadata.description ||
          fallbacks.description,
        ...metadata.twitter,
      },
      // Add more metadata fields as needed
    };
  } catch (error) {
    console.error(`Error fetching metadata for ${endpoint}:`, error);
    return fallbacks;
  }
}
