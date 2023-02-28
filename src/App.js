import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Layout/Dashboard";
import Landing from "./Layout/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetAccount from "./pages/ResetAccount";
import PrivateRoute from "./utils/PrivateRoute";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Route>
      <Route path="/reset-account" element={<ResetAccount />} />
    </Routes>
  );
}

export default App;
