const express = require("express");
const router = express.Router();

const {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile,
  getTrendingProfiles
} = require("../controllers/githubController");

router.post("/analyze/:username", analyzeProfile);

router.get("/profiles", getAllProfiles);

router.get("/profile/:username", getSingleProfile);

router.get("/trending", getTrendingProfiles);

module.exports = router;
