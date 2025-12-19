# Webhook Configuration Guide for Amplify & Vercel

This guide explains how to configure Strapi webhooks to work correctly with both AWS Amplify and Vercel deployments.

## Problem Fixed

Previously, when Strapi automatically triggered webhooks (e.g., after content publication), Amplify would use cached data from previous builds instead of fetching fresh content. Vercel worked correctly. This has been fixed.

## Changes Made

### 1. Updated `src/lib/strapi.js`
- **Reduced default revalidate time**: From 21,000 seconds (~6 hours) to 60 seconds
- **Build-time cache disabling**: Automatically disables caching during build time to ensure fresh data
- **Force refresh option**: Added `forceRefresh` option for explicit cache bypassing

### 2. Created `/api/revalidate` Endpoint
- New API route at `src/app/api/revalidate/route.js`
- Allows webhooks to explicitly invalidate Next.js cache
- Supports both POST (with JSON body) and GET (with query params) requests

## Webhook Configuration in Strapi Cloud

### Option 1: Use Revalidation Endpoint (Recommended)

Configure your Strapi webhook to call the revalidation endpoint:

**Webhook URL:**
```
https://your-domain.com/api/revalidate
```

**HTTP Method:** `POST`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_REVALIDATE_SECRET
```

**Body (JSON):**
```json
{
  "path": "/blog-insights",
  "tag": "strapi-content"
}
```

**Or revalidate all common paths:**
```json
{}
```

### Option 2: Trigger Build (Current Method)

If your webhook triggers a build (current setup), the code now automatically:
- Detects build time using environment variables
- Disables caching during builds
- Fetches fresh data from Strapi

**Environment Variables Detected:**
- `NEXT_PHASE=phase-production-build`
- `AMPLIFY_BUILD=true`
- `CI=true`

## Environment Variables

Add these to your Amplify/Vercel project settings:

### Required
- `STRAPI_API_URL` or `NEXT_PUBLIC_STRAPI_API_URL` - Your Strapi API URL
- `STRAPI_API_TOKEN` or `NEXT_PUBLIC_STRAPI_API_TOKEN` - Your Strapi API token

### Optional (for revalidation endpoint)
- `REVALIDATE_SECRET` or `NEXT_PUBLIC_REVALIDATE_SECRET` - Secret token for webhook authentication

## Testing the Revalidation Endpoint

### Test with GET (for debugging):
```bash
# Revalidate specific path
curl "https://your-domain.com/api/revalidate?path=/blog-insights&secret=YOUR_SECRET"

# Revalidate specific tag
curl "https://your-domain.com/api/revalidate?tag=strapi-content&secret=YOUR_SECRET"
```

### Test with POST:
```bash
curl -X POST https://your-domain.com/api/revalidate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_SECRET" \
  -d '{"path": "/blog-insights"}'
```

## How It Works

### During Build Time (Webhook-triggered)
1. Strapi webhook triggers build in Amplify/Vercel
2. Build process detects build environment variables
3. `fetchFromStrapi` automatically uses `cache: 'no-store'`
4. Fresh data is fetched from Strapi API
5. Build completes with latest content

### During Runtime (User Requests)
1. User requests a page
2. `fetchFromStrapi` uses ISR with 60-second revalidation
3. Cached data is served if less than 60 seconds old
4. Fresh data is fetched if cache is stale

### With Revalidation Endpoint
1. Strapi webhook calls `/api/revalidate`
2. Endpoint invalidates specific paths or tags
3. Next request to those paths fetches fresh data
4. No full rebuild required

## Amplify-Specific Configuration

### Ensure Build Environment Variables
In Amplify Console, make sure these are set:
- `AMPLIFY_BUILD=true` (usually set automatically)
- `CI=true` (usually set automatically)

### Webhook Configuration
1. Go to Strapi Cloud → Settings → Webhooks
2. Create/Edit webhook for "Entry publish" or "Entry update"
3. Set URL to your Amplify domain + `/api/revalidate`
4. Set method to POST
5. Add Authorization header with your secret

## Vercel-Specific Configuration

### Webhook Configuration
1. Go to Strapi Cloud → Settings → Webhooks
2. Create/Edit webhook for "Entry publish" or "Entry update"
3. Set URL to your Vercel domain + `/api/revalidate`
4. Set method to POST
5. Add Authorization header with your secret

## Troubleshooting

### Amplify Still Using Cached Data?

1. **Check build logs** for "🔄 Force refresh mode" messages
2. **Verify environment variables** are set in Amplify Console
3. **Clear Amplify cache**: In Amplify Console → App Settings → Build Settings → Clear cache
4. **Use revalidation endpoint** instead of relying on build detection

### Revalidation Endpoint Not Working?

1. **Check secret token** matches in both Strapi webhook and environment variables
2. **Verify endpoint is accessible** (not blocked by firewall/CORS)
3. **Check logs** in Amplify/Vercel for revalidation requests
4. **Test manually** using curl commands above

### Still Seeing Stale Content?

1. **Force refresh specific pages** by calling revalidation endpoint with path
2. **Reduce revalidate time** further (currently 60 seconds)
3. **Use `forceRefresh: true`** option in `fetchFromStrapi` calls:
   ```javascript
   const data = await fetchFromStrapi("blogs", { forceRefresh: true });
   ```

## Code Usage Examples

### Force Refresh (Bypass Cache)
```javascript
import { fetchFromStrapi } from "@/lib/strapi";

// Always fetch fresh data
const data = await fetchFromStrapi("blogs", { 
  forceRefresh: true 
});
```

### Custom Revalidation Time
```javascript
// Revalidate every 5 minutes (300 seconds)
const data = await fetchFromStrapi("blogs", { 
  revalidate: 300 
});
```

### Disable Caching Completely
```javascript
// No caching at all
const data = await fetchFromStrapi("blogs", { 
  revalidate: false 
});
```

## Summary

✅ **Fixed**: Amplify caching issue during webhook-triggered builds  
✅ **Added**: Revalidation API endpoint for explicit cache control  
✅ **Improved**: Default revalidation time (60s instead of 6 hours)  
✅ **Enhanced**: Build-time detection for automatic cache disabling  

Your webhooks should now work correctly on both Amplify and Vercel!

