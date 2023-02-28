import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="card card-bordered mt-2 w-full bg-primary p-8 shadow-lg">
      <h1 className="mb-4 flex justify-center text-lg font-medium">{title}</h1>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
