const mongoose = require("mongoose");
const colors = require("colors");

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Database is connectted successfully".cyan))
    .catch((err) => console.log(`Failed to connect database: ${err}`.red));
};

module.exports = { connect };
