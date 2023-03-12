const mongoose = require("mongoose");
const ArtworksSchema = mongoose.Schema(
  {
    user: {
      type: String,
    },
    artistname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ArtworksSchema", ArtworksSchema);
