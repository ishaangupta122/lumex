"use client";

import { motion, useInView } from "framer-motion";
import { FadeIn, ScaleIn } from "./animations/AnimationWrappers";
import { useRef, useState, useEffect } from "react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-40">
        {/* Badge */}
        <FadeIn delay={0.1}>
          <div className="mb-8 inline-block">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-medium-gray/50 border border-light-gray backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
              </span>
              <span className="text-sm text-gray-400">Introducing Lumex</span>
            </div>
          </div>
        </FadeIn>

        {/* Main Heading */}
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Design tools that
            <br />
            <span className="gradient-text">don't slow you down</span>
          </h1>
        </FadeIn>

        {/* Subheading */}
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Experience powerful features with an intuitive interface that keeps
            you in your creative flow.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-neon-green text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/20">
              Get Started Free
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-full transition-all duration-300 hover:border-gray-500">
              Watch Demo
            </motion.button>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.5}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
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
