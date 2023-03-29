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
    name:{
      type:String,
      required:'Give user Name'
    },
    uid:
    {
      required:'Every artwork must have a creator',
      type:mongoose.Schema.Types.ObjectId, 
      //type:String,
      ref:"Users"
    },
    uemail: {
      type: String,
    },
    ucontactNo: {
        type: Number,
        //type: String,
    },
    uAddress: {
        type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ArtworksSchema", ArtworksSchema);
