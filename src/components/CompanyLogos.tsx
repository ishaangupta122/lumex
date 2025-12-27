"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { FadeIn } from "./animations/AnimationWrappers";
import { useRef, useState } from "react";

const companies = [
  { name: "Outside", logo: "🏔️" },
  { name: "APEX", logo: "✦" },
  { name: "Celestial", logo: "✧" },
  { name: "2TWICE", logo: "◆" },
  { name: "Quantum", logo: "⬢" },
  { name: "Stellar", logo: "★" },
  { name: "Nexus", logo: "◈" },
  { name: "Zenith", logo: "◊" },
];

export default function CompanyLogos() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // px per second
  const baseSpeed = 80;
  const slowSpeed = 30;

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;

    const speed = isHovered ? slowSpeed : baseSpeed;
    const moveBy = (speed * delta) / 1000;

    x.set(x.get() - moveBy);

    // seamless loop reset
    if (x.get() <= -containerRef.current.scrollWidth / 2) {
      x.set(0);
    }
  });

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden border-y border-light-gray/20">
      <FadeIn>
        <div className="max-w-7xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xl md:text-2xl text-gray-400 mb-16">
            Already chosen by these market leaders
          </motion.h3>

          <div className="relative">
            {/* Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10" />

            <div className="overflow-hidden">
              <motion.div
                ref={containerRef}
                style={{ x }}
                className="flex gap-24 w-max"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {duplicatedCompanies.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center gap-3 cursor-pointer text-white/50 hover:text-white transition">
                    <span className="text-5xl">{company.logo}</span>
                    <span className="text-3xl font-bold whitespace-nowrap">
                      {company.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
