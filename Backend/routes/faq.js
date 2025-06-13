// FAQ section routes
const express = require("express");
const router = express.Router();
const FAQ = require("../models/FAQ");
const connectDB = require("../lib/db");

// Connect to database
connectDB();

// GET: Retrieve FAQ section (assume single document)
router.get("/", async (req, res) => {
  try {
    const faq = await FAQ.findOne().sort({ createdAt: -1 });
    res.json(faq);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create FAQ section
router.post("/", async (req, res) => {
  try {
    const { heading, questions } = req.body;
    const faq = new FAQ({ heading, questions });
    await faq.save();
    res.status(201).json(faq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update FAQ section (by id)
router.put("/:id", async (req, res) => {
  try {
    const { heading, questions } = req.body;
    const faq = await FAQ.findByIdAndUpdate(
      req.params.id,
      { heading, questions },
      { new: true }
    );
    res.json(faq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
