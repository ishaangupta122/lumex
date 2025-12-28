"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../components/animations/AnimationWrappers";
import { useRef, useState, useEffect } from "react";
import { featuresData } from "../lib/data";

export default function Features() {
  const { heading, highlightedHeading, subheading, features } = featuresData;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          animate={{
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none">
          <div className="animate-pulse absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="animate-pulse absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="">
          {/* Section header */}
          <FadeIn>
            <div className="text-center mb-20 md:mb-28">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {heading}{" "}
                <span className="gradient-text">{highlightedHeading}</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {subheading}
              </p>
            </div>
          </FadeIn>

          {/* Features grid with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={0} direction="up">
                <motion.div
                  initial={{ opacity: 0, rotateY: -15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  className="group relative h-full"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("--mouse-x", `50%`);
                    e.currentTarget.style.setProperty("--mouse-y", `50%`);
                  }}>
                  {/* Hover border effect with mouse tracking */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(196, 255, 97, 0.6), transparent 40%)`,
                      padding: "2px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  {/* Card content */}
                  <div className="relative h-full p-10 md:p-12 rounded-3xl bg-dark-gray backdrop-blur-sm transition-all duration-500 flex flex-col justify-between z-0">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mb-8 flex items-center justify-center rounded-2xl ${feature.iconBg} border border-gray-700/50`}>
                      <feature.icon className="w-8 h-8 text-neon-green" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-neon-green transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-lg">
                      {feature.description}
                    </p>

                    {/* Decorative corner element */}
                    <span className="absolute top-8 right-8 flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-neon-green opacity-75"></span>
                      <span className="relative inset-0 inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                    </span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
