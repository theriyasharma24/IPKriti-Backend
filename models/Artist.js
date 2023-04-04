const mongoose = require("mongoose");
const ArtistSchema = mongoose.Schema(
  {
    name: {
      type: String,
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
module.exports = mongoose.model("artists", ArtistSchema);
