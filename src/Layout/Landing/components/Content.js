import React from "react";

export default function Content() {
  return (
    <div className="mx-auto min-h-screen px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-10 max-w-xl text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto lg:text-5xl">
          Cutting-Edge Features
        </h2>
        <p className="text-base md:text-lg">
          Our platform is the ultimate solution for businesses of all sizes
          looking to streamline their customer management processes. With our
          intuitive interface and powerful features, you can easily manage your
          customer relationships and make data-driven decisions.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 sm:mx-auto lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="col-span-2 h-56 w-full rounded object-cover shadow-lg"
            src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="h-48 w-full rounded object-cover shadow-lg"
            src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="h-48 w-full rounded object-cover shadow-lg"
            src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-4 border-b pb-4">
            <h6 className="mb-2 font-semibold leading-5">
              Intuitive Data Visualization
            </h6>
            <p className="text-sm">
              Our platform offers a wide range of features designed to help you
              manage your customer relationships more efficiently than ever
              before. From insightful data visualization that displays valuable
              data about your customers to an integrated invoice management
              system, we have everything you need to take your customer
              management to the next level.
            </p>
          </div>
          <div className="mb-4 border-b pb-4">
            <h6 className="mb-2 font-semibold leading-5">
              Invoicing and Payment Management
            </h6>
            <p className="text-sm">
              Our invoicing and payment management system is an essential
              feature of CloudConnect, designed to help businesses streamline
              their billing and payment processes.
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Integrated Project Workflow Tracking
            </h6>
            <p className="text-sm">
              Our seamless integrations with other popular services and tools
              make it easier than ever to streamline your workflow and save
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
