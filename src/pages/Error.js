import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="mt-4 text-gray-500">This page doesn't seem to exist!</p>
        <Link to="/">
          <button className="btn-info btn-outline btn-sm btn mt-4">Home</button>
        </Link>
      </div>
    </div>
  );
}
