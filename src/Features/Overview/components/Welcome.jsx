import { IconInfoCircle } from "@tabler/icons-react";
import React from "react";

export default function Welcome() {
  return (
    <header className="alert bg-primary shadow-lg">
      <div>
        <IconInfoCircle className="h-6 w-6 flex-shrink-0 stroke-info" />
        <div>
          <h3 className="font-bold">Welcome!</h3>
          <div className="text-xs">
            Use the sidebar to navigate between the different features of
            ClientCloud.
          </div>
        </div>
      </div>
    </header>
  );
}
