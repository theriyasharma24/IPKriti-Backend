const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Artwork = require("../models/Artworks.js");

// @route     GET api/artworks
// @phone      Get all artworkss generated by user
// @access   public
router.get("/", async (req, res) => {
  try {
    let data = await Artwork.find(req.params);
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newartwork = new Artwork(req.body);
    const artwork = await newartwork.save();
    res.send(artwork);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.put("/:_id", async (req, res) => {
  try {
    let data = await Artwork.updateOne(req.params, { $set: req.body });
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
