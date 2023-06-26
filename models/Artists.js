const mongoose = require("mongoose");
const ArtistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
    },
    about: {
      type: String,
    },
    address: {
      type: String,
    },
    upi_id: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    others: {
      type: String,
    },
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("artists", ArtistSchema);
