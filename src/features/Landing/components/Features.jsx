import React from "react";

export default function Features() {
  return (
    <div className="hero flex min-h-screen flex-col bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="./src/assets/analysis.svg" className="max-w-2xl rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">Centralize Your Customer Data</h1>
          <p className="py-6">
            Keep all of your customer data in one place, accessible from
            anywhere.
          </p>
        </div>
      </div>
     
      <div className="hero-content flex-col lg:flex-row">
        <img src="./src/assets/product.svg" className="max-w-2xl rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">Lead Capture and Management</h1>
          <p className="py-6">
            Capture leads directly from your website and manage them with ease.
          </p>
        </div>
      </div>
    </div>
  );
}
