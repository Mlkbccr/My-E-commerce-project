import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Minus } from "lucide-react";
import {
  incrementCart,
  decrementCart,
  removeProduct,
} from "../features/cart/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  const handleIncrement = (id) => {
    dispatch(incrementCart(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementCart(id));
  };
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <div className="px-4 py-4 flex">
      <div className=" flex-1 p-2">
        <h2 className="font-semibold">panier</h2>
        <div className="mt-5">
          {cart.map((v, i) => (
            <div key={i} className=" mb-4  flex justify-between ">
              <div>
                {v.designation}
                <div>
                  <button
                    onClick={() => handleRemoveProduct(v._id)}
                    className="text-red-500
                   hover:text-red-800 mt-2"
                  >
                    supprimer
                  </button>
                </div>
              </div>
              <div className="mr-20 flex justify-center items-center">
                <button
                  onClick={() => handleDecrement(v._id)}
                  className="px-2  text-red-500 "
                >
                  <Minus size={18} />
                </button>
                <input
                  value={v.quantity}
                  className="px-2 
                  border-2
                  border-blue-500
                  w-10 text-center"
                  type="text"
                />
                <button
                  onClick={() => handleIncrement(v._id)}
                  className="px-2  text-green-500"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="basis-[30%]  p-2  ">total hors taxe</div>
    </div>
  );
};

export default Cart;
