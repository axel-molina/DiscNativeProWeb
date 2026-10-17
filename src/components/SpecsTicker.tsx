"use client";

import React from "react";
import { 
  Zap, 
  Cpu, 
  Radio, 
  Code2, 
  Sparkles,
  Sliders,
  Layers,
  Download,
  RefreshCw
} from "lucide-react";
import { useReleaseDownloads } from "@/lib/useReleaseDownloads";

export default function SpecsTicker() {
  const { latestVersion } = useReleaseDownloads();

  const specs = [
    { label: "VERSIÓN", value: `${latestVersion} Estable`, icon: Code2 },
    { label: "STEMS EN VIVO", value: "Cortes Kill & Solo por Deck", icon: Sliders },
    { label: "SAMPLER PADS", value: "8 Triggers One-Shot", icon: Layers },
    { label: "FUENTES UNIFICADAS", value: "Local + USB + YouTube + SoundCloud", icon: Radio },
    { label: "HARDWARE READY", value: "Pioneer DDJ, Hercules & MIDI USB", icon: Cpu },
    { label: "INSTALADOR WINDOWS", value: "Setup.exe con Asistente", icon: Download },
    { label: "IN-APP UPDATER", value: "Auto-Update Silencioso", icon: RefreshCw },
    { label: "LATENCIA MOTOR", value: "<3 ms (C++20 & JUCE 8)", icon: Zap },
    { label: "IA SMART MATCH", value: "Multi-Proveedor Contextual", icon: Sparkles },
  ];

  return (
    <div className="border-y border-white/10 bg-obsidian-900/90 py-5 overflow-hidden relative">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-dj-dots opacity-40 pointer-events-none" />

      {/* Marquee ticker wrapper */}
      <div className="flex w-max animate-marquee space-x-10 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-zinc-300">
        {[...specs, ...specs, ...specs].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-3 shrink-0">
              <span className="p-1 rounded bg-acid-500/10 text-acid-400 border border-acid-500/20">
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span className="text-zinc-500">{item.label}:</span>
              <span className="text-white font-extrabold">{item.value}</span>
              <span className="text-acid-500 font-bold ml-6">+</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
