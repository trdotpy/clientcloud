import React from "react";

export default function Header() {
  return (
    <header className="alert bg-base-100 shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 flex-shrink-0 stroke-info"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">Welcome!</h3>
          <div className="text-xs">
            Check out the guide to get started with ClientCloud.
          </div>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn-info btn-sm btn">Get Started</button>
      </div>
    </header>
  );
}
