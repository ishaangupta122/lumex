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
    <section className="relative pb-28 pt-10 overflow-hidden">
      <FadeIn>
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold leading-tight text-[#b6b5b5]">
              {config.heading}{" "}
              <span className="gradient-text">{config.highlightedHeading}</span>
            </h2>
          </div>

          <div className="relative">
            {/* Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10" />

            <div className="overflow-hidden">
              <motion.div
                ref={containerRef}
                style={{ x }}
                className="flex gap-20 md:gap-28 w-max items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}>
                {duplicatedCompanies.map((company, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer flex items-center gap-2">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className={`${
                        company.smaller ? "h-7" : "h-11"
                      } w-auto object-contain brightness-0 invert opacity-50 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 group-active:brightness-100 group-active:invert-0 group-active:opacity-100 transition-all duration-300`}
                    />
                    {company.showName && (
                      <span className="text-xl font-semibold whitespace-nowrap text-white/50 group-hover:text-white group-active:text-white transition-colors duration-300">
                        {company.name}
                      </span>
                    )}
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
