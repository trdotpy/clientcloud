import React from "react";
import Sidebar from "../../containers/Sidebar/Sidebar";
import Views from "./Views";

export default function Dashboard() {
  return (
    <div className="drawer-mobile drawer bg-base-300">
      <input
        className="drawer-toggle"
        type="checkbox"
        id="left-sidebar-drawer"
      />
      <Sidebar />
      <Views />
    </div>
  );
}