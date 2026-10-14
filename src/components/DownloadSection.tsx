"use client";

import React, { useState, useEffect } from "react";
import { 
  Download, 
  Terminal, 
  Check, 
  Copy, 
  ExternalLink, 
  Laptop, 
  Monitor, 
  Smartphone, 
  Github, 
  Layers, 
  FolderArchive,
  AlertCircle
} from "lucide-react";
import { detectUserOS, OS_DOWNLOADS, OperatingSystem, isMobileOS } from "@/lib/detectOS";
import MacInstructionsModal from "@/components/MacInstructionsModal";

export default function DownloadSection() {
  const [detectedOs, setDetectedOs] = useState<OperatingSystem>("macos");
  const [activeTab, setActiveTab] = useState<OperatingSystem>("macos");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isMacModalOpen, setIsMacModalOpen] = useState(false);

  useEffect(() => {
    const os = detectUserOS();
    setDetectedOs(os);
    if (isMobileOS(os)) {
      setActiveTab("macos");
    } else {
      setActiveTab(os);
    }
  }, []);

  const copySnippet = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const platforms = [
    {
      id: "macos" as OperatingSystem,
      name: "macOS",
      arch: "Apple Silicon & Intel (Universal)",
      req: "macOS 11.0 Big Sur o posterior",
      filename: "DiscNativePro-macOS-Universal.zip",
      downloadUrl: "https://github.com/axel-molina/DiscNativePro/releases/latest/download/DiscNativePro-macOS-Universal.zip",
      icon: Laptop,
      badge: "Binario Universal",
      cliInstructions: `# Clonar y compilar en macOS
git clone https://github.com/axel-molina/DiscNativePro.git
cd DiscNativePro
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release -j
open build/DiscNativePro_artefacts/Release/DiscNativePro.app`,
    },
    {
      id: "windows" as OperatingSystem,
      name: "Windows",
      arch: "x64 (Windows 10 / 11)",
      req: "Visual Studio C++ Runtime & WebView2",
      filename: "DiscNativePro-Windows-x64-Setup.exe",
      downloadUrl: "https://github.com/axel-molina/DiscNativePro/releases/latest/download/DiscNativePro-Windows-x64-Setup.exe",
      icon: Monitor,
      badge: "Instalador Setup .exe",
      cliInstructions: `# Compilación en Windows (PowerShell)
git clone https://github.com/axel-molina/DiscNativePro.git
cd DiscNativePro
nuget install Microsoft.Web.WebView2 -Version 1.0.2903.40 -OutputDirectory packages
cmake -B build -DCMAKE_BUILD_TYPE=Release -DJUCE_WEBVIEW2_PACKAGE_LOCATION="$PWD/packages"
cmake --build build --config Release --parallel`,
    },
    {
      id: "linux" as OperatingSystem,
      name: "Linux",
      arch: "x86_64 (Ubuntu, Debian, Fedora)",
      req: "ALSA, WebKitGTK 4.1, OpenGL",
      filename: "DiscNativePro-Linux-x64.tar.gz",
      downloadUrl: "https://github.com/axel-molina/DiscNativePro/releases/latest/download/DiscNativePro-Linux-x64.tar.gz",
      icon: Terminal,
      badge: "Tarball x64",
      cliInstructions: `# Dependencias y compilación en Ubuntu / Debian
sudo apt-get update && sudo apt-get install -y build-essential cmake ninja-build libasound2-dev libwebkit2gtk-4.1-dev libglu1-mesa-dev
git clone https://github.com/axel-molina/DiscNativePro.git
cd DiscNativePro && cmake -B build -G "Ninja" -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release --parallel`,
    },
    {
      id: "mobile" as unknown as OperatingSystem,
      name: "iOS & Android",
      arch: "iPhone, iPad & Tablets Android",
      req: "En fase de desarrollo activo",
      filename: "Próximamente en App Store / Play Store",
      downloadUrl: "https://github.com/axel-molina/DiscNativePro",
      icon: Smartphone,
      badge: "Próximamente",
      cliInstructions: `# Desarrollo Móvil (En progreso)
# Repositorio oficial: https://github.com/axel-molina/DiscNativePro
# Mantente al tanto de las ramas de desarrollo para iOS y Android.`,
    },
  ];

  const currentPlatform = platforms.find((p) => p.id === activeTab) || platforms[0];

  return (
    <section id="downloads" className="py-24 sm:py-32 bg-obsidian-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acid-500/10 text-acid-400 border border-acid-500/30 mb-4">
            <Download className="w-3.5 h-3.5" />
            CENTRO DE DESCARGAS OFICIAL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Obtén <span className="text-acid-500">DiscNativePro</span> Hoy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Descarga binarios precompilados directamente desde las versiones oficiales publicadas en GitHub Releases o compila el código fuente para tu sistema.
          </p>

          {/* Detected OS indicator */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-900 border border-white/10 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-acid-500 animate-pulse" />
            <span>Sistema detectado:</span>
            <strong className="text-white uppercase">
              {isMobileOS(detectedOs) ? `${detectedOs} (Móvil)` : detectedOs}
            </strong>
          </div>
        </div>

        {/* Mobile Info Alert if browsing from smartphone/tablet */}
        {isMobileOS(detectedOs) && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-amber-200">
            <Smartphone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
            <p>
              Estás navegando desde un dispositivo móvil (<strong>{detectedOs.toUpperCase()}</strong>). DiscNativePro es software nativo para macOS, Windows y Linux. Puedes explorar las descargas para tu ordenador a continuación.
            </p>
          </div>
        )}

        {/* Platform Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isSelected = activeTab === p.id;
            const isDetected = detectedOs === p.id || (isMobileOS(detectedOs) && (p.id as string) === "mobile");

            return (
              <button
                key={p.name}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all ${
                  isSelected
                    ? "bg-acid-500 text-obsidian-950 shadow-[0_0_25px_rgba(204,255,0,0.3)]"
                    : "bg-obsidian-900 text-zinc-300 hover:text-white border border-white/5 hover:border-white/15"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{p.name}</span>
                {isDetected && (
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold ${
                      isSelected
                        ? "bg-obsidian-950 text-acid-400"
                        : "bg-acid-500/15 text-acid-400 border border-acid-500/30"
                    }`}
                  >
                    Tu SO
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Platform Box */}
        <div className="bg-obsidian-900 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Direct Download Button & Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-zinc-300">
                    {currentPlatform.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {currentPlatform.arch}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  DiscNativePro para {currentPlatform.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  Requisitos: <span className="text-zinc-200">{currentPlatform.req}</span>
                </p>
              </div>

              {/* Direct Download Action Button */}
              {currentPlatform.name !== "iOS & Android" ? (
                <div className="space-y-3">
                  <a
                    href={currentPlatform.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (currentPlatform.id === "macos") setIsMacModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-acid-500 hover:bg-acid-400 text-obsidian-950 font-black text-base px-8 py-4 rounded-2xl transition-all shadow-xl shadow-acid-500/20 transform active:scale-95"
                  >
                    <Download className="w-5 h-5 stroke-[2.5]" />
                    <div className="text-left">
                      <div className="text-xs uppercase font-extrabold text-obsidian-900/80">
                        Descarga Inmediata (GitHub Release)
                      </div>
                      <div>{currentPlatform.filename}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-2 text-zinc-500 text-[11px] font-mono">
                    <AlertCircle className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>
                      Binarios compilados automáticamente en cada versión publicada.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-obsidian-950 border border-white/10 space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acid-500/10 text-acid-400 border border-acid-500/30">
                    EN PROCESO DE DESARROLLO
                  </span>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Las versiones para tabletas y smartphones (iOS / iPadOS y Android) se encuentran en fase de prototipado. Síguenos en GitHub para recibir notificaciones sobre los primeros builds de prueba en TestFlight y APKs públicas.
                  </p>
                </div>
              )}

              {/* Additional Action Links */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono">
                <a
                  href="https://github.com/axel-molina/DiscNativePro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Ver repositorio oficial</span>
                </a>
                <span className="text-zinc-700">&bull;</span>
                <a
                  href="https://github.com/axel-molina/DiscNativePro/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Guía completa de compilación</span>
                </a>
              </div>
            </div>

            {/* Right Column: Terminal Build Instructions */}
            <div className="lg:col-span-7 bg-obsidian-950 border border-white/10 rounded-2xl p-5 sm:p-6 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-zinc-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-acid-400" />
                  <span className="text-zinc-200 font-bold uppercase">
                    Compilación desde Código Fuente
                  </span>
                </div>
                <button
                  onClick={() => copySnippet(currentPlatform.cliInstructions, currentPlatform.name)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-obsidian-900 hover:bg-obsidian-850 border border-white/10 text-zinc-300 hover:text-white transition-all"
                >
                  {copiedCode === currentPlatform.name ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-acid-500" />
                      <span className="text-acid-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar comandos</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="overflow-x-auto text-zinc-300 leading-relaxed p-2 bg-obsidian-900/60 rounded-xl">
                <code>{currentPlatform.cliInstructions}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      {/* Mac First-Launch Helper Modal */}
      <MacInstructionsModal 
        isOpen={isMacModalOpen} 
        onClose={() => setIsMacModalOpen(false)} 
      />
    </section>
  );
}
