import React from "react";
import { UserRoundCog, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div
        id="client_zone"
        className="mb-6 p-4 flex flex-col justify-center items-center"
      >
        <CircleUserRound />
        <span className="text-lg font-semibold">Client zone</span>
      </div>

      <div id="client_links">
        <Link to="/client" className="flex ml-2 mb-3">
          <UserRoundCog />
          <span className="ml-2">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
