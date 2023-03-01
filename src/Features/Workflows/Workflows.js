import React from "react";
import GroupAvatars from "./components/GroupAvatars";

export default function Workflows() {
  return (
    <>
      <div className="card image-full shadow-xl">
        <figure className="w-full sm:h-60 md:h-80 lg:h-96">
          <img
            src="https://res.cloudinary.com/drij60fru/image/upload/v1677703359/Screenshot_2023-03-01_at_3.40_zbwxhv.png"
            alt="project"
            className="w-full object-cover"
          />
        </figure>

        <div className="card-body gap-y-4">
          <div>
            <h2 className="card-title text-3xl text-primary lg:justify-center">
              Landing Page
            </h2>
          </div>

          <div className="card-body mb-4 text-sm lg:justify-center">
            <ul className="steps steps-vertical md:steps-horizontal lg:space-x-2">
              <li className="step-success step">Planning</li>
              <li className="step-success step">Design</li>
              <li className="step-success step">Development</li>
              <li className="step">Testing</li>
              <li className="step">Deployment</li>
            </ul>
          </div>

          <div className="card-actions items-center justify-center">
            <GroupAvatars />
          </div>
        </div>
      </div>
    </>
  );
}
