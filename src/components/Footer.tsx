"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaTwitter, FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Security", href: "#security" },
    { name: "Roadmap", href: "#roadmap" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaDribbble, href: "#", label: "Dribbble" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-light-gray overflow-hidden">
      {/* Background linear */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green opacity-10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-6">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <Link href="/">
                <motion.div
                  className="flex items-center gap-3 mb-6 group w-fit cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  <div className="relative w-12 h-12 bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur opacity-40"></div>
                    <span
                      className="relative text-white font-black text-2xl tracking-tighter"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      Φ
                    </span>
                  </div>
                  <span
                    className="text-2xl font-black tracking-tight bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-orange-300 transition-all"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    LUMEX
                  </span>
                </motion.div>
              </Link>

              <p className="text-gray-400 mb-6 max-w-sm">
                Empowering creators with cutting-edge design tools and seamless
                collaboration features.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <HiMail className="w-5 h-5 text-neon-green" />
                  <span>hello@lumex.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <HiLocationMarker className="w-5 h-5 text-neon-green" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <h3 className="text-white font-semibold mb-6 capitalize">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 p-8 rounded-3xl bg-linear-to-br from-dark-gray to-medium-gray border border-light-gray">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay in the <span className="linear-text">loop</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates, tips, and exclusive offers delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-medium-gray border border-light-gray rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-neon-green text-black font-semibold rounded-full hover:shadow-lg hover:shadow-neon-green/20 transition-all duration-300">
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-light-gray flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © 2025 Lumex. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-medium-gray border border-light-gray flex items-center justify-center text-gray-400 hover:text-neon-green hover:border-neon-green transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}>
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-neon-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-neon-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
