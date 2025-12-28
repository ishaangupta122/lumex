"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../components/animations/AnimationWrappers";
import { HiCheck } from "react-icons/hi";
import { ctaData } from "../lib/data";

export default function CTASection() {
  const {
    heading,
    highlightedHeading,
    subheading,
    primaryButton,
    secondaryButton,
    features,
  } = ctaData;

  return (
    <section className="relative py-32 md:py-40 bg-black overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </motion.div>
        <FadeIn>
          <div className="text-center">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {heading.split(highlightedHeading)[0]}
              <span className="gradient-text">{highlightedHeading}</span>
              {heading.split(highlightedHeading)[1]}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              {subheading}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.a
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 cursor-pointer bg-neon-green text-black font-semibold rounded-full hover:shadow-lg hover:shadow-neon-green/20 transition-all text-lg">
                {primaryButton.text}
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 cursor-pointer bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all text-lg">
                {secondaryButton.text}
              </motion.a>
            </motion.div>

            {/* Features list */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-gray-400">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-neon-green" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
