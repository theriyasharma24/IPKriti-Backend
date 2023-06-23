const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema(
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
      instagram:{
        type: String,
      },
      twitter:{
        type: String,
      }
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Review",ReviewSchema);