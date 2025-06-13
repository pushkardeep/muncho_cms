// Location section routes
const express = require("express");
const router = express.Router();
const Location = require("../models/Location");
const connectDB = require("../lib/db");

connectDB();

// GET: Retrieve all locations
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find().sort({ createdAt: -1 });
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add a new location
router.post("/", async (req, res) => {
  try {
    const { name, city, address, phone, email, mapQuery } = req.body;
    const location = new Location({
      name,
      city,
      address,
      phone,
      email,
      mapQuery,
    });
    await location.save();
    res.status(201).json(location);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update a location by id
router.put("/:id", async (req, res) => {
  try {
    const { name, city, address, phone, email, mapQuery } = req.body;
    const location = await Location.findByIdAndUpdate(
      req.params.id,
      { name, city, address, phone, email, mapQuery },
      { new: true }
    );
    res.json(location);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Remove a location by id
router.delete("/:id", async (req, res) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.json({ message: "Location deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
