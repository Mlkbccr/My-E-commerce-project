import { Hexagon, ShoppingBag } from "lucide-react";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  return (
    <div
      className="bg-white p-2 h-[4rem] 
    flex justify-between items-center "
    >
      <div id="logo_brand" className="mt-2 flex items-center ">
        <span className="mr-2">
          <Hexagon />
        </span>
        <span className="text-lg">E-store</span>
      </div>

      <div id="login" className="mt-2 flex gap-4">
        <Link to="cart" className="relative">
          <span
            className="absolute -top-2 left-4   bg-red-600
           text-white rounded-full h-5 w-5
            flex justify-center items-center "
          >
            {cart.length}
          </span>
          <ShoppingBag />
        </Link>
        <div>login</div>
      </div>
    </div>
  );
};

export default Navbar;
