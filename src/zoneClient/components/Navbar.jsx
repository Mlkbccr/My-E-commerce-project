import { Menu, LogOut } from "lucide-react";
import React from "react";
import { deleteUser, logout } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(deleteUser());
    navigate("/auth/login");
  };
  return (
    <div className="bg-white p-2 flex justify-between h-12">
      <div id="client_menu" className="flex items-center ">
        <span className="mr-2">
          <Menu />
        </span>
      </div>
      <div id="client_logout" className="flex gap-2 items-center">
        <span>Hello,</span> <span> {user.name} </span>
        <button onClick={handleLogout}>
          <LogOut />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
