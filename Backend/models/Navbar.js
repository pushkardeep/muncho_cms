import { SectionModel } from "./SectionBase";
import mongoose from "mongoose";

const navbarSchema = new mongoose.Schema({
  data: {
    logo: {
      src: { type: String, required: true },
      alt: { type: String },
    },
    links: {
      displayedLinks: [
        {
          lable: { type: String, required: true },
          link: { type: String, required: true },
        },
      ],
      menuLinks: [
        {
          lable: { type: String, required: true },
          link: { type: String, required: true },
        },
      ],
    },
  },
});

export const NavbarSection = SectionModel.discriminator("Navbar", navbarSchema);
