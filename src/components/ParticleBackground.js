// src/components/ParticleBackground.js
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    /* optional: inspect container */
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: ["#6366F1", "#EC4899", "#60A5FA"] },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: { enable: true, minimumValue: 0.3 } },
          size: { value: { min: 2, max: 6 }, random: true },
          links: {
            enable: true,
            distance: 140,
            color: "#94A3B8",
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
            push: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
