import React from "react";
import Image from "next/image";
import { Sparkles, Bot, HardDrive, WifiOff, Zap } from "lucide-react";

export default function AiMatchShowcase() {
  return (
    <section id="ai-smart-match" className="py-24 sm:py-32 bg-obsidian-950 relative border-t border-white/5 overflow-hidden">
      {/* Background glow ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyanDeck-500/10 via-acid-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acid-500/10 text-acid-400 border border-acid-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            NUEVA CARACTERÍSTICA NATIVA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            AI Smart Match: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-400 via-cyanDeck-400 to-orangeDeck-400">
              Recomendaciones Inteligentes Para Tu Sesión
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Nunca más te quedes en blanco en plena cabina. Un motor nativo en C++20 analiza la pista que está sonando en Deck 1, Deck 2 o YouTube y genera sugerencias armónicas y de audiencia con explicaciones técnicas en tiempo real.
          </p>
        </div>

        {/* Real App Screenshot Showcase Frame */}
        <div className="bg-obsidian-900 border border-white/10 rounded-3xl p-3 sm:p-5 shadow-2xl relative">
          {/* Console Header Bar */}
          <div className="flex items-center px-3 py-2.5 mb-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
          </div>

          {/* Screenshot Display */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <Image
              src="/screenshots/discnative-pro-ai-smart-match.png"
              alt="Captura real del módulo AI Smart Match de DiscNativePro mostrando recomendaciones inteligentes en vivo"
              width={1024}
              height={513}
              unoptimized
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Technical Architecture Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-center mb-4">
              <Bot className="w-5 h-5 text-acid-400" />
            </div>
            <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">
              Multi-Proveedor C++
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Configura tu propia clave de API para Gemini, Claude, OpenAI, DeepSeek u OpenRouter. Tus credenciales se cifran localmente en tu disco duro; nunca pasan por servidores de terceros.
            </p>
          </div>

          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-center mb-4">
              <HardDrive className="w-5 h-5 text-cyanDeck-400" />
            </div>
            <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">
              Resolución Híbrida Local
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              El motor cruza las recomendaciones con tu colección local en FLAC, WAV o MP3. Si la tienes en disco, la marca con un badge y permite cargarla al instante a cualquier deck sin reordenar tu sesión.
            </p>
          </div>

          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-center mb-4">
              <WifiOff className="w-5 h-5 text-amber-400" />
            </div>
            <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">
              Fallback Offline Total
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Si estás en un club sin señal WiFi o prefieres no usar APIs de pago, el algoritmo determinístico genera tarjetas automáticas analizando la rueda Camelot y señales de audiencia cacheadas.
            </p>
          </div>

          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-orangeDeck-400" />
            </div>
            <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">
              Cero Microcortes de Audio
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Toda la comunicación de red corre en hilos de fondo (`juce::URL::InputStreamOptions`). El búfer de audio en tiempo real de JUCE 8 no sufre bloqueos, asegurando una reproducción ininterrumpida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
