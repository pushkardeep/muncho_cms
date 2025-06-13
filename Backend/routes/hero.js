// Hero section routes
const express = require("express");
const router = express.Router();
const Hero = require("../models/Hero");
const connectDB = require("../lib/db");

// Connect to database
connectDB();

// GET: Retrieve hero section (assume single document)
router.get("/", async (req, res) => {
  try {
    const hero = await Hero.findOne().sort({ createdAt: -1 });
    res.json(hero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create hero section
router.post("/", async (req, res) => {
  try {
    const { text, bg_image } = req.body;
    const hero = new Hero({ text, bg_image });
    await hero.save();
    res.status(201).json(hero);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update hero section (by id)
router.put("/:id", async (req, res) => {
  try {
    const { text, bg_image } = req.body;
    const hero = await Hero.findByIdAndUpdate(
      req.params.id,
      { text, bg_image },
      { new: true }
    );
    res.json(hero);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
