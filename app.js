const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
connectDB();

const corsOptions = { origins: [process.env.ALLOWED_ORIGIN] };
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

app.listen(PORT, () => console.log(`Server started on ${PORT} `));
