import { Menu, LogOut } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white p-2 flex justify-between h-12">
      <div id="admin_menu" className="flex items-center ">
        <span className="mr-2">
          <Menu />
        </span>
      </div>
      <div id="admin_logout" className="flex gap-2">
        <span>Hello Admin,</span>
        <span>
          {" "}
          <LogOut />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
