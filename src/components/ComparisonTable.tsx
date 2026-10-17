"use client";

import React from "react";
import { Check, X, Minus, HelpCircle, Layers } from "lucide-react";

export default function ComparisonTable() {
  const rows = [
    {
      feature: "Modelo de Licencia y Coste",
      discNative: "100% Gratis y Open Source",
      discNativeHighlight: true,
      commercial: "Suscripción ($15 – $35 / mes)",
      webDj: "Freemium con limitaciones",
    },
    {
      feature: "Rack de Efectos FX Multi-Slot",
      discNative: "3 Slots por Deck con Modos Manual e Instant",
      discNativeHighlight: true,
      commercial: "Limitado o de pago en licencias Pro",
      webDj: "Inexistente o básico",
    },
    {
      feature: "Fuentes de Biblioteca Unificadas",
      discNative: "Local + Pendrives USB + SoundCloud + YouTube",
      discNativeHighlight: true,
      commercial: "Solo local / Streaming con coste extra",
      webDj: "Archivos sueltos sin persistencia",
    },
    {
      feature: "Sampler Launchpad Integrado",
      discNative: "8 Pads One-Shot con Control Master VOL",
      discNativeHighlight: true,
      commercial: "Solo en licencias Pro",
      webDj: "No disponible",
    },
    {
      feature: "Compatibilidad Hardware DJ (MIDI & 4-Ch)",
      discNative: "Pioneer DDJ, Hercules & Preescucha CUE 4-Ch",
      discNativeHighlight: true,
      commercial: "Exige hardware certificado o licencias",
      webDj: "Inestable o sin soporte CUE",
    },
    {
      feature: "Arquitectura y Latencia de Audio",
      discNative: "C++20 & JUCE 8 (<3 ms latencia real)",
      discNativeHighlight: true,
      commercial: "Propietario cerrado",
      webDj: "WebAudio / JavaScript (>20 ms)",
    },
    {
      feature: "Consumo Promedio de Memoria RAM",
      discNative: "58 – 97 MB en sesión",
      discNativeHighlight: true,
      commercial: "1.5 GB – 3.5 GB",
      webDj: "900 MB – 1.8 GB (Pestañas Chrome)",
    },
    {
      feature: "Instalador & Auto-Actualizaciones",
      discNative: "Setup.exe con Asistente + In-App Auto-Update",
      discNativeHighlight: true,
      commercial: "Instaladores pesados con DRM invasivo",
      webDj: "Sin modo offline nativo",
    },
    {
      feature: "Recomendaciones con IA (AI Smart Match)",
      discNative: "Multi-Proveedor (Gemini, Claude, GPT, DeepSeek)",
      discNativeHighlight: true,
      commercial: "Sin IA o algoritmos cerrados",
      webDj: "Inexistente",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-obsidian-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 text-zinc-300 border border-white/10 mb-4">
            <Layers className="w-3.5 h-3.5 text-acid-400" />
            BENCHMARKS & COMPARATIVA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ¿Por Qué Elegir <span className="text-acid-500">DiscNativePro</span>?
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Comparación directa entre una solución verdaderamente nativa y las alternativas comerciales o aplicaciones basadas en navegador.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-obsidian-900 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10 bg-obsidian-950 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <th className="py-5 px-6">Característica Técnica</th>
                <th className="py-5 px-6 bg-acid-500/10 text-acid-400 border-x border-acid-500/20 font-bold">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-acid-400" />
                    DiscNativePro (Open Source)
                  </div>
                </th>
                <th className="py-5 px-6 text-zinc-400">Suites Comerciales Cerradas</th>
                <th className="py-5 px-6 text-zinc-500">Web DJ Apps (Navegador)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-semibold text-zinc-200">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 bg-acid-500/[0.04] border-x border-acid-500/10 font-bold text-white flex items-center gap-2">
                    <Check className="w-4 h-4 text-acid-400 shrink-0" />
                    <span>{row.discNative}</span>
                  </td>
                  <td className="py-4 px-6 text-zinc-400">
                    {row.commercial}
                  </td>
                  <td className="py-4 px-6 text-zinc-500">
                    {row.webDj}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
