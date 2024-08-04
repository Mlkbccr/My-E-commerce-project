import React, { useState } from "react";

import { updateProduct } from "../../features/product/productSlice";

import { useDispatch } from "react-redux";

const EditionProduit = (props) => {
  const dispatch = useDispatch();

  const { setVisibleEditPanel, actionType, record, handleGetProducts } = props;
  const [editFormInput, setEditFormInput] = useState(record);

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    dispatch(updateProduct(editFormInput))
      .then((res) => {
        setVisibleEditPanel(false);
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
        onClick={() => setVisibleEditPanel(false)}
        title="fermer"
        className="text-xl mr-6 font-medium"
      >
        x
      </button>
      {actionType == "voir" ? "Voir" : "Editer"} produit
      <div id="edit_form" className="mt-5">
        <form onSubmit={(e) => handleUpdateProduct(e)}>
          <div className=" grid grid-cols-2 gap-2">
            <div id="form_input">
              <label htmlFor="" className="font-medium block mb-1">
                Designation
              </label>
              <input
                onChange={(e) => {
                  setEditFormInput({
                    ...editFormInput,
                    designation: e.target.value,
                  });
                }}
                value={editFormInput.designation}
                type="text"
                className="border w-full rounded bg-gray-100"
              />
            </div>

            <div id="form_input">
              <label htmlFor="" className="font-medium block mb-1">
                Prix
              </label>
              <input
                onChange={(e) => {
                  setEditFormInput({ ...editFormInput, prix: e.target.value });
                }}
                value={editFormInput.prix}
                type="text"
                className="border w-full rounded bg-gray-100"
              />
            </div>

            <div id="form_input">
              <label htmlFor="" className="font-medium block mb-1">
                Couleur
              </label>
              <input
                onChange={(e) => {
                  setEditFormInput({
                    ...editFormInput,
                    couleur: e.target.value,
                  });
                }}
                value={editFormInput.couleur}
                type="text"
                className="border w-full rounded bg-gray-100"
              />
            </div>

            <div id="form_input">
              <label htmlFor="" className="font-medium block mb-1">
                Taille
              </label>
              <input
                onChange={(e) => {
                  setEditFormInput({
                    ...editFormInput,
                    taille: e.target.value,
                  });
                }}
                value={editFormInput.taille}
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
              onChange={(e) => {
                setEditFormInput({
                  ...editFormInput,
                  description: e.target.value,
                });
              }}
              value={editFormInput.description}
              rows={5}
              type="text"
              className="border w-full rounded bg-gray-100"
            ></textarea>
          </div>

          {actionType == "editer" && (
            <div id="btn_edit_form" className="mt-2 gap-2 flex justify-end">
              <button className="bg-gray-100 hover:bg-gray-200  p-1 rounded ">
                Annuler
              </button>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white p-1 rounded"
              >
                Modifier
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditionProduit;
