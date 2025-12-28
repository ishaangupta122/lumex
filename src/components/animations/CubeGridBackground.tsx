"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function calculateGrid() {
  if (typeof window === "undefined") {
    return { cols: 9, rows: 6, brightness: 1 };
  }

  const w = window.innerWidth;
  const h = window.innerHeight;

  let cols: number;
  let rows: number;
  let brightness = 1;
  let rowBias = 1;

  if (h > w) {
    cols = w < 420 ? 4 : w < 640 ? 5 : 6;
    rowBias = 1.1;
    brightness = 0.8;
  } else {
    cols = w < 768 ? 6 : w < 1024 ? 7 : w < 1440 ? 8 : 8;

    rowBias =
      w > 1920 ? 2.45 : w > 1600 ? 2 : w > 1440 ? 1.9 : w > 1200 ? 1.7 : 1.4;

    brightness = w < 768 ? 0.9 : 1;
  }

  rows = Math.ceil((h / (w / cols)) * rowBias);

  return { cols, rows, brightness };
}

function useResponsiveGrid() {
  const [grid, setGrid] = useState(calculateGrid);

  useEffect(() => {
    const updateGrid = () => {
      setGrid(calculateGrid());
    };

    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  return grid;
}

interface CubeProps {
  row: number;
  col: number;
  layer: "background" | "foreground";
  brightness: number;
}

function Cube({ row, col, layer, brightness }: CubeProps) {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    // Skip mouse tracking on touch devices for performance
    const canHover =
      window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches;
    if (!canHover) return;

    const maxDistance = layer === "foreground" ? 280 : 380;
    const intensityMultiplier = layer === "foreground" ? 1.2 : 0.9;
    let animationFrameId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId !== null) return;

      animationFrameId = requestAnimationFrame(() => {
        const rect = cube.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / maxDistance);

        if (influence > 0) {
          gsap.to(cube, {
            rotateX: (-dy / maxDistance) * 18 * influence * intensityMultiplier,
            rotateY: (dx / maxDistance) * 18 * influence * intensityMultiplier,
            scale: 1 + influence * 0.06 * intensityMultiplier,
            opacity: (0.35 + influence * 0.4) * brightness,
            duration: 0.2,
            ease: "power1.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(cube, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            opacity: 0.35 * brightness,
            duration: 0.2,
            ease: "power1.out",
            overwrite: "auto",
          });
        }

        animationFrameId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [layer, brightness]);

  return (
    <div
      ref={cubeRef}
      className="cube-container relative"
      style={{
        transformStyle: "preserve-3d",
        opacity: 0.35 * brightness,
      }}>
      <div className="cube-wireframe relative w-full h-full">
        <div
          className="absolute inset-0 border-2 rounded"
          style={{
            borderColor: `rgba(168, 85, 247, ${
              (layer === "foreground" ? 0.55 : 0.38) * brightness
            })`,
            boxShadow:
              layer === "foreground"
                ? `0 0 8px rgba(168, 85, 247, ${0.28 * brightness})`
                : `0 0 5px rgba(168, 85, 247, ${0.18 * brightness})`,
          }}
        />

        <div
          className="absolute inset-0 border-2 rounded"
          style={{
            borderColor: `rgba(168, 85, 247, ${
              (layer === "foreground" ? 0.35 : 0.22) * brightness
            })`,
            transform: "translate(3px, 3px)",
          }}
        />

        <div
          className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: `rgba(196, 255, 97, ${
              (layer === "foreground" ? 0.7 : 0.5) * brightness
            })`,
            boxShadow:
              layer === "foreground"
                ? `0 0 5px rgba(196, 255, 97, ${0.5 * brightness})`
                : `0 0 3px rgba(196, 255, 97, ${0.3 * brightness})`,
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
  brightness: number;
}

function CubeGridLayer({ cols, rows, layer, brightness }: CubeGridLayerProps) {
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
      {cubes.map(({ row, col, key }) => (
        <Cube
          key={key}
          row={row}
          col={col}
          layer={layer}
          brightness={brightness}
        />
      ))}
    </div>
  );
}

export default function CubeGridBackground() {
  const { cols, rows, brightness } = useResponsiveGrid();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}>
      <div className="absolute inset-0 bg-linear-to-b from-black via-dark-gray to-black" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <CubeGridLayer
        cols={cols}
        rows={rows}
        layer="background"
        brightness={brightness}
      />
      <CubeGridLayer
        cols={cols}
        rows={rows}
        layer="foreground"
        brightness={brightness}
      />

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
