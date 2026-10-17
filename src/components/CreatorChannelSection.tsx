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
  Zap,
  Terminal,
  Layers
} from "lucide-react";

export default function CreatorChannelSection() {
  const shortsCards = [
    {
      id: "app-features",
      tag: "NOVEDADES & UPDATES",
      title: "Funcionalidades de la App en 60s",
      desc: "Demostraciones de audio, Sampler Launchpad, AutoMix y YouTube Video DJ en acción.",
      accent: "from-red-600/25 via-red-500/10 to-transparent",
      borderColor: "border-red-500/30 group-hover:border-red-500/60",
      glowColor: "rgba(239, 68, 68, 0.35)",
      tagStyle: "bg-red-500/15 text-red-400 border-red-500/30",
      icon: Sparkles,
      iconColor: "text-red-400",
      duration: "0:58",
    },
    {
      id: "cpp-engine",
      tag: "BAJO EL CAPÓ",
      title: "Arquitectura C++20 & JUCE 8",
      desc: "Cómo construimos un motor DJ de latencia ultra-baja sin capas lentas de Electron.",
      accent: "from-acid-500/25 via-acid-500/10 to-transparent",
      borderColor: "border-acid-500/30 group-hover:border-acid-500/60",
      glowColor: "rgba(204, 255, 0, 0.35)",
      tagStyle: "bg-acid-500/15 text-acid-400 border-acid-500/30",
      icon: Cpu,
      iconColor: "text-acid-400",
      duration: "0:45",
    },
    {
      id: "software-dev",
      tag: "TIPS DE PROGRAMACIÓN",
      title: "Consejos de Ingeniería & Código",
      desc: "Patrones de diseño de software, optimizaciones de memoria y buenas prácticas de desarrollo.",
      accent: "from-cyanDeck-500/25 via-cyanDeck-500/10 to-transparent",
      borderColor: "border-cyanDeck-500/30 group-hover:border-cyanDeck-500/60",
      glowColor: "rgba(0, 229, 255, 0.35)",
      tagStyle: "bg-cyanDeck-500/15 text-cyanDeck-400 border-cyanDeck-500/30",
      icon: Code2,
      iconColor: "text-cyanDeck-400",
      duration: "0:52",
    },
  ];

  return (
    <section
      id="creator-channel"
      className="py-24 sm:py-32 bg-obsidian-950 relative border-t border-white/5 overflow-hidden"
    >
      {/* Ambient Red & Acid Glow Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[400px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-acid-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Grid overlay */}
      <div className="absolute inset-0 bg-dj-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
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

        {/* 3 Vertical Shorts Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {shortsCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.id}
                href="https://www.youtube.com/@AxelCodeDev/shorts"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`group relative bg-obsidian-900 border ${card.borderColor} rounded-3xl p-6 flex flex-col justify-between min-h-[440px] sm:min-h-[480px] overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl`}
                style={{
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.8)",
                }}
              >
                {/* Background Card Aura */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${card.accent} rounded-full blur-3xl pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity`}
                />

                {/* Top Bar inside Card: Phone Status / Tag & Time */}
                <div className="relative z-10 flex items-center justify-between gap-2 mb-6">
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${card.tagStyle}`}
                  >
                    {card.tag}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>{card.duration}</span>
                  </div>
                </div>

                {/* Central Visual: Pulsing Play Button inside Stylized Frame */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6">
                  {/* Outer pulsating ring */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md group-hover:bg-red-500/40 transition-colors animate-pulse-subtle" />
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-obsidian-950/90 border border-white/20 group-hover:border-red-500 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-[0_0_25px_rgba(239,68,68,0.3)]">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current ml-1 group-hover:text-red-500 group-hover:scale-105 transition-all" />
                    </div>
                  </div>

                  {/* Category Micro-Icon */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Icon className={`w-4 h-4 ${card.iconColor}`} />
                    <span className="tracking-wider uppercase">YouTube Shorts</span>
                  </div>
                </div>

                {/* Bottom Metadata & Equalizer Bars */}
                <div className="relative z-10 pt-4 border-t border-white/10">
                  <h3 className="text-lg sm:text-xl font-black uppercase text-white mb-2 tracking-tight group-hover:text-red-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {card.desc}
                  </p>

                  <div className="flex items-center justify-between text-xs font-mono pt-2">
                    <span className="text-zinc-400 group-hover:text-white flex items-center gap-1.5 transition-colors">
                      <span>Ver Short</span>
                      <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                    </span>

                    {/* Animated Sound Equalizer Bars */}
                    <div className="flex items-end gap-1 h-4">
                      <span className="w-1 bg-red-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
                      <span className="w-1 bg-red-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-4" />
                      <span className="w-1 bg-orange-500 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                      <span className="w-1 bg-acid-400 rounded-full animate-[pulse_1.0s_ease-in-out_infinite] h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Global CTA Banner: Direct to Channel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-red-500/30 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle top glow line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                <Youtube className="w-5 h-5 text-red-500 fill-current" />
                <span className="font-mono font-bold text-white text-base">
                  youtube.com/@AxelCodeDev
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400">
                Suscríbete para no perderte actualizaciones de la app y guías de desarrollo de software.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@AxelCodeDev/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 via-red-500 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black text-sm sm:text-base px-6 py-3.5 rounded-2xl transition-all transform hover:-translate-y-0.5 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Explorar Shorts en YouTube</span>
              <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
