const mongoose = require("mongoose");

const SectionBaseSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    template: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
  },
  { timestamps: true, discriminatorKey: "type" }
);

module.exports = mongoose.model("Section", SectionBaseSchema);
