import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../containers/Header/Header";
import Settings from "../../features/Account/Settings/Settings";
import Charts from "../../features/Charts";
import Connections from "../../features/Connections/Connections";
import Overview from "../../features/Overview";
import Sales from "../../features/Sales";

export default function Views() {
  return (
    <main className="drawer-content flex flex-col">
      <div className="container bg-base-300">
        <Header />
      </div>
      <main className="container flex-1 overflow-y-auto bg-base-300">
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </main>
  );
}
