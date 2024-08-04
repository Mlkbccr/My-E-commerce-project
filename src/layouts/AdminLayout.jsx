import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../zoneAdmin/components/Navbar";
import Sidebar from "../zoneAdmin/components/Sidebar";
import NotAuthorized from "../zonePublic/NotAuthorized";
import { useSelector } from "react-redux";
const AdminLayout = () => {
  const { user, token } = useSelector((state) => state.auth);

  if (user.role !== "admin") return <NotAuthorized />;
  return (
    <div className=" h-screen bg-gray-100 flex">
      <div id="sidebar" className=" bg-white basis-[14%]">
        <Sidebar />
      </div>

      <div id="right_part" className=" basis-[86%] ">
        <div id="navbar" className="bg-white h-12">
          <Navbar />
        </div>
        <div id="content" className="p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
