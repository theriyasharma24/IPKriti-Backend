const mongoose = require("mongoose");
const ReviewsSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
    },
    comment: {
      type: String,
    },
    reviewerId: {
      
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true

      
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("reviewsSchema", ReviewsSchema);
