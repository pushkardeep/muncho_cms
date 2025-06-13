// Footer section routes
const express = require("express");
const FooterSection = require("../models/Footer.js");
const connectDB = require("../lib/db.js");

const router = express.Router();
connectDB();

// GET: Retrieve Footer section (assume single document)
router.get("/", async (req, res) => {
  try {
    const footer = await FooterSection.findOne().sort({ createdAt: -1 });
    res.json(footer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create Footer section
router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    const footer = new FooterSection({ data });
    await footer.save();
    res.status(201).json(footer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update Footer section (by id)
router.put("/:id", async (req, res) => {
  try {
    const { data } = req.body;
    const footer = await FooterSection.findByIdAndUpdate(
      req.params.id,
      { data },
      { new: true }
    );
    res.json(footer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
