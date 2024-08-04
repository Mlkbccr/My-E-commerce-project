import React from "react";
import Navbar from "../zonePublic/components/Navbar";
import Footer from "../zonePublic/components/Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
