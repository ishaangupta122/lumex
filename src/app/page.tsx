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
import HoverDotReveal from "@/components/animations/HoverDotReveal";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <CompanyLogos />
      <Features />
      <HoverDotReveal radius={260}>
        <div className="h-full bg-linear-to-b from-black/70 via-dark-gray/30 to-black/70">
          <Showcase />
          <Integrations />
        </div>
      </HoverDotReveal>
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
