"use client";

import Hero from "@/sections/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Integrations from "@/sections/Integrations";
import CustomCursor from "@/components/animations/CustomCursor";
import CompanyLogos from "@/sections/CompanyLogos";
import Features from "@/sections/Features";
import Pricing from "@/sections/Pricing";
import CTA from "@/sections/CTA";
import Showcase from "@/sections/Showcase";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative max-w-6xl mx-auto">
        <Hero />
        <CompanyLogos />
        <Features />
        <Showcase />
        <Integrations />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
