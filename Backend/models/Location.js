const SectionModel = require("./SectionBase");
const mongoose = require("mongoose");

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

const LocationSection = SectionModel.discriminator("Location", locationSchema);
module.exports = LocationSection;
