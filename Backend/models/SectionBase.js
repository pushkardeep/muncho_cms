import mongoose from "mongoose";

const SectionBaseSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    template: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
  },
  { timestamps: true, discriminatorKey: "type" }
);

export const SectionModel = mongoose.model("Section", SectionBaseSchema);
