export async function fetchFromStrapi(endpoint, options = {}, baseUrl) {
  baseUrl =
    baseUrl ||
    process.env.STRAPI_API_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://calm-joy-61798b158b.strapiapp.com/api";

  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined");
  }

  const {
    populate = "all", // Use * for Strapi v4
    revalidate = 21600,
    preview = false,
  } = options;

  const url = new URL(`${baseUrl}/${endpoint}`);

  if (populate) {
    url.searchParams.append("populate", populate);
  }

  // Use publicationState for Strapi v4
  if (preview) {
    url.searchParams.append("publicationState", "preview");
  } else {
    url.searchParams.append("publicationState", "live");
  }

  const fetchOptions = {
    headers: {},
  };

  // Only add Authorization if token exists
  const token =
    process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    fetchOptions.headers.Authorization = `Bearer ${token}`;
  }

  if (revalidate !== null && revalidate !== undefined) {
    fetchOptions.next = { revalidate };
  }

  try {
    const res = await fetch(url.toString(), fetchOptions);

    if (!res.ok) {
      console.error(
        `❌ Strapi fetch failed for ${endpoint}:`,
        res.status,
        res.statusText
      );
      return null; // Return null consistently
    }

    const json = await res.json();
    return json?.data || null;
  } catch (error) {
    console.error(`❌ Strapi fetch error for ${endpoint}:`, error.message);
    return null; // Return null consistently
  }
}
