"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navbarData } from "../lib/data";

export default function Navbar() {
  const { brand, navLinks, cta } = navbarData;
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor =
    scrollY > 50 ? "rgba(15, 15, 15, 0.5)" : "rgba(0, 0, 0, 0)";
  const borderOpacity = scrollY > 50 ? 0.1 : 0;
  const blurClass = scrollY > 50 ? "backdrop-blur-lg" : "";

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${blurClass}`}
        animate={{
          borderBottomColor: `rgba(255, 255, 255, ${borderOpacity})`,
        }}>
        <div
          className="border-b"
          style={{ borderColor: `rgba(255, 255, 255, ${borderOpacity})` }}>
          <div className="container max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  <motion.div
                    whileHover={{
                      boxShadow:
                        "0 0 40px rgba(168, 85, 247, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative w-11 h-11 bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur"></motion.div>
                    <span
                      className="relative text-white font-black text-2xl tracking-tighter group-hover:scale-110 transition-transform"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      Φ
                    </span>
                  </motion.div>
                  <span
                    className="text-2xl font-black tracking-tight bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-orange-300 transition-all"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    LUMEX
                  </span>
                </motion.div>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-200 font-medium hover:text-neon-green transition-colors duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 cursor-pointer bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all">
                  Log In
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 cursor-pointer bg-neon-green text-black font-semibold rounded-full hover:shadow-lg hover:shadow-neon-green/20 transition-all">
                  {cta.text}
                </motion.button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2">
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-white hover:text-neon-green transition-colors">
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-8">
              <button className="px-8 py-3 text-white border-2 border-gray-700 rounded-full">
                Log In
              </button>
              <button className="px-8 py-3 bg-neon-green text-black font-semibold rounded-full">
                {cta.text}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
