import { SectionModel } from "./SectionBase";
import mongoose from "mongoose";

const giftCardSchema = new mongoose.Schema({
  data: {
    text: {
      title: { type: String, required: true },
      description: { type: String },
    },
    images: {
      src: { type: String, required: true },
      alt: { type: String },
    },
  },
});

export const GiftCardSection = SectionModel.discriminator(
  "Gift_Card",
  giftCardSchema
);
