// FAQ section model
const SectionModel = require("./SectionBase");
const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  data: {
    heading: {
      title: { type: String, required: true },
    },
    questions: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },
});

const FAQSection = SectionModel.discriminator("FAQ", faqSchema);
module.exports = FAQSection;
