import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="card mt-4 w-full rounded-md bg-base-100 p-8 shadow-lg">
      <h1 className="mb-4 flex justify-center text-lg font-medium">{title}</h1>
      <div className="h-full w-full bg-base-100">{children}</div>
    </div>
  );
}
