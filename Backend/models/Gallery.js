// Gallery section model
const SectionModel = require("./SectionBase");
const mongoose = require("mongoose");

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

const GallerySection = SectionModel.discriminator("Gallery", gallerySchema);
module.exports = GallerySection;
