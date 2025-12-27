"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState(() => {
    // Initialize with center of viewport or stored position
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("cursorPosition");
      if (stored) {
        return JSON.parse(stored);
      }
      return {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
    }
    return { x: 0, y: 0 };
  });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(() => {
    // Check if we have a stored position (meaning cursor was in viewport before)
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("cursorPosition") !== null;
    }
    return false;
  });

  useEffect(() => {
    // Check if device has a cursor (not touch-only)
    const hasPointer = window.matchMedia("(pointer: fine)").matches;

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      setIsVisible(true);

      // Store position in sessionStorage for page refresh
      sessionStorage.setItem("cursorPosition", JSON.stringify(newPosition));

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "BUTTON" ||
          target.tagName === "A"
      );
    };

    const handleMouseEnter = (e: MouseEvent) => {
      // When cursor enters viewport, set position and make visible
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      // Hide cursor when it leaves viewport
      setIsVisible(false);
    };

    // If device doesn't have cursor, show centered cursor
    if (!hasPointer) {
      setMousePosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
      setIsVisible(true);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-neon-green rounded-full pointer-events-none z-9999 mix-blend-difference"
        initial={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
          y: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
          scale: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-neon-green rounded-full pointer-events-none z-999 mix-blend-difference"
        initial={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { type: "spring", stiffness: 150, damping: 15, mass: 0.5 },
          y: { type: "spring", stiffness: 150, damping: 15, mass: 0.5 },
          scale: { type: "spring", stiffness: 150, damping: 15, mass: 0.5 },
          opacity: { duration: 0.2 },
        }}
      />
    </>
  );
}
