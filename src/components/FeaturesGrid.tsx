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
  RefreshCw,
  Video,
  Bot,
  Palette,
  Usb,
  Music2
} from "lucide-react";

export default function FeaturesGrid() {
  const coreFeatures = [
    {
      id: "fx-rack",
      title: "Rack de Efectos FX: 3 Slots por Deck",
      category: "PERFORMANCE CREATIVO",
      badge: "Modos Manual & Instant",
      accent: "from-acid-500/20 to-transparent",
      borderColor: "border-acid-500/30",
      tagColor: "text-acid-400 bg-acid-500/10 border-acid-500/20",
      description:
        "Procesamiento DSP de audio en tiempo real con 3 slots de efectos independientes por cada deck. Modula parámetros continuos con el potenciómetro Dry/Wet en modo Manual o dispara efectos rítmicos al compás en modo Instantáneo para drops y cortes en vivo.",
      points: [
        "Cadena dual de 3 procesadores de efectos por canal con medidor Dry/Wet",
        "Modo Instantáneo para disparar builds, barridos y filtros al compás",
        "Algoritmos de baja latencia ejecutados en punto flotante nativo en C++20",
      ],
      icon: Sliders,
    },
    {
      id: "sampler-pads",
      title: "Sampler Launchpad: 8 Pads One-Shot",
      category: "PERFORMANCE CREATIVO",
      badge: "Disparo Inmediato",
      accent: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/30",
      tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      description:
        "Tira superior dedicada de 8 disparadores para drops de cabina, sirenas, acapellas, jingles y efectos especiales. Carga cualquier archivo WAV, MP3 o FLAC con un clic sobre un pad vacío o arrastrándolo desde la biblioteca, con control maestro de volumen.",
      points: [
        "Disparo de latencia cero inyectado directamente en el bus de mezcla maestro",
        "Control de volumen del banco de samples y botón de parada de emergencia (Stop All)",
        "Menú contextual rápido para reasignar, expulsar o disparar samples en directo",
      ],
      icon: Layers,
    },
    {
      id: "unified-library",
      title: "Biblioteca 4-en-1: Local, USB, SoundCloud & YouTube",
      category: "BIBLIOTECA & FUENTES",
      badge: "Streaming & Offline",
      accent: "from-orangeDeck-500/20 to-transparent",
      borderColor: "border-orangeDeck-500/30",
      tagColor: "text-orangeDeck-400 bg-orangeDeck-500/10 border-orangeDeck-500/20",
      description:
        "Unifica todas tus fuentes musicales en un solo panel lateral. Explora tu colección en disco, conecta memorias USB con detección automática, busca millones de canciones en SoundCloud con carátulas y BPM, o reproduce video en directo con YouTube.",
      points: [
        "Navegación nativa de pendrives USB con árbol de carpetas y carga directa sin copiar",
        "SoundCloud integrado: buscador por artista/título con carátulas HD y BPM analizado",
        "Descarga y extracción offline de YouTube para guardar pistas locales y pinchar sin conexión",
      ],
      icon: FolderTree,
    },
    {
      id: "automix-queue",
      title: "AutoMix No Invasivo & Cola Interactiva Drag & Drop",
      category: "INTELIGENCIA DE AUDIO",
      badge: "Transición Inteligente",
      accent: "from-cyanDeck-500/20 to-transparent",
      borderColor: "border-cyanDeck-500/30",
      tagColor: "text-cyanDeck-400 bg-cyanDeck-500/10 border-cyanDeck-500/20",
      description:
        "Diseñado para sesiones donde la música nunca puede detenerse. No corta la canción actual: precarga automáticamente en la bandeja libre y realiza la transición suave con modulación de crossfader y rampa de tempo (TempoBlend) en los últimos 15 segundos.",
      points: [
        "Cola interactiva con scroll ilimitado y reordenamiento de temas arrastrando y soltando",
        "Etiquetas dinámicas ON AIR y NEXT con botón de borrado individual de pistas (×)",
        "Filtro inteligente de samples: ignora pistas de menos de 60 segundos para evitar jingles",
      ],
      icon: Sparkles,
    },
    {
      id: "hardware-ready",
      title: "Hardware Ready: Controladoras DJ USB & Audio 4-Ch",
      category: "HARDWARE DE CABINA",
      badge: "Plug & Play USB",
      accent: "from-emerald-500/20 to-transparent",
      borderColor: "border-emerald-500/30",
      tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description:
        "Conecta tu controlador físico por cable USB y toma el control de los jog wheels, pitch faders y pads. Soporte de fábrica para la serie Pioneer DDJ, Hercules y Numark, con monitor de actividad MIDI en vivo y enrutamiento a 4 canales para preescucha CUE en auriculares.",
      points: [
        "Detección plug & play sin instalar drivers propietarios adicionales en macOS y Linux",
        "Resolución de pitch faders en 14 bits y simulación de jog wheel con scratch analógico",
        "Enrutamiento estéreo independiente: Canales 1-2 a Master y Canales 3-4 a Auriculares",
      ],
      icon: Cpu,
    },
    {
      id: "ai-smart-match",
      title: "AI Smart Match: Recomendaciones Multi-Proveedor",
      category: "INTELIGENCIA DE SESIÓN",
      badge: "Gemini / Claude / GPT / DeepSeek",
      accent: "from-acid-500/20 to-transparent",
      borderColor: "border-acid-500/30",
      tagColor: "text-acid-400 bg-acid-500/10 border-acid-500/20",
      description:
        "Asistente nativo en C++ que analiza en tiempo real la pista activa en Deck 1, Deck 2, YouTube o SoundCloud. Genera transiciones armónicas en la rueda Camelot, lectura de energía de pista y sugerencias de género cruzando tu biblioteca local.",
      points: [
        "Soporte nativo para Gemini 2.5 Flash, Claude 3.5 Haiku, GPT-4o-mini, DeepSeek y OpenRouter",
        "Resolución híbrida inmediata: detecta y carga pistas locales con 1 clic a Deck A/B",
        "Fallback determinístico sin conexión ni API: garantizado incluso sin acceso a internet",
      ],
      icon: Bot,
    },
    {
      id: "in-app-updater",
      title: "Actualizador In-App contra GitHub Releases",
      category: "SISTEMA & ACTUALIZACIONES",
      badge: "Auto-Update Silencioso",
      accent: "from-amber-500/20 to-transparent",
      borderColor: "border-amber-500/30",
      tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      description:
        "Mantén tu software siempre actualizado sin tener que visitar la web periódicamente. DiscNativePro comprueba silenciosamente nuevas versiones en GitHub Releases al iniciar y notifica con un botón UPDATE en la barra superior.",
      points: [
        "Pestaña 'Versión' en Ajustes para consultar changelogs completos y notas de lanzamiento",
        "Descarga directa del nuevo instalador con barra de progreso integrada dentro de la app",
        "Ejecución asistida del instalador en Windows (Setup.exe) o descompresión en macOS/Linux",
      ],
      icon: RefreshCw,
    },
    {
      id: "waveform-themes",
      title: "Personalización Visual de Waveforms a 60 FPS",
      category: "INTERFAZ & VISUALIZACIÓN",
      badge: "Selector RGB en Vivo",
      accent: "from-pink-500/20 to-transparent",
      borderColor: "border-pink-500/30",
      tagColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      description:
        "Adapta la visualización de las formas de onda a la iluminación del club o a tu preferencia visual. Ajusta colores específicos por banda espectral (Graves, Medios, Agudos) con selector RGB o activa presets instantáneos.",
      points: [
        "Presets incluidos: RGB Multicolor, Azul Neón y Plata Monocromático industrial",
        "Cambios aplicados en caliente a las 3 ondas: Overview, Scrolling y Vertical",
        "Renderizado por GPU acelerado a 60 Hz con caché en memoria y cero impacto en audio",
      ],
      icon: Palette,
    },
    {
      id: "lossless-recorder",
      title: "Grabación en Directo Lossless (WAV de 24 Bits)",
      category: "PRODUCCIÓN Y SETS",
      badge: "Sin Pérdida",
      accent: "from-emerald-500/20 to-transparent",
      borderColor: "border-emerald-500/30",
      tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description:
        "Captura tus sesiones en directo directamente desde la salida Master a un archivo WAV sin compresión. La arquitectura asíncrona de grabación escribe en disco en un hilo secundario para evitar interrupciones o microcortes de audio en la sala.",
      points: [
        "Grabación Master directa a WAV de 24 bits / 44.1 o 48 kHz",
        "Cero impacto en el buffer de reproducción en vivo ni en la latencia del escenario",
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
