"use client";

import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Integrations from "../sections/Integrations";
import CustomCursor from "@/components/animations/CustomCursor";

// Import refactored sections
import CompanyLogosSection from "../sections/CompanyLogosSection";
import FeaturesSection from "../sections/FeaturesSection";
import PricingSection from "../sections/PricingSection";
import CTASection from "../sections/CTASection";
import Showcase from "@/sections/Showcase";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <CompanyLogosSection />
        <FeaturesSection />
        <Showcase />
        <Integrations />
        <Testimonials />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
