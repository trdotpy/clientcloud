import React from "react";

export default function Projects() {
  return (
    <div className="card card-bordered shadow-lg">
      {/* <figure className="image-full h-60 w-full bg-base-100 shadow-lg"> */}
      <figure className="h-60 w-full">
        <img
          src="https://res.cloudinary.com/drij60fru/image/upload/v1677597987/Screenshot_2023-02-28_at_10.26_jvhxkg.png"
          alt="welcome"
          className="w-full object-cover"
        />
      </figure>

      <div className="card-body gap-y-4">
        <div>
          <h2 className="card-title justify-center text-2xl">
            Skin Care Frontend
          </h2>
        </div>
        <div className="card-actions mb-4 text-sm md:justify-center">
          <ul className="steps steps-vertical md:steps-horizontal md:space-x-2">
            <li className="step-warning step">Planning</li>
            <li className="step-warning step">Design</li>
            <li className="step-warning step">Development</li>
            <li className="step-warning step">Testing</li>
            <li className="step">Deployment</li>
          </ul>
        </div>

        <div className="card-actions justify-end">
          <span className="badge badge-lg rounded text-sm">Tag</span>
          <span className="badge badge-lg rounded text-sm">Tag</span>
          <span className="badge badge-lg rounded text-sm">Tag</span>
        </div>
      </div>
    </div>
  );
}
