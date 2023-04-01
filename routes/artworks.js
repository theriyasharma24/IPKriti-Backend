const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Artworks = require("../models/Artworks.js");

// @route     GET api/artworks
// @phone      Get all artworkss generated by user
// @access   public
router.get("/", async (req, res) => {
  try {
    const artworks = await Artworks.find({}).sort({
      date: -1, //sorting starting from the recent date
    });
    res.json(artworks);
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

  const { user, artistname, image, name, uid, uemail, ucontactNo, uAddress } = req.body;

  console.log("inside routes:", req.body);
  try {
    const newartworks = new Artworks({
      user,
      artistname,
      image,
      name,
      uid,
      uemail,
      ucontactNo,
      uAddress
    });

    const artworks = await newartworks.save();

    res.json(artworks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     PUT api/artworks/:id
// @phone      Update artworks
// @access    Private
// router.put("/:id", auth, async (req, res) => {
//   const {
//     name,
//     contact,
//     aadhaar,
//     pan,
//     amount,
//     paymentstatus,
//     address,
//     photo,
//     signature,
//   } = req.body;

//   // Build contact object
//   const artworksFields = {};
//   if (name) artworksFields.name = name;
//   if (contact) artworksFields.contact = contact;
//   if (aadhaar) artworksFields.aadhaar = aadhaar;
//   if (pan) artworksFields.pan = pan;
//   if (amount) artworksFields.amount = amount;
//   if (paymentstatus) artworksFields.paymentstatus = paymentstatus;
//   if (address) artworksFields.address = address;
//   if (photo) artworksFields.photo = photo;
//   if (signature) artworksFields.signature = signature;
//   try {
//     let artworks = await Artworks.findById(req.params.id);

//     if (!artworks)
//       return res.status(404).json({ msg: "No artworks details info found" });

//     // Make sure user owns contact
//     if (artworks.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "Not authorized" });
//     }

//     artworks = await Artworks.findByIdAndUpdate(
//       req.params.id,
//       { $set: artworksFields },
//       { new: true }
//     );

//     res.json(artworks);
//   } catch (err) {
//     console.error(er.message);
//     res.status(500).send("Server Error");
//   }
// });

// // @route     DELETE api/artworks/:id
// // @phone      Delete artworks
// // @access    Private
router.delete("/:_id", async (req, res) => {
  console.log(req.params);
  let data=await Artworks.deleteOne(req.params);
  res.send(data);
  //res.send("Data");
//***  router.delete("/:id", auth, async (req, res) => {
//   try {
//     let artworks = await Artworks.findById(req.params.id);

//     if (!artworks)
//       return res.status(404).json({ msg: "artworks details info not found" });

//     // Make sure user owns contact
//     if (artworks.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "Not authorized" });
//     }

//     await Artworks.findByIdAndRemove(req.params.id);

//     res.json({ msg: "artworks details info removed" });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
});
router.put("/:_id", async (req, res) => {
  let data=await Artworks.updateOne(
    req.params,
    {$set: req.body}
  );
  res.send(data);
});

module.exports = router;
