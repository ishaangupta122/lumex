"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor =
    scrollY > 100
      ? "rgba(15, 15, 15, 0.8)"
      : `rgba(0, 0, 0, ${Math.min(scrollY / 100, 1) * 0.8})`;

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white/5">
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
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-neon-green transition-colors duration-300">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="px-6 py-2 text-white hover:text-neon-green transition-colors">
                Log In
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-neon-green text-black font-semibold rounded-full">
                Sign Up
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
      </motion.nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-white hover:text-neon-green transition-colors">
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-8">
              <button className="px-8 py-3 text-white border-2 border-gray-700 rounded-full">
                Log In
              </button>
              <button className="px-8 py-3 bg-neon-green text-black font-semibold rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
