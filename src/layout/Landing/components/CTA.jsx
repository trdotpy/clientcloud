import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="grid grid-cols-2">
        <div className="hero-content text-left">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Join the waitlist</h1>
            <p className="text-md py-6 text-gray-400">
              ClientCloud is growing, fast. Enter your email to get early access
              to our beta.
            </p>
            <div className="items-center space-x-2">
              <input
                type="email"
                placeholder="Email"
                className="input-bordered input w-full max-w-xs rounded"
              />
              <Link to="/login">
                <button
                  className="btn-secondary btn rounded normal-case text-base-100"
                  type="submit"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/drij60fru/image/upload/v1677525506/join_r41ciw.svg"
            className="rounded-lg opacity-80"
            alt="transactions"
          />
        </div>
      </div>
    </div>
  );
}
