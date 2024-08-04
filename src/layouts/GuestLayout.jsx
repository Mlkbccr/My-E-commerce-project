import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const GuestLayout = () => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  return <Outlet />;
};

export default GuestLayout;
