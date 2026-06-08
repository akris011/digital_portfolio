"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export function SurgicalHero() {
  const [phase, setPhase] = useState<"descend" | "etching" | "complete">("descend");
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // 1. Arm descends
      await new Promise((resolve) => setTimeout(resolve, 800));
      setPhase("etching");
      
      // 2. Etching process
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setPhase("complete");
    };
    sequence();
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
            
            {/* The Robotic Arm (SVG) */}
            <motion.div 
              initial={{ y: -400, x: -100 }}
              animate={
                phase === "descend" ? { y: -150, x: -50 } :
                phase === "etching" ? { 
                  y: [-150, -140, -160, -150, -140, -150], 
                  x: [-50, 0, 50, 100, 150, 200],
                  transition: { duration: 3, ease: "linear" }
                } :
                { y: -500, x: 200 } // Retract
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-0 left-1/4 z-30 pointer-events-none origin-top"
            >
              <svg width="120" height="300" viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Arm Base */}
                <rect x="40" y="0" width="40" height="100" fill="url(#titanium-grad)" stroke="#343a40" strokeWidth="2"/>
                {/* Joint 1 */}
                <circle cx="60" cy="100" r="25" fill="#212529" />
                <circle cx="60" cy="100" r="10" fill="#adb5bd" />
                {/* Lower Arm */}
                <rect x="45" y="100" width="30" height="120" fill="url(#titanium-grad)" stroke="#343a40" strokeWidth="2"/>
                {/* Joint 2 */}
                <circle cx="60" cy="220" r="20" fill="#212529" />
                {/* Effector / Laser Head */}
                <path d="M50 220 L70 220 L65 270 L55 270 Z" fill="#dee2e6" stroke="#343a40" strokeWidth="2"/>
                {/* Laser Diode */}
                <circle cx="60" cy="275" r="5" fill={phase === "etching" ? "#ff2a2a" : "#495057"} className={phase === "etching" ? "drop-shadow-[0_0_8px_rgba(255,42,42,0.8)]" : ""} />
                
                <defs>
                  <linearGradient id="titanium-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#e9ecef" />
                    <stop offset="50%" stopColor="#f8f9fa" />
                    <stop offset="100%" stopColor="#ced4da" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* The Laser Beam */}
              {phase === "etching" && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 180, opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                  className="absolute left-[60px] top-[280px] w-[2px] bg-[var(--laser-red)] shadow-[0_0_10px_rgba(255,42,42,1)] origin-top"
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
                      transition={{ duration: 3, ease: "linear" }}
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
                transition={{ duration: 1, delay: 0.5 }}
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