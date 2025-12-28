"use client";

import { motion } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
} from "../components/animations/AnimationWrappers";
import { HiCheck } from "react-icons/hi";
import GlowCard from "../components/animations/GlowCard";
import { pricingData } from "../lib/data";

export default function PricingSection() {
  const { heading, subheading, plans } = pricingData;

  return (
    <section className="relative py-32 md:py-40 px-6 bg-black z-20">
      <div className="max-w-7xl mx-auto relative z-20">
        <FadeIn>
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {heading.split("transparent pricing")[0]}
              <span className="gradient-text">transparent pricing</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {subheading}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {plans.map((plan, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <GlowCard>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-green text-black text-sm font-semibold rounded-full z-20">
                      Most Popular
                    </div>
                  )}

                  {/* Static border for popular card */}
                  {plan.popular && (
                    <div className="absolute inset-0 rounded-3xl border-2 border-neon-green pointer-events-none z-10" />
                  )}

                  {/* Inner card */}
                  <div className="relative h-full p-10 md:p-12 rounded-3xl transition-all duration-500 flex flex-col bg-dark-gray z-0">
                    <div className="mb-6 relative z-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mb-6 relative z-10">
                      <span className="text-5xl md:text-6xl font-bold text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-400">/month</span>
                    </div>

                    <ul className="space-y-4 mb-8 grow relative z-10">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-300">
                          <HiCheck className="w-5 h-5 text-neon-green shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 cursor-pointer text-center rounded-full font-semibold transition-all relative z-10 ${
                        plan.popular
                          ? "bg-neon-green text-black hover:shadow-lg hover:shadow-neon-green/20"
                          : "bg-medium-gray text-white border border-light-gray hover:border-gray-500"
                      }`}>
                      {plan.cta}
                    </motion.a>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
