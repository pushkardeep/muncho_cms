const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// In-memory storage for demo (replace with DB in production)
let sectionTabs = [];

// POST /api/sections - Save or update sectionTabs
router.post("/sections", (req, res) => {
  const { sectionTabs: newTabs } = req.body;
  if (!Array.isArray(newTabs)) {
    return res.status(400).json({ error: "sectionTabs must be an array" });
  }
  sectionTabs = newTabs;
  // Optionally, persist to file or DB here
  res.json({ message: "Sections updated", sectionTabs });
});

// GET /api/sections - Retrieve current sectionTabs
router.get("/sections", (req, res) => {
  res.json({ sectionTabs });
});

// DELETE /api/sections/:index - Delete a section by index
router.delete("/sections/:index", (req, res) => {
  const idx = parseInt(req.params.index, 10);
  if (isNaN(idx) || idx < 0 || idx >= sectionTabs.length) {
    return res.status(400).json({ error: "Invalid index" });
  }
  // Prevent deleting locked sections
  if (sectionTabs[idx].isLocked) {
    return res.status(403).json({ error: "Cannot delete locked section" });
  }
  sectionTabs.splice(idx, 1);
  res.json({ message: "Section deleted", sectionTabs });
});

// PUT /api/sections - Update/reorder sectionTabs
router.put("/sections", (req, res) => {
  const { sectionTabs: newTabs } = req.body;
  if (!Array.isArray(newTabs)) {
    return res.status(400).json({ error: "sectionTabs must be an array" });
  }
  sectionTabs = newTabs;
  res.json({ message: "Sections updated", sectionTabs });
});

module.exports = router;
