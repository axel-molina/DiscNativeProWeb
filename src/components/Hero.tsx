"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Download, 
  Github, 
  Terminal, 
  Check, 
  Copy, 
  AlertTriangle, 
  Cpu, 
  Radio, 
  Sliders, 
  Monitor,
  Laptop,
  Smartphone,
  ShieldCheck
} from "lucide-react";
import { detectUserOS, OperatingSystem, isMobileOS } from "@/lib/detectOS";
import { useReleaseDownloads } from "@/lib/useReleaseDownloads";
import MacInstructionsModal from "@/components/MacInstructionsModal";

export default function Hero() {
  const [os, setOs] = useState<OperatingSystem>("macos");
  const [copiedClone, setCopiedClone] = useState(false);
  const [isMacModalOpen, setIsMacModalOpen] = useState(false);
  const { downloads, latestVersion } = useReleaseDownloads();

  useEffect(() => {
    setOs(detectUserOS());
  }, []);

  const currentOS = downloads[os] || downloads.windows;

  const copyCloneCommand = () => {
    navigator.clipboard.writeText("git clone https://github.com/axel-molina/DiscNativePro.git");
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2500);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32 bg-obsidian-950">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-40 sm:opacity-50 scale-105"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>
        {/* Dark Cinematic Overlays for Contrast & Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/80 via-obsidian-950/70 to-obsidian-950" />
        <div className="absolute inset-0 bg-dj-grid opacity-30" />
      </div>

      {/* Glow Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-acid-500/15 blur-[130px] pointer-events-none rounded-full z-0" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-cyanDeck-500/10 blur-[120px] pointer-events-none rounded-full z-0" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-orangeDeck-500/10 blur-[120px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Pill Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-acid-500/10 text-acid-400 border border-acid-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-acid-500 animate-pulse" />
              C++20 & JUCE 8 NATIVE
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800/80 text-zinc-300 border border-white/10">
              <Github className="w-3.5 h-3.5 text-zinc-400" />
              100% CÓDIGO ABIERTO
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800/80 text-zinc-300 border border-white/10">
              <Cpu className="w-3.5 h-3.5 text-cyanDeck-400" />
              LATENCIA ULTRABAJA
            </span>
          </div>

          {/* Main Hero Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]">
            Potencia Nativa.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-500 via-acid-400 to-lime-300">
              Latencia Cero.
            </span>
            <br />
            Domina La Pista.
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg sm:text-xl text-zinc-400 font-normal max-w-3xl leading-relaxed">
            <strong className="text-zinc-200 font-semibold">DiscNativePro</strong> es la suite DJ de alto rendimiento desarrollada en C++20 y JUCE 8 para <span className="text-zinc-200">macOS, Windows y Linux</span>. Olvídate de capas lentas de Electron o navegadores: disfruta de <strong className="text-zinc-200">separación de STEMS en vivo</strong>, sampler launchpad de 8 pads, integración con <strong className="text-zinc-200">SoundCloud & YouTube</strong>, exploración nativa de <strong className="text-zinc-200">pendrives USB</strong>, AutoMix inteligente y controladoras MIDI físicas.
          </p>

          {/* Release v1.1.1 Status Notice */}
          <div className="mt-8 w-full max-w-2xl bg-obsidian-900/90 border border-emerald-500/30 rounded-2xl p-4 text-left flex items-start gap-3 backdrop-blur-sm shadow-lg shadow-emerald-500/5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-bold text-emerald-400 font-mono text-xs uppercase bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                  VERSIÓN {latestVersion} DISPONIBLE
                </span>
                <span className="text-zinc-400 text-xs font-mono">100% Open Source &bull; Sin Telemetría</span>
              </div>
              DiscNativePro es un proyecto de código abierto construido con el framework JUCE 8. Cuenta con instalador oficial con asistente para Windows (<span className="text-zinc-200 font-mono font-semibold">Setup.exe</span>), binarios universales para macOS, tarball para Linux y sistema de auto-actualización silencioso integrado directamente en la app.
            </div>
          </div>

          {/* Direct Download & Action CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 w-full max-w-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              {/* Primary Download for Detected OS / Desktop CTA on mobile */}
              {isMobileOS(os) ? (
                <a
                  href="#downloads"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 bg-acid-500 hover:bg-acid-400 text-obsidian-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_35px_rgba(204,255,0,0.35)]"
                >
                  <Download className="w-5 h-5 stroke-[2.5]" />
                  <div className="text-left">
                    <span className="block text-xs uppercase tracking-wider font-bold text-obsidian-900/80">
                      Software de Escritorio
                    </span>
                    <span>Descargar para Mac & PC</span>
                  </div>
                </a>
              ) : (
                <a
                  href={currentOS.status === "available" ? currentOS.directUrl : "#downloads"}
                  target={currentOS.status === "available" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (os === "macos") setIsMacModalOpen(true);
                  }}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 bg-acid-500 hover:bg-acid-400 text-obsidian-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_35px_rgba(204,255,0,0.35)]"
                >
                  <Download className="w-5 h-5 stroke-[2.5]" />
                  <div className="text-left">
                    <span className="block text-xs uppercase tracking-wider font-bold text-obsidian-900/80">
                      Descarga Inmediata ({currentOS.filename})
                    </span>
                    <span>Descargar para {currentOS.name}</span>
                  </div>
                </a>
              )}

              {/* GitHub Repo Button */}
              <a
                href="https://github.com/axel-molina/DiscNativePro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-obsidian-850 hover:bg-obsidian-800 text-zinc-200 border border-white/10 hover:border-white/20 font-bold px-6 py-4 rounded-2xl transition-all text-base"
              >
                <Github className="w-5 h-5" />
                <span>Ver en GitHub</span>
              </a>
            </div>

            {isMobileOS(os) ? (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-white/10 text-xs text-zinc-300 font-mono mt-1 text-center">
                <Smartphone className="w-3.5 h-3.5 text-acid-400 shrink-0" />
                <span>Versión móvil nativa (iOS & Android) en desarrollo activo</span>
              </div>
            ) : (
              <a
                href="#downloads"
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
              >
                ¿Usas otro sistema operativo? Ver todas las descargas
              </a>
            )}
          </div>

          {/* Quick Clone Snippet */}
          <div className="mt-6 flex items-center gap-2 bg-obsidian-900/90 border border-white/10 rounded-xl px-4 py-2 font-mono text-xs text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-zinc-500" />
            <span className="text-zinc-500">$</span>
            <code className="text-zinc-300">git clone https://github.com/axel-molina/DiscNativePro.git</code>
            <button
              onClick={copyCloneCommand}
              className="ml-2 p-1 hover:text-white transition-colors text-zinc-400"
              title="Copiar comando git"
            >
              {copiedClone ? (
                <Check className="w-3.5 h-3.5 text-acid-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

            {/* Supported OS Pill Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-zinc-300" /> macOS (Apple Silicon & Intel)
            </span>
            <span className="text-zinc-700">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-zinc-300" /> Windows 10/11 (x64)
            </span>
            <span className="text-zinc-700">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-zinc-300" /> Linux (x86_64)
            </span>
            <span className="text-zinc-700">&bull;</span>
            <span className="flex items-center gap-1.5 text-acid-400 font-medium">
              <Smartphone className="w-4 h-4 text-acid-400" /> iOS & Android (Próximamente)
            </span>
          </div>

          {/* Real Software Showcase Window in Hero */}
          <div className="mt-14 w-full max-w-5xl mx-auto">
            {/* Window Container */}
            <div className="bg-obsidian-900 border border-white/10 rounded-3xl p-3 sm:p-5 shadow-2xl relative overflow-hidden group">
              {/* Top ambient glow */}
              <div className="absolute top-0 right-1/4 w-80 h-32 bg-acid-500/10 blur-3xl pointer-events-none rounded-full" />

              {/* Window Titlebar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 mb-3 border-b border-white/10 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono font-bold text-zinc-300 ml-2">
                    DiscNativePro {latestVersion}
                  </span>
                </div>

                {/* View anchor & RAM footprint */}
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-acid-400 font-bold bg-acid-500/10 border border-acid-500/20 px-2 py-0.5 rounded">
                    58 &ndash; 97 MB RAM
                  </span>
                </div>
              </div>

              {/* Real Screenshot Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                <Image
                  src="/screenshots/discnative-pro-dual-deck.png"
                  alt="Captura real de la cabina Dual Deck de DiscNativePro"
                  width={1024}
                  height={555}
                  priority
                  unoptimized
                  className="w-full h-auto object-cover"
                />

                {/* Bottom Overlay Pill Bar */}
                <div className="absolute bottom-3 left-3 right-3 hidden sm:flex items-center justify-center p-3 rounded-xl bg-obsidian-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300">
                  <span className="text-zinc-400 font-medium">Motor de Audio C++20 con JUCE 8</span>
                </div>
              </div>
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
