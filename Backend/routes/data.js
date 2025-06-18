const express = require("express");
const router = express.Router();
const Data = require("../models/Data");
const Hero = require("../models/Hero");
const Gallery = require("../models/Gallery");
const FAQ = require("../models/FAQ");
const Footer = require("../models/Footer");
const Location = require("../models/Location");
const { Nav } = require("../models/NavFooter");

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

// GET: Retrieve all data for preview (section-wise)
router.get("/", async (req, res) => {
  try {
    const [heros, galleries, faqs, footers, locations, navs, datas] =
      await Promise.all([
        Hero.find().sort({ createdAt: -1 }),
        Gallery.find().sort({ createdAt: -1 }),
        FAQ.find().sort({ createdAt: -1 }),
        Footer.find().sort({ createdAt: -1 }),
        Location.find().sort({ createdAt: -1 }),
        Nav.find().sort({ createdAt: -1 }),
        Data.find().sort({ createdAt: -1 }),
      ]);
    res.json({
      hero: heros,
      gallery: galleries,
      faq: faqs,
      footer: footers,
      location: locations,
      nav: navs,
      data: datas,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
