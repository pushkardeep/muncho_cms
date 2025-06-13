// Footer section model
const SectionModel = require("./SectionBase");
const mongoose = require("mongoose");

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

const FooterSection = SectionModel.discriminator("Footer", footerSchema);
module.exports = FooterSection;
