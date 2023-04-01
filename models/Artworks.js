const mongoose = require("mongoose");
const ArtworksSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    contact: {
      type: Number,
      
    },
    address: {
      type: String,
    },
    aadhar:{
      type:Number,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ArtworksSchema", ArtworksSchema);
