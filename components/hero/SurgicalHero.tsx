"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function SurgicalHero() {
  const [phase, setPhase] = useState<"descend" | "etching" | "complete">("descend");

  useEffect(() => {
    let etchTimeout: ReturnType<typeof setTimeout> | null = null;
    let completeTimeout: ReturnType<typeof setTimeout> | null = null;

    const runSequence = () => {
      setPhase("descend");

      etchTimeout = setTimeout(() => {
        setPhase("etching");
      }, 250);

      completeTimeout = setTimeout(() => {
        setPhase("complete");
      }, 1150);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        runSequence();
      }
    };

    runSequence();
    window.addEventListener("focus", runSequence);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (etchTimeout) {
        clearTimeout(etchTimeout);
      }
      if (completeTimeout) {
        clearTimeout(completeTimeout);
      }
      window.removeEventListener("focus", runSequence);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden font-sans pt-20">
      {/* Sterile Environment Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Clinical overhead lighting effect */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-white opacity-40 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--titanium-500)] to-transparent opacity-50" />
      </div>

      {/* The Titanium Plate (Canvas) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bezel-titanium rounded-2xl p-2 md:p-4 relative"
        >
          {/* Mounting screws */}
          <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[var(--titanium-400)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] flex items-center justify-center"><div className="w-1.5 h-[1px] bg-[var(--titanium-600)] rotate-45" /></div>
          <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[var(--titanium-400)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] flex items-center justify-center"><div className="w-1.5 h-[1px] bg-[var(--titanium-600)] -rotate-12" /></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[var(--titanium-400)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] flex items-center justify-center"><div className="w-1.5 h-[1px] bg-[var(--titanium-600)] rotate-90" /></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[var(--titanium-400)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] flex items-center justify-center"><div className="w-1.5 h-[1px] bg-[var(--titanium-600)] rotate-180" /></div>

          {/* Inner Surface */}
          <div className="bg-[var(--titanium-200)] rounded-xl border border-[var(--titanium-300)] shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] p-8 md:p-16 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
            
            {/* Camera Viewfinder Overlay */}
            <div className="absolute inset-0 pointer-events-none z-40 opacity-30">
              {/* Corner brackets */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[var(--titanium-700)]" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[var(--titanium-700)]" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[var(--titanium-700)]" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[var(--titanium-700)]" />
              
              {/* Center Crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center">
                <div className="w-full h-[1px] bg-[var(--titanium-600)] opacity-50" />
                <div className="absolute h-full w-[1px] bg-[var(--titanium-600)] opacity-50" />
                <div className="absolute w-4 h-4 border border-[var(--titanium-600)] rounded-full opacity-50" />
              </div>

              {/* Status Text */}
              <div className="absolute top-8 left-10 font-mono text-[10px] font-bold text-[var(--titanium-700)] flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${phase === "etching" ? "bg-[var(--laser-red)] animate-pulse" : "bg-[var(--titanium-500)]"}`} />
                REC
              </div>
              <div className="absolute top-8 right-10 font-mono text-[10px] font-bold text-[var(--titanium-700)]">
                MAG: 4.2x
              </div>
              <div className="absolute bottom-8 left-10 font-mono text-[10px] font-bold text-[var(--titanium-700)]">
                FOC: AUTO
              </div>
              <div className="absolute bottom-8 right-10 font-mono text-[10px] font-bold text-[var(--titanium-700)]">
                LSR: {phase === "etching" ? "ACTIVE" : "STDBY"}
              </div>
            </div>
            
            {/* The Robotic Arm (SVG) */}
            <motion.div 
              initial={{ y: -400, x: -100 }}
              animate={
                phase === "descend" ? { y: -150, x: -50 } :
                phase === "etching" ? { 
                  y: [-150, -140, -160, -150, -140, -150], 
                  x: [-50, 0, 50, 100, 150, 200],
                  transition: { duration: 0.9, ease: "linear" }
                } :
                { y: -500, x: 200 } // Retract
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-1/4 z-30 pointer-events-none origin-top"
            >
              <svg width="160" height="340" viewBox="0 0 160 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Advanced Robotic Arm */}
                {/* Upper Arm Segment */}
                <path d="M60 0 L100 0 L90 120 L70 120 Z" fill="url(#titanium-grad)" stroke="#343a40" strokeWidth="2" strokeLinejoin="round"/>
                
                {/* Main Joint Housing */}
                <circle cx="80" cy="120" r="28" fill="#e9ecef" stroke="#343a40" strokeWidth="2" />
                <circle cx="80" cy="120" r="18" fill="#212529" />
                <circle cx="80" cy="120" r="8" fill="#adb5bd" />
                
                {/* Lower Arm Segment (Angled) */}
                <path d="M68 135 L92 135 L85 240 L75 240 Z" fill="url(#titanium-grad)" stroke="#343a40" strokeWidth="2" strokeLinejoin="round"/>
                
                {/* Secondary Joint */}
                <circle cx="80" cy="240" r="20" fill="#e9ecef" stroke="#343a40" strokeWidth="2" />
                <circle cx="80" cy="240" r="12" fill="#212529" />
                
                {/* Effector Base */}
                <path d="M70 255 L90 255 L85 280 L75 280 Z" fill="#dee2e6" stroke="#343a40" strokeWidth="2" strokeLinejoin="round"/>
                
                {/* Needle / Scalpel Tip */}
                <path d="M78 280 L82 280 L80.5 315 L79.5 315 Z" fill="#adb5bd" stroke="#343a40" strokeWidth="1" />
                
                {/* Laser Diode / Emitter */}
                <circle cx="80" cy="318" r="3" fill={phase === "etching" ? "#ff2a2a" : "#495057"} className={phase === "etching" ? "drop-shadow-[0_0_8px_rgba(255,42,42,0.9)]" : ""} />
                
                <defs>
                  <linearGradient id="titanium-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#e9ecef" />
                    <stop offset="100%" stopColor="#ced4da" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* The Laser Beam */}
              {phase === "etching" && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 160, opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.05, repeat: Infinity }}
                  className="absolute left-[80px] top-[320px] w-[2px] bg-[var(--laser-red)] shadow-[0_0_12px_rgba(255,42,42,1)] origin-top"
                />
              )}
              
              {/* Sparks */}
              {phase === "etching" && (
                <motion.div 
                  className="absolute left-[80px] top-[480px] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,42,42,1)]"
                  animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Etched Content */}
            <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between gap-12">
              
              {/* Left: Text */}
              <div className="flex-1">
                <div className="font-mono text-xs font-bold tracking-widest uppercase mb-4 text-[var(--titanium-600)] flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${phase === "complete" ? "bg-[var(--laser-red)] shadow-[0_0_5px_rgba(255,42,42,0.6)]" : "bg-[var(--titanium-400)]"}`} />
                  SYS.ID // 001
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setPhase("descend");
                    setTimeout(() => setPhase("etching"), 250);
                    setTimeout(() => setPhase("complete"), 1150);
                  }}
                  className="mb-3 inline-flex items-center border border-[var(--titanium-500)] bg-white/70 px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase text-[var(--titanium-700)] transition hover:border-[var(--laser-red)] hover:text-[var(--laser-red)]"
                >
                  Replay Sequence
                </button>
                
                <div className="relative">
                  {/* SVG Text for "Drawing" effect */}
                  <svg className="w-full h-24 md:h-32" viewBox="0 0 600 100">
                    <motion.text
                      x="0"
                      y="70"
                      className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
                      fill={phase === "complete" ? "transparent" : "none"}
                      stroke={phase === "etching" ? "var(--laser-red)" : phase === "complete" ? "transparent" : "none"}
                      strokeWidth="2"
                      initial={{ strokeDasharray: "0 1000" }}
                      animate={
                        phase === "etching" ? { strokeDasharray: "1000 0" } : 
                        phase === "complete" ? { strokeDasharray: "1000 0" } : {}
                      }
                      transition={{ duration: 0.9, ease: "linear" }}
                      style={{ filter: phase === "etching" ? "drop-shadow(0 0 8px rgba(255,42,42,0.8))" : "none" }}
                    >
                      Anya Krislav
                    </motion.text>
                  </svg>

                  {/* Final Etched Text (Fades in after laser) */}
                  <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase === "complete" ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 text-5xl md:text-7xl font-bold uppercase tracking-tighter text-etched pt-[14px] md:pt-[10px]"
                  >
                    Anya Krislav
                  </motion.h1>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase === "complete" ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-6 text-lg md:text-xl text-[var(--titanium-700)] max-w-lg font-medium leading-relaxed"
                >
                  Electrical & Computer Engineer. Building high-precision, fault-tolerant systems where hardware meets intelligent software.
                </motion.p>
              </div>

              {/* Right: Etched Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: phase === "complete" ? 1 : 0, scale: phase === "complete" ? 1 : 0.95 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-48 h-64 md:w-64 md:h-80 flex-shrink-0"
              >
                {/* Frame */}
                <div className="absolute inset-0 border-2 border-[var(--titanium-400)] rounded-lg shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] overflow-hidden bg-[var(--titanium-300)]">
                  <Image 
                    src="/headshot.png" 
                    alt="Anya Krislav" 
                    fill 
                    className="object-cover grayscale contrast-125 sepia-[.2] mix-blend-multiply opacity-80"
                    priority
                  />
                  {/* Scanline overlay for the etched metal look */}
                  <div className="absolute inset-0 scanlines opacity-30 mix-blend-overlay pointer-events-none" />
                  
                  {/* Holographic / Metallic sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-50 mix-blend-overlay pointer-events-none" />
                </div>
                
                {/* Registration marks */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--titanium-600)]" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--titanium-600)]" />
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}