const mongoose = require("mongoose");
const ArtworkSchema = mongoose.Schema(
  {
    cost: {
      type: Number,
      required: true,
    },
    artist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
    },
    art_description: {
      type: String,
    },
    art_title: {
      type: String,
    },
    reviews_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
      required: true,
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("artworkSchema", ArtworkSchema);
