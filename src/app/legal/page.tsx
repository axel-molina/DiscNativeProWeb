import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  ShieldCheck, 
  Lock, 
  Scale, 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Cpu,
  Layers,
  Heart
} from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos de Uso y Política de Privacidad — DiscNativePro",
  description:
    "Información legal, política de privacidad, compromiso de cero telemetría y términos de uso del software DJ nativo DiscNativePro.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-white selection:bg-acid-500 selection:text-black flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-obsidian-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-acid-400" />
            <span>Volver al Inicio</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-obsidian-950 border border-white/10 flex items-center justify-center p-1">
              <Image
                src="/app-icon.png"
                alt="DiscNativePro"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-black tracking-tight text-white uppercase font-mono">
              DISCNATIVE<span className="text-acid-500">PRO</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Main Legal Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex-1">
        {/* Hero Section */}
        <div className="mb-14 text-center sm:text-left border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-acid-500/10 text-acid-400 border border-acid-500/20 mb-4">
            <Scale className="w-3.5 h-3.5" />
            MARCO LEGAL Y TRANSPARENCIA
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Términos de Uso y <span className="text-acid-500">Privacidad</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans max-w-2xl">
            DiscNativePro es un proyecto de software libre para DJs, construido sobre principios de transparencia técnica, código abierto y respeto absoluto por la privacidad del usuario.
          </p>
          <div className="mt-4 text-xs font-mono text-zinc-500">
            Última actualización: Octubre 2026 &bull; Vigente para suites de escritorio v1.x
          </div>
        </div>

        {/* Section 1: Política de Privacidad */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-3 text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
            <div className="w-9 h-9 rounded-xl bg-acid-500/10 border border-acid-500/20 flex items-center justify-center text-acid-400">
              <Lock className="w-5 h-5" />
            </div>
            <h2>1. Política de Privacidad</h2>
          </div>

          {/* Cero Telemetría Card */}
          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-acid-400 font-mono font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>1.1. Cero Telemetría y Cero Recolección de Datos Personales</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              La aplicación DiscNativePro y este sitio web <strong>no recopilan, no almacenan y no transmiten ningún tipo de información personal</strong>, hábitos de escucha, historial de reproducción, identificadores de dispositivo ni telemetría analítica. Todas las funciones del software se ejecutan de manera local en el procesador y la memoria de tu ordenador.
            </p>
          </div>

          {/* Almacenamiento Local Card */}
          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-zinc-200 font-mono font-bold text-sm">
              <Cpu className="w-4 h-4 text-acid-400" />
              <span>1.2. Almacenamiento Local de Preferencias y Credenciales</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Los archivos de configuración, historiales de mezclas, mapeos de controladoras MIDI y claves de API de inteligencia artificial (OpenAI, Anthropic, Gemini, DeepSeek u OpenRouter) se almacenan exclusivamente en el disco duro local de tu sistema operativo (en carpetas de usuario estándar como <code className="text-zinc-200 bg-obsidian-950 px-1.5 py-0.5 rounded border border-white/5 font-mono text-xs">Application Support/DiscNativePro</code> en macOS o <code className="text-zinc-200 bg-obsidian-950 px-1.5 py-0.5 rounded border border-white/5 font-mono text-xs">%APPDATA%/DiscNativePro</code> en Windows). Ningún tercero ni los mantenedores del proyecto tienen acceso a estos archivos.
            </p>
          </div>

          {/* Servicios de Terceros */}
          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-zinc-200 font-mono font-bold text-sm">
              <ExternalLink className="w-4 h-4 text-acid-400" />
              <span>1.3. Integración con Servicios de Terceros</span>
            </div>
            
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 space-y-2">
                <h4 className="font-bold text-white uppercase font-mono text-xs">A. Servicios de YouTube y Reproductor Integrado</h4>
                <p>
                  DiscNativePro incluye capacidades de Video DJ que interactúan con YouTube. Al utilizar estas características, aceptas quedar sujeto a los{" "}
                  <a
                    href="https://www.youtube.com/t/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-acid-400 underline hover:text-acid-300"
                  >
                    Términos de Servicio de YouTube
                  </a>
                  . Asimismo, se informa que los servicios de YouTube son provistos por Google LLC, y su uso está regido por la{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-acid-400 underline hover:text-acid-300"
                  >
                    Política de Privacidad de Google
                  </a>
                  . DiscNativePro no almacena credenciales de cuentas de Google ni recolecta información de perfiles de usuario.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 space-y-2">
                <h4 className="font-bold text-white uppercase font-mono text-xs">B. SoundCloud Streaming</h4>
                <p>
                  La búsqueda y reproducción de pistas en la biblioteca de SoundCloud se realiza mediante conexiones directas a los servidores públicos de SoundCloud Ltd. El uso de dicho servicio se rige por sus Términos de Uso y Política de Privacidad oficiales.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 space-y-2">
                <h4 className="font-bold text-white uppercase font-mono text-xs">C. Asistentes de IA (AI Smart Match)</h4>
                <p>
                  Al utilizar la recomendación armónica con IA, las solicitudes viajan de forma encriptada (HTTPS) directamente desde tu aplicación al proveedor configurado (OpenAI, Anthropic, Google, DeepSeek u OpenRouter). Se envían únicamente los metadatos de las canciones (título, artista, BPM y tonalidad Camelot) estrictamente necesarios para formular la recomendación.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-zinc-200 font-mono font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>1.4. Cookies y Rastreo en la Web</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Este sitio web está construido como un archivo estático y <strong>no utiliza cookies de seguimiento publicitario, píxeles de rastreo ni servicios intrusivos de analítica comercial</strong>.
            </p>
          </div>
        </section>

        {/* Section 2: Términos de Uso y Descargo de Responsabilidad */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-3 text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
            <div className="w-9 h-9 rounded-xl bg-acid-500/10 border border-acid-500/20 flex items-center justify-center text-acid-400">
              <FileText className="w-5 h-5" />
            </div>
            <h2>2. Términos de Uso y Descargo de Responsabilidad</h2>
          </div>

          {/* Licencia de Software */}
          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-zinc-200 font-mono font-bold text-sm">
              <Scale className="w-4 h-4 text-acid-400" />
              <span>2.1. Naturaleza y Licencia del Software</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              DiscNativePro es un software libre y de código abierto desarrollado comunitariamente sobre el framework JUCE 8 y C++20. Su código fuente está a disposición pública en GitHub bajo los términos de su respectiva licencia de código abierto, la cual permite la inspección, compilación, bifurcación y uso no comercial sin costo.
            </p>
          </div>

          {/* Cláusula AS IS (Sin Garantía) */}
          <div className="bg-obsidian-900 border border-amber-500/30 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>2.2. Provisión &quot;Tal Cual&quot; (AS IS) y Limitación de Responsabilidad</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              El software se suministra <strong>&quot;tal cual&quot; (&quot;as is&quot;)</strong>, sin garantía de ninguna clase, ya sea expresa o implícita, incluyendo de manera no taxativa las garantías de comerciabilidad, adecuación para un propósito particular o no infracción.
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              En ningún caso los desarrolladores, mantenedores o colaboradores serán responsables de reclamos, daños directos, indirectos, incidentales o consecuentes (incluyendo, pero no limitado a, interrupciones de eventos o conciertos en directo, pérdida de ingresos, fallos en equipamiento de audio o pérdida de datos) que surjan del uso o la imposibilidad de uso del software.
            </p>
          </div>

          {/* Marcas de Terceros */}
          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-zinc-200 font-mono font-bold text-sm">
              <Layers className="w-4 h-4 text-acid-400" />
              <span>2.3. Marcas Registradas y Propiedad Intelectual de Terceros</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Pioneer DJ, AlphaTheta, DDJ, Rekordbox, Serato, Traktor, VirtualDJ, Inno Setup, Hercules, Numark, SoundCloud y YouTube son marcas comerciales o registradas de sus respectivos propietarios.
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Cualquier referencia a estas marcas o productos en el software o en este sitio se realiza con fines exclusivamente descriptivos y de compatibilidad técnica de hardware/audio, sin implicar afiliación, patrocinio, certificación ni respaldo alguno por parte de dichos titulares.
            </p>
          </div>

          {/* Donaciones Cafecito */}
          <div className="bg-obsidian-900 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-zinc-200 font-mono font-bold text-sm">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>2.4. Aportes Voluntarios y Donaciones Comunitarias</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Las colaboraciones monetarias efectuadas a través de plataformas como Cafecito representan contribuciones voluntarias para apoyar las horas de desarrollo e infraestructura del proyecto de software libre. En ningún caso constituyen la compra de un producto comercial, el pago de una licencia de software ni confieren derecho a exigir soporte técnico con acuerdos de nivel de servicio (SLA).
            </p>
          </div>
        </section>

        {/* Contact and Repository Box */}
        <div className="bg-obsidian-900/90 border border-white/10 rounded-3xl p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-base sm:text-lg font-black uppercase text-white font-mono">
            ¿Consultas Legales o Reporte de Privacidad?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Al ser un proyecto transparente de código abierto, cualquier inquietud, solicitud de aclaración técnica o sugerencia sobre privacidad puede canalizarse abiertamente en el repositorio oficial.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/axel-molina/DiscNativePro/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-acid-500 hover:bg-acid-400 text-obsidian-950 font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all"
            >
              <span>Abrir un Issue en GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-obsidian-950 hover:bg-obsidian-850 text-zinc-300 border border-white/10 text-xs sm:text-sm px-6 py-3 rounded-xl transition-all"
            >
              <span>Volver a la Página Principal</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
