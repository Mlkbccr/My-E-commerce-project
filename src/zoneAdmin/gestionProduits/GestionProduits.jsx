import React, { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash, CircleAlert, Search } from "lucide-react";

import CreationProduit from "./CreationProduit";
import EditionProduit from "./EditionProduit";

import { useDispatch } from "react-redux";
import {
  getProducts,
  deleteProduct,
} from "../../features/product/productSlice";

const GestionProduits = () => {
  const dispatch = useDispatch();
  const [visibleDeletePanel, setVisibleDeletePanel] = useState(false);
  const [visibleCreatePanel, setVisibleCreatePanel] = useState(false);
  const [visibleEditPanel, setVisibleEditPanel] = useState(false);
  const [actionType, setActionType] = useState("");
  const [products, setProducts] = useState([]);
  const [record, setRecord] = useState();
  const [searchInput, setSearchInput] = useState("");

  const handleGetProducts = () => {
    dispatch(getProducts(searchInput))
      .then((res) => {
        setProducts(res.payload.products);
      })
      .catch((err) => console.log(err));
  };
  const searchRealTime = (e) => {
    setSearchInput(e.target.value);
    handleGetProducts(searchInput);
  };
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id))
      .then((res) => {
        res;
        setVisibleDeletePanel(false);
        handleGetProducts();
      })
      .catch((err) => console.log(err));
  };
  const createProps = {
    setVisibleCreatePanel,
    handleGetProducts,
  };

  const editProps = {
    setVisibleEditPanel,
    actionType,
    record,
    handleGetProducts,
  };

  useEffect(() => {
    handleGetProducts();
  }, []);
  return (
    <div className="">
      <div className="flex mt-8  justify-between px-3">
        <div className="flex items-center gap-1">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            // onChange={searchRealTime}
            value={searchInput}
            className=" rounded-sm  border border-gray-300 p-2"
            type="search"
            placeholder="Rechercher"
          />
          <button
            onClick={handleGetProducts}
            className="bg-blue-600 hover:bg-blue-700 p-2 text-white rounded-sm  "
          >
            <Search />
          </button>
        </div>

        <button
          onClick={() => setVisibleCreatePanel(true)}
          className="bg-blue-600 text-white px-3 p-1 rounded-lg 
         flex justify-center items-center hover:bg-blue-700  "
        >
          <Plus /> Créer
        </button>
      </div>

      <div className=" px-3 mt-6">
        <table className="  w-full ">
          <thead className="bg-gray-300 h-12">
            <tr>
              <th className="border border-gray-600 w-20">ID</th>
              <th className="border border-gray-600">Designation</th>
              <th className="border border-gray-600 w-56">Prix</th>
              <th className="border border-gray-600 w-56 ">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {products.map((v, i) => (
              <tr className="h-10" key={i}>
                <td className="border border-gray-600 text-center ">{v._id}</td>
                <td className="border border-gray-600 pl-2">{v.designation}</td>
                <td className="border border-gray-600 text-center">
                  {v.prix} DT
                </td>
                <td className="border border-gray-600 text-center">
                  <button
                    onClick={() => {
                      setActionType("voir");
                      setVisibleEditPanel(true);
                      setRecord(v);
                    }}
                    className="mr-3"
                    title="Voir"
                  >
                    <Eye size={18} color="#217be9" />
                  </button>
                  <button
                    onClick={() => {
                      setActionType("editer");
                      setVisibleEditPanel(true);
                      setRecord(v);
                    }}
                    className="mr-3"
                    title="Editer"
                  >
                    <Pencil size={18} color="orange" />
                  </button>

                  <div className="inline-block relative">
                    <button
                      className=""
                      title="Supprimer"
                      onClick={() => setVisibleDeletePanel(v._id)}
                    >
                      <Trash size={18} color="red" />
                    </button>

                    {visibleDeletePanel == v._id && (
                      <div
                        style={{ top: "-80px", left: "-230px" }}
                        className="absolute  
                      w-[21rem]  p-3 bg-white rounded shadow-lg  border-2
                       border-gray-300"
                      >
                        <div className="p-2 flex gap-1 ">
                          <CircleAlert color="red" />
                          <span>Voulez-vous supprimer ce produit ?</span>
                        </div>

                        <div className=" flex justify-end gap-2 mt-2">
                          <button
                            className="bg-gray-100  px-3 p-1 rounded "
                            onClick={() => setVisibleDeletePanel(false)}
                          >
                            Non
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(v._id)}
                            className="bg-red-500  px-3 p-1 text-white rounded"
                          >
                            Oui
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleCreatePanel && <CreationProduit {...createProps} />}
      {visibleEditPanel && <EditionProduit {...editProps} />}
    </div>
  );
};

export default GestionProduits;
