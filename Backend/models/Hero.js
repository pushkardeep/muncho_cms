const mongoose = require("mongoose");
const SectionModel = require("./SectionBase");

// Hero section model
const heroSchema = new mongoose.Schema({
  data: {
    text: {
      title: { type: String, required: true },
      heroText: { type: String, require: true },
    },
    bg_image: {
      src: { type: String, required: true },
      alt: { type: String },
    },
  },
});

const HeroSection = SectionModel.discriminator("Hero", heroSchema);
module.exports = HeroSection;
