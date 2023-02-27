import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charts from "./features/Charts";
import Landing from "./features/Landing";
import Overview from "./features/Overview";
import Dashboard from "./layout/Dashboard";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetAccount from "./pages/ResetAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="*" element={<Error />} /> */}
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/reset-account" element={<ResetAccount />} />
    </Routes>
  );
}

export default App;
