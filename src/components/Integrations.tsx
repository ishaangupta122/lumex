"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { FadeIn } from "./animations/AnimationWrappers";
import { useRef, useState } from "react";

const CARD_HEIGHT = 200;
const SPEED = 40; // px per second

const integrationsLeft = [
  {
    name: "Figma",
    icon: "🎨",
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: "📝",
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: "💬",
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "GitHub",
    icon: "🐙",
    description: "GitHub is the leading platform for code collaboration.",
  },
];

const integrationsRight = [
  {
    name: "Linear",
    icon: "📊",
    description: "Linear is the issue tracking tool teams love to use.",
  },
  {
    name: "Dropbox",
    icon: "📦",
    description: "Dropbox keeps your files safe and accessible.",
  },
  {
    name: "Zoom",
    icon: "🎥",
    description: "Zoom connects teams with video conferencing.",
  },
  {
    name: "Trello",
    icon: "📋",
    description: "Trello organizes your projects into boards.",
  },
];

export default function Integrations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<"left" | "right" | null>(
    null
  );

  const yLeft = useMotionValue(0);
  const yRight = useMotionValue(-(integrationsRight.length * CARD_HEIGHT));

  const isPaused = hoveredColumn !== null;

  const loopHeightLeft = integrationsLeft.length * CARD_HEIGHT;
  const loopHeightRight = integrationsRight.length * CARD_HEIGHT;

  // 🔁 Manual animation loop (pause & resume safe)
  useAnimationFrame((_, delta) => {
    if (isPaused) return;

    const move = (SPEED * delta) / 1000;

    yLeft.set(yLeft.get() - move);
    yRight.set(yRight.get() + move);

    if (yLeft.get() <= -loopHeightLeft) {
      yLeft.set(0);
    }

    if (yRight.get() >= 0) {
      yRight.set(-loopHeightRight);
    }
  });

  const duplicatedLeft = [...integrationsLeft, ...integrationsLeft];
  const duplicatedRight = [...integrationsRight, ...integrationsRight];

  const renderCard = (
    integration: any,
    index: number,
    column: "left" | "right",
    total: number
  ) => {
    const isActive = hoveredColumn === column && hoveredIndex === index % total;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (index % total) * 0.1 }}
        onMouseEnter={() => {
          setHoveredIndex(index % total);
          setHoveredColumn(column);
        }}
        onMouseLeave={() => {
          setHoveredIndex(null);
          setHoveredColumn(null);
        }}
        animate={{
          opacity: hoveredColumn && !isActive ? 0.45 : 1,
          filter: hoveredColumn && !isActive ? "blur(1.5px)" : "blur(0px)",
        }}
        className="relative">
        {/* Gradient border */}
        <motion.div
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom right, rgb(168,85,247), rgb(236,72,153))",
            padding: "2px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Card (unchanged styling) */}
        <div
          className={`relative p-6 flex items-center justify-between flex-col text-center rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
            isActive
              ? "bg-dark-gray border-transparent shadow-lg"
              : "bg-dark-gray/60 border-light-gray/50"
          }`}>
          <div className="w-24 h-24 rounded-xl bg-white flex items-center justify-center text-3xl shadow mb-3">
            {integration.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {integration.name}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {integration.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-32 md:py-40 px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neon-green/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* LEFT CONTENT */}
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon-green/30 bg-neon-green/5 mb-8">
                <span className="text-xs font-mono text-neon-green tracking-wider">
                  ✦ INTEGRATIONS
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Plays well with <span className="gradient-text">others</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Layers seamlessly connects with your favorite tools, making it
                easy to plug into any workflow.
              </p>
            </div>
          </FadeIn>

          {/* RIGHT MARQUEE */}
          <div className="relative h-150 overflow-hidden rounded-3xl max-w-md ml-auto">
            <div className="grid grid-cols-2 gap-4 h-full">
              <motion.div className="space-y-4" style={{ y: yLeft }}>
                {duplicatedLeft.map((i, idx) =>
                  renderCard(i, idx, "left", integrationsLeft.length)
                )}
              </motion.div>

              <motion.div className="space-y-4" style={{ y: yRight }}>
                {duplicatedRight.map((i, idx) =>
                  renderCard(i, idx, "right", integrationsRight.length)
                )}
              </motion.div>
            </div>

            {/* FADES */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
