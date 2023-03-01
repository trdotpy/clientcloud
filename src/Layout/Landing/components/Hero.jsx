import React from "react";

export default function Hero() {
  return (
    <section className="bg-base-100">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Understand Customers.
            <strong className="font-extrabold text-secondary sm:block">
              Increase Conversions.
            </strong>
          </h1>

          <p className="mt-4 sm:text-lg sm:leading-relaxed">
            Welcome to CloudConnect, the ultimate CRM platform that helps you
            streamline your business operations and build long-lasting
            relationships with your customers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="btn-secondary btn rounded text-primary sm:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
