"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Youtube,
  Code2,
  Cpu,
  Sparkles,
  ExternalLink,
  Layers,
  CheckCircle2
} from "lucide-react";

export default function CreatorChannelSection() {
  const channelHighlights = [
    { label: "Novedades de la App", icon: Sparkles, color: "text-red-400" },
    { label: "Arquitectura C++20 & JUCE 8", icon: Cpu, color: "text-acid-400" },
    { label: "Tips de Ingeniería & Audio", icon: Code2, color: "text-cyanDeck-400" },
  ];

  return (
    <section
      id="creator-channel"
      className="py-20 sm:py-28 bg-obsidian-950 relative border-t border-white/5 overflow-hidden"
    >
      {/* Ambient Red & Acid Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-red-600/15 via-red-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Grid overlay */}
      <div className="absolute inset-0 bg-dj-dots opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/30 mb-5 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            <Youtube className="w-4 h-4 fill-current text-red-500" />
            <span>CANAL OFICIAL DEL CREADOR</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping inline-block ml-1" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white"
          >
            Detrás Del Código: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-400">
              @AxelCodeDev
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Aprende sobre programación de audio en C++20, arquitectura de bajo nivel y descubre las últimas novedades y trucos de DiscNativePro en formato vertical.
          </motion.p>
        </div>

        {/* Hero Interactive Card: Direct Channel Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-3xl mx-auto bg-gradient-to-b from-obsidian-900/95 via-obsidian-900/90 to-obsidian-950 border border-red-500/30 hover:border-red-500/50 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl transition-all duration-300 group"
          style={{
            boxShadow: "0 10px 40px -10px rgba(239, 68, 68, 0.2)",
          }}
        >
          {/* Top subtle glow line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          {/* Background subtle radial aura */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/25 transition-colors" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Content Area */}
            <div className="text-center md:text-left flex-1 space-y-4">
              {/* Channel Tag with Live Waveform */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-obsidian-950 border border-white/10 text-white font-mono font-bold text-sm">
                  <Youtube className="w-4 h-4 text-red-500 fill-current" />
                  <span>youtube.com/@AxelCodeDev</span>
                </div>

                {/* Animated Equalizer Waveform Bars */}
                <div className="flex items-end gap-1 h-4 px-2 py-0.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="w-1 bg-red-500 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-3" />
                  <span className="w-1 bg-red-400 rounded-full animate-[pulse_1.1s_ease-in-out_infinite] h-4" />
                  <span className="w-1 bg-orange-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-2.5" />
                  <span className="w-1 bg-acid-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-3.5" />
                </div>
              </div>

              {/* Main Subheading */}
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                Videos Cortos Sobre Desarrollo & App
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-lg">
                Suscríbete al canal para ver en primicia cada nueva funcionalidad, análisis de código, optimizaciones de rendimiento y guías para desarrolladores.
              </p>

              {/* Quick Topic Badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
                {channelHighlights.map((hl, idx) => {
                  const Icon = hl.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-obsidian-950/80 border border-white/10 text-[11px] font-mono text-zinc-300"
                    >
                      <Icon className={`w-3.5 h-3.5 ${hl.color}`} />
                      <span>{hl.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Right Action Area */}
            <div className="shrink-0 w-full md:w-auto flex flex-col items-center gap-2">
              <motion.a
                href="https://www.youtube.com/@AxelCodeDev/shorts"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-500 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black text-base sm:text-lg px-8 py-4 rounded-2xl transition-all shadow-[0_0_35px_rgba(239,68,68,0.4)] hover:shadow-[0_0_45px_rgba(239,68,68,0.6)]"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current ml-0.5 text-white" />
                </div>
                <span>Explorar Shorts en YouTube</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </motion.a>

              <span className="text-[11px] font-mono text-zinc-500 text-center">
                Canal oficial &bull; Acceso libre en YouTube
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
