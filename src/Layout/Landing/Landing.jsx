import React from "react";
import Benefits from "./components/Benefits";
import Content from "./components/Content";
import Hero from "./components/Hero";

export default function Landing() {
  return (
    <div className="bg-base-100">
      <Hero />
      <Content />
      <Benefits />
    </div>
  );
}
