import React from "react";

export default function Settings() {
  return (
    <div className="card bg-base-100 shadow-xl lg:card-side">
      <div className="card-body">
        <h2 className="card-title">Account Settings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xs font-medium">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xs font-medium">
                Change Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xs font-medium">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xs font-medium">Location</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input w-full max-w-xs"
            />
          </div>
        </div>

        <div className="card-actions justify-end">
          <button className="btn-primary btn">Save</button>
        </div>
      </div>
    </div>
  );
}
