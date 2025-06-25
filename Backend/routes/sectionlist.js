const express = require("express");
const router = express.Router();
const SectionList = require("../models/SectionList");

// GET: Fetch section list for a user
router.get("/sectionlist", async (req, res) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: "userId is required" });
  let doc = await SectionList.findOne({ userId });
  if (!doc) {
    doc = await SectionList.create({ userId, sections: [] });
  }
  res.json({ sections: doc.sections });
});

// POST: Save/update section list for a user
router.post("/sectionlist", async (req, res) => {
  const { userId, sections } = req.body;
  if (!userId || !Array.isArray(sections)) {
    return res
      .status(400)
      .json({ error: "userId and sections array are required" });
  }
  let doc = await SectionList.findOneAndUpdate(
    { userId },
    { sections, updatedAt: new Date() },
    { new: true, upsert: true }
  );
  res.json({ message: "Sections updated", sections: doc.sections });
});

module.exports = router;
