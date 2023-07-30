const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Artist = require("../models/Artists.js");

// @route     GET api/artists
// @phone      Get all artists generated by user
// @access   public
router.get("/", async (req, res) => {
  try {
    const artist = await Artist.find({}).sort({
      date: -1, //sorting starting from the recent date
    });
    res.json(artist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/artists
// @phone      Add new artists
// @access    Private
router.post("/", async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  const {
    name,
    contact,
    about,
    address,
    upi_id,
    facebook,
    instagram,
    twitter,
    others,
  } = req.body;

  try {
    const newartist = new Artist({
      name,
      contact,
      about,
      address,
      upi_id,
      facebook,
      instagram,
      twitter,
      others,
    });

    const artist = await newartist.save();

    res.json(artist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.put("/:_id", async (req, res) => {
  let data = await Artist.updateOne(req.params, { $set: req.body });
  res.send(data);
});
router.delete("/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Artist.deleteOne(req.params);
  res.send(data);
});
module.exports = router;
