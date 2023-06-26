const mongoose = require("mongoose");
const ReviewsSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
      required:true
    },
    comment: {
      type: String,
    },
    reviewerid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    artworkid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artworks"
    },
    artistid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artists"
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("reviews", ReviewsSchema);
