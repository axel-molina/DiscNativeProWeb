"use client";

import React from "react";
import { motion } from "framer-motion";
import { AudioWaveform, Zap, Cpu, AppWindow, HardDriveDownload } from "lucide-react";
import { staggerContainer, fadeUp, scaleIn, viewportOnce } from "@/lib/animations";

const stems = [
  { label: "VOC", name: "Voces", barClass: "bg-cyan-400/80" },
  { label: "DRM", name: "Batería", barClass: "bg-orange-400/80" },
  { label: "BAS", name: "Bajo", barClass: "bg-purple-400/80" },
  { label: "OTH", name: "Otros", barClass: "bg-emerald-400/80" },
];

const barHeights = [
  0.35, 0.55, 0.42, 0.68, 0.5, 0.75, 0.6, 0.45, 0.82, 0.58, 0.38, 0.7, 0.52, 0.65,
  0.48, 0.78, 0.42, 0.6, 0.72, 0.55, 0.4, 0.68, 0.58, 0.8, 0.46, 0.62, 0.5, 0.74,
  0.44, 0.66, 0.56, 0.85, 0.48, 0.6, 0.38, 0.7, 0.52, 0.64, 0.45, 0.76, 0.58, 0.5,
  0.68, 0.42, 0.72, 0.55, 0.62, 0.48,
];

function WaveBars({ height, barClass, animate }: { height: number; barClass: string; animate: boolean }) {
  return (
    <div className="flex items-center gap-[3px] h-full w-full">
      {barHeights.map((h, i) => (
        <motion.div
          key={i}
          className={`flex-1 rounded-sm ${barClass}`}
          style={{ height: `${Math.max(12, h * height)}px` }}
          animate={animate ? { scaleY: [1, 0.45, 1] } : undefined}
          transition={
            animate
              ? { duration: 1.6 + (i % 6) * 0.22, repeat: Infinity, ease: "easeInOut", delay: (i % 9) * 0.15 }
              : undefined
          }
        />
      ))}
    </div>
  );
}

export default function StemsShowcase() {
  return (
    <section id="ai-stems" className="py-24 sm:py-32 bg-obsidian-950 relative border-t border-white/5 overflow-hidden">
      {/* Background glow ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tl from-purple-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 mb-4">
            <AudioWaveform className="w-3.5 h-3.5" />
            MOTOR DE IA EMBEBIDO — SIN INSTALAR NADA
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            AI Stems: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400">
              Voces e Instrumentales Separados en Tiempo Real
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Un modelo de separación de fuentes por machine learning vive dentro de la app. Cargás un tema y en segundos tenés la pista dividida en stems: silenciá las voces para cantar arriba, aislá la batería para practicar, o creá instrumentales al instante — sin esperar procesamientos eternos ni depender de la nube.
          </motion.p>
        </motion.div>

        {/* Visual Showcase Frame (decorativo) */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="bg-obsidian-900 border border-white/10 rounded-3xl p-3 sm:p-5 shadow-2xl relative"
        >
          {/* Console Header Bar */}
          <div className="flex items-center px-3 py-2.5 mb-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="ml-4 text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-500">
              Deck A — Separación en vivo
            </span>
          </div>

          {/* Waveform Split Visualization */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 sm:p-8 space-y-5">
            {/* Pista original */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-400">
                  Pista original
                </span>
                <span className="text-[10px] font-mono text-zinc-500">44.1 kHz · Estéreo</span>
              </div>
              <div className="h-16 rounded-xl bg-obsidian-950 border border-white/10 px-3">
                <WaveBars height={64} barClass="bg-zinc-400/50" animate />
              </div>
            </div>

            {/* Separador */}
            <div className="flex items-center gap-3 px-1">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-purple-400">
                Motor ML embebido
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            </div>

            {/* Stems */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stems.map((s) => (
                <div key={s.label} className="rounded-xl bg-obsidian-950 border border-white/10 p-3">
                  <div className="flex items-center gap-2 mb-2 px-1">
                    <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${s.barClass.replace("/80", "/15")} text-white`}>
                      {s.label}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-tight text-zinc-300">{s.name}</span>
                  </div>
                  <div className="h-12 rounded-lg bg-black/40 px-2">
                    <WaveBars height={48} barClass={s.barClass} animate />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Architecture Pillars */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">
              Modo Rápido: Vocal / Instrumental al Instante
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              La separación 2-stem corre en streaming adelantada al cursor de reproducción: en ~3 segundos ya tenés la versión instrumental o a capella sonando, ideal para mezclas en vivo sin pausas.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-center mb-4">
              <AppWindow className="w-5 h-5 text-purple-400" />
            </div>
            <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">
              Motor ML Embebido, Cero Dependencias
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              ONNX Runtime va incluido dentro de la aplicación en las 3 plataformas. No instalás Python, ni drivers, ni extensions: la separación de 4 stems (voces, batería, bajo y otros) funciona out of the box.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5 text-orange-400" />
            </div>
            <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">
              Acelerado con CoreML en Apple Silicon
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              En Mac con chip M1/M2/M3/M4 el motor delega en la Neural Engine para reducir el tiempo de proceso de cada tema. En Windows y Linux corre optimizado en CPU multi-hilo.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-center mb-4">
              <HardDriveDownload className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">
              Caché en Disco & Precálculo por Lote
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Cada tema separado queda cacheado: la próxima vez carga al instante sin reprocesar. Podés además precalcular la biblioteca completa o una carpeta entera desde el menú contextual.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
