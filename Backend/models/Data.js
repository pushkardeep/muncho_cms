const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Data", DataSchema);
