// Gallery section routes
const express = require("express");
const GallerySection = require("../models/Gallery.js");
const connectDB = require("../lib/db.js");

const router = express.Router();
connectDB();

// GET: Retrieve gallery section (assume single document)
router.get("/", async (req, res) => {
  try {
    const gallery = await GallerySection.findOne().sort({ createdAt: -1 });
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create gallery section
router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    const gallery = new GallerySection({ data });
    await gallery.save();
    res.status(201).json(gallery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update gallery section (by id)
router.put("/:id", async (req, res) => {
  try {
    const { data } = req.body;
    const gallery = await GallerySection.findByIdAndUpdate(
      req.params.id,
      { data },
      { new: true }
    );
    res.json(gallery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
