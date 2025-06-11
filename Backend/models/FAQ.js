// FAQ section model
const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
  heading: {
    title: { type: String, default: '' },
  },
  questions: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FAQ', FAQSchema);
