import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-base-100">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-6xl">
            Understand Customers.
            <strong className="hidden font-extrabold text-secondary sm:block">
              Increase Conversions.
            </strong>
          </h1>
          <h1 className="text-3xl font-extrabold text-secondary md:hidden">
            Increase Conversions.
          </h1>

          <p className="mt-4 sm:text-lg sm:leading-relaxed">
            Welcome to CloudConnect, the ultimate CRM platform that helps you
            streamline your business operations and build long-lasting
            relationships with your customers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/login">
              <button className="btn-secondary btn rounded text-primary sm:w-auto">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
