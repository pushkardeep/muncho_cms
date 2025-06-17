const express = require("express");
const router = express.Router();
const { Nav, Footer } = require("../models/NavFooter");

// NAV ROUTES
router.get("/nav", async (req, res) => {
  try {
    const nav = await Nav.findOne();
    res.json(nav);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/nav", async (req, res) => {
  try {
    const nav = new Nav(req.body);
    await nav.save();
    res.status(201).json(nav);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/nav/:id", async (req, res) => {
  try {
    const nav = await Nav.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(nav);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// FOOTER ROUTES
router.get("/footer", async (req, res) => {
  try {
    const footer = await Footer.findOne();
    res.json(footer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/footer", async (req, res) => {
  try {
    const footer = new Footer(req.body);
    await footer.save();
    res.status(201).json(footer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/footer/:id", async (req, res) => {
  try {
    const footer = await Footer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(footer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
