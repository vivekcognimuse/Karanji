export async function fetchFromStrapi(endpoint, options = {}, baseUrl) {
  // Get the API token from environment
  const apiToken = process.env.STRAPI_API_TOKEN;

  // Check if token exists (only required for authenticated requests)
  if (!apiToken) {
    console.warn("⚠️ STRAPI_API_TOKEN not found in environment variables");
    console.warn(
      "Make sure you're running this on the server side and have set STRAPI_API_TOKEN in .env.local"
    );
  }

  // Use environment URL first, then fallback to production URL
  baseUrl =
    baseUrl ||
    process.env.STRAPI_API_URL ||
    "https://calm-joy-61798b158b.strapiapp.com/api";

  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined in environment variables.");
  }

  const {
    populate = "all", // Default populate
    revalidate = 3600, // Default revalidate
    preview = false, // Preview mode support
    status = null, // Draft/published status
  } = options;

  const url = new URL(`${baseUrl}/${endpoint}`);

  // Add populate parameter
  if (populate) {
    url.searchParams.append("populate", populate);
  }

  // Add preview/draft support
  if (preview || status === "draft") {
    url.searchParams.append("publicationState", "preview");
  } else {
    url.searchParams.append("publicationState", "live");
  }

  // Build fetch options
  const fetchOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Only add Authorization header if token exists
  if (apiToken) {
    fetchOptions.headers["Authorization"] = `Bearer ${apiToken}`;
    console.log("✅ Using API token for authentication");
  } else {
    console.log("⚠️ No API token - attempting public access");
  }

  // Add preview header if in preview mode
  if (preview) {
    fetchOptions.headers["strapi-encode-source-maps"] = "true";
  }

  // Add revalidation option for Next.js
  if (revalidate !== undefined) {
    fetchOptions.next = { revalidate };
  }

  // Debug logging
  console.log("🚀 Fetching from Strapi:", {
    url: url.toString(),
    hasToken: !!apiToken,
    preview: preview,
    revalidate: revalidate,
  });

  try {
    const res = await fetch(url.toString(), fetchOptions);

    if (!res.ok) {
      console.error(`❌ Strapi fetch failed for ${endpoint}:`, {
        status: res.status,
        statusText: res.statusText,
        url: url.toString(),
      });

      // Try to get more error details
      try {
        const errorData = await res.json();
        console.error("Error details:", errorData);
      } catch (e) {
        // Response might not be JSON
        const errorText = await res.text();
        console.error("Error response:", errorText);
      }

      // Return empty array/object based on what's expected
      return Array.isArray(options.defaultReturn) ? [] : {};
    }

    const json = await res.json();

    // Log successful fetch
    console.log(`✅ Successfully fetched ${endpoint}:`, {
      dataReceived: !!json?.data,
      dataLength: Array.isArray(json?.data) ? json.data.length : "single",
    });

    return json?.data || {};
  } catch (error) {
    console.error(`❌ Strapi fetch error for ${endpoint}:`, error);
    return {};
  }
}

// Helper function to check if we're in a server environment
export function isServerSide() {
  return typeof window === "undefined";
}

// Alternative: Create a separate function for client-side fetches (without auth)
export async function fetchFromStrapiPublic(endpoint, options = {}) {
  const baseUrl = "https://calm-joy-61798b158b.strapiapp.com/api";

  const { populate = "all", revalidate = 3600 } = options;

  const url = new URL(`${baseUrl}/${endpoint}`);

  if (populate) {
    url.searchParams.append("populate", populate);
  }

  // Always fetch published content for public access
  url.searchParams.append("publicationState", "live");

  const fetchOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (revalidate !== undefined) {
    fetchOptions.next = { revalidate };
  }

  console.log("🌐 Public fetch from Strapi:", url.toString());

  try {
    const res = await fetch(url.toString(), fetchOptions);

    if (!res.ok) {
      console.error(
        `Public Strapi fetch failed for ${endpoint}: ${res.statusText}`
      );
      return {};
    }

    const json = await res.json();
    return json?.data || {};
  } catch (error) {
    console.error(`Public Strapi fetch error for ${endpoint}:`, error);
    return {};
  }
}
