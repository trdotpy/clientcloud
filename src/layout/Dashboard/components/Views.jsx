import React from "react";
import { Routes, Route } from "react-router-dom";
import Settings from "../../../Features/Settings";
import Charts from "../../../Features/Charts";
import Connections from "../../../Features/Integrations";
import Overview from "../../../Features/Overview";
import Invoices from "../../../Features/Invoices";
import Navbar from "./Navbar";

export default function Views() {
  return (
    <main className="drawer-content flex flex-col">
      <div className="container bg-primary">
        <Navbar />
      </div>
      <main className="container flex-1 overflow-y-auto bg-primary">
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </main>
  );
}
