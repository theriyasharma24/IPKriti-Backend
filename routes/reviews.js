const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Review = require("../models/Reviews.js");

// @route     GET api/reviews
// @phone      Get all reviews generated by user
// @access   public
router.get("/", async (req, res) => {
  try {
    const review = await Review.find({}).sort({
      date: -1, //sorting starting from the recent date
    });
    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/reviews
// @phone      Add new reviews
// @access    Private
router.post("/", async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  const { rating, comment, reviewerid, artworkid, artistid } = req.body;

  try {
    const newreview = new Review({
      rating,
      comment,
      reviewerid,
      artworkid,
      artistid,
    });

    const review = await newreview.save();

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.put("/:_id", async (req, res) => {
  let data = await Review.updateOne(req.params, { $set: req.body });
  res.send(data);
});
router.delete("/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Review.deleteOne(req.params);
  res.send(data);
});
module.exports = router;
