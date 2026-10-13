"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sliders, 
  Volume2, 
  Radio, 
  Disc3, 
  Sparkles, 
  Activity, 
  Music, 
  Youtube,
  Headphones,
  Circle,
  Square,
  Flame,
  Zap,
  Maximize2
} from "lucide-react";

export default function DeckSimulator() {
  // Deck Playback States
  const [isPlayingA, setIsPlayingA] = useState(true);
  const [isPlayingB, setIsPlayingB] = useState(false);
  const [crossfader, setCrossfader] = useState(50); // 0 (Deck A) to 100 (Deck B)
  const [isAutoMixing, setIsAutoMixing] = useState(false);
  const [isYoutubeMode, setIsYoutubeMode] = useState(false);
  
  // Track stats
  const [bpmA, setBpmA] = useState(128.0);
  const [bpmB, setBpmB] = useState(128.0);
  const [isSyncB, setIsSyncB] = useState(true);

  // EQ state
  const [killLowA, setKillLowA] = useState(false);
  const [killLowB, setKillLowB] = useState(false);

  // Dynamic VU meters simulation
  const [vuA, setVuA] = useState(70);
  const [vuB, setVuB] = useState(20);

  // AutoMix Simulation logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoMixing) {
      interval = setInterval(() => {
        setCrossfader((prev) => {
          if (prev >= 100) {
            setIsAutoMixing(false);
            setIsPlayingA(false);
            return 100;
          }
          if (prev === 50) {
            setIsPlayingB(true);
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isAutoMixing]);

  // VU meter flicker effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlayingA) {
        const factor = (100 - crossfader) / 100;
        setVuA(Math.floor((55 + Math.random() * 35) * factor));
      } else {
        setVuA(0);
      }

      if (isPlayingB) {
        const factor = crossfader / 100;
        setVuB(Math.floor((55 + Math.random() * 35) * factor));
      } else {
        setVuB(0);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [isPlayingA, isPlayingB, crossfader]);

  const triggerAutoMix = () => {
    if (crossfader > 80) {
      setCrossfader(0);
      setIsPlayingA(true);
      setIsPlayingB(false);
    }
    setIsAutoMixing(true);
    setIsPlayingA(true);
    setIsPlayingB(true);
  };

  return (
    <section id="simulator" className="py-20 sm:py-28 bg-obsidian-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-acid-500 animate-ping" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-acid-400">
                Live Interface Preview
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Cabina Dual Deck <span className="text-acid-500">Interactiva</span>
            </h2>
            <p className="mt-3 text-zinc-400 text-base max-w-xl">
              Experimenta los controles del software en tu navegador: mueve el crossfader, activa el AutoMix y observa la simulación de formas de onda en tiempo real.
            </p>
          </div>

          {/* View Toggles */}
          <div className="flex items-center gap-2 p-1.5 bg-obsidian-900 border border-white/10 rounded-2xl self-start md:self-auto">
            <button
              onClick={() => setIsYoutubeMode(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                !isYoutubeMode
                  ? "bg-acid-500 text-obsidian-950 shadow-md shadow-acid-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Disc3 className="w-3.5 h-3.5" />
              Modo DJ Audio
            </button>
            <button
              onClick={() => setIsYoutubeMode(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isYoutubeMode
                  ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Youtube className="w-3.5 h-3.5" />
              Modo YouTube Video DJ
            </button>
          </div>
        </div>

        {/* DJ Software Shell Container */}
        <div className="bg-obsidian-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black relative">
          {/* Top Engine Telemetry Bar (like DiscNativePro TopBarComponent) */}
          <div className="bg-obsidian-950 border-b border-white/10 px-4 py-2.5 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-white font-bold tracking-wider">DISCNATIVEPRO ENGINE</span>
              </div>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-zinc-400 hidden sm:inline">
                Driver: <span className="text-zinc-200">CoreAudio / WASAPI (128 spls @ 44.1kHz)</span>
              </span>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Activity className="w-3.5 h-3.5 text-acid-400" />
                <span>CPU: <span className="text-zinc-200">2.1%</span></span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Zap className="w-3.5 h-3.5 text-cyanDeck-400" />
                <span>RAM: <span className="text-zinc-200">142 MB</span></span>
              </div>
              <div className="flex items-center gap-1 text-red-400">
                <Circle className="w-2.5 h-2.5 fill-red-500 text-red-500 animate-pulse" />
                <span className="font-bold">REC READY</span>
              </div>
            </div>
          </div>

          {/* Main Console Area */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-6">
            {/* Dual Scrolling Waveforms Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Deck A Waveform Box */}
              <div className="bg-obsidian-950 border border-cyanDeck-500/30 rounded-2xl p-4 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyanDeck-500 text-obsidian-950 font-black text-xs">
                      DECK A
                    </span>
                    <span className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                      {isYoutubeMode ? "YouTube: Fred again.. - Boiler Room London" : "Bicep - Glue (Original Mix)"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-cyanDeck-500/20 text-cyanDeck-400 font-bold border border-cyanDeck-500/30">
                      8A (Am)
                    </span>
                    <span className="text-white font-bold">{bpmA.toFixed(1)} BPM</span>
                  </div>
                </div>

                {/* Animated Waveform Visualization */}
                <div className="h-20 bg-obsidian-900 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/5">
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white z-20 shadow-[0_0_8px_#ffffff]" />
                  <div className={`flex items-center gap-1 w-full h-full px-2 ${isPlayingA ? "animate-marquee" : ""}`}>
                    {Array.from({ length: 60 }).map((_, i) => {
                      const heights = [30, 45, 75, 90, 60, 40, 85, 95, 70, 50, 65, 80, 100, 75, 45, 30];
                      const height = heights[i % heights.length];
                      return (
                        <div
                          key={i}
                          className="w-1.5 bg-cyanDeck-400 rounded-full transition-all shrink-0"
                          style={{
                            height: `${height}%`,
                            opacity: i % 4 === 0 ? 1 : 0.65,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Deck B Waveform Box */}
              <div className="bg-obsidian-950 border border-orangeDeck-500/30 rounded-2xl p-4 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-orangeDeck-500 text-obsidian-950 font-black text-xs">
                      DECK B
                    </span>
                    <span className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                      {isYoutubeMode ? "YouTube: Peggy Gou - (It Goes Like) Nanana" : "Overmono - So U Kno (Club Edit)"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-orangeDeck-500/20 text-orangeDeck-400 font-bold border border-orangeDeck-500/30">
                      9A (Em)
                    </span>
                    <span className="text-white font-bold">{bpmB.toFixed(1)} BPM</span>
                  </div>
                </div>

                {/* Animated Waveform Visualization */}
                <div className="h-20 bg-obsidian-900 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/5">
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white z-20 shadow-[0_0_8px_#ffffff]" />
                  <div className={`flex items-center gap-1 w-full h-full px-2 ${isPlayingB ? "animate-marquee" : ""}`}>
                    {Array.from({ length: 60 }).map((_, i) => {
                      const heights = [40, 60, 80, 100, 70, 45, 90, 85, 60, 40, 75, 95, 65, 50, 40, 35];
                      const height = heights[i % heights.length];
                      return (
                        <div
                          key={i}
                          className="w-1.5 bg-orangeDeck-500 rounded-full transition-all shrink-0"
                          style={{
                            height: `${height}%`,
                            opacity: i % 4 === 0 ? 1 : 0.65,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Decks & Central Mixer Interface Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* DECK A CONTROLS (Cols 1-4) */}
              <div className="lg:col-span-4 bg-obsidian-950 border border-white/10 rounded-2xl p-5 flex flex-col items-center">
                {/* Jog Wheel Simulation */}
                <div className="relative mb-6">
                  <div
                    className={`w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-cyanDeck-500/40 bg-gradient-to-tr from-obsidian-950 via-zinc-900 to-obsidian-950 shadow-[0_0_30px_rgba(0,229,255,0.15)] flex items-center justify-center relative cursor-grab active:cursor-grabbing ${
                      isPlayingA ? "animate-spin-slow" : ""
                    }`}
                  >
                    {/* Vinyl Grooves */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-zinc-800 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-zinc-700 bg-obsidian-900 flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-cyanDeck-400" />
                      </div>
                    </div>
                    {/* Position Notch */}
                    <div className="absolute top-2 w-2 h-4 bg-cyanDeck-400 rounded-sm" />
                  </div>
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-obsidian-900 border border-white/10 text-[10px] font-mono text-cyanDeck-400">
                    TOUCH JOG PLATTER
                  </span>
                </div>

                {/* Hot Cues Row */}
                <div className="grid grid-cols-4 gap-2 w-full mb-5">
                  {["INTRO", "BUILD", "DROP", "OUTRO"].map((cue, idx) => (
                    <button
                      key={idx}
                      className="py-2 rounded-lg bg-obsidian-900 hover:bg-cyanDeck-500 hover:text-obsidian-950 border border-cyanDeck-500/30 text-[10px] font-mono font-bold text-cyanDeck-400 transition-all text-center"
                    >
                      CUE {idx + 1}
                    </button>
                  ))}
                </div>

                {/* Transport Buttons: PLAY / CUE / SYNC */}
                <div className="flex items-center gap-3 w-full">
                  <button
                    onClick={() => setIsPlayingA(!isPlayingA)}
                    className={`flex-1 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all ${
                      isPlayingA
                        ? "bg-cyanDeck-500 text-obsidian-950 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                        : "bg-obsidian-900 text-cyanDeck-400 border border-cyanDeck-500/30 hover:bg-obsidian-850"
                    }`}
                  >
                    {isPlayingA ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    <span>{isPlayingA ? "PAUSE" : "PLAY"}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsPlayingA(false);
                    }}
                    className="px-4 py-3 rounded-xl font-bold text-xs bg-obsidian-900 border border-white/10 text-zinc-300 hover:text-white"
                  >
                    CUE
                  </button>

                  <button
                    className="px-3 py-3 rounded-xl font-bold text-xs bg-cyanDeck-500/20 text-cyanDeck-300 border border-cyanDeck-500/40"
                  >
                    SYNC
                  </button>
                </div>
              </div>

              {/* CENTRAL DJ MIXER (Cols 5-8) */}
              <div className="lg:col-span-4 bg-obsidian-950 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                <div className="text-center pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-black tracking-widest text-zinc-400">
                    DJ MIXER & EQ SECTION
                  </span>
                </div>

                {/* 3-Band EQ Knobs Simulation */}
                <div className="grid grid-cols-2 gap-6 my-4">
                  {/* Channel A EQ */}
                  <div className="space-y-3">
                    <div className="text-center text-[10px] font-mono text-cyanDeck-400 font-bold">
                      CH 1 (DECK A)
                    </div>
                    {["HI", "MID", "LOW"].map((band) => (
                      <div key={band} className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-500">{band}</span>
                        <div className="w-8 h-8 rounded-full border-2 border-cyanDeck-500/40 bg-obsidian-900 flex items-center justify-center text-[10px] text-zinc-300">
                          0
                        </div>
                        <button
                          onClick={() => band === "LOW" && setKillLowA(!killLowA)}
                          className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                            band === "LOW" && killLowA
                              ? "bg-red-500 text-white"
                              : "bg-obsidian-900 text-zinc-600 hover:text-zinc-300 border border-white/5"
                          }`}
                        >
                          KILL
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Channel B EQ */}
                  <div className="space-y-3">
                    <div className="text-center text-[10px] font-mono text-orangeDeck-400 font-bold">
                      CH 2 (DECK B)
                    </div>
                    {["HI", "MID", "LOW"].map((band) => (
                      <div key={band} className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-500">{band}</span>
                        <div className="w-8 h-8 rounded-full border-2 border-orangeDeck-500/40 bg-obsidian-900 flex items-center justify-center text-[10px] text-zinc-300">
                          0
                        </div>
                        <button
                          onClick={() => band === "LOW" && setKillLowB(!killLowB)}
                          className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                            band === "LOW" && killLowB
                              ? "bg-red-500 text-white"
                              : "bg-obsidian-900 text-zinc-600 hover:text-zinc-300 border border-white/5"
                          }`}
                        >
                          KILL
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dual VU Meters */}
                <div className="grid grid-cols-2 gap-4 py-3 bg-obsidian-900/80 rounded-xl px-4 border border-white/5 my-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                      <span>CH 1</span>
                      <span className="text-cyanDeck-400">{vuA}%</span>
                    </div>
                    <div className="h-2 w-full bg-obsidian-950 rounded-full overflow-hidden flex">
                      <div
                        className="h-full bg-cyanDeck-400 transition-all duration-100"
                        style={{ width: `${vuA}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                      <span>CH 2</span>
                      <span className="text-orangeDeck-400">{vuB}%</span>
                    </div>
                    <div className="h-2 w-full bg-obsidian-950 rounded-full overflow-hidden flex">
                      <div
                        className="h-full bg-orangeDeck-500 transition-all duration-100"
                        style={{ width: `${vuB}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* AutoMix Button */}
                <button
                  onClick={triggerAutoMix}
                  className={`w-full py-2.5 rounded-xl text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 transition-all my-2 ${
                    isAutoMixing
                      ? "bg-acid-500 text-obsidian-950 shadow-[0_0_20px_rgba(204,255,0,0.5)] animate-pulse"
                      : "bg-obsidian-850 hover:bg-obsidian-800 text-acid-400 border border-acid-500/30"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isAutoMixing ? "AutoMix Mezclando..." : "Activar AutoMix Automático"}</span>
                </button>

                {/* Crossfader */}
                <div className="pt-2">
                  <div className="flex justify-between text-[10px] font-mono mb-1 text-zinc-400">
                    <span className="text-cyanDeck-400 font-bold">DECK A</span>
                    <span className="text-zinc-500 font-semibold">{crossfader}%</span>
                    <span className="text-orangeDeck-400 font-bold">DECK B</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={crossfader}
                    onChange={(e) => {
                      setIsAutoMixing(false);
                      setCrossfader(Number(e.target.value));
                    }}
                    className="w-full h-2.5 bg-obsidian-900 rounded-lg appearance-none cursor-pointer accent-acid-500"
                  />
                </div>
              </div>

              {/* DECK B CONTROLS (Cols 9-12) */}
              <div className="lg:col-span-4 bg-obsidian-950 border border-white/10 rounded-2xl p-5 flex flex-col items-center">
                {/* Jog Wheel Simulation */}
                <div className="relative mb-6">
                  <div
                    className={`w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-orangeDeck-500/40 bg-gradient-to-tr from-obsidian-950 via-zinc-900 to-obsidian-950 shadow-[0_0_30px_rgba(255,132,0,0.15)] flex items-center justify-center relative cursor-grab active:cursor-grabbing ${
                      isPlayingB ? "animate-spin-slow" : ""
                    }`}
                  >
                    {/* Vinyl Grooves */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-zinc-800 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-zinc-700 bg-obsidian-900 flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-orangeDeck-400" />
                      </div>
                    </div>
                    {/* Position Notch */}
                    <div className="absolute top-2 w-2 h-4 bg-orangeDeck-400 rounded-sm" />
                  </div>
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-obsidian-900 border border-white/10 text-[10px] font-mono text-orangeDeck-400">
                    TOUCH JOG PLATTER
                  </span>
                </div>

                {/* Hot Cues Row */}
                <div className="grid grid-cols-4 gap-2 w-full mb-5">
                  {["INTRO", "BUILD", "DROP", "OUTRO"].map((cue, idx) => (
                    <button
                      key={idx}
                      className="py-2 rounded-lg bg-obsidian-900 hover:bg-orangeDeck-500 hover:text-obsidian-950 border border-orangeDeck-500/30 text-[10px] font-mono font-bold text-orangeDeck-400 transition-all text-center"
                    >
                      CUE {idx + 1}
                    </button>
                  ))}
                </div>

                {/* Transport Buttons: PLAY / CUE / SYNC */}
                <div className="flex items-center gap-3 w-full">
                  <button
                    onClick={() => setIsPlayingB(!isPlayingB)}
                    className={`flex-1 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all ${
                      isPlayingB
                        ? "bg-orangeDeck-500 text-obsidian-950 shadow-[0_0_20px_rgba(255,132,0,0.4)]"
                        : "bg-obsidian-900 text-orangeDeck-400 border border-orangeDeck-500/30 hover:bg-obsidian-850"
                    }`}
                  >
                    {isPlayingB ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    <span>{isPlayingB ? "PAUSE" : "PLAY"}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsPlayingB(false);
                    }}
                    className="px-4 py-3 rounded-xl font-bold text-xs bg-obsidian-900 border border-white/10 text-zinc-300 hover:text-white"
                  >
                    CUE
                  </button>

                  <button
                    className="px-3 py-3 rounded-xl font-bold text-xs bg-orangeDeck-500/20 text-orangeDeck-300 border border-orangeDeck-500/40"
                  >
                    SYNC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
