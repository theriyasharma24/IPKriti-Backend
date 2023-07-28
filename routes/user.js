const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// import inquirer from 'inquirer';
const inquirer = require("inquirer");
const fs = require("fs");
// import fs from 'fs';
const qr = require("qr-image");
// import qr from 'qr-image';

const User = require("../models/UserSchema.js");

// @route     GET api/artworks
// @phone      Get all artworkss generated by user
// @access   public
router.get("/", async (req, res) => {
  try {
    const user = await User.find({}).sort({
      date: -1, //sorting starting from the recent date
    });
    res.json(user);
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

  const { name } = req.body;

  try {
    const newuser = new User({
      name,
    });

    const user = await newuser.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// var qr = require('qr-image');

router.post("/qr-code", async (req, res) => {
  try {
    //   inquirer
    // .prompt([
    //   {message:"Type the link you want to convert to QR code and name",
    //   name:"URL",
    //   }
    // ])
    // .then((answers) => {
    //   // Use user feedback for... whatever!!
    //   console.log(answers);
    const { url } = req.body;
    // const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr.png"));

    fs.writeFile("allLinks.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved");
    });
  } catch (err) {
    // )
    // .catch((error) => {
    //   if (error.isTtyError) {
    //     "// Prompt couldn't be rendered in the current environment"
    //   } else {
    //     "// Something else went wrong"
    //   }
    // });

    // }
    console.log(err);
  }
});

module.exports = router;
