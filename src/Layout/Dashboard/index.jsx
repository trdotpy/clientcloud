import React from "react";
import { Routes, Route } from "react-router-dom";
// import Settings from "../../Features/Settings";
import Connections from "../../Features/Integrations";
import Overview from "../../Features/Overview";
import Invoices from "../../Features/Invoices";
import Workflows from "../../Features/Workflows";
import Navbar from "./components/Navbar";
import Sidebar from "../../UI/Sidebar";
import Charts from "../../Features/Charts";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="drawer-mobile drawer flex">
        <Sidebar />
        <div className="drawer-content p-10">
          <div className="h-screen flex-1 overflow-y-auto">
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/connections" element={<Connections />} />
              {/* <Route path="/settings" element={<Settings />} /> */}
              <Route path="/workflows" element={<Workflows />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
