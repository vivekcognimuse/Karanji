export async function fetchFromStrapi(endpoint, options = {}, baseUrl) {
  baseUrl =
    baseUrl ||
    process.env.STRAPI_API_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://calm-joy-61798b158b.strapiapp.com/api";

  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined");
  }

  const { populate = "all", preview = false } = options;

  const url = new URL(`${baseUrl}/${endpoint}`);

  if (populate) {
    url.searchParams.append("populate", populate);
  }

  url.searchParams.append("publicationState", preview ? "preview" : "live");

  // 🔥 ALWAYS fetch fresh data from Strapi (no ISR, no static caching)
  const fetchOptions = {
    cache: "no-store",
    next: { revalidate: 0 },
    headers: {},
  };

  // Add token if present
  const token =
    process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    fetchOptions.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url.toString(), fetchOptions);

    if (!res.ok) {
      console.error(
        `❌ Strapi fetch failed for ${endpoint}:`,
        res.status,
        res.statusText
      );
      return null;
    }

    const json = await res.json();
    return json?.data || null;
  } catch (error) {
    console.error(`❌ Strapi fetch error for ${endpoint}:`, error.message);
    return null;
  }
}
