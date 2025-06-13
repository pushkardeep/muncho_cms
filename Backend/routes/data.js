const express = require("express");
const router = express.Router();
const Data = require("../models/Data");
const connectDB = require("../lib/db");

connectDB();

// Middleware example: log request method and path
router.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// POST: Upload data
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newData = new Data({ title, content });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Retrieve all data for preview
router.get("/", async (req, res) => {
  try {
    const data = await Data.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
