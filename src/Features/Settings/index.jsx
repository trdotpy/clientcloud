import React from "react";

export default function Settings() {
  return (
    <div className="card bg-primary shadow-lg lg:card-side">
      <div className="card-body">
        <h2 className="card-title">Account Settings</h2>
        <div className="divider"></div>

        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xs font-medium">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input-bordered input w-full max-w-xs bg-primary"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xs font-medium">
                Email Address
              </span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input-bordered input w-full max-w-xs bg-primary"
            />
          </div>
        </div>

        <div className="card-actions mt-8 grid grid-cols-2 justify-end">
          <button className="btn-secondary btn normal-case text-white">
            Save Changes
          </button>
          <button className="btn-error btn normal-case text-white">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
