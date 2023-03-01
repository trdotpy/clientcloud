import React from "react";
import Benefits from "./components/Benefits";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Landing() {
  return (
    <div className="bg-base-100">
      <Hero />
      <Content />
      <Benefits />
      <Testimonials />
    </div>
  );
}
