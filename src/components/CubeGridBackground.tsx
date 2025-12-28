"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface CubeProps {
  row: number;
  col: number;
  layer: "background" | "foreground";
}

function Cube({ row, col, layer }: CubeProps) {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    const maxDistance = layer === "foreground" ? 280 : 380;
    const intensityMultiplier = layer === "foreground" ? 1.2 : 0.9;
    let isInsideHero = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cube.getBoundingClientRect();
      const cubeCenterX = rect.left + rect.width / 2;
      const cubeCenterY = rect.top + rect.height / 2;
      const deltaX = e.clientX - cubeCenterX;
      const deltaY = e.clientY - cubeCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const influence = Math.max(0, 1 - distance / maxDistance);

      // Check if mouse is inside hero section
      const heroSection = cube.closest(".absolute.inset-0.overflow-hidden");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        isInsideHero =
          e.clientX >= heroRect.left &&
          e.clientX <= heroRect.right &&
          e.clientY >= heroRect.top &&
          e.clientY <= heroRect.bottom;
      }

      if (isInsideHero && influence > 0) {
        const targetRotateX =
          (-deltaY / maxDistance) * 18 * influence * intensityMultiplier;
        const targetRotateY =
          (deltaX / maxDistance) * 18 * influence * intensityMultiplier;
        const targetScale = 1 + influence * 0.06 * intensityMultiplier;
        const targetOpacity = 0.35 + influence * 0.4;

        gsap.to(cube, {
          rotateX: targetRotateX,
          rotateY: targetRotateY,
          scale: targetScale,
          opacity: targetOpacity,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });
      } else if (!isInsideHero || influence === 0) {
        gsap.to(cube, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          opacity: 0.35,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [layer]);

  return (
    <div
      ref={cubeRef}
      className="cube-container relative"
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        opacity: 0.35,
      }}>
      <div className="cube-wireframe relative w-full h-full">
        <div
          className="absolute inset-0 border-2 rounded"
          style={{
            borderColor: `rgba(168, 85, 247, ${
              layer === "foreground" ? 0.55 : 0.38
            })`,
            boxShadow:
              layer === "foreground"
                ? "0 0 8px rgba(168, 85, 247, 0.28)"
                : "0 0 5px rgba(168, 85, 247, 0.18)",
          }}
        />

        <div
          className="absolute inset-0 border-2 rounded"
          style={{
            borderColor: `rgba(168, 85, 247, ${
              layer === "foreground" ? 0.35 : 0.22
            })`,
            transform: "translate(3px, 3px)",
          }}
        />

        <div
          className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: `rgba(196, 255, 97, ${
              layer === "foreground" ? 0.7 : 0.5
            })`,
            boxShadow:
              layer === "foreground"
                ? "0 0 5px rgba(196, 255, 97, 0.5)"
                : "0 0 3px rgba(196, 255, 97, 0.3)",
          }}
        />
      </div>
    </div>
  );
}

interface CubeGridLayerProps {
  cols: number;
  rows: number;
  layer: "background" | "foreground";
}

function CubeGridLayer({ cols, rows, layer }: CubeGridLayerProps) {
  const cubes = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => ({
      row,
      col,
      key: `${layer}-${row}-${col}`,
    }))
  ).flat();

  return (
    <div
      className="absolute inset-0 grid gap-2 p-4"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        perspective: "1000px",
        transform:
          layer === "foreground" ? "translateZ(50px)" : "translateZ(0px)",
        opacity: layer === "foreground" ? 1 : 0.6,
      }}>
      {" "}
      {cubes.map(({ row, col, key }) => (
        <Cube key={key} row={row} col={col} layer={layer} />
      ))}
    </div>
  );
}

export default function CubeGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const COLS = 9;
  const ROWS = 6;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-dark-gray to-black" />

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      {/* Background Layer (slower, subtler response) */}
      <CubeGridLayer cols={COLS} rows={ROWS} layer="background" />

      {/* Foreground Layer (stronger, more responsive) */}
      <CubeGridLayer cols={COLS} rows={ROWS} layer="foreground" />

      {/* Vignette overlay to blend edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)",
        }}
      />
    </div>
  );
}
