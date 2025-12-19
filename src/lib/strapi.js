export async function fetchFromStrapi(endpoint, options = {}, baseUrl) {
  baseUrl =
    baseUrl ||
    process.env.STRAPI_API_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://calm-joy-61798b158b.strapiapp.com/api";


  if (!baseUrl) {
    throw new Error("STRAPI_API_URL is not defined");
  }

  const { populate = "all", revalidate = false, preview = false, forceRefresh = false } = options;

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

  // Fix for Amplify caching issue: Add cache-busting query param during build time
  // This ensures fresh fetches during builds while allowing static generation
  const isBuildTime = 
    process.env.NEXT_PHASE === 'phase-production-build' || 
    process.env.AMPLIFY_BUILD === 'true' ||
    process.env.CI === 'true' ||
    process.env.AWS_EXECUTION_ENV !== undefined || // AWS Lambda/Amplify
    process.env.VERCEL === undefined && process.env.NODE_ENV === 'production'; // Production build (not Vercel)
  
  // Add cache-busting query parameter during build time to ensure fresh data
  // This prevents Amplify from using cached fetch results from previous builds
  if (isBuildTime) {
    // Use build ID or timestamp to bust cache - ensures unique URL per build
    const buildId = process.env.AMPLIFY_BUILD_ID || 
                    process.env.VERCEL_DEPLOYMENT_ID || 
                    process.env.BUILD_ID ||
                    Date.now().toString();
    url.searchParams.append('_build', buildId);
    console.log('🔄 Build-time mode: cache-busting enabled for', endpoint, {
      buildId: buildId.substring(0, 20) + '...',
      isBuildTime,
    });
  }
  
  if (forceRefresh) {
    // Explicit force refresh: use no-store (only when explicitly requested)
    fetchOptions.cache = 'no-store';
    console.log('🔄 Force refresh mode: cache disabled for', endpoint);
  } else if (revalidate !== null && revalidate !== undefined && revalidate !== false) {
    // Use ISR with revalidation time (allows static generation)
    fetchOptions.next = { revalidate };
  } else {
    // Default: revalidate: false (fully static, no runtime API calls)
    // Cache-busting query param (_build) ensures fresh data during builds
    // No revalidate option = fully static until next build
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
