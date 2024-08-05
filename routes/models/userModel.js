const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please insert field Name"],
    },
    email: {
      type: String,
      required: [true, "Please insert field Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please insert field Password"],
    },
    role: {
      type: String,
      required: [true, "Please insert field role"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", userSchema);
