const mongoose = require("mongoose");
const ReviewsSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
    },
    comment: {
      type: String,
    },
    reviewerid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("reviews", ReviewsSchema);
