const mongoose = require("mongoose");
const ArtistSchema = mongoose.Schema(
  {
    Aname: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ArtistSchema", ArtistSchema);
