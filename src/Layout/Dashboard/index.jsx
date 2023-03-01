import React from "react";
import { Routes, Route } from "react-router-dom";
import Connections from "../../Features/Integrations";
import Overview from "../../Features/Overview/Overview";
import Workflows from "../../Features/Workflows";
import Navbar from "./components/Navbar";
import Settings from "../../Features/Settings";
import Charts from "../../Features/Overview/components/Charts";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Invoice from "../../Features/Invoices/Invoice";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="drawer-mobile drawer flex bg-base-100">
        <Sidebar />
        <div className="drawer-content flex-grow p-10">
          <div className="h-screen flex-1 overflow-y-auto">
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/invoices" element={<Invoice />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/workflows" element={<Workflows />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
