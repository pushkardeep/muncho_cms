// Location section routes
const express = require("express");
const LocationSection = require("../models/Location.js");
const connectDB = require("../lib/db.js");

const router = express.Router();
connectDB();

// GET: Retrieve all locations (as a section)
router.get("/", async (req, res) => {
  try {
    const locationSection = await LocationSection.findOne().sort({
      createdAt: -1,
    });
    res.json(locationSection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add a new location section
router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    const locationSection = new LocationSection({ data });
    await locationSection.save();
    res.status(201).json(locationSection);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update a location section by id
router.put("/:id", async (req, res) => {
  try {
    const { data } = req.body;
    const locationSection = await LocationSection.findByIdAndUpdate(
      req.params.id,
      { data },
      { new: true }
    );
    res.json(locationSection);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
