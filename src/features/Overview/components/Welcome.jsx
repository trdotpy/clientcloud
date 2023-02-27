import { IconInfoCircle } from "@tabler/icons-react";
import React from "react";

export default function Welcome() {
  return (
    <header className="alert bg-primary shadow-lg">
      <div>
        <IconInfoCircle className="h-6 w-6 flex-shrink-0 stroke-info" />
        <div>
          <h3 className="font-bold">Welcome back!</h3>
          <div className="text-xs">
            Check out the guide to get started with ClientCloud.
          </div>
        </div>
      </div>
      {/* <div className="flex-none">
        <button className="btn-info btn-sm btn">Get Started</button>
      </div> */}
    </header>
  );
}
