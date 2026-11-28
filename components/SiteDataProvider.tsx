'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export const SITE_DATA_STORAGE_KEY = 'tolananh_site_data';
export const SITE_DATA_BROADCAST_CHANNEL = 'tolananh_site_sync';

export interface PersistedPayload {
  header?: Record<string, any>;
  footer?: Record<string, any>;
  profile?: Record<string, any>;
  siteData?: Record<string, any>;
  homeBlocks?: Array<Record<string, any>>;
  workBlocks?: Array<Record<string, any>>;
  expBlocks?: Array<Record<string, any>>;
  moves?: Record<string, { x: number; y: number }>;
  resizes?: Record<string, { w?: number; h?: number }>;
  updatedAt?: string;
}

interface SiteDataContextValue {
  persisted: PersistedPayload | null;
  setPersistedData: (next: PersistedPayload | null) => void;
  refreshFromServer: () => Promise<PersistedPayload | null>;
}

const SiteDataContext = createContext<SiteDataContextValue>({
  persisted: null,
  setPersistedData: () => {},
  refreshFromServer: async () => null,
});

function pickNewerPayload(
  a: PersistedPayload | null,
  b: PersistedPayload | null
): PersistedPayload | null {
  if (!a) return b;
  if (!b) return a;
  const timeA = a.updatedAt ? Date.parse(a.updatedAt) : 0;
  const timeB = b.updatedAt ? Date.parse(b.updatedAt) : 0;
  return timeB > timeA ? b : a;
}

export function broadcastSiteDataChange(payload: PersistedPayload | null) {
  if (typeof window === 'undefined') return;
  try {
    if ('BroadcastChannel' in window) {
      const ch = new BroadcastChannel(SITE_DATA_BROADCAST_CHANNEL);
      ch.postMessage({ type: payload ? 'UPDATE' : 'RESET', payload });
      ch.close();
    }
    window.dispatchEvent(
      new CustomEvent('tolananh-site-data-updated', { detail: payload })
    );
  } catch {
    // ignore
  }
}

export function SiteDataProvider({
  initialPersisted,
  children,
}: {
  initialPersisted: PersistedPayload | null;
  children: React.ReactNode;
}) {
  const [persisted, setPersisted] = useState<PersistedPayload | null>(initialPersisted);

  const refreshFromServer = useCallback(async (): Promise<PersistedPayload | null> => {
    try {
      const res = await fetch(`/api/site-data?t=${Date.now()}`, {
        cache: 'no-store',
      });
      if (!res.ok) return null;
      const json = await res.json();
      const serverData: PersistedPayload | null = json?.data || null;

      if (serverData) {
        setPersisted(serverData);
        try {
          localStorage.setItem(SITE_DATA_STORAGE_KEY, JSON.stringify(serverData));
        } catch {
          // ignore quota errors
        }
        return serverData;
      } else {
        // Server has no saved data (or was reset) — check if localStorage has unsynced edits
        return null;
      }
    } catch {
      return null;
    }
  }, []);

  const setPersistedData = useCallback((next: PersistedPayload | null) => {
    setPersisted(next);
  }, []);

  useEffect(() => {
    // 1. Check localStorage vs initial server data on mount
    let localData: PersistedPayload | null = null;
    try {
      const raw = localStorage.getItem(SITE_DATA_STORAGE_KEY);
      if (raw) {
        localData = JSON.parse(raw);
      }
    } catch {
      // ignore
    }

    if (initialPersisted) {
      const newer = pickNewerPayload(initialPersisted, localData);
      if (newer && newer !== initialPersisted) {
        setPersisted(newer);
      } else {
        try {
          localStorage.setItem(SITE_DATA_STORAGE_KEY, JSON.stringify(initialPersisted));
        } catch {
          // ignore
        }
      }
    } else if (localData) {
      setPersisted(localData);
    }

    // Also verify latest from server in background
    refreshFromServer().then((serverData) => {
      if (!serverData && localData && !initialPersisted) {
        // Migrate existing browser-only edits to server automatically once
        fetch('/api/site-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(localData),
        }).catch(() => {});
      }
    });

    // 2. Listen for live updates from /edit in other tabs or same tab
    let bc: BroadcastChannel | null = null;
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      bc = new BroadcastChannel(SITE_DATA_BROADCAST_CHANNEL);
      bc.onmessage = (event) => {
        if (event.data?.type === 'RESET') {
          setPersisted(null);
        } else if (event.data?.type === 'UPDATE' && event.data.payload) {
          setPersisted(event.data.payload);
        }
      };
    }

    const handleStorage = (e: StorageEvent) => {
      if (e.key === SITE_DATA_STORAGE_KEY) {
        if (!e.newValue) {
          setPersisted(null);
        } else {
          try {
            setPersisted(JSON.parse(e.newValue));
          } catch {
            // ignore
          }
        }
      }
    };

    const handleCustomEvent = (e: Event) => {
      const custom = e as CustomEvent<PersistedPayload | null>;
      setPersisted(custom.detail || null);
    };

    const handleFocus = () => {
      refreshFromServer();
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('tolananh-site-data-updated', handleCustomEvent);
    window.addEventListener('focus', handleFocus);

    return () => {
      if (bc) bc.close();
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('tolananh-site-data-updated', handleCustomEvent);
      window.removeEventListener('focus', handleFocus);
    };
  }, [initialPersisted, refreshFromServer]);

  return (
    <SiteDataContext.Provider value={{ persisted, setPersistedData, refreshFromServer }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}
