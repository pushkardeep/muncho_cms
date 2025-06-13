// Footer section model
import { SectionModel } from "./SectionBase";
import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
  data: {
    logo: {
      src: { type: String, required: true },
      alt: { type: String },
    },
    links: [
      {
        title: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
  },
});

export const FooterSection = SectionModel.discriminator("Footer", footerSchema);
