// Entry point for the Express server
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./lib/db");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import routes
const dataRoutes = require("./routes/data");
const heroRoutes = require("./routes/hero");
const galleryRoutes = require("./routes/gallery");
const locationRoutes = require("./routes/location");
const faqRoutes = require("./routes/faq");
const footerRoutes = require("./routes/footer");
app.use("/api/data", dataRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/faq", faqRoutes);
app.use("/api/footer", footerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
