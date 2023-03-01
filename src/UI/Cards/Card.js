import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="z-5 shadow-3xl relative flex flex-col rounded-[20px] bg-white bg-clip-border">
      <h1 className="text-xl">{title}</h1>
      {children}
    </div>
  );
}
