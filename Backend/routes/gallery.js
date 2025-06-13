// Gallery section routes
const express = require("express");
const router = express.Router();
const Gallery = require("../models/Gallery");
const connectDB = require("../lib/db");

// Connect to database
connectDB();

// GET: Retrieve gallery section (assume single document)
router.get("/", async (req, res) => {
  try {
    const gallery = await Gallery.findOne().sort({ createdAt: -1 });
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create gallery section
router.post("/", async (req, res) => {
  try {
    const { title, subtitle, images } = req.body;
    const gallery = new Gallery({ title, subtitle, images });
    await gallery.save();
    res.status(201).json(gallery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update gallery section (by id)
router.put("/:id", async (req, res) => {
  try {
    const { title, subtitle, images } = req.body;
    const gallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, images },
      { new: true }
    );
    res.json(gallery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
