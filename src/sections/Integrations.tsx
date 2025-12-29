"use client";

import { FadeIn } from "@/components/animations/AnimationWrappers";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState } from "react";
import { integrationsData } from "@/lib/data";

export default function Integrations() {
  const {
    badge,
    heading,
    highlightedHeading,
    subheading,
    integrationsLeft,
    integrationsRight,
  } = integrationsData;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<"left" | "right" | null>(
    null
  );

  const CARD_HEIGHT = 200;
  const SPEED = 60;

  const yLeft = useMotionValue(0);
  const yRight = useMotionValue(-(integrationsRight.length * CARD_HEIGHT));

  const isPaused = hoveredColumn !== null;

  const loopHeightLeft = integrationsLeft.length * CARD_HEIGHT;
  const loopHeightRight = integrationsRight.length * CARD_HEIGHT;

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
        transition={{ duration: 0.4, delay: 0 }}
        onMouseEnter={() => {
          setHoveredIndex(index % total);
          setHoveredColumn(column);
        }}
        onMouseLeave={() => {
          setHoveredIndex(null);
          setHoveredColumn(null);
        }}
        onTouchStart={() => {
          setHoveredIndex(index % total);
          setHoveredColumn(column);
        }}
        onTouchEnd={() => {
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
          className={`relative p-4 flex items-center justify-between flex-col text-center rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
            isActive
              ? "bg-dark-gray border-transparent shadow-lg"
              : "bg-dark-gray/90 border-light-gray/50"
          }`}>
          <div className="h-28 w-28 rounded-3xl bg-white flex items-center justify-center p-5 shadow mb-3">
            <img
              src={integration.logo}
              alt={`${integration.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            {integration.name}
          </h3>
          <p className="text-sm text-[#858585] line-clamp-2">
            {integration.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* LEFT CONTENT */}
          <FadeIn className="flex-1 w-full">
            <div className="text-center lg:text-left lg:sticky lg:top-32 flex flex-col items-center lg:items-start gap-2">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-x-neon-green/60 border-y-neon-green/80 bg-neon-green/10 mb-14 w-fit">
                <span className="text-xs md:text-sm font-mono font-medium text-neon-green tracking-wider">
                  {badge.text}
                </span>
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-7 leading-tight">
                  {heading}{" "}
                  <span className="gradient-text">{highlightedHeading}</span>
                </h2>
                <p className="px-6 md:max-w-xl lg:max-w-none lg:px-0 mx-auto text-base md:text-lg text-[#858585] leading-relaxed">
                  {subheading}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT MARQUEE */}
          <div className="relative h-130 w-full overflow-hidden max-w-md shrink-0">
            <div className="grid grid-cols-2 gap-2 h-full">
              <motion.div className="space-y-2" style={{ y: yLeft }}>
                {duplicatedLeft.map((i, idx) =>
                  renderCard(i, idx, "left", integrationsLeft.length)
                )}
              </motion.div>

              <motion.div className="space-y-2" style={{ y: yRight }}>
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
