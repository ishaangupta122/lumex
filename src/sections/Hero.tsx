"use client";

import { motion, useInView } from "framer-motion";
import { FadeIn } from "../components/animations/AnimationWrappers";
import { useRef, useState, useEffect } from "react";
import CubeGridBackground from "../components/CubeGridBackground";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {isInView ? count.toLocaleString() : 0}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      data-splash-cursor="true">
      {/* Interactive Cube Grid Background */}
      <CubeGridBackground />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-40">
        {/* Badge */}
        <FadeIn delay={0.1}>
          <div className="mb-8 inline-block">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-medium-gray/50 border border-neon-green backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
              </span>
              <span className="text-sm text-neon-green">Introducing Lumex</span>
            </div>
          </div>
        </FadeIn>

        {/* Main Heading */}
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 leading-tighter">
            Design tools that
            <br />
            <span className="gradient-text">don't slow you down</span>
          </h1>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 cursor-pointer bg-neon-green text-black font-semibold rounded-full hover:shadow-lg hover:shadow-neon-green/20 transition-all">
              Get Started Free
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 cursor-pointer bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all">
              Watch Demo
            </motion.button>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.5}>
          <div className="mt-34 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "10", suffix: "M+", label: "Active Users" },
              { value: "99.9", suffix: "%", label: "Uptime" },
              { value: "5000", suffix: "+", label: "Teams" },
              { value: "150", suffix: "+", label: "Countries" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-wrap text-center group">
                <div className="w-fit text-2xl md:text-3xl font-bold text-white group-hover:text-neon-green mb-1 transition-colors duration-300">
                  {stat.suffix === "%" ? (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  ) : (
                    <>
                      <AnimatedCounter value={stat.value} suffix="" />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="text-sm text-gray-300 group-hover:text-neon-green mb-1 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
