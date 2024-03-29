const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Ship = require("../models/Ships.js");

// @route     GET api/ships
// @phone      Get all ships generated by user
// @access   public
router.get("/", async (req, res) => {
  try {
    const ship = await Ship.find({}).sort({
      date: -1, //sorting starting from the recent date
    });
    res.json(ship);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/ships
// @phone      Add new ships
// @access    Private
router.post("/", async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  const { name, user_id, email, contact, address } = req.body;

  try {
    const newship = new Ship({
      name,
      user_id,
      email,
      contact,
      address,
    });

    const ship = await newship.save();

    res.json(ship);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.put("/:_id", async (req, res) => {
  let data = await Ship.updateOne(req.params, { $set: req.body });
  res.send(data);
});
router.delete("/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Ship.deleteOne(req.params);
  res.send(data);
});
module.exports = router;
