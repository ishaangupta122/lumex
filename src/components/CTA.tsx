"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./animations/AnimationWrappers";

export default function CTA() {
  return (
    <section className="relative py-32 md:py-40 px-6 bg-dark-gray/30 overflow-hidden z-10">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ready to <span className="gradient-text">transform</span> your
            workflow?
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of designers who are already creating faster with
            Lumex.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-neon-green text-black font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/20">
              Start Free Trial
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:border-gray-500">
              Schedule Demo
            </motion.button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
