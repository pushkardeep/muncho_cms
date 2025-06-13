// Gallery section model
import { SectionModel } from "./SectionBase";
import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  data: {
    headings: {
      heading: { type: String, required: true },
      subHeading: { type: String },
    },
    images: [
      {
        src: { type: String, required: true },
        alt: { type: String },
      },
    ],
  },
});

export const GallerySection = SectionModel.discriminator("Gallery", gallerySchema);
