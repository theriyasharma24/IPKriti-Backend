const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Reviews = require("../models/Reviews.js");

router.get("/", async (req, res) => {
  try {
    let data = await Reviews.find(req.params);
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newreviews = new Reviews(req.body);
    const reviews = await newreviews.save();
    res.send(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.put("/:_id", async (req, res) => {
  try {
    let data = await Reviews.updateOne(req.params, { $set: req.body });
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    let data = await Reviews.deleteOne(req.params);
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
