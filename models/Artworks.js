const mongoose = require("mongoose");
const ArtworkSchema = mongoose.Schema(
  {
    cost: {
      type: Number,
      required: true,
    },
    artist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artists",
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
      ref: "reviews",
      required: true,
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("artworks", ArtworkSchema);
