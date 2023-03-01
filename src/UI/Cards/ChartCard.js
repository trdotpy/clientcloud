import React from "react";

export default function ChartCard({ title, children, subtitle }) {
  return (
    <div className="p-4">
      <div className="mr-4 flex w-auto flex-col justify-center">
        <p className="text-sm font-medium text-gray-400">{title}</p>
        <h4 className="text-xl font-bold text-secondary">{subtitle}</h4>
      </div>
      <div className="mt-4 w-full">{children}</div>
      <div className="flex w-full flex-row items-center">
        {/* <span className="badge badge-md rounded normal-case"></span> */}
      </div>
    </div>
  );
}
