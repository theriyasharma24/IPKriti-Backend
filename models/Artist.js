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
  },
  { timestamps: true }
);
module.exports = mongoose.model("ArtistSchema", ArtistSchema);
