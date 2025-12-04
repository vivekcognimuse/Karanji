export async function fetchFromStrapi(endpoint, options = {}, baseUrl) {
  baseUrl =
    baseUrl ||
    process.env.STRAPI_API_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://calm-joy-61798b158b.strapiapp.com/api";

  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined");
  }

  const { populate = "all", revalidate = 21600, preview = false } = options;

  const url = new URL(`${baseUrl}/${endpoint}`);

  if (populate) {
    url.searchParams.append("populate", populate);
  }

  // Strapi 5: use status=draft|published [[REST status](https://docs.strapi.io/cms/api/rest/status)]
  if (preview) {
    url.searchParams.append("status", "draft");
  } else {
    url.searchParams.append("status", "published");
  }

  const fetchOptions = {
    headers: {},
  };

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
      return null;
    }

    const json = await res.json();
    return json?.data || null;
  } catch (error) {
    console.error(`❌ Strapi fetch error for ${endpoint}:`, error.message);
    return null;
  }
}
