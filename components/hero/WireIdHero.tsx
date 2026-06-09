"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { motion } from "framer-motion";
import type { Group } from "three";

function AnimatedWires() {
  const groupRef = useRef<Group>(null);
  const wirePoints = useMemo(
    () => [
      [
        [-2.8, 1.6, 0],
        [-1.9, 1.2, 0],
        [-1.2, 0.9, 0],
        [-0.8, 0.65, 0]
      ],
      [
        [2.7, 1.3, 0],
        [1.8, 1.0, 0],
        [1.1, 0.82, 0],
        [0.76, 0.62, 0]
      ],
      [
        [-2.6, -1.45, 0],
        [-1.7, -1.1, 0],
        [-1.0, -0.84, 0],
        [-0.76, -0.6, 0]
      ],
      [
        [2.5, -1.65, 0],
        [1.8, -1.1, 0],
        [1.05, -0.82, 0],
        [0.8, -0.6, 0]
      ],
      [
        [0, -2.2, 0],
        [0, -1.65, 0],
        [0.02, -1.1, 0],
        [0.02, -0.62, 0]
      ],
      [
        [0, 2.2, 0],
        [0, 1.7, 0],
        [0.02, 1.15, 0],
        [0.02, 0.64, 0]
      ]
    ],
    []
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      const t = performance.now() * 0.001;
      groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.03;
      groupRef.current.rotation.x = Math.cos(t * 0.55) * 0.012;
      groupRef.current.position.y = Math.sin(t * 1.1) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {wirePoints.map((points, idx) => (
        <Line
          key={idx}
          points={points as [number, number, number][]}
          color={idx % 2 ? "#4da3ff" : "#003087"}
          lineWidth={2}
          transparent
          opacity={0.8}
        />
      ))}
      <Line
        points={[
          [-0.85, 0.65, 0],
          [0.85, 0.65, 0],
          [0.85, -0.65, 0],
          [-0.85, -0.65, 0],
          [-0.85, 0.65, 0]
        ]}
        color="#7ec8ff"
        lineWidth={2.6}
      />
      <Sparkles count={100} scale={[5.2, 3.4, 1]} size={2.4} speed={0.35} color="#4da3ff" />
    </group>
  );
}

function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4.8], fov: 45 }}>
      <color attach="background" args={["#030406"]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[0, 0, 2]} color="#4da3ff" intensity={2.2} />
      <AnimatedWires />
      <EffectComposer>
        <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.6} intensity={0.75} />
      </EffectComposer>
    </Canvas>
  );
}

export function WireIdHero() {
  const [isReducedMotion, setIsReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (event: MediaQueryListEvent) => setIsReducedMotion(event.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="hero-grid pointer-events-none absolute inset-0 z-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,48,135,0.35),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(77,163,255,0.25),transparent_45%)]" />
      {!isReducedMotion ? (
        <div className="absolute inset-0 z-0">
          <HeroCanvas />
        </div>
      ) : null}

      <div className="relative z-10 mx-auto grid min-h-[88vh] w-full max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="text-xs tracking-[0.25em] text-[var(--duke-blue-glow)] uppercase"
          >
            Duke ECE + CS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
            className="mt-4 text-4xl font-semibold leading-tight text-zinc-100 sm:text-6xl"
          >
            Building systems where embedded hardware meets intelligent software.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.65 }}
            className="mt-6 max-w-xl text-lg text-zinc-300"
          >
            I am Anya Krislav. I design resilient engineering tools, from race-car telemetry to assistive technology, and ship
            them with clarity and style.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link className="btn-primary" href="/projects">
              Explore Projects
            </Link>
            <Link className="btn-secondary" href="/resume">
              View Resume
            </Link>
          </motion.div>
        </div>
        <motion.article
          initial={{ opacity: 0, x: 30, rotateX: 20 }}
          animate={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm rounded-3xl border border-[var(--duke-blue)]/40 bg-black/65 p-4 shadow-[0_0_45px_rgba(0,48,135,0.35)] backdrop-blur-xl"
        >
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">
            <div className="relative h-80 overflow-hidden rounded-xl border border-white/10">
              <Image src="/headshot.png" alt="Portrait of Anya Krislav" fill className="object-cover" priority />
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">ID · Duke Engineering</p>
              <h2 className="text-2xl font-semibold text-zinc-100">Anya Krislav</h2>
              <p className="text-sm text-zinc-300">Electrical & Computer Engineering + Computer Science</p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
