// Footer section model
const mongoose = require("mongoose");

const FooterSchema = new mongoose.Schema({
  links: {
    column1: [
      {
        label: { type: String, required: true },
        href: { type: String, required: true },
        enabled: { type: Boolean, default: true },
      },
    ],
    column2: [
      {
        label: { type: String, required: true },
        href: { type: String, required: true },
        enabled: { type: Boolean, default: true },
      },
    ],
    column3: [
      {
        label: { type: String, required: true },
        href: { type: String, required: true },
        enabled: { type: Boolean, default: true },
      },
    ],
  },
  legalLinks: [
    {
      label: { type: String, required: true },
      href: { type: String, required: true },
    },
  ],
  socialLinks: [
    {
      icon: { type: String, required: true },
      href: { type: String, required: true },
      alt: { type: String, required: true },
    },
  ],
});

module.exports =
  mongoose.models.Footer || mongoose.model("Footer", FooterSchema);
