const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "2c3fa7f7214149",
    pass: "38e578230e331b",
  },
});

module.exports = transporter;
