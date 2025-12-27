"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { FadeIn, SlideIn } from "./animations/AnimationWrappers";
import { useState, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    company: "Stripe",
    content:
      "Lumex completely transformed how our team collaborates. The real-time features are incredible.",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Creative Director",
    company: "Netflix",
    content:
      "Best design tool I've used in 10 years. Fast, intuitive, and powerful.",
    avatar: "MT",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "UX Lead",
    company: "Airbnb",
    content:
      "The keyboard shortcuts alone save me hours every week. This is the future of design.",
    avatar: "EJ",
    rating: 5,
  },
];

export default function Testimonials() {
  const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [intensities, setIntensities] = useState<number[]>([0, 0, 0]);

  return (
    <section className="relative py-32 md:py-40 px-6 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Loved by <span className="gradient-text">designers</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              See what creative professionals are saying about Lumex
            </p>
          </div>
        </FadeIn>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          onMouseMove={(e) => {
            setGlobalMousePos({ x: e.clientX, y: e.clientY });

            const newIntensities = [...intensities];
            cardRefs.current.forEach((cardRef, idx) => {
              if (cardRef) {
                const rect = cardRef.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distance = Math.sqrt(
                  Math.pow(e.clientX - centerX, 2) +
                    Math.pow(e.clientY - centerY, 2)
                );

                const maxDistance = 400;
                const intensity = Math.max(0, 1 - distance / maxDistance);
                newIntensities[idx] = intensity;

                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;

                cardRef.style.setProperty("--mouse-x", `${mouseX}px`);
                cardRef.style.setProperty("--mouse-y", `${mouseY}px`);
              }
            });
            setIntensities(newIntensities);
          }}
          onMouseLeave={() => {
            setIntensities([0, 0, 0]);
          }}>
          {testimonials.map((testimonial, index) => {
            const rotateX = useMotionValue(0);
            const rotateY = useMotionValue(0);

            const springRotateX = useSpring(rotateX, {
              stiffness: 150,
              damping: 15,
            });
            const springRotateY = useSpring(rotateY, {
              stiffness: 150,
              damping: 15,
            });

            return (
              <SlideIn
                key={index}
                delay={index * 0.2}
                direction={index === 0 ? "left" : index === 2 ? "right" : "up"}>
                <motion.div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="group relative h-full"
                  style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const rotateYVal =
                      -((e.clientX - centerX) / rect.width) * 20;
                    const rotateXVal =
                      ((e.clientY - centerY) / rect.height) * 20;

                    rotateY.set(rotateYVal);
                    rotateX.set(rotateXVal);
                  }}
                  onMouseLeave={(e) => {
                    rotateX.set(0);
                    rotateY.set(0);
                  }}>
                  {/* Quote mark background */}
                  <div
                    className="absolute -top-2 -left-4 text-neon-green/50 z-10 select-none"
                    style={{ transform: "scaleX(-1) scaleY(-1)" }}>
                    <FaQuoteLeft className="w-10 h-10" />
                  </div>

                  {/* Card with fixed height */}
                  <div className="relative h-100 p-10 md:p-12 rounded-3xl bg-dark-gray/60 border-2 border-light-gray/50 backdrop-blur-sm transition-all duration-500 flex flex-col overflow-hidden z-0">
                    {/* Hover border effect */}
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
                      style={{
                        opacity: intensities[index],
                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(196, 255, 97, 0.15), transparent 40%)`,
                      }}
                    />

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="text-neon-green text-xl">
                          ★
                        </motion.span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-200 mb-8 leading-relaxed text-lg md:text-xl grow italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-light-gray/30 mt-auto">
                      <div className="w-14 h-14 rounded-full bg-linear-to-br from-neon-green to-neon-purple flex items-center justify-center font-bold text-black text-lg shadow-lg shadow-neon-green/20">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 rounded-3xl bg-linear-to-br from-neon-green/5 to-neon-purple/5 pointer-events-none transition-opacity duration-500"
                      style={{
                        opacity: intensities[index],
                      }}
                    />
                  </div>
                </motion.div>
              </SlideIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
