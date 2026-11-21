"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Motion = { progress: number; px: number; py: number };

// Stable pseudo-random value per vertex position, so shared vertices move together.
function hash(key: string, salt: string) {
  let h = 2166136261;
  const s = key + salt;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return ((h >>> 0) % 10000) / 10000;
}

const smooth = (t: number) => t * t * (3 - 2 * t);

function Form({ motion, reduced }: { motion: { current: Motion }; reduced: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [color, setColor] = useState("#a5582f");

  const { geometry, base, raw } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.4, 4);
    const pos = geo.attributes.position.array as Float32Array;
    const rough = new Float32Array(pos.length);
    for (let i = 0; i < pos.length; i += 3) {
      const key = `${pos[i].toFixed(3)}|${pos[i + 1].toFixed(3)}|${pos[i + 2].toFixed(3)}`;
      rough[i] = pos[i] + (hash(key, "x") - 0.5) * 0.9;
      rough[i + 1] = pos[i + 1] + (hash(key, "y") - 0.5) * 0.9;
      rough[i + 2] = pos[i + 2] + (hash(key, "z") - 0.5) * 0.9;
    }
    return { geometry: geo, base: new Float32Array(pos), raw: rough };
  }, []);

  // THREE.Color cannot parse oklch, so use hex values picked by theme.
  useEffect(() => {
    const pick = () => {
      const attr = document.documentElement.dataset.theme;
      const dark =
        attr === "dark" ||
        (!attr && window.matchMedia("(prefers-color-scheme: dark)").matches);
      setColor(dark ? "#d9a074" : "#a5582f");
    };
    pick();
    const obs = new MutationObserver(pick);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", pick);
    return () => {
      obs.disconnect();
      mq.removeEventListener("change", pick);
    };
  }, []);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const attr = geometry.attributes.position as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const p = reduced ? 1 : smooth(Math.min(1, Math.max(0, motion.current.progress)));

    for (let i = 0; i < arr.length; i++) arr[i] = raw[i] + (base[i] - raw[i]) * p;
    attr.needsUpdate = true;

    if (!reduced) {
      const m = motion.current;
      mesh.rotation.y += delta * 0.08;
      mesh.rotation.x += (m.py * 0.25 - mesh.rotation.x) * 0.05;
      mesh.rotation.z += (m.px * 0.15 - mesh.rotation.z) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

export default function HeroObject() {
  const motion = useRef<Motion>({ progress: 0, px: 0, py: 0 });
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setEnabled(desktop.matches);
      setReduced(rm.matches);
    };
    const onScroll = () => {
      const span = window.innerHeight * 1.5;
      motion.current.progress = window.scrollY / span;
    };
    const onMove = (e: PointerEvent) => {
      motion.current.px = (e.clientX / window.innerWidth) * 2 - 1;
      motion.current.py = (e.clientY / window.innerHeight) * 2 - 1;
    };

    sync();
    onScroll();
    desktop.addEventListener("change", sync);
    rm.addEventListener("change", sync);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      desktop.removeEventListener("change", sync);
      rm.removeEventListener("change", sync);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="absolute inset-0">
      <Canvas
        frameloop={reduced ? "demand" : "always"}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 4.2], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Form motion={motion} reduced={reduced} />
      </Canvas>
    </div>
  );
}
