// app/api/revalidate/route.js
// Webhook endpoint for Strapi to trigger cache revalidation
// This fixes the Amplify caching issue by allowing explicit cache invalidation

import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Verify the request has a secret token (optional but recommended)
    const authHeader = request.headers.get('authorization');
    const secret = process.env.REVALIDATE_SECRET || process.env.NEXT_PUBLIC_REVALIDATE_SECRET;
    
    if (secret && authHeader !== `Bearer ${secret}`) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Invalid or missing authorization token' },
        { status: 401 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { path, tag, type } = body;

    console.log('🔄 Revalidation request received:', { path, tag, type, timestamp: new Date().toISOString() });

    // Revalidate specific path
    if (path) {
      revalidatePath(path);
      console.log('✅ Revalidated path:', path);
    }

    // Revalidate specific tag (if using fetch with tags)
    if (tag) {
      revalidateTag(tag);
      console.log('✅ Revalidated tag:', tag);
    }

    // Revalidate common content paths if no specific path provided
    const commonPaths = [
      '/',
      '/blog-insights',
      '/case-studies',
      '/resources',
      '/webinar',
      '/company',
      '/digital-learning',
      '/creative-services',
      '/technology-solutions',
      '/Industries',
    ];

    if (!path && !tag) {
      commonPaths.forEach((p) => {
        revalidatePath(p);
      });

      console.log('✅ Revalidated all common paths');
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      paths: path ? [path] : (!path && !tag ? commonPaths : []),
      tags: tag ? [tag] : [],
      message: 'Cache revalidated successfully',
    });
  } catch (error) {
    console.error('❌ Revalidation error:', error);
    return NextResponse.json(
      {
        error: 'Revalidation failed',
        message: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

// Allow GET requests for testing (remove in production if needed)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const tag = searchParams.get('tag');
  const secret = searchParams.get('secret');

  // Verify secret for GET requests too
  const expectedSecret = process.env.REVALIDATE_SECRET || process.env.NEXT_PUBLIC_REVALIDATE_SECRET;
  if (expectedSecret && secret !== expectedSecret) {
    return NextResponse.json(
      { error: 'Unauthorized', message: 'Invalid secret' },
      { status: 401 }
    );
  }

  try {
    if (path) {
      revalidatePath(path);
      return NextResponse.json({
        revalidated: true,
        path,
        now: Date.now(),
      });
    }

    if (tag) {
      revalidateTag(tag);
      return NextResponse.json({
        revalidated: true,
        tag,
        now: Date.now(),
      });
    }

    return NextResponse.json({
      message: 'Provide ?path=... or ?tag=... query parameter',
      example: '/api/revalidate?path=/blog-insights&secret=your-secret',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Revalidation failed', message: error.message },
      { status: 500 }
    );
  }
}

