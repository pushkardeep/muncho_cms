import { SectionModel } from "./SectionBase";
import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  data: {
    headings: {
      heading: { type: String, required: true },
    },
    locations: [
      {
        name: { type: String, required: true },
        city: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        mapQuery: { type: String, required: true },
        longitude: { type: String, required: true },
        latitude: { type: String, required: true },
      },
    ],
  },
});

export const LocationSection = SectionModel.discriminator(
  "Location",
  locationSchema
);
