const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const { designation } = req.query;

  const products = await Product.find({
    designation: new RegExp(designation, "i"),
  }).sort("-createdAt");
  res.status(200).json({ status: "success", products });
});

const createProduct = asyncHandler(async (req, res) => {
  const { designation, prix, couleur, taille, description } = req.body;
  const product = await Product.create(req.body);
  res.status(200).json({ success: true, product });
});
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ success: true, product });
});
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);

  res.status(200).json({ status: "success", product });
});

module.exports = { createProduct, getProducts, deleteProduct, updateProduct };
