import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetAccount from "./pages/ResetAccount";
import PrivateRoute from "./utils/PrivateRoute";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ";
import Home from "./Layout/Home/Home";
import Dashboard from "./Layout/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<Error />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Route>
      <Route path="/reset-account" element={<ResetAccount />} />
    </Routes>
  );
}

export default App;
