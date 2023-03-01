import React from "react";
import FAQ from "../../pages/FAQ";
import { Routes, Route } from "react-router-dom";
import Footer from "../Landing/components/Footer";
import Navbar from "../Landing/components/Navbar";
import Landing from "../Landing/Landing";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}
