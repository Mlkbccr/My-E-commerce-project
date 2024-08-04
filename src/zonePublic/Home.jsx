import React, { useState, useEffect } from "react";

import vitrine from "../assets/vitrines/vitrine4.jpg?url";
import { getProducts } from "../features/product/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const notify = () => toast.success("product added to cart !");
  const handleGetProducts = () => {
    dispatch(getProducts())
      .then((res) => {
        setProducts(res.payload.products);
      })
      .catch((err) => console.log(err));
  };
  const handleBuyProduct = (data) => {
    dispatch(addToCart(data));
    notify();
  };
  useEffect(() => {
    handleGetProducts();
  }, []);
  return (
    <div>
      <section
        id="vitirine"
        className=" bg-cover bg-no-repeat bg-center h-[70vh]"
        style={{ backgroundImage: `url(${vitrine} )` }}
      >
        vitrine
      </section>

      <section id="categories" className="mb-6 ">
        <h1 className="text-3xl text-center my-6">categories</h1>
        <div className="grid grid-cols-3 place-items-center">
          {[1, 2, 3].map((v) => (
            <div>
              <div>
                <img src="https://picsum.photos/300/250" alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="produits" className="my-6 ">
        <h1 className="text-3xl text-center my-6">produits</h1>
        <div className="grid grid-cols-4 place-items-center">
          {products.map((v, i) => (
            <div key={i} className="shadow-lg p-2 ">
              <div>
                <img src="https://picsum.photos/300/250" alt="" />
              </div>
              <div className="flex justify-between my-2 ">
                <span> {v.designation} </span>
                <span className="text-green-700 text-lg ">{v.prix} DT</span>
              </div>
              <div>{v.description} </div>
              <div className="flex justify-end ">
                {" "}
                <button
                  onClick={() => handleBuyProduct(v)}
                  className="bg-green-500 hover:bg-green-600  text-white px-2 "
                >
                  add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="cgv" className="p-6 ">
        <h1 className="text-3xl text-center my-6">conditions generales</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea ut
          voluptatibus sit molestiae debitis illo asperiores ex sunt blanditiis
          quos, consequuntur quia exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea ut
          voluptatibus sit molestiae debitis illo asperiores ex sunt blanditiis
          quos, consequuntur quia exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea ut
          voluptatibus sit molestiae debitis illo asperiores ex sunt blanditiis
          quos, consequuntur quia exercitationem.
        </p>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Home;
