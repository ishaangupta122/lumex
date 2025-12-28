"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { FadeIn } from "../components/animations/AnimationWrappers";
import { useRef, useState } from "react";
import { companyLogosData } from "../lib/data";

export default function CompanyLogos() {
  const { companies, config } = companyLogosData;
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;

    const speed = isHovered ? config.slowSpeed : config.baseSpeed;
    const moveBy = (speed * delta) / 1000;

    x.set(x.get() - moveBy);

    if (x.get() <= -containerRef.current.scrollWidth / 2) {
      x.set(0);
    }
  });

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden border-y border-light-gray/20">
      <FadeIn>
        <div className="relative max-w-6xl mx-auto px-6">
          {/* <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xl md:text-2xl text-gray-400 mb-16">
            {config.heading}
          </motion.h3> */}

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
