const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const colors = require("colors");

const app = express();

app.listen(PORT, () => {
  console.log(`Server's starting with port ${PORT}`.bgCyan);
});
