import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { user } = useAuth();

  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
}
