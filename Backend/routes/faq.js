// FAQ section routes
const express = require("express");
const FAQSection = require("../models/FAQ.js");
const connectDB = require("../lib/db.js");

const router = express.Router();
connectDB();

// GET: Retrieve FAQ section (assume single document)
router.get("/", async (req, res) => {
  try {
    const faq = await FAQSection.findOne().sort({ createdAt: -1 });
    res.json(faq);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create FAQ section
router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    const faq = new FAQSection({ data });
    await faq.save();
    res.status(201).json(faq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update FAQ section (by id)
router.put("/:id", async (req, res) => {
  try {
    const { data } = req.body;
    const faq = await FAQSection.findByIdAndUpdate(
      req.params.id,
      { data },
      { new: true }
    );
    res.json(faq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
