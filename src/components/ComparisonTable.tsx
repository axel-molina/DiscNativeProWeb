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
      feature: "Arquitectura del Motor de Audio",
      discNative: "C++20 & JUCE 8 Nativo",
      discNativeHighlight: true,
      commercial: "Propietario cerrado",
      webDj: "WebAudio / JavaScript (Lento)",
    },
    {
      feature: "Latencia de Audio (Drivers)",
      discNative: "CoreAudio, WASAPI, ALSA (<3 ms)",
      discNativeHighlight: true,
      commercial: "ASIO / CoreAudio nativo",
      webDj: "Dependiente del navegador (>20 ms)",
    },
    {
      feature: "Video DJ con YouTube Nativo Embebido",
      discNative: "Sí (WebKit & WebView2 HW)",
      discNativeHighlight: true,
      commercial: "No / Requiere plugins costosos",
      webDj: "Parcial con iframes bloqueados",
    },
    {
      feature: "Consumo Promedio de Memoria RAM",
      discNative: "~140 MB en reposo",
      discNativeHighlight: true,
      commercial: "1.5 GB – 3.5 GB",
      webDj: "900 MB – 1.8 GB (Pestañas Chrome)",
    },
    {
      feature: "Recomendaciones con IA (AI Smart Match)",
      discNative: "Multi-Proveedor (Gemini, Claude, GPT, DeepSeek) + Híbrido Local",
      discNativeHighlight: true,
      commercial: "Sin IA o algoritmos cerrados",
      webDj: "Inexistente",
    },
    {
      feature: "Privacidad & Telemetría",
      discNative: "Zero telemetría / Sin cuentas obligatorias",
      discNativeHighlight: true,
      commercial: "Activación DRM y recolección de datos",
      webDj: "Cookies y anuncios de terceros",
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
