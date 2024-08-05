const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    designation: {
      type: String,
      trim: true,
      lowercase: true,
      required: ["true", "veuillez inserer le champ designation"],
    },
    prix: {
      type: String,
      required: ["true", "veuillez inserer le champ prix"],
    },
    couleur: {
      type: String,
      lowercase: true,
      required: ["true", "veuillez inserer le champ couleur"],
    },
    taille: {
      type: String,
      lowercase: true,
      required: ["true", "veuillez inserer le champ taille"],
    },
    description: {
      type: String,
      lowercase: true,
      required: ["true", "veuillez inserer le champ description"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productSchema);
