"use client";

import React from "react";
import { 
  Zap, 
  Cpu, 
  Flame, 
  Radio, 
  CheckCircle2, 
  Code2, 
  Activity, 
  Sparkles 
} from "lucide-react";

export default function SpecsTicker() {
  const specs = [
    { label: "LATENCIA MOTOR", value: "0 ms Overhead (C++20)", icon: Zap },
    { label: "INDEX YOUTUBE", value: "0.2 ms Respuesta", icon: Radio },
    { label: "IA SMART MATCH", value: "Recomendaciones Contextuales", icon: Sparkles },
    { label: "ESCANEO ARMÓNICO", value: "Camelot Wheel & Key", icon: Activity },
    { label: "LICENCIA", value: "100% Código Abierto", icon: Code2 },
    { label: "DRIVERS NATIVOS", value: "CoreAudio / ASIO / ALSA", icon: Cpu },
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
