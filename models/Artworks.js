const mongoose = require("mongoose");
const ArtworksSchema = mongoose.Schema(
  {
    user: {
      type: String,
    },
    artistname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    title:{
      type:String,
      required:'Give title to the art'
    },
    artistID:
    {
      required:'Every artwork must have a creator',
      type:mongoose.Schema.Types.ObjectId, 
      ref:"Artists"
    },
    wishlist:
      [
        {
          type:mongoose.Schema.Types.ObjectId, 
          ref:"Users"
        }
      ]
  },
  { timestamps: true }
);
module.exports = mongoose.model("ArtworksSchema", ArtworksSchema);
