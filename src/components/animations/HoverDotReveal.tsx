"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

export default function HoverDotReveal({
  children,
  radius = 240,
}: {
  children: ReactNode;
  radius?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const core = coreRef.current;
    const halo = haloRef.current;

    if (!container || !core || !halo) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // INNER CORE (strong)
      gsap.to(core, {
        maskPosition: `${x - radius * 0.4}px ${y - radius * 0.4}px`,
        WebkitMaskPosition: `${x - radius * 0.4}px ${y - radius * 0.4}px`,
        maskSize: `${radius * 0.8}px ${radius * 0.8}px`,
        WebkitMaskSize: `${radius * 0.8}px ${radius * 0.8}px`,
        opacity: 0.45,
        duration: 0.25,
        ease: "power3.out",
      });

      // OUTER HALO (soft)
      gsap.to(halo, {
        maskPosition: `${x - radius}px ${y - radius}px`,
        WebkitMaskPosition: `${x - radius}px ${y - radius}px`,
        maskSize: `${radius * 2}px ${radius * 2}px`,
        WebkitMaskSize: `${radius * 2}px ${radius * 2}px`,
        opacity: 0.25,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to([core, halo], {
        maskSize: "0px 0px",
        WebkitMaskSize: "0px 0px",
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [radius]);

  const baseDotStyle = {
    backgroundImage:
      "radial-gradient(circle at 2px 2px, white 2px, transparent 0)",
    backgroundSize: "36px 36px",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "0px 0px",
    WebkitMaskSize: "0px 0px",
    maskPosition: "0px 0px",
    WebkitMaskPosition: "0px 0px",
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ isolation: "isolate" }}>
      {/* CONTENT */}
      <div className="relative z-10">{children}</div>

      {/* SOFT HALO */}
      <div
        ref={haloRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          ...baseDotStyle,
          opacity: 0,
          maskImage: "radial-gradient(circle, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 30%, transparent 75%)",
        }}
      />

      {/* STRONG CORE */}
      <div
        ref={coreRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          ...baseDotStyle,
          opacity: 0,
          maskImage: "radial-gradient(circle, black 60%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 60%, transparent 80%)",
        }}
      />
    </div>
  );
}
