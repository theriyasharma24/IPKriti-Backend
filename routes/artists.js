const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Artists = require("../models/Artists.js");
router.get("/", async (req, res) => {
    try {
      const artists = await Artists.find({}).sort({
        date: -1, //sorting starting from the recent date
      });
      res.json(artists);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

router.post("/", async (req, res) => {
    const { name } = req.body;

    console.log("inside routes:", req.body);
    try {
      const newartists = new Artists({
        name
      });
  
      const artists = await newartists.save();
  
      res.json(artists);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

  module.exports = router;
