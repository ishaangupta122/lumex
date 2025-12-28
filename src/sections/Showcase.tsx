"use client";

import { motion, useInView } from "framer-motion";
import { FadeIn } from "../components/animations/AnimationWrappers";
import { useRef, useState, useEffect } from "react";
import { showcaseData } from "../lib/data";

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

export default function Showcase() {
  const { badge, heading, subheading, items: showcaseItems } = showcaseData;

  return (
    <section className="relative py-32 md:py-40 px-6 bg-linear-to-b from-black via-dark-gray/30 to-black">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <div className="text-center mb-20 md:mb-28">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon-green/30 bg-neon-green/5 mb-8">
              <span className="text-xs md:text-sm font-mono text-neon-green tracking-wider">
                {badge.text}
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Join the{" "}
              <span className="gradient-text">creative revolution</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {subheading}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                initial={{ opacity: 0, rotateX: 45 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative perspective-1000 h-full"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}>
                {/* Glowing background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`}
                />

                {/* Card with fixed height */}
                <div className="min-h-72 relative p-8 md:p-10 rounded-3xl bg-dark-gray/80 border-2 border-light-gray/50 backdrop-blur-sm text-center transition-all duration-500 flex flex-col justify-center overflow-hidden">
                  {/* Hover border effect */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(196, 255, 97, 0.04), transparent 40%)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-5xl md:text-6xl mb-12">
                    {item.icon}
                  </motion.div>

                  {/* Value with animated counter */}
                  <div
                    className={`text-6xl md:text-5xl font-extrabold mb-4 bg-linear-to-br ${item.gradient} bg-clip-text text-transparent`}>
                    {item.value.includes("%") ? (
                      <>{item.value}</>
                    ) : (
                      <AnimatedCounter
                        value={item.value}
                        suffix={item.value.includes("+") ? "+" : ""}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <div className="text-xl md:text-2xl font-semibold text-white mb-3">
                    {item.label}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base">
                    {item.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-transparent via-neon-green to-transparent"
                  />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
