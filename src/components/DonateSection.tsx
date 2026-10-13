import React from "react";
import { Coffee, Heart, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export default function DonateSection() {
  return (
    <section id="apoyar" className="py-24 sm:py-28 bg-obsidian-950 relative border-t border-white/5 overflow-hidden">
      {/* Ambient warm glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main Card Container */}
          <div className="bg-obsidian-900 border border-amber-500/20 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400" />

            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-6">
                <Coffee className="w-3.5 h-3.5" />
                APOYA EL PROYECTO
              </div>

              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                ¿Te gusta <span className="text-amber-400">DiscNativePro</span>?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                Si te gusta la app, puedes apoyar el desarrollo y las futuras funcionalidades regalando un café. Tu aporte voluntario es clave para seguir mejorando esta herramienta nativa y de código abierto.
              </p>

              {/* Direct CTA Button */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://cafecito.app/discnativepro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-obsidian-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_35px_rgba(245,158,11,0.35)]"
                >
                  <Coffee className="w-5 h-5 stroke-[2.5]" />
                  <span>Regalar un café en Cafecito</span>
                  <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
                </a>
              </div>

              <span className="block mt-3 text-xs font-mono text-zinc-500">
                Aporte 100% voluntario a través de cafecito.app/discnativepro
              </span>
            </div>

            {/* Impact points */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-obsidian-950/60 border border-white/5">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Desarrollo Activo</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Corrección continua de errores y optimización del motor C++20 para máxima estabilidad en vivo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-obsidian-950/60 border border-white/5">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Nuevas Funcionalidades</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Priorización de herramientas solicitadas por la comunidad y soporte para más hardware DJ.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-obsidian-950/60 border border-white/5">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-1.5">
                  <Heart className="w-4 h-4" />
                  <span>100% Open Source</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Garantiza que el software continúe siendo libre, sin suscripciones obligatorias ni muros de pago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
