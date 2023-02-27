import React from "react";

export default function Carousel() {
  return (
    <>
      <div className="card image-full bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt="welcome-image"
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Welcome back</h2>
          <p>Shoot for the stars today.</p>
        </div>
      </div>
    </>
  );
}
