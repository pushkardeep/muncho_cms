const SectionModel = require("./SectionBase");
const mongoose = require("mongoose");

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

const NavbarSection = SectionModel.discriminator("Navbar", navbarSchema);
module.exports = NavbarSection;
