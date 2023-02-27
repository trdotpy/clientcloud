import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="grid grid-cols-2">
        <div className="hero-content text-left">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hit your target,</h1>
            <h1 className="text-5xl font-bold">in any market</h1>
            <p className="text-md py-6 text-gray-400">
              ClientCloud is the all-in-one CRM suite designed to help your
              business grow and thrive. Our powerful software lets you focus on
              what matters most: your customers.
            </p>
            <Link to="/login">
              <button className="btn-secondary btn rounded normal-case text-base-100">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/drij60fru/image/upload/v1677520430/product_cy07sp.svg"
            className="rounded-lg opacity-80"
            alt="transactions"
          />
        </div>
      </div>
    </div>
  );
}
