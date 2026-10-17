"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Github, 
  Terminal, 
  Disc3, 
  Cpu, 
  Radio, 
  Heart, 
  ExternalLink,
  Laptop,
  Monitor,
  Coffee,
  ShieldCheck
} from "lucide-react";
import { useReleaseDownloads } from "@/lib/useReleaseDownloads";

export default function Footer() {
  const { latestVersion } = useReleaseDownloads();

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 text-zinc-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-obsidian-900 border border-white/10 flex items-center justify-center p-1.5">
                <Image
                  src="/app-icon.png"
                  alt="DiscNativePro"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                DISCNATIVE<span className="text-acid-500">PRO</span>
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Suite DJ profesional {latestVersion} de código abierto para macOS, Windows y Linux. Desarrollada en C++20 y JUCE 8 con Sampler Launchpad, YouTube Video DJ, SoundCloud, biblioteca USB, AutoMix inteligente y soporte para controladoras MIDI.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/axel-molina/DiscNativePro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-obsidian-900 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-colors"
                title="GitHub Repo"
              >
                <Github className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-zinc-500">
                Licencia Open Source comunitaria
              </span>
            </div>
          </div>

          {/* Links: Software & Modos */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Herramientas
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#features" className="hover:text-acid-400 transition-colors">
                  Rack de Efectos FX & Sampler
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-acid-400 transition-colors">
                  SoundCloud & Pendrives USB
                </a>
              </li>
              <li>
                <a href="#youtube-dj" className="hover:text-acid-400 transition-colors">
                  Video DJ con YouTube
                </a>
              </li>
              <li>
                <a href="#ai-smart-match" className="hover:text-acid-400 transition-colors">
                  AI Smart Match
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Descargas */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Sistemas Soportados
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Windows 10 / 11 (Setup.exe Oficial)
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  macOS (Apple Silicon & Intel)
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Linux (Ubuntu, Debian, Fedora)
                </a>
              </li>
              <li className="text-zinc-600">
                iOS & Android (En desarrollo)
              </li>
            </ul>
          </div>

          {/* Links: Comunidad & Código */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Comunidad GitHub
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://github.com/axel-molina/DiscNativePro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Repositorio Oficial</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/axel-molina/DiscNativePro/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Reportar Bugs & Issues</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/axel-molina/DiscNativePro/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Enviar Pull Requests</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/axel-molina/DiscNativePro/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Versiones & Releases</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://cafecito.app/discnativepro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors flex items-center gap-1.5"
                >
                  <Coffee className="w-3.5 h-3.5 text-amber-400" />
                  <span>Apoyar en Cafecito</span>
                  <ExternalLink className="w-3 h-3 text-amber-400/70" />
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <Link
                  href="/legal"
                  className="hover:text-acid-400 transition-colors flex items-center gap-1.5 text-zinc-300 font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-acid-400" />
                  <span>Aviso Legal & Privacidad</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} DiscNativePro Project.</span>
            <span>&bull;</span>
            <Link
              href="/legal"
              className="text-zinc-400 hover:text-white underline underline-offset-4 transition-colors"
            >
              Privacidad y Términos de Uso
            </Link>
          </div>
          <div className="text-center sm:text-right text-[11px] text-zinc-600">
            Aviso: DiscNativePro es un desarrollo independiente de código abierto. Pioneer DJ, DDJ, Hercules, Rekordbox, Serato, SoundCloud y YouTube son marcas de sus respectivos titulares.
          </div>
        </div>
      </div>
    </footer>
  );
}
