import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Landing() {
  return (
    <div className="bg-base-200">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
