"use client";

import { useState, useEffect } from "react";
import { OS_DOWNLOADS, OSDownloadInfo, OperatingSystem } from "./detectOS";

const GITHUB_REPO = "axel-molina/DiscNativePro";
const CACHE_KEY = "dnp_release_downloads_v1";
const CACHE_TTL_MS = 3 * 60 * 1000; // 3 minutos de caché

interface CachedEntry {
  url: string;
  tag: string;
}

interface CachePayload {
  timestamp: number;
  entries: Partial<Record<OperatingSystem, CachedEntry>>;
}

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  draft: boolean;
  assets?: GitHubAsset[];
}

export function useReleaseDownloads() {
  const [downloads, setDownloads] = useState<Record<OperatingSystem, OSDownloadInfo>>(OS_DOWNLOADS);
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function resolveUrls() {
      // 1. Intentar recuperar del caché local si aún es válido
      try {
        const cachedStr = sessionStorage.getItem(CACHE_KEY);
        if (cachedStr) {
          const cached: CachePayload = JSON.parse(cachedStr);
          if (Date.now() - cached.timestamp < CACHE_TTL_MS) {
            setDownloads((prev) => {
              const next = { ...prev };
              (Object.keys(cached.entries) as OperatingSystem[]).forEach((os) => {
                const entry = cached.entries[os];
                if (entry && next[os]) {
                  next[os] = {
                    ...next[os],
                    directUrl: entry.url,
                    badge: entry.tag ? `${next[os].badge} (${entry.tag})` : next[os].badge,
                  };
                }
              });
              return next;
            });
            setIsResolved(true);
            return;
          }
        }
      } catch {
        // En entornos donde sessionStorage esté bloqueado, continuar normalmente
      }

      // 2. Consultar las releases públicas recientes en GitHub
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases?per_page=5`, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github.v3+json" },
        });

        clearTimeout(timeoutId);

        if (!res.ok) return;
        const releases: GitHubRelease[] = await res.json();
        if (!Array.isArray(releases) || releases.length === 0) return;

        const resolved: Partial<Record<OperatingSystem, CachedEntry>> = {};
        const platforms: OperatingSystem[] = ["macos", "windows", "linux"];

        for (const os of platforms) {
          const targetFilename = OS_DOWNLOADS[os].filename;
          for (const rel of releases) {
            if (rel.draft) continue;
            const asset = rel.assets?.find((a) => a.name === targetFilename);
            if (asset?.browser_download_url) {
              resolved[os] = {
                url: asset.browser_download_url,
                tag: rel.tag_name,
              };
              break;
            }
          }
        }

        if (isMounted) {
          setDownloads((prev) => {
            const next = { ...prev };
            (Object.keys(resolved) as OperatingSystem[]).forEach((os) => {
              const entry = resolved[os];
              if (entry && next[os]) {
                next[os] = {
                  ...next[os],
                  directUrl: entry.url,
                  badge: entry.tag ? `${next[os].badge} (${entry.tag})` : next[os].badge,
                };
              }
            });
            return next;
          });
          setIsResolved(true);
        }

        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              timestamp: Date.now(),
              entries: resolved,
            })
          );
        } catch {
          // ignore
        }
      } catch {
        // Fallback transparente a las URLs estáticas predeterminadas
      }
    }

    resolveUrls();

    return () => {
      isMounted = false;
    };
  }, []);

  return { downloads, isResolved };
}
