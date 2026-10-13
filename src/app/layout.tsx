import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DiscNativePro — Software DJ Nativo de Alto Rendimiento",
  description:
    "Software DJ profesional de código abierto construido en C++20 y JUCE 8. Latencia ultrabaja, integración de video con YouTube, recomendaciones de pistas por IA, AutoMix y análisis armónico.",
  keywords: [
    "DJ Software",
    "DiscNativePro",
    "Open Source DJ",
    "JUCE 8",
    "C++20",
    "AI Smart Match",
    "Camelot Wheel",
    "YouTube DJ",
    "macOS DJ",
    "Windows DJ",
    "Linux DJ",
    "AutoMix",
  ],
  authors: [{ name: "Axel Molina & DiscNativePro Community" }],
  openGraph: {
    title: "DiscNativePro — Software DJ Nativo de Alto Rendimiento",
    description:
      "Arquitectura C++20 y JUCE 8 con latencia cero. Descarga directa para Windows, macOS y Linux.",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090C",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-obsidian-950 font-saira text-zinc-100 antialiased selection:bg-acid-500 selection:text-black">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function rm(){var b=document.getElementById('nl-badge-frame')||document.getElementById('nl-hud-frame')||document.querySelector('iframe[title="Powered by Netlify"]');if(b)b.remove();var s=document.querySelector('script[data-nf-variant]');if(s)s.remove();}if(typeof window!=='undefined'){rm();window.addEventListener('DOMContentLoaded',rm);window.addEventListener('load',rm);var o=new MutationObserver(rm);if(document.body){o.observe(document.body,{childList:true,subtree:true});}else{document.addEventListener('DOMContentLoaded',function(){o.observe(document.body,{childList:true,subtree:true});});}}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
