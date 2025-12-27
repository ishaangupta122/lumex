"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "./animations/AnimationWrappers";
import { HiCheck } from "react-icons/hi";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for trying out Lumex",
    features: [
      "3 projects",
      "Basic collaboration",
      "Community support",
      "5GB storage",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "12",
    description: "For professional designers",
    features: [
      "Unlimited projects",
      "Advanced collaboration",
      "Priority support",
      "100GB storage",
      "Version history",
      "Custom domains",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Team",
    price: "39",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Admin controls",
      "1TB storage",
      "SSO & SAML",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-32 md:py-40 px-6 bg-black z-20">
      <div className="max-w-7xl mx-auto relative z-20">
        <FadeIn>
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Simple, <span className="gradient-text">transparent pricing</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your needs
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {plans.map((plan, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
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
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-green text-black text-sm font-semibold rounded-full z-20">
                      Most Popular
                    </div>
                  )}

                  {/* Static border for popular card */}
                  {plan.popular && (
                    <div className="absolute inset-0 rounded-3xl border-2 border-neon-green pointer-events-none z-10" />
                  )}

                  {/* Hover border effect with mouse tracking */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(196, 255, 97, 0.6), transparent 40%)`,
                      padding: "2px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

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

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-full font-semibold transition-all relative z-10 ${
                        plan.popular
                          ? "bg-neon-green text-black hover:shadow-lg hover:shadow-neon-green/20"
                          : "bg-medium-gray text-white border border-light-gray hover:border-gray-500"
                      }`}>
                      {plan.cta}
                    </motion.button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
