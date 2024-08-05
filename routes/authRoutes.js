const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  changePassword,
  sendMail,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/change-password", changePassword);
router.post("/send-mail", sendMail);
module.exports = router;
