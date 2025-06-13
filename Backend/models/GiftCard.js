const SectionModel = require("./SectionBase");
const mongoose = require("mongoose");

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

const GiftCardSection = SectionModel.discriminator("Gift_Card", giftCardSchema);
module.exports = GiftCardSection;
