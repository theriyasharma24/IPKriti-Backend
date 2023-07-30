const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Artwork = require("../models/Artworks.js");

// @route     GET api/artworks
// @phone      Get all artworkss generated by user
// @access   public
router.get("/", async (req, res) => {
  try {
    const artwork = await Artwork.find({}).sort({
      date: -1, //sorting starting from the recent date
    });
    res.json(artwork);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/artworks
// @phone      Add new artworks
// @access    Private
router.post("/", async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  const {
    cost,
    artist_id,
    art_description,
    art_title,
    reviews_id,
    wishlist,
    quantity,
  } = req.body;

  try {
    const newartwork = new Artwork({
      cost,
      artist_id,
      art_description,
      art_title,
      reviews_id,
      wishlist,
      quantity,
    });

    const artwork = await newartwork.save();

    res.json(artwork);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.put("/:_id", async (req, res) => {
  let data = await Artwork.updateOne(req.params, { $set: req.body });
  res.send(data);
});
router.delete("/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Artwork.deleteOne(req.params);
  res.send(data);
});
module.exports = router;