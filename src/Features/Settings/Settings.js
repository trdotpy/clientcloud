import React from "react";
import OverviewCard from "../Overview/components/OverviewCard";

export default function Settings() {
  return (
    <form>
      <OverviewCard>
        <fieldset className="grid grid-cols-4 gap-6 rounded-md p-6 text-neutral shadow-sm">
          <div className="card col-span-full space-y-2 lg:col-span-1">
            <p className="card-title font-medium">Profile</p>
            <p className="text-xs">Change your settings here.</p>
          </div>
          <div className="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-sm">
                Email
              </label>
              <input
                id="username"
                type="text"
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="website" className="text-sm">
                Website
              </label>
              <input
                id="website"
                type="text"
                placeholder="https://"
                className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                About
              </label>
              <textarea
                id="bio"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <div className="flex items-center justify-end space-x-2">
                <button
                  type="submit"
                  className="btn-secondary btn-md btn text-primary"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </OverviewCard>
    </form>
  );
}
