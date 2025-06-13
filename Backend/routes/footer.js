// Footer section routes
const express = require("express");
const router = express.Router();
const Footer = require("../models/Footer");
const connectDB = require("../lib/db");

connectDB();

// GET: Retrieve Footer section (assume single document)
router.get("/", async (req, res) => {
  try {
    const footer = await Footer.findOne().sort({ createdAt: -1 });
    res.json(footer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create Footer section
router.post("/", async (req, res) => {
  try {
    const { links, legalLinks, socialLinks, madeWith, cta } = req.body;
    const footer = new Footer({
      links,
      legalLinks,
      socialLinks,
      madeWith,
      cta,
    });
    await footer.save();
    res.status(201).json(footer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update Footer section (by id)
router.put("/:id", async (req, res) => {
  try {
    const { links, legalLinks, socialLinks, madeWith, cta } = req.body;
    const footer = await Footer.findByIdAndUpdate(
      req.params.id,
      { links, legalLinks, socialLinks, madeWith, cta },
      { new: true }
    );
    res.json(footer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
