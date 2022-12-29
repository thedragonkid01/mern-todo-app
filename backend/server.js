const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const colors = require("colors");

const todoRoute = require("./routes/todoRoute");

const app = express();

// Routes
app.use("/api/todos", todoRoute);

app.listen(PORT, () => {
  console.log(`Server's starting with port ${PORT}`.bgCyan);
});
