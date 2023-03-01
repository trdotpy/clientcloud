import React from "react";
import GroupAvatars from "./GroupAvatars";

export default function Projects() {
  return (
    <div className="card card-bordered rounded shadow-lg">
      <figure className="image-full h-60 w-full bg-base-100 shadow-lg">
        <img
          src="https://res.cloudinary.com/drij60fru/image/upload/v1677597987/Screenshot_2023-02-28_at_10.26_jvhxkg.png"
          alt="welcome"
          className="w-full object-cover"
        />
      </figure>
      <div className="card-body gap-y-4">
        <div>
          <h2 className="card-title text-2xl lg:justify-center">
            Skin Care Frontend
          </h2>
        </div>
        <div className="card-actions mb-4 text-sm lg:justify-center">
          <ul className="steps steps-vertical lg:steps-horizontal lg:space-x-2">
            <li className="step-warning step">Planning</li>
            <li className="step-warning step">Design</li>
            <li className="step-warning step">Development</li>
            <li className="step-warning step">Testing</li>
            <li className="step">Deployment</li>
          </ul>
        </div>

        <div className="card-actions items-center justify-end">
          <span className="text-content badge badge-lg rounded bg-secondary text-xs text-primary">
            In Progress
          </span>
          <span className="text-content badge badge-lg rounded bg-secondary text-xs text-primary">
            Testing
          </span>
          <GroupAvatars />
        </div>
      </div>
    </div>
  );
}
