import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import {
  readPersistedSiteData,
  writePersistedSiteData,
  clearPersistedSiteData,
} from '@/lib/site-storage';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const data = await readPersistedSiteData();
    return NextResponse.json(
      { ok: true, data: data || null },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        },
      }
    );
  } catch (error) {
    console.error('[api/site-data] GET error:', error);
    return NextResponse.json(
      { ok: false, data: null, error: 'Failed to load site data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { ok: false, error: 'Invalid payload' },
        { status: 400 }
      );
    }

    const payload = {
      ...body,
      updatedAt: new Date().toISOString(),
    };

    await writePersistedSiteData(payload);

    // Revalidate all pages so Next.js router/server cache reflects changes immediately
    revalidatePath('/', 'layout');
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/working-experience');
    revalidatePath('/skills');
    revalidatePath('/contact');
    revalidatePath('/projects');

    return NextResponse.json(
      { ok: true, updatedAt: payload.updatedAt },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        },
      }
    );
  } catch (error) {
    console.error('[api/site-data] POST error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to save site data' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await clearPersistedSiteData();
    revalidatePath('/', 'layout');
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/working-experience');
    revalidatePath('/skills');
    revalidatePath('/contact');

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[api/site-data] DELETE error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to reset site data' },
      { status: 500 }
    );
  }
}
