// Hero section routes
const express = require("express");
const HeroSection = require("../models/Hero.js");
const connectDB = require("../lib/db.js");

const router = express.Router();
connectDB();

// GET: Retrieve hero section (assume single document)
router.get("/", async (req, res) => {
  try {
    const hero = await HeroSection.findOne().sort({ createdAt: -1 });
    res.json(hero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create hero section
router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    const hero = new HeroSection({ data });
    await hero.save();
    res.status(201).json(hero);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update hero section (by id)
router.put("/:id", async (req, res) => {
  try {
    const { data } = req.body;
    const hero = await HeroSection.findByIdAndUpdate(
      req.params.id,
      { data },
      { new: true }
    );
    res.json(hero);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
