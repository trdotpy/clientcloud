import React from "react";

export default function Error() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <button className="btn-info btn-outline btn">Go Back Home</button>
      </div>
    </div>
  );
}
