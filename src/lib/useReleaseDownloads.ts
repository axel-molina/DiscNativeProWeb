"use client";

import { useState, useEffect } from "react";
import { OS_DOWNLOADS, OSDownloadInfo, OperatingSystem } from "./detectOS";

const GITHUB_REPO = "axel-molina/DiscNativePro";
const CACHE_KEY = "dnp_latest_version_v4";

interface GitHubRelease {
  tag_name: string;
  draft: boolean;
}

/**
 * Los botones de descarga usan SIEMPRE las URLs estáticas de OS_DOWNLOADS
 * (releases/latest/download/...), que GitHub redirige al último release
 * publicado: ningún caché del navegador puede hacer bajar una versión vieja.
 * La API de GitHub solo resuelve el número de versión visible (badge, ticker)
 * con patrón stale-while-revalidate: se muestra el caché al instante y se
 * re-consulta en cada carga para que no quede clavado un tag viejo.
 */
export function useReleaseDownloads() {
  const [downloads] = useState<Record<OperatingSystem, OSDownloadInfo>>(OS_DOWNLOADS);
  const [latestVersion, setLatestVersion] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    try {
      return sessionStorage.getItem(CACHE_KEY) || "";
    } catch {
      return "";
    }
  });
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function resolveVersion() {
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

        const resolvedVersion = releases.find((r) => !r.draft)?.tag_name || "";
        if (!resolvedVersion || !isMounted) return;

        setLatestVersion(resolvedVersion);
        setIsResolved(true);
        try {
          sessionStorage.setItem(CACHE_KEY, resolvedVersion);
        } catch {
          // ignore
        }
      } catch {
        // Sin red / rate limit: se mantiene el caché o vacío, los links
        // de descarga siguen apuntando al último release vía /latest/.
      }
    }

    resolveVersion();

    return () => {
      isMounted = false;
    };
  }, []);

  return { downloads, latestVersion, isResolved };
}
