const mongoose = require("mongoose");
const ArtistReviewsSchema = mongoose.Schema(
  {
    review: {
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

module.exports = mongoose.model("artistreviews", ArtistReviewsSchema);
