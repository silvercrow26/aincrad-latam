import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useAuth } from "../../firebase/context/AuthContext";
export const PrivateRouter = () => {
  const { user } = useAuth();
  return (user) ? <Outlet /> : <Navigate to="/" />;
};  
 