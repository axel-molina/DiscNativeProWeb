"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Download, 
  Github, 
  Terminal, 
  Radio, 
  Menu, 
  X, 
  Disc3,
  Layers, 
  Sparkles,
  Cpu,
  Coffee,
  Sliders
} from "lucide-react";
import { detectUserOS, OperatingSystem, isMobileOS } from "@/lib/detectOS";
import { useReleaseDownloads } from "@/lib/useReleaseDownloads";

export default function Navbar() {
  const [os, setOs] = useState<OperatingSystem>("macos");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { downloads, latestVersion } = useReleaseDownloads();

  useEffect(() => {
    setOs(detectUserOS());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const osInfo = downloads[os] || downloads.windows;

  return (
    <>
      {/* Top Beta Notice Bar */}
      <div className="bg-obsidian-900 border-b border-white/5 py-1.5 px-4 text-xs font-mono text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 whitespace-nowrap shrink-0">
              VERSIÓN {latestVersion} (ESTABLE)
            </span>
            <span className="text-zinc-400 hidden md:inline truncate">
              Software libre en desarrollo continuo. Reporta bugs o colabora en GitHub.
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] whitespace-nowrap shrink-0">
            <a
              href="https://github.com/axel-molina/DiscNativePro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-acid-500 transition-colors flex items-center gap-1 text-zinc-300 font-medium"
            >
              <Github className="w-3.5 h-3.5" />
              <span>axel-molina/DiscNativePro</span>
            </a>
            <span className="text-zinc-600 hidden lg:inline">|</span>
            <span className="text-zinc-500 hidden lg:inline">
              C++20 &bull; JUCE 8 &bull; Latencia Ultrabaja
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-obsidian-950/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80"
            : "bg-obsidian-950/60 backdrop-blur-sm border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-obsidian-800 border border-white/10 flex items-center justify-center p-1.5 group-hover:border-acid-500/50 transition-colors shrink-0">
                <Image
                  src="/app-icon.png"
                  alt="DiscNativePro Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-black tracking-tight text-white flex items-center gap-1 whitespace-nowrap">
                  DISCNATIVE<span className="text-acid-500">PRO</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-mono text-zinc-400 whitespace-nowrap hidden sm:inline">
                  Open Source DJ Engine
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Single-Line Guaranteed with whitespace-nowrap) */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3.5 2xl:gap-5 text-xs xl:text-sm font-medium text-zinc-300 ml-2 xl:ml-6 whitespace-nowrap">
              <a
                href="#features"
                className="hover:text-white transition-colors flex items-center gap-1 text-acid-400 font-bold whitespace-nowrap shrink-0 px-2 py-0.5 rounded-lg bg-acid-500/10 border border-acid-500/20 hover:bg-acid-500/20"
              >
                <Sliders className="w-3.5 h-3.5 text-acid-400 shrink-0" />
                <span>FX & Sampler</span>
              </a>
              <a
                href="#ai-smart-match"
                className="hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 py-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyanDeck-400 shrink-0" />
                <span>AI Match</span>
              </a>
              <a
                href="#features"
                className="hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 py-1"
              >
                <Radio className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Fuentes & USB</span>
              </a>
            </nav>

            {/* Desktop Actions: Cafecito, GitHub & Download CTA */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href="https://cafecito.app/discnativepro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 transition-all text-xs font-mono font-bold shrink-0"
                title="Apoyar el proyecto en Cafecito"
              >
                <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Cafecito</span>
              </a>

              <a
                href="https://github.com/axel-molina/DiscNativePro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-obsidian-850 hover:bg-obsidian-800 text-zinc-300 hover:text-white hover:border-white/20 transition-all shrink-0"
                title="Ver código fuente en GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="#downloads"
                className="flex items-center gap-2 bg-acid-500 hover:bg-acid-400 text-obsidian-950 font-bold px-3.5 xl:px-4 py-2.5 rounded-xl text-xs xl:text-sm transition-all transform active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4 stroke-[2.5] shrink-0" />
                {isMobileOS(os) ? (
                  <span>Descargas (Mac & PC)</span>
                ) : (
                  <>
                    <span className="hidden xl:inline">Descargar ({osInfo.name})</span>
                    <span className="inline xl:hidden">Descargar</span>
                  </>
                )}
              </a>
            </div>

            {/* Mobile & Tablet Hamburger Toggle (Visible on screens < 1024px) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <a
                href="#downloads"
                className="bg-acid-500 hover:bg-acid-400 text-obsidian-950 font-bold px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                <span className="hidden sm:inline font-bold">Descargar</span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white focus:outline-none rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Abrir menú"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-obsidian-900 border-b border-white/10 px-4 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-base font-medium text-zinc-300">
              <a
                href="#ai-smart-match"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-acid-500 transition-colors py-1 flex items-center gap-2 text-acid-400"
              >
                <Sparkles className="w-4 h-4 text-acid-400" />
                Recomendaciones IA (AI Match)
              </a>
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-acid-500 transition-colors py-1"
              >
                Características & Arquitectura
              </a>
              <a
                href="#youtube-dj"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-acid-500 transition-colors py-1 flex items-center gap-2"
              >
                <Radio className="w-4 h-4 text-red-500" />
                Video DJ YouTube
              </a>
              <a
                href="#downloads"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-acid-500 transition-colors py-1"
              >
                Centro de Descargas
              </a>
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#downloads"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-acid-500 text-obsidian-950 font-bold px-4 py-3 rounded-xl text-center"
              >
                <Download className="w-4 h-4" />
                {isMobileOS(os) ? "Descargas (Mac & PC)" : `Descargar para ${osInfo.name}`}
              </a>
              <a
                href="https://cafecito.app/discnativepro"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-obsidian-950 font-bold px-4 py-3 rounded-xl text-center text-sm"
              >
                <Coffee className="w-4 h-4" />
                Regalar un café (Cafecito)
              </a>
              <a
                href="https://github.com/axel-molina/DiscNativePro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-obsidian-800 text-zinc-200 border border-white/10 px-4 py-3 rounded-xl text-center text-sm"
              >
                <Github className="w-4 h-4" />
                Ver Repositorio GitHub
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
