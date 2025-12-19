export async function fetchFromStrapi(endpoint, options = {}, baseUrl) {
  baseUrl =
    baseUrl ||
    process.env.STRAPI_API_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://calm-joy-61798b158b.strapiapp.com/api";


  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined");
  }

  const { populate = "all", revalidate = 60, preview = false, forceRefresh = false } = options;

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
  
  // Debug logging
  console.log('🔍 Strapi Debug:', {
    endpoint,
    baseUrl,
    hasToken: !!token,
    tokenPrefix: token ? token.substring(0, 20) + '...' : 'MISSING',
  });
  
  if (token) {
    fetchOptions.headers.Authorization = `Bearer ${token}`;
  }

  // Fix for Amplify caching issue: Disable cache during build time or when forceRefresh is true
  // This ensures webhook-triggered builds always fetch fresh data
  const isBuildTime = 
    process.env.NEXT_PHASE === 'phase-production-build' || 
    process.env.AMPLIFY_BUILD === 'true' ||
    process.env.CI === 'true' ||
    process.env.AWS_EXECUTION_ENV !== undefined || // AWS Lambda/Amplify
    process.env.VERCEL === undefined && process.env.NODE_ENV === 'production'; // Production build (not Vercel)
  
  if (forceRefresh || isBuildTime) {
    // Force fresh fetch - no caching (fixes Amplify stale cache issue)
    fetchOptions.cache = 'no-store';
    console.log('🔄 Force refresh mode: cache disabled for', endpoint, {
      forceRefresh,
      isBuildTime,
      env: {
        NEXT_PHASE: process.env.NEXT_PHASE,
        AMPLIFY_BUILD: process.env.AMPLIFY_BUILD,
        CI: process.env.CI,
        AWS_EXECUTION_ENV: process.env.AWS_EXECUTION_ENV,
        NODE_ENV: process.env.NODE_ENV,
      }
    });
  } else if (revalidate !== null && revalidate !== undefined && revalidate !== false) {
    // Use ISR with revalidation time (runtime caching)
    fetchOptions.next = { revalidate };
  } else {
    // Default: no cache to ensure fresh data
    fetchOptions.cache = 'no-store';
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
