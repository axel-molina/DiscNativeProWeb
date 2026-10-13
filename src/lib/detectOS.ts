export type OperatingSystem = "macos" | "windows" | "linux" | "ios" | "android" | "unknown";

export interface OSDownloadInfo {
  id: OperatingSystem;
  name: string;
  badge: string;
  arch: string;
  filename: string;
  directUrl: string;
  instructionsUrl: string;
  minVersion: string;
  status: "available" | "coming_soon";
}

export const OS_DOWNLOADS: Record<OperatingSystem, OSDownloadInfo> = {
  macos: {
    id: "macos",
    name: "macOS",
    badge: "Universal Binary",
    arch: "Apple Silicon (M1/M2/M3/M4) & Intel x86_64",
    filename: "DiscNativePro-macOS-Universal.zip",
    directUrl: "https://github.com/axel-molina/DiscNativePro/releases/latest/download/DiscNativePro-macOS-Universal.zip",
    instructionsUrl: "https://github.com/axel-molina/DiscNativePro#compilaci%C3%B3n-y-ejecuci%C3%B3n-en-macos",
    minVersion: "macOS 11.0 Big Sur o posterior",
    status: "available",
  },
  windows: {
    id: "windows",
    name: "Windows",
    badge: "64-bit Edition",
    arch: "x64 (Intel & AMD)",
    filename: "DiscNativePro-Windows-x64.zip",
    directUrl: "https://github.com/axel-molina/DiscNativePro/releases/latest/download/DiscNativePro-Windows-x64.zip",
    instructionsUrl: "https://github.com/axel-molina/DiscNativePro#compilaci%C3%B3n-y-generaci%C3%B3n-del-exe-en-windows",
    minVersion: "Windows 10 / 11 (64-bit)",
    status: "available",
  },
  linux: {
    id: "linux",
    name: "Linux",
    badge: "Tarball x64",
    arch: "x86_64 (ALSA / JACK / OpenGL)",
    filename: "DiscNativePro-Linux-x64.tar.gz",
    directUrl: "https://github.com/axel-molina/DiscNativePro/releases/latest/download/DiscNativePro-Linux-x64.tar.gz",
    instructionsUrl: "https://github.com/axel-molina/DiscNativePro#compilaci%C3%B3n-y-ejecuci%C3%B3n-en-linux",
    minVersion: "Ubuntu 22.04+, Debian 12, Fedora 38+",
    status: "available",
  },
  ios: {
    id: "ios",
    name: "iOS",
    badge: "En Desarrollo",
    arch: "iPhone & iPad",
    filename: "DiscNativePro-iOS.ipa",
    directUrl: "#",
    instructionsUrl: "https://github.com/axel-molina/DiscNativePro",
    minVersion: "iOS 17.0+ (Próximamente)",
    status: "coming_soon",
  },
  android: {
    id: "android",
    name: "Android",
    badge: "En Desarrollo",
    arch: "ARM64 / Tablets & Móviles",
    filename: "DiscNativePro.apk",
    directUrl: "#",
    instructionsUrl: "https://github.com/axel-molina/DiscNativePro",
    minVersion: "Android 12+ (Próximamente)",
    status: "coming_soon",
  },
  unknown: {
    id: "unknown",
    name: "Multiplataforma",
    badge: "Código Fuente",
    arch: "C++20 / JUCE 8",
    filename: "DiscNativePro-Source.zip",
    directUrl: "https://github.com/axel-molina/DiscNativePro",
    instructionsUrl: "https://github.com/axel-molina/DiscNativePro",
    minVersion: "Windows, macOS, Linux",
    status: "available",
  },
};

export function detectUserOS(): OperatingSystem {
  if (typeof window === "undefined" || !navigator) {
    return "windows"; // Fallback para SSR
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const platform = (navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase() || "";

  if (userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("ipod")) {
    return "ios";
  }

  if (userAgent.includes("android")) {
    return "android";
  }

  if (platform.includes("mac") || userAgent.includes("macintosh") || userAgent.includes("mac os x")) {
    return "macos";
  }

  if (platform.includes("win") || userAgent.includes("windows")) {
    return "windows";
  }

  if (platform.includes("linux") || userAgent.includes("linux")) {
    return "linux";
  }

  return "windows";
}
