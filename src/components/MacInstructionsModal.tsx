"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  Check, 
  Copy, 
  Terminal, 
  Laptop, 
  ShieldAlert, 
  ExternalLink,
  FolderArchive,
  ArrowRight
} from "lucide-react";

interface MacInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MacInstructionsModal({ isOpen, onClose }: MacInstructionsModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const terminalCmd = "xattr -cr /Applications/DiscNativePro.app";

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-xl w-full bg-obsidian-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Ambient */}
        <div className="absolute top-0 right-1/4 w-72 h-32 bg-acid-500/10 blur-3xl pointer-events-none rounded-full" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acid-500/10 text-acid-400 border border-acid-500/30 mb-4">
          <Laptop className="w-3.5 h-3.5" />
          DESCARGA INICIADA &bull; GUÍA PARA MACOS
        </div>

        <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
          Cómo abrir <span className="text-acid-500">DiscNativePro</span> en tu Mac
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
          Al ser un software libre y gratuito sin licencia comercial de Apple ($99/año), el sistema de seguridad <strong>macOS Gatekeeper</strong> solicita autorización la primera vez que se abre.
        </p>

        {/* Steps */}
        <div className="mt-6 space-y-4">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-obsidian-900 border border-white/5">
            <span className="w-6 h-6 rounded-lg bg-acid-500/20 text-acid-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <strong className="text-white block font-semibold mb-0.5">Descomprime y mueve a Aplicaciones</strong>
              Descomprime el archivo descargado y arrastra <code className="text-zinc-200 bg-white/5 px-1.5 py-0.5 rounded font-mono text-xs">DiscNativePro.app</code> a tu carpeta <strong>Aplicaciones</strong>.
            </div>
          </div>

          {/* Step 2: GUI Method */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-obsidian-900 border border-white/5">
            <span className="w-6 h-6 rounded-lg bg-acid-500/20 text-acid-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <strong className="text-white block font-semibold mb-0.5">Primer inicio (Clic Derecho &gt; Abrir)</strong>
              Haz <strong>clic derecho</strong> sobre la app y selecciona <strong>Abrir</strong> (en lugar de doble clic). En la ventana emergente, pulsa <strong>Abrir</strong>.
              <span className="block mt-1 text-zinc-400 text-xs">
                Si macOS muestra aviso de bloqueo: Ve a <strong>Ajustes del Sistema &gt; Privacidad y seguridad</strong> y haz clic en <strong>"Abrir de todos modos"</strong>.
              </span>
            </div>
          </div>

          {/* Step 3: Terminal One-liner */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 text-zinc-300 font-bold">
                <Terminal className="w-3.5 h-3.5 text-acid-400" />
                Solución rápida vía Terminal (1 clic)
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-obsidian-900 hover:bg-obsidian-850 border border-white/10 text-zinc-300 hover:text-white transition-all text-[11px]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-acid-400" />
                    <span className="text-acid-400 font-bold">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar comando</span>
                  </>
                )}
              </button>
            </div>
            <pre className="overflow-x-auto text-acid-300 font-mono text-xs bg-obsidian-950 p-2.5 rounded-xl border border-white/5">
              <code>{terminalCmd}</code>
            </pre>
            <p className="text-[11px] text-zinc-500 leading-normal">
              Este comando nativo elimina el atributo de cuarentena de Gatekeeper para que la app abra instantáneamente.
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-acid-500 hover:bg-acid-400 text-obsidian-950 font-bold text-sm transition-all shadow-lg shadow-acid-500/20 active:scale-95"
          >
            Entendido, ¡a mezclar!
          </button>
        </div>
      </div>
    </div>
  );
}
