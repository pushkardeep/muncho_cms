// Gallery section model
const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  images: [
    {
      src: { type: String, default: '' },
      alt: { type: String, default: '' },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Gallery', GallerySchema);
