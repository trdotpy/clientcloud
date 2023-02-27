import React from "react";

export default function Features() {
  return (
    <div className="hero flex min-h-screen flex-col gap-y-40 bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <img
          src="https://res.cloudinary.com/drij60fru/image/upload/v1677520430/product_cy07sp.svg"
          className="max-w-2xl rounded-lg"
          alt="product"
        />
        <div>
          <h1 className="text-5xl font-bold">Reporting & Analytics</h1>
          <p className="py-6">
            Analyze your sales data, measure your team's performance, and
            optimize your sales process.
          </p>
        </div>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://res.cloudinary.com/drij60fru/image/upload/v1677520394/phone-data_nv4xs7.svg"
          className="max-w-2xl rounded-lg"
          alt="analysis"
        />
        <div>
          <h1 className="text-5xl font-bold">Centralize Your Customer Data</h1>
          <p className="py-6">
            Keep all of your customer data in one place, accessible from
            anywhere.
          </p>
        </div>
      </div>

      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://res.cloudinary.com/drij60fru/image/upload/v1677520430/product_cy07sp.svg"
          className="max-w-2xl rounded-lg"
          alt="product"
        />

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
