# Vercel Deployment Guide

This guide will help you deploy your Next.js application to Vercel while keeping your Firebase configuration unchanged.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your project repository on GitHub, GitLab, or Bitbucket (recommended for automatic deployments)
3. Environment variables ready (see Environment Variables section below)

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com) and sign in
   - Click "Add New..." → "Project"

2. **Import Your Repository**
   - Connect your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your `karanjiWebsite` repository
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Add Environment Variables**
   - Click "Environment Variables" section
   - Add the following variables (see Environment Variables section below)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Deploy to preview
   vercel

   # Deploy to production
   vercel --prod
   ```

## Environment Variables

Add these environment variables in your Vercel project settings:

### Required Variables

- `NEXT_PUBLIC_STRAPI_API_URL` - Your Strapi API URL
- `NEXT_PUBLIC_STRAPI_API_TOKEN` or `STRAPI_API_TOKEN` - Your Strapi API token

### Optional Variables

- `NEXT_PUBLIC_RESEND_API_KEY` - Resend API key for email functionality
- `NEXT_PUBLIC_RESEND_FROM_EMAIL` - From email address for Resend
- `NEXT_PUBLIC_RESEND_TO_EMAIL` - To email address for Resend
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `PREVIEW_SECRET` or `NEXT_PUBLIC_PREVIEW_SECRET` - Secret for preview mode
- `NODE_ENV` - Set to `production` (usually auto-set by Vercel)

### How to Add Environment Variables in Vercel

1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable with its value
4. Select the environments (Production, Preview, Development)
5. Click "Save"
6. Redeploy your project for changes to take effect

## Important Notes

### Firebase Configuration Preserved

- Your `firebase.json` file remains unchanged
- You can still deploy to Firebase Hosting using `firebase deploy`
- Both hosting platforms can coexist without conflicts

### Build Output

- Vercel builds your Next.js app automatically
- The `hosting/` directory (Firebase build output) is ignored by Vercel
- Vercel uses its own build process optimized for Next.js

### Custom Domain

To add a custom domain:

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your domain (e.g., `karanji.com`)
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificates

## Continuous Deployment

Once connected to a Git repository:

- **Automatic Deployments**: Every push to `main`/`master` branch triggers a production deployment
- **Preview Deployments**: Every push to other branches creates a preview deployment
- **Pull Request Previews**: Each PR gets its own preview URL

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Verify `package.json` has correct build script
4. Check Node.js version compatibility (Vercel uses Node 18+ by default)

### Environment Variables Not Working

1. Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
2. Redeploy after adding new environment variables
3. Check variable names match exactly (case-sensitive)

### Firebase Still Works

- Your Firebase configuration is completely independent
- You can deploy to both platforms simultaneously
- No changes needed to your Firebase setup

## Next Steps

1. Deploy to Vercel using one of the methods above
2. Test your deployed site
3. Configure custom domain if needed
4. Set up monitoring and analytics
5. Continue using Firebase Hosting as backup or for different environments

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

