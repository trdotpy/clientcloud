import React from "react";

export default function Article() {
  return (
    <div className="">
      <div className="card image-full w-1/2 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="welcome"
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            How To Improve Your Team’s Efficiency and Productivity
          </h2>
          <p className="text-sm">Keep the motivation flowing.</p>
          <div className="card-actions justify-end">
            <button className="btn-secondary btn normal-case">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
