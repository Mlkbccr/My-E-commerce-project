const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenkey = process.env.TOKEN_KEY;
const transporter = require("../services/mail");
const generateToken = (id) => {
  return jwt.sign({ id }, tokenkey, { expiresIn: "1d" });
};
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(200).json({ user, token: generateToken(user._id) });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      user,
      token: generateToken(user._id),
      message: "connected with success",
    });
  } else {
    res.status(400).json({ message: "invalid credentials" });
  }
});
const logout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout with success" });
});
const changePassword = asyncHandler(async (req, res) => {
  const { userId, oldPassword, newPassword, confirmNewPassword } = req.body;
  const user = await User.findById(userId);

  if (user && (await bcrypt.compare(oldPassword, user.password))) {
    if (newPassword !== confirmNewPassword) {
      res
        .status(400)
        .json({ message: "new password and confirm password not match" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
      await user.save();
    }
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});
const sendMail = asyncHandler(async (req, res) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"E-Store" <contact@e-store.email>',
    to: "mohamed@gmail.com",
    subject: "code reset password ✔",
    html: "<b> please copy your code : 123789</b>",
  });

  console.log("Message sent: %s", info.messageId);
  res.status(200).json({ message: " Mail sent with success" });
});
module.exports = { register, login, changePassword, logout, sendMail };
