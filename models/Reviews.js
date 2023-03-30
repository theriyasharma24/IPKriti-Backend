const mongoose = require("mongoose");
const ReviewsSchema = mongoose.Schema(
  {
    review: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ReviewsSchema",ReviewsSchema);
