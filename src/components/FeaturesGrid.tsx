"use client";

import React from "react";
import { 
  Radio, 
  Sparkles, 
  Activity, 
  Sliders, 
  FolderTree, 
  Mic, 
  Cpu, 
  Layers, 
  ArrowUpRight,
  ShieldCheck,
  Disc3,
  Video,
  Bot
} from "lucide-react";

export default function FeaturesGrid() {
  const coreFeatures = [
    {
      id: "ai-smart-match",
      title: "AI Smart Match: Recomendaciones Multi-Proveedor",
      category: "INTELIGENCIA DE SESIÓN",
      badge: "Gemini / Claude / GPT / DeepSeek",
      accent: "from-acid-500/20 to-transparent",
      borderColor: "border-acid-500/30",
      tagColor: "text-acid-400 bg-acid-500/10 border-acid-500/20",
      description:
        "Asistente nativo en C++ que analiza en tiempo real la pista activa en Deck 1, Deck 2 o YouTube. Genera transiciones armónicas (Camelot Wheel), señales de audiencia en vivo y sugerencias de género, cruzando la búsqueda con tu biblioteca local en disco o Video DJ de YouTube.",
      points: [
        "Soporte nativo para Gemini 2.5 Flash, Claude 3.5 Haiku, GPT-4o-mini, DeepSeek y OpenRouter",
        "Resolución híbrida inmediata: detecta y carga pistas locales con 1 clic a Deck A/B",
        "Fallback determinístico sin conexión ni API: garantizado incluso sin acceso a internet",
      ],
      icon: Bot,
    },
    {
      id: "youtube-dj",
      title: "Streaming y Video DJ con YouTube Nativo",
      category: "INNOVACIÓN DE CABINA",
      badge: "0.2 ms Búsqueda",
      accent: "from-red-500/20 to-transparent",
      borderColor: "border-red-500/30",
      tagColor: "text-red-400 bg-red-500/10 border-red-500/20",
      description:
        "Busca pistas y sets públicos en YouTube directamente desde la aplicación sin salir de la sesión. Los reproductores acelerados por hardware nativo (WebKit en macOS, WebView2 en Windows y WebKitGTK en Linux) sincronizan el audio y mezclan el video en directo utilizando el crossfader central.",
      points: [
        "Buscador público integrado de ultra alta velocidad (0.2 ms)",
        "Mezcla de pistas y video dual sincronizado con el crossfader",
        "Aceleración nativa por GPU sin sobrecarga de navegador externo",
      ],
      icon: Video,
    },
    {
      id: "automix",
      title: "Motor AutoMix para Mezclas Automáticas",
      category: "INTELIGENCIA DE AUDIO",
      badge: "Transiciones Suaves",
      accent: "from-acid-500/20 to-transparent",
      borderColor: "border-acid-500/30",
      tagColor: "text-acid-400 bg-acid-500/10 border-acid-500/20",
      description:
        "Diseñado para sesiones extendidas y momentos donde necesitas que la música no pare. AutoMix analiza el tiempo de la pista, calcula el punto óptimo de salida y ejecuta transiciones automáticas modulando curvas de volumen y filtrado de frecuencias.",
      points: [
        "Transiciones graduales de volumen basadas en compases",
        "Compatibilidad con canciones locales y fuentes de streaming",
        "Control instantáneo para retomar la mezcla manual en cualquier momento",
      ],
      icon: Sparkles,
    },
    {
      id: "bpm-key-scanner",
      title: "Escáner de BPM y Tonalidad Camelot",
      category: "ANÁLISIS MUSICAL",
      badge: "Detección Armónica",
      accent: "from-cyanDeck-500/20 to-transparent",
      borderColor: "border-cyanDeck-500/30",
      tagColor: "text-cyanDeck-400 bg-cyanDeck-500/10 border-cyanDeck-500/20",
      description:
        "Analizador offline para tu biblioteca de audio local. Extrae la cuadrícula de ritmos (BeatGrid), detecta tempo exacto con BeatDetector y asigna la clave musical en el estándar Camelot Wheel (8A, 9B, etc.) para transiciones armónicas sin disonancias.",
      points: [
        "Detección precisa de BPM y sincronización BeatGrid al milisegundo",
        "Clasificación musical armónica en rueda Camelot",
        "Generador procedural de carátulas para pistas sin portada incrustada",
      ],
      icon: Activity,
    },
    {
      id: "pro-audio-engine",
      title: "Ecualizador de 3 Bandas con Curvas Kill",
      category: "MOTOR DE MEZCLA",
      badge: "Filtro Bipolar",
      accent: "from-orangeDeck-500/20 to-transparent",
      borderColor: "border-orangeDeck-500/30",
      tagColor: "text-orangeDeck-400 bg-orangeDeck-500/10 border-orangeDeck-500/20",
      description:
        "Canales de audio independientes con ecualización analógica simulada (High, Mid, Low) y botones de corte Kill total. Cada canal cuenta con perilla de filtro bipolar continuo (LPF hacia la izquierda, HPF hacia la derecha) y monitoreo Cue independiente para auriculares.",
      points: [
        "Filtros de corte Kill inmediato por banda de frecuencia",
        "Filtro bipolar paso-bajo / paso-alto con resonancia musical",
        "Crossfader central configurable con curvas Smooth o Scratch",
      ],
      icon: Sliders,
    },
    {
      id: "dsp-fx-rack",
      title: "Rack de Efectos DSP en Tiempo Real",
      category: "PROCESAMIENTO DE AUDIO",
      badge: "Cero Latencia",
      accent: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/30",
      tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      description:
        "Módulo de procesamiento digital de señales (DSP) integrado directamente en el bucle de audio C++20. Aplica efectos de Echo, Flanger y Gate con modulación de tempo en tiempo real, control de balance Wet/Dry y curvas analógicas de respuesta.",
      points: [
        "Efectos de eco, modulador flanger y noise gate con sincronización BPM",
        "Control Wet/Dry independiente por canal sin distorsión armónica",
        "Procesamiento multi-hilo en coma flotante para máxima pureza sonora",
      ],
      icon: Layers,
    },
    {
      id: "lossless-recorder",
      title: "Grabación en Directo Lossless (WAV)",
      category: "PRODUCCIÓN Y SETS",
      badge: "Sin Pérdida",
      accent: "from-emerald-500/20 to-transparent",
      borderColor: "border-emerald-500/30",
      tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description:
        "Captura tus sesiones en directo directamente desde la salida Master a un archivo WAV sin compresión. La arquitectura asíncrona de grabación escribe en disco en un hilo secundario para evitar interrupciones o microcortes de audio en la sala.",
      points: [
        "Grabación Master directa a WAV de 24 bits / 44.1 o 48 kHz",
        "Cero impacto en el buffer de reproducción en vivo",
        "Medidor de tiempo transcurrido y estado visual en la barra superior",
      ],
      icon: Mic,
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 text-zinc-300 border border-white/10 mb-4">
            <Layers className="w-3.5 h-3.5 text-acid-400" />
            ARQUITECTURA & CARACTERÍSTICAS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Diseñado Para El Escenario, <br />
            <span className="text-acid-500">Compilado Para El Rendimiento</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Cada módulo de DiscNativePro fue desarrollado en C++ nativo utilizando el framework de audio profesional JUCE 8. Sin intermediarios, sin scripts lentos y con acceso directo a tu hardware de sonido.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                id={feat.id}
                className={`bg-obsidian-900 border ${feat.borderColor} rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:bg-obsidian-850 transition-all duration-300 group hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden`}
              >
                {/* Glow accent */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${feat.accent} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity`}
                />

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-zinc-500">
                      {feat.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${feat.tagColor}`}
                    >
                      {feat.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-obsidian-950 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors">
                    <Icon className="w-6 h-6 text-white group-hover:text-acid-400 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black uppercase text-white mb-3 tracking-tight">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                {/* Points list */}
                <ul className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-zinc-300 font-mono">
                  {feat.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-acid-500 font-bold shrink-0">&gt;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
