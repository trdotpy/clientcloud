import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <img
        src="./src/assets/transactions.svg"
        className="rounded-lg opacity-10"
        alt="transactions"
      />
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Your Ultimate CRM Solution</h1>
          <p className="py-6">
            ClientCloud is the all-in-one customer relationship management
            platform designed to help your business grow and thrive. Our
            powerful software streamlines your customer interactions, from lead
            capture to post-sale follow-up, so you can focus on what matters
            most: <span className="font-bold">your customers.</span>
          </p>
          <Link to="/login">
            <button className="btn-primary btn-lg btn text-gray-100">
              Try a Free Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
