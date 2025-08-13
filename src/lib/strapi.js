export async function fetchFromStrapi(endpoint, options = {}, baseUrl) {
  baseUrl =
    baseUrl ||
    "https://d297e7a22d4e.ngrok-free.app/api" ||
    process.env.STRAPI_API_URL;

  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined in environment variables.");
  }

  const {
    populate = "all", // Default populate
    revalidate = undefined, // No revalidate by default (pure SSG)
  } = options;

  const url = new URL(`${baseUrl}/${endpoint}`);

  if (populate) {
    url.searchParams.append("populate", populate);
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
