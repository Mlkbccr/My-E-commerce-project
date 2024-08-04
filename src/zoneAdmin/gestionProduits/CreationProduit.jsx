import React from "react";
import { createProduct } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

const CreationProduit = (props) => {
  const dispatch = useDispatch();

  const { setVisibleCreatePanel, handleGetProducts } = props;

  const handleCreateProduct = (e) => {
    e.preventDefault();

    const data = {
      designation: e.target[0].value,
      prix: e.target[1].value,
      couleur: e.target[2].value,
      taille: e.target[3].value,
      description: e.target[4].value,
    };

    dispatch(createProduct(data))
      .then((res) => {
        setVisibleCreatePanel(false);
        handleGetProducts();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ position: "absolute", top: "0px", right: "0px" }}
      className="bg-white h-screen w-96 p-2"
    >
      <button
        onClick={() => setVisibleCreatePanel(false)}
        title="fermer"
        className="text-xl mr-6 font-medium"
      >
        x
      </button>

      <span className="font-medium">Création nouveau produit</span>

      <div id="create_form" className="mt-5">
        <form onSubmit={(e) => handleCreateProduct(e)}>
          <div className=" grid grid-cols-2 gap-2">
            <div id="form_input">
              <label htmlFor="" className="font-medium block mb-1">
                Designation
              </label>
              <input
                name="designation"
                type="text"
                className="border w-full rounded bg-gray-100"
              />
            </div>

            <div id="form_input">
              <label htmlFor="" className="font-medium block mb-1">
                Prix
              </label>
              <input
                name="prix"
                type="text"
                className="border w-full rounded bg-gray-100"
              />
            </div>

            <div id="form_input">
              <label htmlFor="" className="font-medium block mb-1">
                Couleur
              </label>
              <input
                name="couleur"
                type="text"
                className="border w-full rounded bg-gray-100"
              />
            </div>

            <div id="form_input">
              <label htmlFor="" className="font-medium block mb-1">
                Taille
              </label>
              <input
                name="taille"
                type="text"
                className="border w-full rounded bg-gray-100"
              />
            </div>
          </div>

          <div id="form_input">
            <label htmlFor="" className="font-medium block mb-1">
              Description
            </label>

            <textarea
              name="description"
              rows={5}
              type="text"
              className="border w-full rounded bg-gray-100"
            ></textarea>
          </div>

          <div id="btn_create_form" className="mt-2 gap-2 flex justify-end">
            <button
              type="reset"
              className="bg-gray-100 hover:bg-gray-200  p-1 rounded "
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreationProduit;
