export async function fetchFromStrapi(endpoint, options = {}) {
  const baseUrl = "https://77586f016802.ngrok-free.app/api/case-studies"; // Hardcoded base URL

  const {
    populate = "all", // Default populate is "all"
    revalidate = undefined, // No revalidate by default (pure SSG)
  } = options;

  const url = new URL(baseUrl);

  if (populate) {
    url.searchParams.append("populate", populate); // Always appends "populate=all" unless a different value is passed
  }

  const fetchOptions = {};

  if (revalidate !== undefined) {
    fetchOptions.next = { revalidate };
  }

  try {
    const res = await fetch(url.toString(), fetchOptions);

    if (!res.ok) {
      console.error(`Strapi fetch failed for ${endpoint}: ${res.statusText}`);
      return [];
    }

    const json = await res.json();
    return json?.data || {};
  } catch (error) {
    console.error(`Strapi fetch error for ${endpoint}:`, error);
    return {};
  }
}
