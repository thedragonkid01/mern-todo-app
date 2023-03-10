const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const cors = require("cors");
const db = require("./config/db");
const { errorHandler } = require("./middlewares/errorHandler");

const todoRoute = require("./routes/todoRoute");
const userRoute = require("./routes/userRoute");

const app = express();

// Database connection
db.connect();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use("/api/todos", todoRoute);
app.use("/api/users", userRoute);

// Error Handler Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is starting with port ${PORT}`.bgCyan);
});
