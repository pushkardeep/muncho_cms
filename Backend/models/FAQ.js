// FAQ section model
import { SectionModel } from "./SectionBase";
import mongoose from "mongoose";

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

export const FAQSection = SectionModel.discriminator("FAQ", faqSchema);
