import { IconLayoutKanban } from "@tabler/icons-react";
import React from "react";

export default function Benefits() {
  return (
    <div className="min-h-screen">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">Why ClientCloud?</h1>
            <p className="py-6 text-gray-400">
              Our mission is to empower businesses of all sizes to build strong,
              lasting relationships with their customers. Our intuitive platform
              provides all the tools you need to manage your customers, sales
              pipeline, and tasks from a single, easy-to-use dashboard.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-6 px-12">
        <div className="card-bordered card px-12 py-6">
          <h1 className="card-title flex justify-center">Task Management</h1>
          <div className="card-body text-center">
            Keep track of your leads, deals, and forecast your sales pipeline
            with ease.
          </div>
          <div className="flex justify-center">
            <IconLayoutKanban size={44} className="text-error" />
          </div>
        </div>
        {/*  */}
        <div className="card-bordered card px-12 py-6">
          <h1 className="card-title flex justify-center">
            Reporting & Analytics
          </h1>
          <div className="card-body text-center">
            Analyze your sales data, measure your team's performance, and
            optimize your sales process.
          </div>
        </div>
        {/*  */}
        <div className="card-bordered card px-12 py-6">
          <h1 className="card-title flex justify-center">
            Seamless Integration
          </h1>
          <div className="card-body text-center">
            Connect with your customers through our suite of partners, and track
            all communication history in one place.
          </div>
        </div>
      </div>
    </div>
  );
}
