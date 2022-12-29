const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
