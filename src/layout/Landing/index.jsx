import React from "react";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Landing() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}
