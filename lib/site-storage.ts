import { put, get, del, BlobNotFoundError } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';

const BLOB_PATHNAME = 'site-data.json';
const LOCAL_FALLBACK_FILE = path.join(process.cwd(), '.site-data.local.json');

function hasBlobCredentials(): boolean {
  return Boolean(
    process.env.BLOB_READ_WRITE_TOKEN ||
    process.env.BLOB_STORE_ID ||
    (process.env.VERCEL && process.env.VERCEL_OIDC_TOKEN)
  );
}

export async function readPersistedSiteData(): Promise<Record<string, any> | null> {
  if (hasBlobCredentials()) {
    try {
      const result = await get(BLOB_PATHNAME, {
        access: 'private',
        useCache: false,
      });
      if (!result || result.statusCode !== 200 || !result.stream) {
        return null;
      }
      const text = await new Response(result.stream).text();
      if (!text) return null;
      return JSON.parse(text);
    } catch (err) {
      if (err instanceof BlobNotFoundError) {
        return null;
      }
      // Also handle generic 404 / not found messages gracefully
      if (err instanceof Error && /not found|404/i.test(err.message)) {
        return null;
      }
      console.error('[site-storage] Failed to read from Vercel Blob:', err);
    }
  }

  // Local file fallback for offline development
  try {
    const raw = await fs.readFile(LOCAL_FALLBACK_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function writePersistedSiteData(payload: Record<string, any>): Promise<void> {
  const serialized = JSON.stringify(payload);

  if (hasBlobCredentials()) {
    await put(BLOB_PATHNAME, serialized, {
      access: 'private',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
    });
    return;
  }

  await fs.writeFile(LOCAL_FALLBACK_FILE, serialized, 'utf-8');
}

export async function clearPersistedSiteData(): Promise<void> {
  if (hasBlobCredentials()) {
    try {
      await del(BLOB_PATHNAME);
    } catch (err) {
      if (!(err instanceof BlobNotFoundError)) {
        console.error('[site-storage] Failed to delete blob:', err);
      }
    }
  }

  try {
    await fs.unlink(LOCAL_FALLBACK_FILE);
  } catch {
    // ignore if missing
  }
}
