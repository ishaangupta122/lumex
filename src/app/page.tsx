"use client";

import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyLogos from "../components/CompanyLogos";
import Integrations from "../components/Integrations";

// Load CustomCursor only on client side to avoid hydration mismatch
const CustomCursor = dynamic(() => import("../components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative">
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
