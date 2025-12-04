# Strapi Preview Mode - Setup & Usage Guide

## 🎯 Overview

This frontend application now properly supports **Strapi Preview Mode**, allowing you to view draft content before publishing. When preview mode is active, the application fetches draft content from Strapi instead of published content.

## ✅ What Was Fixed

### Before

- ❌ Pages didn't detect `?preview=true` query parameter
- ❌ No integration with Next.js `draftMode()`
- ❌ All pages only fetched published content
- ❌ No visual indication of preview mode

### After

- ✅ Pages detect and use Next.js `draftMode()`
- ✅ Draft content fetched when preview mode is active
- ✅ Preview banner shows when viewing drafts
- ✅ Proper error handling for missing draft content
- ✅ Dynamic routes (blogs, case studies) support preview

## 🔧 Setup Instructions

### 1. Environment Variables

Create or update your `.env.local` file with:

```env
# Strapi Configuration
STRAPI_API_URL=https://calm-joy-61798b158b.strapiapp.com/api
STRAPI_API_TOKEN=your-strapi-api-token-here

# Preview Mode Secret (use a secure random string)
PREVIEW_SECRET=your-secure-preview-secret-here
```

**Important**: The `PREVIEW_SECRET` must match the secret configured in your Strapi backend.

### 2. Strapi Configuration

In your Strapi admin panel, configure the preview URL:

**Settings > Content Manager > Configure Preview**

Set your preview URL to:

```
https://your-domain.com/api/preview?secret=YOUR_SECRET&url={slug}&status=draft
```

Replace:

- `your-domain.com` with your frontend domain
- `YOUR_SECRET` with the same value as `PREVIEW_SECRET` in your `.env.local`
- `{slug}` will be replaced by Strapi with the actual content path

## 🚀 How to Use Preview Mode

### Method 1: From Strapi Admin (Recommended)

1. In Strapi, create or edit a draft entry (Blog, Case Study, etc.)
2. Click the **Preview** button in the content editor
3. You'll be redirected to your frontend with the draft content visible
4. A yellow banner will appear at the top indicating preview mode is active

### Method 2: Manual URL Construction

Navigate to this URL structure:

```
https://your-domain.com/api/preview?secret=YOUR_SECRET&url=/blog-insights/draft-post-slug
```

Parameters:

- `secret`: Your preview secret (must match `PREVIEW_SECRET`)
- `url`: The path to the content you want to preview (e.g., `/blog-insights/my-draft-post`)
- `status` (optional): Set to `published` to exit preview mode

### Method 3: Testing Locally

During development:

```
http://localhost:3000/api/preview?secret=YOUR_SECRET&url=/blog-insights/test-post
```

## 📋 Supported Content Types

Preview mode is enabled for:

- ✅ **Landing Page** (`/`)
- ✅ **Blog Listings** (`/blog-insights`)
- ✅ **Individual Blog Posts** (`/blog-insights/[slug]`)
- ✅ **Case Studies** (`/case-studies/[id]`)
- ✅ **Digital Twin Page** (`/company/digital-twin`)

## 🔍 How It Works

### 1. Preview Activation

When you visit `/api/preview?secret=...&url=...`:

- The secret is validated against `PREVIEW_SECRET`
- Next.js `draftMode()` is enabled via a cookie
- You're redirected to the specified URL

### 2. Content Fetching

Each page component:

- Checks if `draftMode().isEnabled` is true
- Passes `preview: true` to `fetchFromStrapi()`
- Strapi API returns draft content using `status=draft` parameter

### 3. Visual Indicator

When preview mode is active:

- A yellow banner appears at the top of the page
- Shows "Preview Mode Active - Viewing draft content"
- Provides an "Exit Preview" button

## 🛠️ Technical Implementation

### Page Component Example

```javascript
import { draftMode } from "next/headers";
import { fetchFromStrapi } from "@/lib/strapi";

export default async function BlogPost({ params }) {
  const { isEnabled: isPreview } = await draftMode();

  const data = await fetchFromStrapi("blogs", {
    populate: "*",
    preview: isPreview, // This is the key!
  });

  // Render your content...
}
```

### API Route (`/api/preview/route.js`)

The preview API route:

- Validates the secret token
- Enables/disables draft mode
- Redirects to the content URL
- Prevents external redirects for security

## 🔒 Security Considerations

1. **Secret Protection**: Never expose `PREVIEW_SECRET` in client-side code
2. **URL Validation**: The API route prevents external redirects
3. **Token Authentication**: Strapi API token required for draft access
4. **HTTPS**: Always use HTTPS in production

## 🧪 Testing Your Implementation

### Test Checklist

- [ ] Create a draft blog post in Strapi
- [ ] Click "Preview" in Strapi admin
- [ ] Verify you're redirected to frontend with draft content
- [ ] Confirm yellow preview banner appears
- [ ] Click "Exit Preview" and verify published content shows
- [ ] Test with missing draft (should show appropriate error)
- [ ] Test direct preview URL access
- [ ] Test with invalid secret (should return 401)

### Test URLs

```bash
# Enable preview for a specific post
curl http://localhost:3000/api/preview?secret=YOUR_SECRET&url=/blog-insights/test-post

# Disable preview
curl http://localhost:3000/api/preview?secret=YOUR_SECRET&status=published&url=/

# Invalid secret (should fail)
curl http://localhost:3000/api/preview?secret=wrong&url=/
```

## 🐛 Troubleshooting

### Preview Mode Not Working

**Problem**: Draft content not showing

- ✅ Check `PREVIEW_SECRET` matches between frontend and Strapi
- ✅ Verify `STRAPI_API_TOKEN` has permission to access drafts
- ✅ Check browser cookies (Next.js sets a `__prerender_bypass` cookie)
- ✅ Clear browser cache and cookies

**Problem**: 404 error when previewing

- ✅ Verify the content slug/ID is correct
- ✅ Check Strapi API returns the draft content
- ✅ Look for errors in browser console and server logs

**Problem**: Preview banner not showing

- ✅ Check that `PreviewBanner` is imported in `layout.js`
- ✅ Verify `draftMode()` is properly awaited

### API Errors

**401 Unauthorized**

- Check `PREVIEW_SECRET` is correct
- Verify environment variables are loaded

**503 Preview Not Configured**

- `PREVIEW_SECRET` environment variable is missing

## 📚 Additional Resources

- [Next.js Draft Mode Documentation](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode)
- [Strapi Preview Documentation](https://docs.strapi.io/dev-docs/plugins/draft-publish)
- [Next.js App Router](https://nextjs.org/docs/app)

## 🎉 Summary

Your preview mode is now fully functional! You can:

- ✅ Preview draft content from Strapi before publishing
- ✅ See a visual indicator when in preview mode
- ✅ Exit preview mode with one click
- ✅ Use preview for blogs, case studies, and landing pages
- ✅ Safely validate secrets and prevent unauthorized access

If you encounter any issues, refer to the troubleshooting section or check the server logs for detailed error messages.
